

export type ThemeType = 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';

interface ThemeSelectorProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 bg-white/10 p-2 rounded-xl backdrop-blur-sm max-w-5xl">
      <button 
        onClick={() => setTheme('memphis')}
        className={`px-6 py-2 rounded-lg font-bold transition-all ${theme === 'memphis' ? 'bg-[#F47B95] text-white border-2 border-black shadow-[4px_4px_0_#000]' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        ⚡ Memphis
      </button>
      <button 
        onClick={() => setTheme('pixel')}
        className={`px-6 py-2 font-pixel font-bold transition-all ${theme === 'pixel' ? 'bg-black text-[#FFD335] border-4 border-[#FFD335] shadow-[4px_4px_0_#FFD335]' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        👾 Pixel Art
      </button>
      <button 
        onClick={() => setTheme('glass')}
        className={`px-6 py-2 rounded-xl font-glass font-bold transition-all ${theme === 'glass' ? 'bg-white/20 text-white border border-white/40 shadow-[0_4px_16px_rgba(255,255,255,0.2)] backdrop-blur-md' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        💎 Liquid Glass
      </button>
      <button 
        onClick={() => setTheme('cyberpunk')}
        className={`px-6 py-2 font-black italic transition-all ${theme === 'cyberpunk' ? 'bg-[#FCEE0A] text-[#0D3066] border-4 border-black shadow-[4px_4px_0_#00FFFF]' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        🦾 Cyberpunk
      </button>
      <button 
        onClick={() => setTheme('minecraft')}
        className={`px-6 py-2 font-bold font-pixel transition-all ${theme === 'minecraft' ? 'bg-[#4a8a28] text-white border-b-4 border-r-4 border-black shadow-[inset_2px_2px_0_rgba(255,255,255,0.4)]' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        ⛏️ Minecraft
      </button>
      <button 
        onClick={() => setTheme('minecraft2')}
        className={`px-6 py-2 font-black font-title transition-all ${theme === 'minecraft2' ? 'bg-[#D9D9D9] text-[#1F2937] border-[4px] border-[#1F2937] shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),_4px_4px_0_#1F2937]' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        ⛏️ MC Hiện Đại
      </button>
      <button 
        onClick={() => setTheme('roblox')}
        className={`px-6 py-2 rounded-lg font-black transition-all ${theme === 'roblox' ? 'bg-[#E52222] text-white border-b-4 border-r-4 border-black' : 'bg-white/50 hover:bg-white text-gray-800'}`}
      >
        🟥 Roblox
      </button>
    </div>
  );
};
