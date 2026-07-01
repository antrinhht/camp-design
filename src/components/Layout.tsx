import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  theme: 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';
}

export const Layout = ({ children, title, theme }: LayoutProps) => {
  const isMemphis1 = theme === 'memphis';
  const isPixel = theme === 'pixel';
  const isGlass = theme === 'glass';
  const isCyberpunk = theme === 'cyberpunk';
  const isMinecraft = theme === 'minecraft';
  const isMinecraft2 = theme === 'minecraft2';
  const isRoblox = theme === 'roblox';

  return (
    <div className={`w-[700px] h-[990px] overflow-hidden relative flex flex-col p-5 transition-colors duration-500 ${
      isMemphis1 
        ? 'bg-[#13509C] border-[6px] border-[#70C9F0] shadow-2xl' 
        : isPixel
        ? 'bg-[#0D3066] border-[8px] border-[#FFD335] font-pixel shadow-[8px_8px_0_#FFD335]'
        : isGlass
        ? 'bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] border border-white/20 shadow-2xl font-glass'
        : isCyberpunk
        ? 'bg-[#000000] border-4 border-[#00FFFF] shadow-[8px_8px_0_#FCEE0A]'
        : isMinecraft
        ? 'bg-[#6D9B38] border-8 border-[#3A2518] shadow-[inset_12px_12px_0_rgba(255,255,255,0.2),_12px_12px_0_rgba(0,0,0,0.5)] font-pixel'
        : isMinecraft2
        ? 'bg-[#737373] border-8 border-[#1F2937] shadow-[inset_12px_12px_0_rgba(255,255,255,0.3),_12px_12px_0_rgba(0,0,0,0.5)] font-title'
        : isRoblox
        ? 'bg-[#E52222] border-8 border-black shadow-[16px_16px_0_rgba(0,0,0,0.8)]'
        : 'bg-[#13509C]'
    }`}>
      {/* Background Decor */}
      {isMemphis1 && (
        <>
          <div className="absolute top-[50px] left-[20px] w-[600px] h-[350px] border-[2.5px] border-black rounded-[50%] transform -rotate-12 pointer-events-none opacity-40"></div>
          <div className="absolute top-[550px] right-[20px] w-[650px] h-[400px] border-[2.5px] border-black rounded-[50%] transform rotate-[15deg] pointer-events-none opacity-40"></div>
          
          <div className="absolute top-[100px] left-[50px] transform -rotate-12 pointer-events-none drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-0">
            <svg width="60" height="80" viewBox="0 0 24 24" fill="#FCD22B" stroke="black" strokeWidth="1.5">
              <path d="M11 2v6h-4v4h4v10h4v-10h4v-4h-4v-6z"/>
            </svg>
          </div>
          
          <div className="absolute top-[750px] right-[40px] transform rotate-6 pointer-events-none drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-0">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="#FCD22B" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20h20M3 17l4-8 4 8 4-8 4 8v3H3v-3z"/>
            </svg>
          </div>

          <div className="absolute top-[250px] right-[50px] transform rotate-12 pointer-events-none drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-0">
             <svg width="50" height="50" viewBox="0 0 24 24" fill="#FCD22B" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
        </>
      )}
      {isPixel && (
        <>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
            backgroundImage: 'linear-gradient(#FFD335 1px, transparent 1px), linear-gradient(90deg, #FFD335 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
          }}></div>
          <div className="absolute top-[80px] right-[40px] text-[#FFD335] opacity-80 text-xl font-bold">SCORE: 9999</div>
        </>
      )}
      {isGlass && (
        <>
          <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[120px] opacity-60 pointer-events-none"></div>
          <div className="absolute top-[400px] right-[-200px] w-[600px] h-[600px] bg-[#ec4899] rounded-full mix-blend-screen filter blur-[120px] opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-[-150px] left-[100px] w-[400px] h-[400px] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[100px] opacity-60 pointer-events-none"></div>
        </>
      )}
      {isCyberpunk && (
        <>
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#FCEE0A] opacity-20 filter blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#FF003C] opacity-20 filter blur-[100px] pointer-events-none"></div>
        </>
      )}
      {(isMinecraft || isMinecraft2) && (
        <>
          {/* Minecraft dirt texture overlay feeling */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>
          <div className="absolute top-0 right-[40px] text-white opacity-80 text-xl font-bold bg-black/50 px-3 py-1 border-b-4 border-l-4 border-black">XP: 99</div>
        </>
      )}
      {isRoblox && (
        <>
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_2px,_transparent_2px)]" style={{ backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-4 right-4 bg-black text-white px-4 py-1 text-sm font-black transform rotate-3 border-2 border-white">OOF!</div>
        </>
      )}

      {/* Header with Logo */}
      <div className={`text-center z-10 relative shrink-0 ${isPixel || isCyberpunk || isRoblox ? 'mt-0 mb-2 border-b-4 border-current pb-1' : 'mt-0 mb-1'} ${isCyberpunk ? 'text-[#00FFFF]' : ''} ${isPixel ? 'text-[#FFD335]' : ''} ${isRoblox ? 'text-black' : ''}`}>
        <div className={`${isPixel || isCyberpunk || isRoblox ? 'h-[100px]' : 'h-[80px]'} flex items-center justify-center flex-col relative z-20`}>
           <img src="/logo.png" alt="Logo" className={`max-h-full object-contain z-10 ${
             isMemphis1 ? 'rounded-3xl border-[4px] border-black shadow-[6px_6px_0_#000] transform -rotate-1' : 
             isPixel ? 'rounded-none border-[4px] border-[#FFD335] shadow-[6px_6px_0_#FFD335] bg-black/50 p-2' :
             isGlass ? 'rounded-[32px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/10 backdrop-blur-md p-2' :
             isCyberpunk ? 'rounded-none border-[4px] border-[#FF003C] shadow-[6px_6px_0_#FCEE0A] bg-black/80 p-2 mix-blend-screen' :
             isMinecraft ? 'rounded-none border-[8px] border-[#3A2518] shadow-[8px_8px_0_rgba(0,0,0,0.6)] bg-[#8A5A3B] p-2 mix-blend-normal' :
             isMinecraft2 ? 'rounded-none border-[6px] border-[#1F2937] shadow-[6px_6px_0_rgba(0,0,0,0.6)] bg-[#D9D9D9] p-2 mix-blend-normal' :
             isRoblox ? 'rounded-xl border-[6px] border-black shadow-[6px_6px_0_#000] bg-white p-2 transform -rotate-2' :
             'rounded-3xl shadow-xl'
           }`} />
        </div>
        
        {/* Title of the page */}
        {isMemphis1 && (
          <div className="inline-block px-6 py-1 rounded-full font-title font-bold text-xl uppercase tracking-widest mt-2 transform -rotate-2 bg-[#FCD22B] text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            {title}
          </div>
        )}
        {isPixel && (
          <div className="bg-[#0D3066] text-[#FFD335] font-pixel font-bold text-2xl uppercase tracking-[0.2em] py-2 px-4 inline-block border-[4px] border-[#FFD335] mt-4 shadow-[4px_4px_0_#FFD335]">
            {title}
          </div>
        )}
        {isGlass && (
          <div className="text-white font-glass font-bold text-2xl uppercase tracking-widest py-2 px-8 inline-block border border-white/20 mt-4 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-full">
            {title}
          </div>
        )}
        {isCyberpunk && (
          <div className="text-[#00FFFF] font-black text-2xl uppercase tracking-widest py-2 px-6 inline-block border-2 border-[#00FFFF] mt-4 shadow-[4px_4px_0_#FF003C] bg-black/80 italic transform -skew-x-12">
            // {title} //
          </div>
        )}
        {isMinecraft && (
          <div className="bg-[#8A5A3B] text-white font-pixel font-bold text-2xl uppercase tracking-widest py-2 px-4 inline-block border-4 border-[#3A2518] mt-2 shadow-[inset_2px_2px_0_rgba(255,255,255,0.3),_4px_4px_0_rgba(0,0,0,0.5)]">
            {title}
          </div>
        )}
        {isMinecraft2 && (
          <div className="bg-[#D9D9D9] text-[#1F2937] font-title font-black text-2xl uppercase tracking-widest py-2 px-4 inline-block border-[6px] border-[#1F2937] mt-2 shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),_4px_4px_0_rgba(0,0,0,0.5)]">
            {title}
          </div>
        )}
        {isRoblox && (
          <div className="bg-white text-black font-black text-2xl uppercase tracking-[0.1em] py-2 px-6 inline-block border-[6px] border-black mt-4 shadow-[6px_6px_0_#000] transform rotate-1">
            {title}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className={`z-10 flex-1 flex flex-col w-full max-w-[620px] mx-auto relative ${isRoblox || isMinecraft || isMinecraft2 ? 'pb-16 gap-4' : 'pb-10 gap-4'}`}>
        {children}
      </div>
      
      {/* Footer / Hashtags */}
      <div className={`absolute left-0 right-0 z-20 text-center uppercase font-bold tracking-widest ${
        isMemphis1 
          ? 'bottom-4 text-black bg-white py-1.5 border-4 border-black rounded-xl mx-16 shadow-[4px_4px_0_rgba(0,0,0,1)] text-[11px]' 
          : isPixel
          ? 'bottom-0 bg-[#FFD335] text-[#0D3066] py-2 border-t-[4px] border-[#FFD335] text-xs font-pixel'
          : isGlass
          ? 'bottom-4 text-white/80 py-2 border-t border-white/10 bg-white/5 backdrop-blur-lg mx-10 rounded-xl shadow-lg text-[10px]'
          : isCyberpunk
          ? 'bottom-0 bg-[#FCEE0A] text-black py-2 border-t-[4px] border-black text-xs font-black'
          : isMinecraft
          ? 'bottom-0 bg-[#3A2518] text-[#A6A6A6] py-2 border-t-[4px] border-black text-[10px] font-pixel shadow-[inset_0_4px_0_rgba(0,0,0,0.3)]'
          : isMinecraft2
          ? 'bottom-0 bg-[#1F2937] text-[#D9D9D9] py-2 border-t-[4px] border-black text-xs font-title shadow-[inset_0_4px_0_rgba(0,0,0,0.5)]'
          : isRoblox
          ? 'bottom-0 bg-black text-white py-3 border-t-8 border-white text-xs'
          : 'bottom-4 text-[#70C9F0]/80 text-[11px]'
      }`}>
        #NhaChungMotCha #TKH2026 #BanThieuNienGiaDinh
      </div>
    </div>
  );
};
