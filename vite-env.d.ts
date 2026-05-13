/// <reference types="vite/client" />
<<<<<<< HEAD

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';
=======
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
>>>>>>> 16d3be72ddc1432d79a91c1edef5b0700f908b57
