
import { Layout } from './Layout';
import { rules } from '../data/campData';

interface PageProps {
  theme?: 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';
}

export const NoiQuyPage = ({ theme = 'memphis' }: PageProps) => {

  const isPixel = theme === 'pixel';
  const isGlass = theme === 'glass';
  const isCyberpunk = theme === 'cyberpunk';
  const isMinecraft = theme === 'minecraft';
  const isRoblox = theme === 'roblox';

  if (isCyberpunk) {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-black/90 border-2 border-[#FF003C] p-6 shadow-[0_0_20px_rgba(255,0,60,0.3)] flex flex-col font-sans text-white mt-4 h-auto min-h-[700px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF003C] opacity-10 filter blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00FFFF] opacity-10 filter blur-3xl rounded-full"></div>
          
          <div className="flex items-center justify-between border-b-2 border-gray-800 pb-4 mb-4 relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] flex items-center gap-3">
              <span className="text-[#FF003C] animate-pulse">!</span> Điều Khoản
            </h3>
            <div className="bg-[#FCEE0A] text-[#0D3066] px-2 py-1 text-xs font-black uppercase transform skew-x-12">
              BQT.SYS
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 relative z-10">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-3 items-start bg-black border border-gray-800 hover:border-[#00FFFF] p-3 transition-colors group/item">
                <div className="shrink-0 text-base font-mono text-[#FCEE0A] bg-gray-900 px-2 py-0.5 border border-gray-700 group-hover/item:border-[#FCEE0A] mt-0.5">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <p className="leading-snug text-gray-300 font-bold text-base group-hover/item:text-white transition-colors">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (isPixel) {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-black/80 border-2 border-[#FFD335] p-5 flex flex-col mt-2 flex-1 justify-between shadow-[0_0_15px_rgba(255,211,53,0.3)]">
          <div className="flex items-center gap-3 mb-2 border-b border-[#FFD335]/30 pb-2">
            <span className="text-[#FFD335]">&lt;</span>
            <h3 className="text-xl font-bold uppercase tracking-widest text-[#FFD335]">Hệ thống</h3>
            <span className="text-[#FFD335]">&gt;</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans overflow-hidden">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-3 items-start group">
                <div className="shrink-0 text-[#E52222] font-mono text-xl mt-0.5 font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                  [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                </div>
                <p className="text-gray-200 text-lg leading-snug font-bold group-hover:text-white transition-colors">{rule}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 text-right shrink-0">
            <span className="bg-[#FFD335] text-[#0D3066] px-2 py-0.5 font-bold uppercase text-sm">&gt; BQT_</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (isGlass) {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-6 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col font-glass text-white mt-2 relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-50 pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold uppercase mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Để chung một nhà, ta phải:</h3>
          
          <div className="flex flex-col gap-2.5">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-3 items-center bg-white/5 border border-white/10 px-3 py-2 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center font-bold text-white shadow-lg text-sm">
                  {index + 1}
                </div>
                <p className="text-[14.5px] font-medium text-white/90 leading-snug">{rule}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-3 text-right">
            <span className="inline-block px-5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-cyan-200 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
              Ban Quản Trại
            </span>
          </div>
        </div>
      </Layout>
    );
  }

  if (isMinecraft) {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-[#E6E6E6] border-[6px] border-[#0D3066] shadow-[inset_4px_4px_0_rgba(255,255,255,0.8),_inset_-4px_-4px_0_rgba(0,0,0,0.3),_8px_8px_0_#0D3066] flex flex-col font-pixel text-[#0D3066] mt-2 flex-1 justify-between">
          <div className="bg-[#6D9B38] border-b-[6px] border-[#0D3066] p-3 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
             <h3 className="text-2xl font-bold uppercase text-white drop-shadow-[2px_2px_0_#000] relative z-10">Để là anh em chung 1 nhà:</h3>
          </div>
          
          <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-4 items-start bg-[#E6E6E6] border-[3px] border-[#8A8A8A] p-2 shadow-[inset_2px_2px_0_rgba(255,255,255,1)]">
                <div className="shrink-0 bg-[#E52222] text-white px-2 py-0.5 text-lg font-bold drop-shadow-[1px_1px_0_#000]">
                  {index + 1}
                </div>
                <p className="text-lg leading-tight text-[#0D3066] font-bold mt-0.5">{rule}</p>
              </div>
            ))}
          </div>
          
          <div className="px-4 pb-4 text-right">
            <span className="inline-block bg-[#FFD335] text-[#0D3066] px-4 py-1.5 border-[4px] border-[#0D3066] font-bold text-base uppercase drop-shadow-[2px_2px_0_#000] shadow-[inset_2px_2px_0_rgba(255,255,255,0.3)]">
              Ban Quản Trại
            </span>
          </div>
        </div>
      </Layout>
    );
  }

  if (theme === 'minecraft2') {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-[#D9D9D9] border-[6px] border-[#1F2937] shadow-[inset_4px_4px_0_rgba(255,255,255,0.9),_inset_-4px_-4px_0_rgba(0,0,0,0.2),_8px_8px_0_#1F2937] flex flex-col font-title mt-4 relative overflow-hidden flex-1 justify-between">
          
          <div className="bg-[#42B8C1] border-b-[6px] border-[#1F2937] p-3 text-center shadow-[inset_0_4px_0_rgba(255,255,255,0.4)] relative">
             <h3 className="text-2xl font-black uppercase text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] relative z-10">Để là anh em chung 1 nhà:</h3>
          </div>
          
          <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-4 items-start bg-[#A3A3A3] border-[4px] border-[#1F2937] p-2 shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)]">
                <div className="shrink-0 bg-[#E52222] text-white px-2 py-0.5 text-lg font-black drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
                  {index + 1}
                </div>
                <p className="text-base leading-tight text-[#111] font-bold mt-0.5">{rule}</p>
              </div>
            ))}
          </div>
          
          <div className="px-4 pb-4 text-right">
            <span className="inline-block bg-[#FFD335] text-[#1F2937] px-4 py-1.5 border-[4px] border-[#1F2937] font-black text-base uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,0.4)] shadow-[inset_2px_2px_0_rgba(255,255,255,0.6)]">
              Ban Quản Trại
            </span>
          </div>
        </div>
      </Layout>
    );
  }

  if (isRoblox) {
    return (
      <Layout title="Nội Quy Trại" theme={theme}>
        <div className="w-full bg-white border-4 border-[#0D3066] rounded-2xl shadow-[0_8px_0_#0D3066] flex flex-col font-sans text-gray-800 mt-2 relative overflow-hidden flex-1 justify-between">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#FFD335]"></div>
          
          <div className="px-6 py-4 border-b-2 border-gray-100 mt-2 text-center bg-gray-50/50">
             <h3 className="text-2xl font-black uppercase text-[#0D3066] tracking-tight">Quy Định Server</h3>
          </div>
          
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2 font-body mt-2 px-4 py-2">
          {rules.map((rule, index) => (
            <div key={index} className="flex gap-2.5 bg-gray-100 p-2.5 rounded-lg border-l-4 border-[#E52222] shadow-sm">
              <div className="shrink-0 bg-[#FFD335] text-[#0D3066] w-7 h-7 flex items-center justify-center font-black rounded text-base mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-800 text-base font-medium leading-snug">{rule}</p>
            </div>
          ))}
        </div>
          
          <div className="px-5 py-4 border-t-2 border-gray-100 bg-gray-50 flex justify-end">
            <span className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg font-black text-sm uppercase shadow-sm">
              Admin
            </span>
          </div>
        </div>
      </Layout>
    );
  }

  // Memphis 1 Return
  return (
    <Layout title="Nội Quy Trại" theme={theme}>
      <div className="relative z-10 my-auto">
        <div className="bg-[#70C9F0] border-[4px] border-black p-4 shadow-[8px_8px_0_#000] inline-block transform -rotate-2 mb-4">
          <h3 className="text-xl font-title tracking-wide uppercase font-black text-[#0D3066]">
            Để là anh em chung 1 nhà, ta phải:
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {rules.map((rule, index) => {
            const bgColors = ['bg-white', 'bg-[#FCD22B]', 'bg-[#F47B95]'];
            const bgColor = bgColors[index % 3];
            const rotate = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
            
            return (
              <div key={index} className={`${bgColor} border-[3px] border-black p-3.5 shadow-[4px_4px_0_#000] transform ${rotate} flex gap-3.5 items-start`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-title font-black text-xl bg-black text-white mt-1">
                  {index + 1}
                </div>
                <p className="font-bold text-[14.5px] leading-snug text-[#0D3066] pt-1">
                  {rule}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-right mt-8 relative">
          <span className="inline-block px-6 py-2 bg-[#F47B95] text-[#0D3066] font-black font-title text-2xl border-[4px] border-black shadow-[6px_6px_0_#000] transform -rotate-3">
            (Ban Quản Trại)
          </span>
        </div>
      </div>
    </Layout>
  );
};
