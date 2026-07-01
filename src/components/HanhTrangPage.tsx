
import { Layout } from './Layout';
import { dressCode } from '../data/campData';

interface PageProps {
  theme?: 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';
}

export const HanhTrangPage = ({ theme = 'memphis' }: PageProps) => {

  const isPixel = theme === 'pixel';
  const isGlass = theme === 'glass';
  const isCyberpunk = theme === 'cyberpunk';
  const isMinecraft = theme === 'minecraft';
  const isRoblox = theme === 'roblox';

  if (isCyberpunk) {
    return (
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full font-sans text-white h-auto relative z-10">
          
          <div className="col-span-2 bg-black/80 border border-[#00FFFF] p-4 shadow-[0_0_15px_rgba(0,255,255,0.2)] relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#00FFFF]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00FFFF]"></div>
            <div className="flex items-center gap-3 mb-4 border-b border-[#00FFFF]/30 pb-2">
              <span className="text-[#00FFFF]">&lt;</span>
              <h4 className="text-xl font-bold uppercase tracking-widest text-[#00FFFF]">Trang Phục</h4>
              <span className="text-[#00FFFF]">&gt;</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-black border-l-2 border-[#FFD335] pl-3 py-2 hover:bg-[#FFD335]/10 transition-colors">
                    <div className="text-[#FFD335] font-black text-base uppercase tracking-widest mb-1">{item.day}</div>
                    <ul className="text-base font-mono space-y-1 text-gray-200">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex gap-2"><span className="text-[#E52222]">/</span> {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-black border-l-2 border-[#FFD335] pl-3 py-2 hover:bg-[#FFD335]/10 transition-colors">
                    <div className="text-[#FFD335] font-black text-base uppercase tracking-widest mb-1">{item.day}</div>
                    <ul className="text-base font-mono space-y-1 text-gray-200">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex gap-2"><span className="text-[#E52222]">/</span> {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-black/80 border border-[#FCEE0A] p-4 shadow-[0_0_15px_rgba(252,238,10,0.2)] relative group h-full">
              <div className="absolute top-0 right-0 bg-[#FCEE0A] text-[#0D3066] px-2 py-0.5 text-xs font-black">SYS.PRSNL</div>
              <h4 className="text-lg font-bold uppercase tracking-widest text-[#FCEE0A] mb-3 mt-2">Cá Nhân</h4>
              <ul className="text-sm font-mono space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-[#00FFFF]">*</span> KT, Bút, Thuốc</li>
                <li className="flex gap-2"><span className="text-[#00FFFF]">*</span> Vali & Balo nhỏ</li>
                <li className="flex gap-2"><span className="text-[#00FFFF]">*</span> Đồ vệ sinh cá nhân</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#FF003C]/10 border border-[#FF003C] p-4 shadow-[0_0_15px_rgba(255,0,60,0.2)] relative group overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FF003C]"></div>
              <div className="absolute top-0 right-0 bg-[#FF003C] text-white px-2 py-0.5 text-xs font-black animate-pulse">WARNING</div>
              <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF003C] mb-3 mt-2">Không Mang</h4>
              <ul className="text-sm font-mono space-y-2 text-red-200">
                <li className="flex gap-2"><span className="text-[#FF003C] font-black">X</span> Trang sức đắt tiền</li>
                <li className="flex gap-2"><span className="text-[#FF003C] font-black">X</span> Thiết bị điện tử</li>
                <li className="flex gap-2"><span className="text-[#FF003C] font-black">X</span> Nhiều tiền mặt ( &gt;300k )</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isPixel) {
    return (
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full font-pixel text-[#FFD335] relative z-10">
          
          <div className="col-span-2 bg-[#0D3066] border-[4px] border-[#FFD335] p-4 shadow-[8px_8px_0_#FFD335]">
            <h4 className="text-2xl font-bold uppercase border-b-4 border-dashed border-[#FFD335] pb-2 mb-4">&gt; TRANG PHỤC</h4>
            <div className="flex gap-4 text-xl">
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index}>
                    <div className="bg-[#FFD335] text-[#0D3066] inline-block px-2 py-0.5 mb-1 font-bold">[{item.day}]</div>
                    <ul className="ml-2 space-y-1">
                      {item.items.map((it, i) => <li key={i}>- {it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index}>
                    <div className="bg-[#FFD335] text-[#0D3066] inline-block px-2 py-0.5 mb-1 font-bold">[{item.day}]</div>
                    <ul className="ml-2 space-y-1">
                      {item.items.map((it, i) => <li key={i}>- {it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#0D3066] border-[4px] border-[#FFD335] p-4 shadow-[8px_8px_0_#FFD335] h-full">
              <h4 className="text-xl font-bold uppercase border-b-4 border-dashed border-[#FFD335] pb-1 mb-2">&gt; CÁ NHÂN</h4>
              <ul className="text-lg space-y-2 font-bold mt-4">
                <li className="flex gap-2"><span className="text-white">*</span> KT, Bút, Thuốc</li>
                <li className="flex gap-2"><span className="text-white">*</span> Vali & Balo nhỏ</li>
                <li className="flex gap-2"><span className="text-white">*</span> Đồ vệ sinh</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0D3066] border-[4px] border-[#FFD335] p-4 shadow-[8px_8px_0_#FFD335] relative h-full">
              <div className="bg-[#FFD335] text-[#0D3066] font-bold uppercase px-2 py-0.5 inline-block mb-2 text-xl animate-pulse">&gt; CẤM MANG</div>
              <ul className="text-lg space-y-3 font-bold mt-2">
                <li className="flex gap-2"><span className="text-red-500 text-2xl font-bold leading-none mt-0.5">X</span> Đầm váy quá ngắn</li>
                <li className="flex gap-2"><span className="text-red-500 text-2xl font-bold leading-none mt-0.5">X</span> Đồ điện tử đắt tiền</li>
                <li className="flex gap-2"><span className="text-red-500 text-2xl font-bold leading-none mt-0.5">X</span> Quá 300k tiền mặt</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isGlass) {
    return (
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-3 mt-2 w-full font-glass text-white relative z-10">
          
          <div className="col-span-2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <h4 className="text-2xl font-bold uppercase mb-3 text-blue-300">Trang phục</h4>
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <div className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1 border-b border-white/10 pb-1">{item.day}</div>
                    <ul className="text-sm font-medium space-y-1 flex flex-col">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <span className="text-blue-400 mt-1 shrink-0">•</span>
                           <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <div className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1 border-b border-white/10 pb-1">{item.day}</div>
                    <ul className="text-sm font-medium space-y-1 flex flex-col">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <span className="text-blue-400 mt-1 shrink-0">•</span>
                           <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] h-full">
              <h4 className="text-2xl font-bold uppercase mb-3 text-emerald-300">Cá nhân</h4>
              <ul className="text-sm font-medium space-y-2">
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></div>KT, Bút, Thuốc</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></div>Vali & Balo nhỏ</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></div>Đồ vệ sinh cá nhân</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-pink-500/20 backdrop-blur-md border border-pink-500/30 p-4 rounded-[32px] shadow-[0_8px_32px_rgba(236,72,153,0.2)] relative h-full">
              <h4 className="text-2xl font-bold uppercase mb-3 text-pink-300">Không mang</h4>
              <ul className="text-sm font-medium space-y-2">
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 shrink-0 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]"></div>Trang sức, thiết bị đắt tiền</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 shrink-0 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]"></div>Nhiều tiền mặt ( {'>'}300k )</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (isMinecraft) {
    return (
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full font-pixel text-[#0D3066] relative z-10">
          
          <div className="col-span-2 bg-[#E6E6E6] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,255,255,0.8),_inset_-4px_-4px_0_rgba(0,0,0,0.3),_8px_8px_0_#0D3066] relative flex flex-col">
            <div className="bg-[#6D9B38] border-b-[6px] border-[#0D3066] p-4 flex justify-between items-center shadow-[inset_0_4px_0_rgba(255,255,255,0.2)] relative">
               <h4 className="text-2xl font-bold uppercase drop-shadow-[2px_2px_0_#000] text-white">Trang phục</h4>
            </div>
            <div className="p-2 flex gap-2 mt-1">
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-[#C6C6C6] border-4 border-[#0D3066] px-2 py-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)]">
                    <div className="text-sm uppercase bg-[#FFD335] text-[#0D3066] px-2 py-0.5 mb-1 font-bold inline-block border-2 border-[#0D3066]">{item.day}</div>
                    <ul className="text-sm space-y-1 ml-1 text-[#0D3066] font-bold">
                      {item.items.map((it, i) => (
                         <li key={i} className="flex gap-2 items-start">
                            <span className="text-[#E52222] mt-0.5">&gt;</span> 
                            <span className="leading-tight">{it}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-[#C6C6C6] border-4 border-[#0D3066] px-2 py-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)]">
                    <div className="text-sm uppercase bg-[#FFD335] text-[#0D3066] px-2 py-0.5 mb-1 font-bold inline-block border-2 border-[#0D3066]">{item.day}</div>
                    <ul className="text-sm space-y-1 ml-1 text-[#0D3066] font-bold">
                      {item.items.map((it, i) => (
                         <li key={i} className="flex gap-2 items-start">
                            <span className="text-[#E52222] mt-0.5">&gt;</span> 
                            <span className="leading-tight">{it}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#E6E6E6] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,255,255,0.8),_inset_-4px_-4px_0_rgba(0,0,0,0.3),_8px_8px_0_#0D3066] flex flex-col h-full">
              <div className="bg-[#FFD335] border-b-[6px] border-[#0D3066] p-3 text-center shadow-[inset_0_4px_0_rgba(255,255,255,0.4)]">
                 <h4 className="text-xl font-bold uppercase text-[#0D3066]">Cá nhân</h4>
              </div>
              <div className="p-4">
                <ul className="text-base space-y-3 font-bold">
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#6D9B38] border-2 border-[#0D3066]"></div> KT, Bút, Thuốc</li>
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#6D9B38] border-2 border-[#0D3066]"></div> Vali & Balo nhỏ</li>
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#6D9B38] border-2 border-[#0D3066]"></div> Đồ vệ sinh cá nhân</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#E52222] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,100,100,0.8),_inset_-4px_-4px_0_rgba(0,0,0,0.3),_8px_8px_0_#0D3066] relative flex flex-col h-full">
              <div className="bg-black/10 absolute inset-0 pointer-events-none"></div>
              <div className="p-4 flex-1 flex flex-col relative z-10 justify-center">
                <h4 className="text-2xl font-bold uppercase mb-4 drop-shadow-[2px_2px_0_#000] text-[#FFD335] text-center mt-2">! Không Mang !</h4>
                <div className="bg-[#C6C6C6] border-4 border-[#0D3066] p-4 flex-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5)]">
                   <ul className="text-base space-y-4 font-bold text-[#0D3066] h-full flex flex-col justify-center">
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Trang sức đắt tiền</li>
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Thiết bị điện tử</li>
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Nhiều tiền mặt ( &gt;300k )</li>
                   </ul>
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
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full font-title text-[#111] relative z-10">
          
          <div className="col-span-2 bg-[#D9D9D9] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,255,255,0.9),_inset_-4px_-4px_0_rgba(0,0,0,0.2),_8px_8px_0_#1F2937] relative flex flex-col">
            <div className="bg-[#42B8C1] border-b-[6px] border-[#1F2937] p-4 flex justify-between items-center shadow-[inset_0_4px_0_rgba(255,255,255,0.4)] relative">
               <h4 className="text-2xl font-black uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] text-white">Trang phục</h4>
            </div>
            <div className="p-2 flex gap-2 mt-1">
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-[#A3A3A3] border-4 border-[#1F2937] px-2 py-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)]">
                    <div className="text-sm uppercase bg-[#FFD335] text-[#1F2937] px-2 py-0.5 mb-1 font-black inline-block border-2 border-[#1F2937]">{item.day}</div>
                    <ul className="text-sm space-y-1 ml-1 text-[#111] font-bold">
                      {item.items.map((it, i) => (
                         <li key={i} className="flex gap-2 items-start">
                            <span className="text-[#E52222] mt-0.5">&gt;</span> 
                            <span className="leading-tight">{it}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-[#A3A3A3] border-4 border-[#1F2937] px-2 py-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)]">
                    <div className="text-sm uppercase bg-[#FFD335] text-[#1F2937] px-2 py-0.5 mb-1 font-black inline-block border-2 border-[#1F2937]">{item.day}</div>
                    <ul className="text-sm space-y-1 ml-1 text-[#111] font-bold">
                      {item.items.map((it, i) => (
                         <li key={i} className="flex gap-2 items-start">
                            <span className="text-[#E52222] mt-0.5">&gt;</span> 
                            <span className="leading-tight">{it}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#D9D9D9] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,255,255,0.9),_inset_-4px_-4px_0_rgba(0,0,0,0.2),_8px_8px_0_#1F2937] flex flex-col h-full">
              <div className="bg-[#FFD335] border-b-[6px] border-[#1F2937] p-3 text-center shadow-[inset_0_4px_0_rgba(255,255,255,0.6)]">
                 <h4 className="text-xl font-black uppercase text-[#1F2937]">Cá nhân</h4>
              </div>
              <div className="p-4">
                <ul className="text-base space-y-3 font-bold">
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#42B8C1] border-2 border-[#1F2937]"></div> KT, Bút, Thuốc</li>
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#42B8C1] border-2 border-[#1F2937]"></div> Vali & Balo nhỏ</li>
                  <li className="flex items-center gap-3"><div className="w-3 h-3 bg-[#42B8C1] border-2 border-[#1F2937]"></div> Đồ vệ sinh cá nhân</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#E52222] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,100,100,0.8),_inset_-4px_-4px_0_rgba(0,0,0,0.2),_8px_8px_0_#1F2937] relative flex flex-col h-full">
              <div className="p-4 flex-1 flex flex-col relative z-10 justify-center">
                <h4 className="text-2xl font-black uppercase mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] text-[#FFD335] text-center mt-2">! Không Mang !</h4>
                <div className="bg-[#A3A3A3] border-4 border-[#1F2937] p-4 flex-1 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)]">
                   <ul className="text-base space-y-4 font-bold text-[#111] h-full flex flex-col justify-center">
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Trang sức đắt tiền</li>
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Thiết bị điện tử</li>
                     <li className="flex items-start gap-2"><span className="text-[#E52222] text-xl mt-[-2px]">X</span> Nhiều tiền mặt</li>
                   </ul>
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
      <Layout title="Hành Trang" theme={theme}>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full text-gray-900 font-sans relative z-10">
          
          <div className="col-span-2 bg-white border-4 border-[#0D3066] rounded-2xl p-5 shadow-[0_8px_0_#0D3066] relative flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFD335]"></div>
            <div className="px-5 py-4 border-b-2 border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD335] rounded-lg flex items-center justify-center text-[#0D3066] font-black text-xl">1</div>
              <h4 className="text-2xl font-black uppercase text-[#0D3066]">Trang Phục</h4>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="flex-1 flex flex-col gap-1">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg px-2 py-1 border-l-4 border-[#0D3066]">
                    <div className="text-[#0D3066] font-black text-sm uppercase tracking-wide mb-1">{item.day}</div>
                    <ul className="text-sm font-medium text-gray-600 space-y-0.5">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex gap-2 items-center"><div className="w-2 h-2 bg-[#FFD335] rounded-full shrink-0"></div>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg px-2 py-1 border-l-4 border-[#0D3066]">
                    <div className="text-[#0D3066] font-black text-sm uppercase tracking-wide mb-1">{item.day}</div>
                    <ul className="text-sm font-medium text-gray-600 space-y-0.5">
                      {item.items.map((it, i) => (
                        <li key={i} className="flex gap-2 items-center"><div className="w-2 h-2 bg-[#FFD335] rounded-full shrink-0"></div>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-white border-4 border-[#0D3066] rounded-xl shadow-[0_8px_0_#0D3066] flex flex-col overflow-hidden h-full">
               <div className="px-4 py-3 bg-[#0D3066] text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-black">2</div>
                  <h4 className="text-lg font-black uppercase text-[#FFD335]">Cá Nhân</h4>
               </div>
               <div className="p-3 bg-gray-50 flex-1 flex flex-col justify-center">
                 <ul className="text-base font-bold text-gray-700 space-y-2">
                    <li className="bg-white p-2 border-2 border-gray-200 rounded-md shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-[#6D9B38] rounded-full"></div> KT, Bút, Thuốc</li>
                    <li className="bg-white p-2 border-2 border-gray-200 rounded-md shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-[#6D9B38] rounded-full"></div> Vali & Balo nhỏ</li>
                    <li className="bg-white p-2 border-2 border-gray-200 rounded-md shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-[#6D9B38] rounded-full"></div> Đồ vệ sinh cá nhân</li>
                 </ul>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#E52222] border-4 border-[#0D3066] rounded-xl shadow-[0_8px_0_#0D3066] flex flex-col overflow-hidden text-white relative h-full">
               <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
               <div className="px-4 py-3 border-b-2 border-white/20 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FFD335] text-[#0D3066] rounded-lg flex items-center justify-center font-black">!</div>
                  <h4 className="text-lg font-black uppercase text-[#FFD335]">Cấm Mang</h4>
               </div>
               <div className="p-3 flex-1 flex flex-col justify-center gap-2">
                  <div className="bg-black/20 p-2.5 rounded-md border border-white/10 font-black text-base flex items-center gap-2">
                     <span className="text-[#FFD335]">X</span> Trang sức đắt tiền
                  </div>
                  <div className="bg-black/20 p-2.5 rounded-md border border-white/10 font-black text-base flex items-center gap-2">
                     <span className="text-[#FFD335]">X</span> Thiết bị điện tử
                  </div>
                  <div className="bg-white text-[#E52222] p-2.5 rounded-md border-2 border-[#0D3066] font-black text-base flex items-center gap-2 shadow-sm transform hover:scale-105 transition-transform">
                     <span className="text-[#E52222]">X</span> Tiền mặt ( &gt;300k )
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
    <Layout title="Hành Trang" theme={theme}>
      <div className="grid grid-cols-2 gap-3 mt-1 relative z-10">
        
        {/* TRANG PHỤC */}
        <div className="col-span-2 bg-[#FCD22B] border-[4px] border-black p-3 shadow-[6px_6px_0_#000] transform rotate-1">
           <div className="inline-block bg-[#F47B95] border-[4px] border-black px-4 py-1.5 text-white font-black text-xl mb-2 shadow-[4px_4px_0_#000] -rotate-1">
              TRANG PHỤC PHẢI CÓ
           </div>
           <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 0).map((item, index) => (
                  <div key={index} className="bg-white border-[3px] border-black px-3 py-2 shadow-[3px_3px_0_#000] transform -rotate-1 w-full text-left">
                    <span className="bg-[#70C9F0] border-2 border-black font-black px-2 py-0.5 text-[14px] text-[#0D3066] shadow-[2px_2px_0_#000] block w-fit mb-2">{item.day}</span>
                    <ul className="list-disc ml-4 text-[14px] font-bold text-[#0D3066] leading-tight space-y-1">
                      {item.items.map((it, i) => <li key={i}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                {dressCode.filter((_, i) => i % 2 === 1).map((item, index) => (
                  <div key={index} className="bg-white border-[3px] border-black px-3 py-2 shadow-[3px_3px_0_#000] transform rotate-1 w-full text-left">
                    <span className="bg-[#70C9F0] border-2 border-black font-black px-2 py-0.5 text-[14px] text-[#0D3066] shadow-[2px_2px_0_#000] block w-fit mb-2">{item.day}</span>
                    <ul className="list-disc ml-4 text-[14px] font-bold text-[#0D3066] leading-tight space-y-1">
                      {item.items.map((it, i) => <li key={i}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
           </div>
        </div>
        
        {/* CÁ NHÂN & VỆ SINH */}
        <div className="flex flex-col gap-4">
           <div className="bg-white border-[4px] border-black p-3 shadow-[8px_8px_0_#000] transform -rotate-1 h-full">
            <h4 className="font-title font-black text-[#0D3066] bg-[#70C9F0] border-2 border-black px-3 py-1 shadow-[3px_3px_0_#000] inline-block rotate-2 uppercase text-[16px] tracking-wide">Cá nhân & Vệ sinh</h4>
            <ul className="list-disc ml-5 mt-3 text-[14px] font-bold leading-snug space-y-1.5 text-[#0D3066]">
              <li>Kinh Thánh, Bút viết, Thuốc, CCCD</li>
              <li>Vali lớn: 1 cái & Balo nhỏ (đựng đồ học)</li>
              <li>Kem chống nắng, kính mát, bình nước</li>
              <li className="list-none border-t-2 border-black border-dashed my-2 -ml-5 mr-2"></li>
              <li>Bàn chải, kem đánh răng, khăn mặt, khăn tắm</li>
              <li>Dầu gội, sữa tắm</li>
            </ul>
          </div>
        </div>
        
        {/* LƯU Ý & KHÔNG MANG */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#FFE5E5] border-[4px] border-black p-3 shadow-[8px_8px_0_#000] transform rotate-1 h-full">
            <h4 className="font-title font-black text-white bg-[#F47B95] border-2 border-black px-3 py-1 shadow-[3px_3px_0_#000] inline-block -rotate-1 uppercase text-[16px] tracking-wide">Lưu ý & Không mang</h4>
            <ul className="list-disc ml-5 text-[14px] font-bold leading-snug space-y-1.5 text-[#0D3066] mt-3">
              <li>Quần, váy, đầm dài qua gối, áo có tay</li>
              <li>Giày có quai hậu (học trên nhà thờ)</li>
              <li>Sinh hoạt ngoài trời, nữ không mặc đầm váy</li>
              <li className="list-none border-t-2 border-black border-dashed my-2 -ml-5 mr-2"></li>
              <li className="text-[#D32F2F]">KHÔNG MANG: trang sức, thiết bị điện tử đắt tiền</li>
              <li className="text-[#D32F2F]">Không mang quá 300k tiền mặt</li>
            </ul>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};
