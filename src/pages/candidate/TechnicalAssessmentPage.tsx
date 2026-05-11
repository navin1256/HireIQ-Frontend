import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TechnicalAssessmentPage() {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const [timeLeft, setTimeLeft] = useState(2843); // 47:23 in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercentage = (timeLeft / 3600) * 100; // Assuming 60 mins max

  return (
    <div className="bg-[#080f17] text-[#dce3f0] font-['Inter'] overflow-hidden h-screen flex flex-col selection:bg-[#b4c5ff]/30 antialiased">
      <style>
        {`
          .code-editor {
              font-family: 'JetBrains Mono', monospace;
          }
          .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
              height: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.02);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
          }
        `}
      </style>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[24px] h-14 bg-[#080f17] border-b border-[#434655]/30">
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[20px] font-bold text-[#b4c5ff] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>TechAssess v2.0</span>
            <span className="text-[#c3c6d7] text-[12px] leading-[1] tracking-[0.05em] font-semibold bg-[#232a34] px-[8px] py-0.5 rounded-full">v2.1</span>
          </div>
          <div className="h-4 w-px bg-[#434655]"></div>
          <span className="text-[#c3c6d7] text-[12px] leading-[1] tracking-[0.05em] font-semibold uppercase tracking-wider text-[11px]">Technical Assessment</span>
        </div>
        
        <div className="flex flex-col items-center flex-1 max-w-xl px-[48px]">
          <div className="flex items-center gap-[16px] mb-1">
            <span className="text-[#dce3f0] font-semibold text-[16px] leading-[1.5]">Real-World Challenge · Build a REST API</span>
            <div className="flex items-center gap-[8px] text-[#adc6ff] bg-[#0566d9]/20 px-[16px] py-1 rounded-full border border-[#0566d9]/30">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
              <span className="font-['JetBrains_Mono'] text-sm font-bold">{formatTime(timeLeft)} remaining</span>
            </div>
          </div>
          <div className="w-full h-1 bg-[#232a34] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0566d9] to-[#adc6ff] transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>

        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px] bg-[#192029] px-[16px] py-1.5 rounded-lg border border-[#434655]/20 hover:border-[#b4c5ff]/50 transition-colors cursor-pointer group">
              <span className="text-[16px] leading-[1.5] font-semibold group-hover:text-[#b4c5ff] transition-colors">JavaScript</span>
              <span className="material-symbols-outlined text-[18px] text-[#c3c6d7]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#c3c6d7]/60 text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>cloud_done</span>
              <span>Saved 2 seconds ago</span>
            </div>
          </div>
          <button className="bg-[#22D97A] text-[#080f17] text-[15px] leading-[1] font-bold px-[24px] py-2.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#22D97A]/20">
            Submit Assessment
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex mt-14 overflow-hidden">
        {/* Left Panel: Challenge Description */}
        <section className="w-1/2 bg-[#080f17] border-r border-[#434655]/30 overflow-y-auto custom-scrollbar p-[24px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] leading-[1.3] font-bold text-[#dce3f0]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Challenge: Build a REST API</h1>
            <div className="flex gap-[16px]">
              <span className="bg-[#93000a]/20 text-[#ffb4ab] border border-[#93000a] px-[16px] py-1 rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">Hard</span>
              <span className="bg-[#0566d9]/20 text-[#adc6ff] border border-[#0566d9] px-[16px] py-1 rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">60 Minutes</span>
              <span className="bg-[#2563eb]/20 text-[#b4c5ff] border border-[#2563eb] px-[16px] py-1 rounded-full text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">Backend</span>
            </div>
          </div>
          <div className="text-[#c3c6d7] leading-relaxed text-[16px] leading-[1.5] font-normal space-y-[24px]">
            <p>Implement a secure REST API for a high-traffic fintech application. The endpoint must handle high concurrency and provide robust data integrity. Your primary task is to build a transaction processing engine that integrates with a mock ledger service.</p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="bg-[#151c25] p-[16px] rounded-[14px] border border-[#434655]/20 hover:border-[#b4c5ff]/30 transition-all">
                <div className="flex items-center gap-[16px] mb-[8px] text-[#b4c5ff]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold">JWT Security</span>
                </div>
                <p className="text-[13px] text-[#c3c6d7]">All endpoints must require a valid Bearer token with appropriate scopes.</p>
              </div>
              <div className="bg-[#151c25] p-[16px] rounded-[14px] border border-[#434655]/20 hover:border-[#b4c5ff]/30 transition-all">
                <div className="flex items-center gap-[16px] mb-[8px] text-[#b4c5ff]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold">Pagination</span>
                </div>
                <p className="text-[13px] text-[#c3c6d7]">Implement cursor-based pagination for history logs to ensure fast loads.</p>
              </div>
              <div className="bg-[#151c25] p-[16px] rounded-[14px] border border-[#434655]/20 hover:border-[#b4c5ff]/30 transition-all">
                <div className="flex items-center gap-[16px] mb-[8px] text-[#b4c5ff]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold">JSON Schema</span>
                </div>
                <p className="text-[13px] text-[#c3c6d7]">Validate all incoming request bodies against the specified transaction schema.</p>
              </div>
              <div className="bg-[#151c25] p-[16px] rounded-[14px] border border-[#434655]/20 hover:border-[#b4c5ff]/30 transition-all">
                <div className="flex items-center gap-[16px] mb-[8px] text-[#b4c5ff]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
                  <span className="text-[12px] leading-[1] tracking-[0.05em] font-semibold">Error Handling</span>
                </div>
                <p className="text-[13px] text-[#c3c6d7]">Standardized RFC 7807 error responses for all exceptional conditions.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-[16px] mt-[24px]">
            <h3 className="text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[#dce3f0] uppercase tracking-widest text-[11px] opacity-60">Visible Test Cases</h3>
            <div className="space-y-[16px]">
              <div className="bg-[#192029] p-[16px] rounded-xl border border-[#434655]/30">
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="font-['JetBrains_Mono'] text-[12px] text-[#adc6ff]">Test Case 1: Success Scenario</span>
                  <span className="text-[#22D97A] flex items-center gap-[8px] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    COMPLETED
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-[16px] font-['JetBrains_Mono'] text-[12px]">
                  <div className="space-y-[8px]">
                    <span className="text-[#c3c6d7] opacity-50 block uppercase text-[10px]">Input</span>
                    <div className="bg-[#080f17] p-[8px] rounded border border-[#434655]/10">
                      {`{ "amount": 250.00, "currency": "USD" }`}
                    </div>
                  </div>
                  <div className="space-y-[8px]">
                    <span className="text-[#c3c6d7] opacity-50 block uppercase text-[10px]">Expected Output</span>
                    <div className="bg-[#080f17] p-[8px] rounded border border-[#434655]/10 text-[#22D97A]">
                      201 Created
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#192029] p-[16px] rounded-xl border border-[#434655]/30">
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="font-['JetBrains_Mono'] text-[12px] text-[#adc6ff]">Test Case 2: Validation Failure</span>
                  <span className="text-[#c3c6d7] flex items-center gap-[8px] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px]">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>pending</span>
                    PENDING
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-[16px] font-['JetBrains_Mono'] text-[12px]">
                  <div className="space-y-[8px]">
                    <span className="text-[#c3c6d7] opacity-50 block uppercase text-[10px]">Input</span>
                    <div className="bg-[#080f17] p-[8px] rounded border border-[#434655]/10">
                      {`{ "amount": -50, "currency": "USD" }`}
                    </div>
                  </div>
                  <div className="space-y-[8px]">
                    <span className="text-[#c3c6d7] opacity-50 block uppercase text-[10px]">Expected Output</span>
                    <div className="bg-[#080f17] p-[8px] rounded border border-[#434655]/10 text-[#dce3f0]">
                      400 Bad Request
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: IDE */}
        <section className="w-1/2 bg-[#080f17] flex flex-col">
          {/* Editor Tabs */}
          <div className="h-10 bg-[#151c25] border-b border-[#434655]/30 flex items-center">
            <div className="bg-[#080f17] h-full px-[24px] flex items-center gap-[16px] border-r border-[#434655]/30 text-[#b4c5ff] border-b-2 border-[#b4c5ff]">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>javascript</span>
              <span className="text-[13px] font-['JetBrains_Mono']">solution.js</span>
              <span className="material-symbols-outlined text-[14px] text-[#c3c6d7] opacity-40 hover:opacity-100 cursor-pointer" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
            </div>
            <div className="px-[24px] flex items-center gap-[16px] text-[#c3c6d7] opacity-60 hover:bg-[#232a34] h-full cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
              <span className="text-[13px] font-['JetBrains_Mono']">readme.md</span>
            </div>
            <div className="flex-1"></div>
            <div className="px-[16px] flex gap-[8px]">
              <button className="p-1 hover:bg-[#232a34] rounded transition-colors text-[#c3c6d7]">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
              </button>
              <button className="p-1 hover:bg-[#232a34] rounded transition-colors text-[#c3c6d7]">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>fullscreen</span>
              </button>
            </div>
          </div>
          
          {/* Code Editor Area */}
          <div className="flex-1 overflow-auto custom-scrollbar flex bg-[#080f17] relative">
            <div className="w-12 bg-[#151c25]/50 flex flex-col items-center py-[24px] text-[#c3c6d7]/40 font-['JetBrains_Mono'] text-[12px] select-none border-r border-[#434655]/10">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
            </div>
            <div className="flex-1 py-[24px] px-[24px] code-editor text-[14px] leading-relaxed relative">
              <pre className="text-[#dce3f0] font-['JetBrains_Mono']"><code><span className="text-[#d2bbff]">const</span> express = <span className="text-[#adc6ff]">require</span>(<span className="text-[#b4c5ff]">'express'</span>);
<span className="text-[#d2bbff]">const</span> app = <span className="text-[#adc6ff]">express</span>();
<span className="text-[#c3c6d7] opacity-50">// TODO: Implement JWT Middleware</span>
<span className="text-[#d2bbff]">const</span> authenticate = <span className="text-[#adc6ff]">(req, res, next)</span> =&gt; {'{'}
    <span className="text-[#c3c6d7] opacity-50">// Logic goes here</span>
    <span className="text-[#adc6ff]">next()</span>;
{'}'};

app.<span className="text-[#adc6ff]">post</span>(<span className="text-[#b4c5ff]">'/transaction'</span>, authenticate, <span className="text-[#adc6ff]">(req, res)</span> =&gt; {'{'}
    <span className="text-[#d2bbff]">const</span> {'{'} amount, currency {'}'} = req.body;
    
    <span className="text-[#d2bbff]">if</span> (amount &lt; <span className="text-[#b4c5ff]">0</span>) {'{'}
        <span className="text-[#d2bbff]">return</span> res.<span className="text-[#adc6ff]">status</span>(<span className="text-[#b4c5ff]">400</span>).<span className="text-[#adc6ff]">json</span>({'{'} error: <span className="text-[#b4c5ff]">'Invalid amount'</span> {'}'});
    {'}'}
    <span className="text-[#c3c6d7] opacity-50">// Mock Ledger Processing</span>
    res.<span className="text-[#adc6ff]">status</span>(<span className="text-[#b4c5ff]">201</span>).<span className="text-[#adc6ff]">send</span>();
{'}'});</code></pre>
              {/* Active line highlight overlay */}
              <div className="absolute top-[228px] left-0 w-full h-[24px] bg-[#b4c5ff]/5 border-y border-[#b4c5ff]/20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Bottom Docked Output Panel */}
          <div className="h-[30%] bg-[#192029] border-t border-[#434655]/40 flex flex-col relative">
            <div className="flex border-b border-[#434655]/20 px-[24px] h-9 items-center gap-[48px]">
              <button className="h-full border-b-2 border-[#b4c5ff] text-[#b4c5ff] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[11px] px-[8px] transition-all">Test Results</button>
              <button className="h-full text-[#c3c6d7] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[11px] px-[8px] opacity-60 hover:opacity-100 transition-all">Console Output</button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-[24px] bg-[#080f17]/50">
              <div className="space-y-[24px]">
                <div className="bg-[#232a34]/50 p-[16px] rounded-xl border border-[#22D97A]/30 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#22D97A]"></div>
                  <div className="flex items-center gap-[16px] mb-[16px]">
                    <span className="material-symbols-outlined text-[#22D97A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-[13px] font-bold text-[#dce3f0]">Test #1: Basic POST functionality</span>
                    <span className="text-[10px] text-[#c3c6d7] font-['JetBrains_Mono'] ml-auto">142ms</span>
                  </div>
                  <div className="grid grid-cols-1 gap-[16px] font-['JetBrains_Mono'] text-[12px] bg-[#080f17] p-[16px] rounded-lg border border-[#434655]/10">
                    <div className="flex items-start gap-[24px]">
                      <span className="text-[#ffb4ab] w-4">-</span>
                      <span className="text-[#c3c6d7] opacity-50">Expected: 201 Created</span>
                    </div>
                    <div className="flex items-start gap-[24px]">
                      <span className="text-[#22D97A] w-4">+</span>
                      <span className="text-[#22D97A]">Actual: 201 Created</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] text-[12px] text-[#c3c6d7] opacity-40 justify-center py-[8px]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
                  <span>More test cases will reveal upon manual run</span>
                </div>
              </div>
            </div>
            
            {/* Footer Run Action */}
            <div className="h-14 bg-[#192029] border-t border-[#434655]/30 flex items-center px-[24px] justify-between">
              <div className="flex items-center gap-[16px]">
                <span className="text-[#22D97A] font-bold text-sm">1/4 Passing</span>
                <div className="w-24 h-1.5 bg-[#232a34] rounded-full overflow-hidden">
                  <div className="h-full bg-[#22D97A] w-1/4"></div>
                </div>
              </div>
              <button className="bg-[#2563eb] text-[#eeefff] text-[15px] leading-[1] font-bold px-[48px] py-2.5 rounded-full flex items-center gap-[16px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#2563eb]/20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                <span>Run Tests</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Console Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-[24px] h-10 bg-[#080f17]/80 backdrop-blur-md border-t border-[#434655]/30">
        <div className="flex items-center gap-[48px]">
          <span className="text-[#adc6ff] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] tracking-widest flex items-center gap-[8px]">
            <span className="w-1.5 h-1.5 bg-[#22D97A] rounded-full animate-pulse"></span>
            System Status: Connected
          </span>
          <span className="text-[#8d90a0] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] tracking-widest">Latency: 24ms</span>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex gap-[24px] h-full items-center">
            <span className="text-[#adc6ff] font-bold text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] cursor-pointer hover:text-[#b4c5ff] transition-colors">Console</span>
            <span className="text-[#8d90a0] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] cursor-pointer hover:text-[#c3c6d7] transition-colors">Problems</span>
            <span className="text-[#8d90a0] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] cursor-pointer hover:text-[#c3c6d7] transition-colors">Output</span>
            <span className="text-[#8d90a0] text-[12px] leading-[1] tracking-[0.05em] font-semibold text-[10px] cursor-pointer hover:text-[#c3c6d7] transition-colors">Terminal</span>
          </div>
          <div className="w-px h-4 bg-[#434655] mx-[8px]"></div>
          <div className="flex items-center gap-[8px] text-[#8d90a0] hover:text-[#b4c5ff] cursor-pointer">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>help</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
