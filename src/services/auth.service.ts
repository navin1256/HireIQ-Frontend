// API service for authentication
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only redirect to login for protected routes, not auth routes where 401 means invalid credentials
    const isAuthRoute = error.config?.url?.includes('/auth/login') || error.config?.url?.includes('/auth/signup');
    
    if (error.response?.status === 401 && !isAuthRoute) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface SignupData {
  fullName: string;
  companyName: string;
  email: string;
  password: string;
  companySize?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
    isVerified: boolean;
  };
  organization?: {
    id: string;
    name: string;
    slug: string;
  };
  orgId?: string;
  requiresVerification?: boolean;
  message?: string;
  error?: string;
}

export interface VerificationResponse {
  message: string;
  verified?: boolean;
  user?: {
    id: string;
    email: string;
    fullName: string;
    role: string;
    isVerified: boolean;
  };
  redirectTo?: string;
  error?: string;
}

export class AuthService {
  static async signup(data: SignupData): Promise<AuthResponse> {
    const response = await api.post('/auth/signup', data);
    return response.data;
  }

  static async login(data: LoginData): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  }

  static async verifyEmail(token: string): Promise<VerificationResponse> {
    const response = await api.get(`/auth/verify-email?token=${token}`);
    return response.data;
  }

  static async resendVerification(email: string): Promise<{ message: string }> {
    const response = await api.post('/auth/resend-verification', { email });
    return response.data;
  }

  static logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  static getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  static getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  static isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser();
  }
}

export default api;