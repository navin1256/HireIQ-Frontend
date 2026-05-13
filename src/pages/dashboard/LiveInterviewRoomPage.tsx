import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function LiveInterviewRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAiTrackerOpen, setIsAiTrackerOpen] = useState(false);

  return (
    <div className="bg-[#0d141d] text-[#dce3f0] font-body-md overflow-hidden h-screen flex flex-col">
      {/* Background Ambient Glow */}
      <div className="fixed top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#b4c5ff]/5 rounded-full blur-[120px] pointer-events-none z-[-10]"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none z-[-10]"></div>

      {/* Header */}
      <header className="h-[56px] flex items-center justify-between px-[24px] z-50 border-b border-white/5" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[#b4c5ff] text-[24px] font-extrabold tracking-tighter cursor-pointer" onClick={() => navigate('/pipeline')} style={{ fontFamily: 'Plus Jakarta Sans' }}>HireIQ</span>
            <span className="h-4 w-[1px] bg-white/10"></span>
            <span className="text-[#c3c6d7] uppercase tracking-widest text-[10px] font-semibold" style={{ fontFamily: 'Inter' }}>Live Interview</span>
          </div>
          <div className="flex items-center gap-[16px] bg-white/5 px-[16px] py-1 rounded-full border border-white/5">
            <span className="text-[#dce3f0] font-semibold text-sm">Sarah Ahmed</span>
            <span className="flex items-center gap-[8px]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span className="font-mono text-[#22c55e] font-bold text-sm tracking-widest">00:45:32</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[8px] text-[#c3c6d7]">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            <span className="text-xs font-medium">Interviewer: David Chen</span>
          </div>
          <button onClick={() => navigate('/candidates/sarah-ahmed')} className="bg-[#ffb4ab]/10 hover:bg-[#ffb4ab]/20 text-[#ffb4ab] px-[24px] py-2 rounded-full font-semibold text-xs transition-all border border-[#ffb4ab]/20" style={{ fontFamily: 'Inter' }}>
            End Interview
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel: Code Editor */}
        <section className="w-1/2 flex flex-col border-r border-white/5 bg-[#0A0A0E]">
          {/* Toolbar */}
          <div className="h-10 flex items-center justify-between px-[16px] border-b border-white/5 bg-[#151c25]/50">
            <div className="flex items-center gap-[4px] h-full">
              <div className="flex items-center gap-[8px] px-[24px] py-2 bg-[#0A0A0E] border-r border-white/5 text-[#b4c5ff] text-xs font-mono border-t-2 border-t-[#b4c5ff]">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>terminal</span>
                solution.py
              </div>
              <div className="flex items-center gap-[8px] px-[24px] py-2 text-[#c3c6d7] text-xs font-mono hover:bg-white/5 cursor-pointer">
                tests.py
              </div>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center gap-[8px] bg-white/5 px-[16px] py-1 rounded border border-white/5 text-[11px] text-[#c3c6d7] font-mono cursor-pointer hover:bg-white/10 transition-colors">
                Python 3.10
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
              <button className="flex items-center gap-[8px] text-[#c3c6d7] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>format_align_left</span>
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex overflow-hidden font-mono text-sm leading-relaxed relative">
            {/* Line Numbers */}
            <div className="w-12 py-4 text-right pr-4 text-[#c3c6d7]/30 select-none bg-[#0A0A0E] border-r border-white/5">
              1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14
            </div>
            {/* Actual Code */}
            <div className="flex-1 py-4 px-6 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
              <div style={{ textShadow: '0 0 10px rgba(180, 197, 255, 0.3)' }}>
                <span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">fibonacci</span>(<span className="text-[#9CDCFE]">n</span>):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6A9955]">""" Returns the nth fibonacci number """</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">if</span> <span className="text-[#9CDCFE]">n</span> &lt;= <span className="text-[#B5CEA8]">1</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#9CDCFE]">n</span><br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">a</span>, <span className="text-[#9CDCFE]">b</span> = <span className="text-[#B5CEA8]">0</span>, <span className="text-[#B5CEA8]">1</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">for</span> <span className="text-[#9CDCFE]">_</span> <span className="text-[#C586C0]">in</span> <span className="text-[#DCDCAA]">range</span>(<span className="text-[#9CDCFE]">n</span>):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">a</span>, <span className="text-[#9CDCFE]">b</span> = <span className="text-[#9CDCFE]">b</span>, <span className="text-[#9CDCFE]">a</span> + <span className="text-[#9CDCFE]">b</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#9CDCFE]">a</span><br/>
                <br/>
                <span className="text-[#6A9955]"># Example usage:</span><br/>
                <span className="text-[#9CDCFE]">print</span>(<span className="text-[#DCDCAA]">fibonacci</span>(<span className="text-[#B5CEA8]">10</span>))<span className="inline-block w-[2px] h-4 bg-[#b4c5ff] ml-1 animate-pulse align-middle"></span>
              </div>
            </div>
            {/* Minimap */}
            <div className="w-20 bg-[#0A0A0E] border-l border-white/5 opacity-40 select-none">
              <div className="h-full w-full py-4 px-2 space-y-1">
                <div className="h-[2px] w-full bg-[#b4c5ff]/40"></div>
                <div className="h-[2px] w-3/4 bg-[#c3c6d7]/20"></div>
                <div className="h-[2px] w-full bg-[#b4c5ff]/40"></div>
                <div className="h-[2px] w-1/2 bg-[#c3c6d7]/20"></div>
                <div className="h-[2px] w-full bg-[#c3c6d7]/20"></div>
                <div className="h-[2px] w-2/3 bg-[#c3c6d7]/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Center Panel: Output/Tests */}
        <section className="w-1/4 flex flex-col border-r border-white/5 bg-[#0F0F14]">
          <div className="h-10 flex items-center px-[16px] border-b border-white/5 bg-[#151c25]/30">
            <div className="flex gap-[24px] h-full">
              <button className="text-[#b4c5ff] text-xs font-semibold h-full border-b-2 border-[#b4c5ff] px-[16px]">Output</button>
              <button className="text-[#c3c6d7] text-xs font-medium h-full px-[16px] hover:text-[#dce3f0] transition-colors">Test Cases</button>
            </div>
          </div>
          
          <div className="flex-1 p-[16px] font-mono text-[13px] overflow-y-auto space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
            <div className="space-y-1">
              <div className="text-[#c3c6d7]/50 text-[11px]">$ python solution.py</div>
              <div className="text-[#dce3f0]">55</div>
              <div className="text-[#c3c6d7]/50 text-[11px] mt-2">Process exited with code 0</div>
            </div>
            
            <div className="pt-4 border-t border-white/5 space-y-[16px]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#c3c6d7]/60 font-bold">Test Suites</span>
                <span className="text-[10px] bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded">4 / 5 Passed</span>
              </div>
              
              {/* Test Case Rows */}
              <div className="space-y-[4px]">
                <div className="flex items-center justify-between p-[8px] bg-white/5 rounded border border-white/5">
                  <div className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#22c55e] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-xs text-[#dce3f0]">Base Case: 0</span>
                  </div>
                  <span className="text-[10px] text-[#c3c6d7]">1.2ms</span>
                </div>
                <div className="flex items-center justify-between p-[8px] bg-white/5 rounded border border-white/5">
                  <div className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#22c55e] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-xs text-[#dce3f0]">Base Case: 1</span>
                  </div>
                  <span className="text-[10px] text-[#c3c6d7]">0.8ms</span>
                </div>
                <div className="flex items-center justify-between p-[8px] bg-white/5 rounded border border-white/5">
                  <div className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#22c55e] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-xs text-[#dce3f0]">Recursion Depth</span>
                  </div>
                  <span className="text-[10px] text-[#c3c6d7]">4.5ms</span>
                </div>
                <div className="flex items-center justify-between p-[8px] bg-[#ffb4ab]/10 rounded border border-[#ffb4ab]/20">
                  <div className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[#ffb4ab] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                    <span className="text-xs text-[#dce3f0]">Negative Input</span>
                  </div>
                  <span className="text-[10px] text-[#ffb4ab]/60 font-bold">Failed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Run Button */}
          <div className="p-[24px] border-t border-white/5">
            <button className="w-full py-3 bg-[#22c55e] text-black font-semibold rounded-xl flex items-center justify-center gap-[16px] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]" style={{ fontFamily: 'Inter' }}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              Run Tests (⌘R)
            </button>
          </div>
        </section>

        {/* Right Panel: Video & Scoring */}
        <section className="w-1/4 flex flex-col bg-[#111111] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
          {/* Video Feed Area */}
          <div className="p-[16px] space-y-[16px]">
            {/* Main Feed */}
            <div className="relative aspect-video rounded-2xl overflow-hidden group border border-white/10">
              <img alt="Candidate" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZzuu-kO4MgtjtGSRJwa4YJ_-z9430u_aY-NWylo9o5dS5Lhgu7yjiIWy9aBJdgkD_xJ7Mds58pPOlJqZoB2Nkr3e81rn0ueNfzziARJeWjztbnW5r6xva52rOPa31YwxobKEQyArbpV6PPrATpw7MuDmni2gYTcrBz5novYzWRZi5NrnXzQJ4WPILn2KDnZsxwY2GvKOFzlJbFkgKNJwnOh22KWzpXWbIjn0nCm9MYU2U6da3KIyoX_Bp6iSvz53W0thBFeD3Nk"/>
              <div className="absolute bottom-3 left-3 flex items-center gap-[8px] bg-black/40 backdrop-blur-md px-[16px] py-1 rounded-full text-[11px] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                Sarah Ahmed
              </div>
              
              {/* Floating Interviewer */}
              <div className="absolute top-3 right-3 w-28 aspect-video rounded-lg overflow-hidden border border-white/20 shadow-2xl">
                <img alt="Interviewer" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-gNrRUla79JSy4qMdVL1Czf4E_Mv8x8LsRpdWWiqQyoa1y23vH9K8HDy81qf2Vio_PJCpQ450I8-wT_5iC2f828vfQDsXE5FCDuFnZB8XGWXDlZRrdtMVFq6LwiqibI24R6-Dcv9dTszSwVBS09itKKXquTOfQeWfTZJIimo1RAL-5xVFME7ERRRco6EMZWK4gbU4SnXngkvxhoY2LsItpIlBcmttFl7yyH-UKYIPbRZw_vZKejkwZ7-K32NmlIgb0mJde83c_-s"/>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-3 right-3 flex gap-[8px]">
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>mic</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>videocam</span>
                </button>
              </div>
            </div>
            
            {/* Scoring Section */}
            <div className="space-y-[24px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[#c3c6d7] tracking-wider uppercase text-[11px] font-semibold" style={{ fontFamily: 'Inter' }}>Live Assessment</h4>
                <span className="text-[10px] text-[#b4c5ff] bg-[#b4c5ff]/10 px-2 py-0.5 rounded font-medium">Real-time Sync</span>
              </div>
              
              {/* Slider Controls */}
              <div className="space-y-[16px]">
                <div className="space-y-[8px]">
                  <div className="flex justify-between text-xs text-[#dce3f0]">
                    <span>Technical Knowledge</span>
                    <span className="text-[#b4c5ff] font-bold">8.5</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b4c5ff] w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-[8px]">
                  <div className="flex justify-between text-xs text-[#dce3f0]">
                    <span>Problem Solving</span>
                    <span className="text-[#b4c5ff] font-bold">7.2</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b4c5ff] w-[72%]"></div>
                  </div>
                </div>
                <div className="space-y-[8px]">
                  <div className="flex justify-between text-xs text-[#dce3f0]">
                    <span>Communication</span>
                    <span className="text-[#b4c5ff] font-bold">9.0</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b4c5ff] w-[90%]"></div>
                  </div>
                </div>
              </div>
              
              {/* Private Notes */}
              <div className="space-y-[8px] pt-[24px]">
                <label className="text-[#c3c6d7] uppercase text-[10px] font-semibold" style={{ fontFamily: 'Inter' }}>Private Interviewer Notes</label>
                <textarea className="w-full h-32 bg-[#080f17] border border-white/5 rounded-xl p-[16px] text-sm focus:border-[#b4c5ff]/50 focus:ring-1 focus:ring-[#b4c5ff]/50 focus:outline-none transition-all resize-none text-[#dce3f0] placeholder:text-[#c3c6d7]/50" placeholder="Enter observations..."></textarea>
              </div>
              <button className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-xs hover:bg-white/10 transition-all active:scale-[0.98]" style={{ fontFamily: 'Inter' }}>
                Submit Score
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* AI Usage Tracker (Floating Drawer) */}
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 flex items-center z-40 transition-transform duration-300 ${isAiTrackerOpen ? 'translate-x-0' : 'translate-x-[320px]'}`}>
        {/* Tab */}
        <button 
          onClick={() => setIsAiTrackerOpen(!isAiTrackerOpen)}
          className={`h-24 w-6 bg-[#232a34] border-y border-l border-white/10 rounded-l-md flex flex-col items-center justify-center gap-[8px] hover:bg-[#333a44] transition-colors group ${!isAiTrackerOpen && 'absolute left-[-24px]'}`}
        >
          <span className="material-symbols-outlined text-[16px] text-[#c3c6d7] group-hover:text-[#b4c5ff] transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
          <span className="text-[10px] font-bold text-[#c3c6d7] tracking-widest uppercase" style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>AI TRACKER</span>
        </button>
        
        {/* Hidden Drawer Content (Visual Representation) */}
        <div className="w-80 h-[600px] bg-[#232a34] border-l border-white/10 shadow-2xl p-[16px] flex flex-col">
          <div className="flex items-center justify-between mb-[24px]">
            <h3 className="font-bold text-sm text-[#dce3f0]">AI Usage Integrity</h3>
            <span className="material-symbols-outlined cursor-pointer text-[#c3c6d7] hover:text-white transition-colors" onClick={() => setIsAiTrackerOpen(false)} style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
          </div>
          <div className="space-y-[24px] flex-1 overflow-y-auto pr-[8px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent' }}>
            {/* Log Entry 1 */}
            <div className="p-[16px] rounded-lg bg-black/20 border-l-2 border-[#22c55e]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[10px] font-mono text-[#c3c6d7]">14:22:15</span>
                <span className="text-[9px] bg-[#22c55e]/10 text-[#22c55e] px-1.5 py-0.5 rounded font-bold">LOW RISK</span>
              </div>
              <p className="text-[12px] text-[#dce3f0]">Checked syntax for Python list comprehension.</p>
            </div>
            {/* Log Entry 2 */}
            <div className="p-[16px] rounded-lg bg-black/20 border-l-2 border-orange-400">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[10px] font-mono text-[#c3c6d7]">14:35:40</span>
                <span className="text-[9px] bg-orange-400/10 text-orange-400 px-1.5 py-0.5 rounded font-bold">MEDIUM RISK</span>
              </div>
              <p className="text-[12px] text-[#dce3f0]">Multiple window switches detected. Prompt likely copied from external source.</p>
            </div>
            {/* Log Entry 3 */}
            <div className="p-[16px] rounded-lg bg-black/20 border-l-2 border-[#ffb4ab]">
              <div className="flex justify-between items-center mb-[8px]">
                <span className="text-[10px] font-mono text-[#c3c6d7]">14:48:12</span>
                <span className="text-[9px] bg-[#ffb4ab]/10 text-[#ffb4ab] px-1.5 py-0.5 rounded font-bold">HIGH RISK</span>
              </div>
              <p className="text-[12px] text-[#dce3f0]">Whole code block generation detected (80+ lines in &lt; 1s).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
