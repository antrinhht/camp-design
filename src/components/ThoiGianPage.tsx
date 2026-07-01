
import { Layout } from './Layout';
import { timeline } from '../data/campData';

interface PageProps {
  theme?: 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';
}

export const ThoiGianPage = ({ theme = 'memphis' }: PageProps) => {

  const isPixel = theme === 'pixel';
  const isGlass = theme === 'glass';
  const isCyberpunk = theme === 'cyberpunk';
  const isMinecraft = theme === 'minecraft';
  const isRoblox = theme === 'roblox';

  if (isCyberpunk) {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-8 w-full font-sans text-white mt-4 flex-1 justify-center">
          <div className="bg-black border-l-4 border-r-4 border-[#00FFFF] p-6 shadow-[8px_8px_0_#FF003C] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF003C] to-transparent"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FCEE0A] text-[#0D3066] font-black italic px-4 py-1 transform -skew-x-12">&gt; SYS.DEP_</div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-white italic">Khởi Hành</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex bg-black/50 border border-gray-800 p-3 transform -skew-x-6 hover:border-[#00FFFF] transition-colors">
                 <div className="w-1/3 text-[#00FFFF] font-bold uppercase tracking-wider text-sm flex items-center">
                   <span className="mr-2 opacity-50">#01</span> DATE_TIME
                 </div>
                 <div className="w-2/3 pl-4 border-l border-gray-800 font-medium">
                   <div className="text-lg">Thứ hai, 06/07/2026</div>
                   <div className="text-[#FCEE0A] text-sm mt-1">19:30 (Tập trung) // 21:00 (Đi)</div>
                 </div>
              </div>
              <div className="flex bg-black/50 border border-gray-800 p-3 transform -skew-x-6 hover:border-[#00FFFF] transition-colors">
                 <div className="w-1/3 text-[#FF003C] font-bold uppercase tracking-wider text-sm flex items-center">
                   <span className="mr-2 opacity-50">#02</span> LOCATION
                 </div>
                 <div className="w-2/3 pl-4 border-l border-gray-800 font-medium">
                   <div className="text-lg">Nhà Thờ Tin Lành Gia Định</div>
                   <div className="text-gray-400 text-sm mt-1">Lầu 1</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-black border-l-4 border-r-4 border-[#FF003C] p-6 shadow-[8px_8px_0_#FCEE0A] relative overflow-hidden group mt-2">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF003C] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#00FFFF] text-[#0D3066] font-black italic px-4 py-1 transform -skew-x-12">&gt; SYS.RET_</div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF003C] to-white italic">Trở Về</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex bg-black/50 border border-gray-800 p-3 transform -skew-x-6 hover:border-[#FF003C] transition-colors">
                 <div className="w-1/3 text-[#00FFFF] font-bold uppercase tracking-wider text-sm flex items-center">
                   <span className="mr-2 opacity-50">#03</span> DATE_TIME
                 </div>
                 <div className="w-2/3 pl-4 border-l border-gray-800 font-medium">
                   <div className="text-lg">Thứ bảy, 11/07/2026</div>
                   <div className="text-[#FCEE0A] text-sm mt-1">ETA: 22:00</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isPixel) {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-10 w-full font-pixel text-[#FFD335] mt-6 flex-1 justify-center">
          <div className="bg-[#0D3066] border-[4px] border-[#FFD335] p-8 shadow-[8px_8px_0_#FFD335] relative">
            <h3 className="text-3xl font-bold uppercase mb-6 border-b-4 border-dashed border-[#FFD335] inline-block pb-3">&gt;_ KHỞI HÀNH</h3>
            <div className="space-y-6 text-xl">
              <div><span className="bg-[#FFD335] text-[#0D3066] px-3 py-1 mr-4 font-bold">&gt; DATE:</span>{timeline.departure.date}</div>
              <div><span className="bg-[#FFD335] text-[#0D3066] px-3 py-1 mr-4 font-bold">&gt; TIME:</span>{timeline.departure.time}</div>
              <div><span className="bg-[#FFD335] text-[#0D3066] px-3 py-1 mr-4 font-bold">&gt; LOC :</span>{timeline.departure.location}, {timeline.departure.locationDetail}</div>
            </div>
          </div>
          <div className="bg-[#0D3066] border-[4px] border-[#FFD335] p-8 shadow-[8px_8px_0_#FFD335] relative mt-2">
            <h3 className="text-3xl font-bold uppercase mb-6 border-b-4 border-dashed border-[#FFD335] inline-block pb-3">&gt;_ TRỞ VỀ</h3>
            <div className="space-y-6 text-xl">
              <div><span className="bg-[#FFD335] text-[#0D3066] px-3 py-1 mr-4 font-bold">&gt; DATE:</span>{timeline.return.date}</div>
              <div><span className="bg-[#FFD335] text-[#0D3066] px-3 py-1 mr-4 font-bold">&gt; TIME:</span>{timeline.return.time}</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isGlass) {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-8 w-full text-white font-glass mt-4 flex-1 justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <h3 className="text-3xl font-bold uppercase mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Khởi Hành</h3>
            <div className="space-y-6 text-xl">
              <div className="flex items-center gap-5 border-b border-white/10 pb-5">
                 <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner text-2xl">📅</div>
                 <div>
                   <div className="text-white/60 text-sm uppercase tracking-wider mb-1 font-bold">Thời gian</div>
                   <div className="font-semibold text-[22px]">Thứ hai, 06/07/2026 (19h30 Tập trung)</div>
                 </div>
              </div>
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner text-2xl">📍</div>
                 <div>
                   <div className="text-white/60 text-sm uppercase tracking-wider mb-1 font-bold">Địa điểm</div>
                   <div className="font-semibold text-[22px]">Lầu 1, Nhà Thờ Tin Lành Gia Định</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <h3 className="text-3xl font-bold uppercase mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Trở Về</h3>
            <div className="space-y-6 text-xl">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner text-2xl">⏱️</div>
                 <div>
                   <div className="text-white/60 text-sm uppercase tracking-wider mb-1 font-bold">Thời gian</div>
                   <div className="font-semibold text-[22px]">Thứ bảy, 11/07/2026 (Dự kiến 22g00)</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isMinecraft) {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-6 w-full font-pixel mt-4 flex-1 justify-center">
          <div className="bg-[#E6E6E6] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,255,255,0.8),_8px_8px_0_#0D3066] p-6 relative overflow-hidden">
            <div className="bg-[#6D9B38] border-[4px] border-[#0D3066] px-5 py-2 mb-6 inline-block shadow-[inset_2px_2px_0_rgba(255,255,255,0.3)] relative z-10">
              <h3 className="text-2xl font-bold uppercase drop-shadow-[2px_2px_0_#000] text-white">Khởi Hành</h3>
            </div>
            
            <div className="space-y-5 relative z-10">
              <div className="bg-[#C6C6C6] border-4 border-[#0D3066] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)] flex items-start gap-4">
                 <div className="w-10 h-10 bg-[#FFD335] border-4 border-[#0D3066] flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-[#E52222]"></div>
                 </div>
                 <div>
                   <div className="text-[#0D3066] text-base uppercase font-black mb-1">Thời gian</div>
                   <div className="text-[#0D3066] text-lg font-bold">Thứ hai, 06/07/2026</div>
                   <div className="text-[#E52222] text-sm mt-1 font-bold">19:30 (Tập trung) - 21:00 (Đi)</div>
                 </div>
              </div>
              <div className="bg-[#C6C6C6] border-4 border-[#0D3066] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)] flex items-start gap-4">
                 <div className="w-10 h-10 bg-[#FFD335] border-4 border-[#0D3066] flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-[#6D9B38]"></div>
                 </div>
                 <div>
                   <div className="text-[#0D3066] text-base uppercase font-black mb-1">Địa điểm</div>
                   <div className="text-[#0D3066] text-lg font-bold">Lầu 1, Nhà Thờ Tin Lành Gia Định</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E6E6E6] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,255,255,0.8),_8px_8px_0_#0D3066] p-6 relative overflow-hidden mt-2">
            <div className="bg-[#FFD335] border-[4px] border-[#0D3066] px-5 py-2 mb-6 inline-block shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)] relative z-10">
              <h3 className="text-2xl font-bold uppercase text-[#0D3066]">Trở Về</h3>
            </div>
            
            <div className="space-y-5 relative z-10">
              <div className="bg-[#C6C6C6] border-4 border-[#0D3066] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)] flex items-start gap-4">
                 <div className="w-10 h-10 bg-[#FFD335] border-4 border-[#0D3066] flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 bg-[#E52222]"></div>
                 </div>
                 <div>
                   <div className="text-[#0D3066] text-base uppercase font-black mb-1">Thời gian</div>
                   <div className="text-[#0D3066] text-lg font-bold">Thứ bảy, 11/07/2026</div>
                   <div className="text-[#E52222] text-sm mt-1 font-bold">Dự kiến về đến lúc 22:00</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (theme === 'minecraft2') {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-6 w-full font-title mt-4 flex-1 justify-center">
          <div className="bg-[#D9D9D9] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,255,255,0.9),_8px_8px_0_#1F2937] p-6 relative overflow-hidden">
            <div className="bg-[#42B8C1] border-[4px] border-[#1F2937] px-5 py-2 mb-6 inline-block shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)] relative z-10">
              <h3 className="text-2xl font-black uppercase drop-shadow-[2px_2px_0_#000] text-white">Khởi Hành</h3>
            </div>
            
            <div className="space-y-5 relative z-10">
              <div className="bg-[#A3A3A3] border-4 border-[#1F2937] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)] flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#FFD335] border-4 border-[#1F2937] flex items-center justify-center shrink-0">
                    <div className="w-5 h-5 bg-[#E52222]"></div>
                 </div>
                 <div>
                   <div className="text-[#111] text-base uppercase font-black mb-1">Thời gian</div>
                   <div className="text-[#111] text-xl font-bold">Thứ hai, 06/07/2026</div>
                   <div className="text-[#E52222] text-base mt-1 font-bold">19:30 (Tập trung) - 21:00 (Đi)</div>
                 </div>
              </div>
              <div className="bg-[#A3A3A3] border-4 border-[#1F2937] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)] flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#FFD335] border-4 border-[#1F2937] flex items-center justify-center shrink-0">
                    <div className="w-5 h-5 bg-[#42B8C1]"></div>
                 </div>
                 <div>
                   <div className="text-[#111] text-base uppercase font-black mb-1">Địa điểm</div>
                   <div className="text-[#111] text-xl font-bold">Lầu 1, Nhà Thờ Tin Lành Gia Định</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-[#D9D9D9] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,255,255,0.9),_8px_8px_0_#1F2937] p-6 relative overflow-hidden mt-2">
            <div className="bg-[#FFD335] border-[4px] border-[#1F2937] px-5 py-2 mb-6 inline-block shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)] relative z-10">
              <h3 className="text-2xl font-black uppercase text-[#1F2937]">Trở Về</h3>
            </div>
            
            <div className="space-y-5 relative z-10">
              <div className="bg-[#A3A3A3] border-4 border-[#1F2937] p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)] flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#FFD335] border-4 border-[#1F2937] flex items-center justify-center shrink-0">
                    <div className="w-5 h-5 bg-[#E52222]"></div>
                 </div>
                 <div>
                   <div className="text-[#111] text-base uppercase font-black mb-1">Thời gian</div>
                   <div className="text-[#111] text-xl font-bold">Thứ bảy, 11/07/2026</div>
                   <div className="text-[#E52222] text-base mt-1 font-bold">Dự kiến về đến lúc 22:00</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isRoblox) {
    return (
      <Layout title="Thời Gian & Địa Điểm" theme={theme}>
        <div className="flex flex-col gap-8 w-full mt-4 font-sans text-gray-800 flex-1 justify-center">
          <div className="bg-white border-4 border-[#0D3066] rounded-xl shadow-[0_8px_0_#0D3066] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFD335]"></div>
            <div className="px-5 py-4 border-b-2 border-gray-100 flex items-center gap-3 bg-gray-50/50">
              <div className="w-10 h-10 bg-[#FFD335] rounded-lg flex items-center justify-center text-[#0D3066] font-black text-xl">1</div>
              <h4 className="text-2xl font-black uppercase text-[#0D3066] tracking-tight">Khởi Hành</h4>
            </div>
            
            <div className="p-6 flex flex-col gap-5">
               <div className="bg-gray-50 border-2 border-[#0D3066] p-5 rounded-lg flex items-center gap-4 hover:border-red-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border-2 border-gray-200 flex items-center justify-center font-black text-gray-400 text-xl">📅</div>
                  <div>
                    <div className="text-xs font-bold text-[#0D3066] uppercase tracking-widest mb-1">Thời gian</div>
                    <div className="font-black text-xl text-gray-800">Thứ hai, 06/07/2026</div>
                    <div className="font-bold text-base text-[#E52222] mt-0.5">19:30 Tập trung - 21:00 Lên xe</div>
                  </div>
               </div>
               
               <div className="bg-gray-50 border-2 border-[#0D3066] p-5 rounded-lg flex items-center gap-4 hover:border-red-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border-2 border-gray-200 flex items-center justify-center font-black text-gray-400 text-xl">📍</div>
                  <div>
                    <div className="text-xs font-bold text-[#0D3066] uppercase tracking-widest mb-1">Địa điểm</div>
                    <div className="font-black text-xl text-gray-800">Lầu 1, Nhà Thờ Tin Lành Gia Định</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white border-4 border-[#0D3066] rounded-xl shadow-[0_8px_0_#0D3066] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFD335]"></div>
            <div className="px-5 py-4 border-b-2 border-gray-100 flex items-center gap-3 bg-gray-50/50">
              <div className="w-10 h-10 bg-[#FFD335] rounded-lg flex items-center justify-center text-[#0D3066] font-black text-xl">2</div>
              <h4 className="text-2xl font-black uppercase text-[#0D3066] tracking-tight">Trở Về</h4>
            </div>
            
            <div className="p-6 flex flex-col gap-5">
               <div className="bg-gray-50 border-2 border-[#0D3066] p-5 rounded-lg flex items-center gap-4 hover:border-gray-400 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border-2 border-gray-200 flex items-center justify-center font-black text-gray-400 text-xl">⏱️</div>
                  <div>
                    <div className="text-xs font-bold text-[#0D3066] uppercase tracking-widest mb-1">Thời gian</div>
                    <div className="font-black text-xl text-gray-800">Thứ bảy, 11/07/2026</div>
                    <div className="font-bold text-base text-[#6D9B38] mt-0.5">Dự kiến về lúc 22:00</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Memphis 1 Return
  return (
    <Layout title="Thời Gian & Địa Điểm" theme={theme}>
      <div className="flex flex-col gap-6 my-auto px-4 z-10">
        {/* Memphis Khởi Hành */}
        <div className="relative bg-[#F47B95] border-[4px] border-black p-8 shadow-[12px_12px_0_#000] transform -rotate-2">
          <div className="absolute -top-8 -left-6 bg-[#FCD22B] border-[4px] border-black px-6 py-2 shadow-[6px_6px_0_#000] transform -rotate-3 z-10">
            <h3 className="text-3xl font-title font-black uppercase text-[#0D3066]">KHỞI HÀNH</h3>
          </div>
          
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#70C9F0] border-[4px] border-black font-bold py-1 px-4 text-[#0D3066] shadow-[4px_4px_0_#000] transform rotate-2">Thời gian</div>
              <div className="bg-white border-[4px] border-black p-4 shadow-[6px_6px_0_#000] transform -rotate-1 flex-1">
                <p className="font-black text-xl mb-2 text-[#0D3066]">Thứ hai, 06/07/2026</p>
                <ul className="list-disc ml-6 font-bold text-[#0D3066] text-lg">
                  <li>Tập trung lúc 19h30</li>
                  <li>Khởi hành lúc 21h00</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#70C9F0] border-[4px] border-black font-bold py-1 px-4 text-[#0D3066] shadow-[4px_4px_0_#000] transform -rotate-2">Địa điểm</div>
              <div className="bg-[#FCD22B] border-[4px] border-black p-3 shadow-[6px_6px_0_#000] transform rotate-1 flex-1">
                <p className="font-black text-xl text-[#0D3066]">Lầu 1, Nhà Thờ Tin Lành Gia Định</p>
              </div>
            </div>
          </div>
        </div>

        {/* Memphis Trở Về */}
        <div className="relative bg-[#70C9F0] border-[4px] border-black p-8 shadow-[12px_12px_0_#000] transform rotate-2 mt-4">
          <div className="absolute -top-8 -right-4 bg-[#FCD22B] border-[4px] border-black px-6 py-2 shadow-[6px_6px_0_#000] transform rotate-3 z-10">
            <h3 className="text-3xl font-title font-black uppercase text-[#0D3066]">TRỞ VỀ</h3>
          </div>
          
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#F47B95] border-[4px] border-black font-bold py-1 px-4 text-white shadow-[4px_4px_0_#000] transform -rotate-2">Thời gian</div>
              <div className="bg-white border-[4px] border-black p-4 shadow-[6px_6px_0_#000] transform rotate-1 flex-1">
                <p className="font-black text-xl text-[#0D3066] mb-1">Thứ bảy, 11/07/2026</p>
                <p className="font-bold text-[#0D3066] text-lg">Về đến nơi khoảng 22g00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
