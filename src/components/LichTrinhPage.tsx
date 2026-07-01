
import { Layout } from './Layout';
import { schedule } from '../data/campData';

interface PageProps {
  theme?: 'memphis' | 'pixel' | 'glass' | 'cyberpunk' | 'minecraft' | 'minecraft2' | 'roblox';
}

export const LichTrinhPage = ({ theme = 'memphis' }: PageProps) => {

  const isPixel = theme === 'pixel';
  const isGlass = theme === 'glass';
  const isCyberpunk = theme === 'cyberpunk';
  const isMinecraft = theme === 'minecraft';
  const isRoblox = theme === 'roblox';

  if (isCyberpunk) {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full bg-black border-[4px] border-[#FFD335] p-5 flex flex-col mt-4 shadow-[8px_8px_0_#00FFFF] relative overflow-hidden text-white font-sans flex-1 justify-between">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMTExIi8+PC9zdmc+')] opacity-50 pointer-events-none"></div>
          {schedule.map((item, index) => (
            <div key={index} className="flex border-b border-[#FFD335]/30 py-4 last:border-b-0 items-center relative z-10 group flex-1">
              <div className="w-[140px] shrink-0 text-base flex flex-col">
                <div className="bg-[#FFD335] text-[#0D3066] px-3 py-1 inline-block mb-1 font-black transform -skew-x-12 w-fit">{item.day}</div>
                <div className="text-[#00FFFF] font-mono text-sm">{item.date}</div>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-base pl-5 border-l border-[#E52222]/30 group-hover:border-[#E52222] transition-colors">
                {item.location.map((loc, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#E52222] font-bold">&gt;</span>
                    <span className="font-medium text-gray-200">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (isPixel) {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full bg-[#0D3066] border-[4px] border-[#FFD335] p-5 flex flex-col font-pixel text-[#FFD335] mt-4 shadow-[8px_8px_0_#FFD335] gap-4">
          {schedule.map((item, index) => (
            <div key={index} className="flex border-b-2 border-dashed border-[#FFD335] pb-4 last:border-b-0 items-start">
              <div className="w-[140px] shrink-0 text-lg">
                <div className="bg-[#FFD335] text-[#0D3066] px-2 py-0.5 inline-block mb-1 font-bold">{item.day}</div>
                <div>{item.date}</div>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-lg pl-4">
                {item.location.map((loc, i) => (
                  <div key={i} className="flex gap-2">
                    <span>*</span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (isGlass) {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full flex flex-col gap-4 mt-4 font-glass">
          {schedule.map((item, index) => (
            <div key={index} className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.2)] text-white items-center">
              <div className="w-[120px] shrink-0 flex flex-col items-center justify-center border-r border-white/20 pr-4">
                <span className="font-bold text-xl text-blue-300">{item.day}</span>
                <span className="text-sm opacity-80">{item.date}</span>
              </div>
              <div className="flex-1 pl-6 flex flex-col gap-1.5">
                {item.location.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg font-medium">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (isMinecraft) {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full flex flex-col gap-4 mt-4 font-pixel flex-1 justify-between">
          {schedule.map((item, index) => (
            <div key={index} className="flex bg-[#E6E6E6] border-[4px] border-[#0D3066] shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),_4px_4px_0_#0D3066] text-[#0D3066] items-stretch flex-1">
              <div className="w-[140px] shrink-0 flex flex-col items-center justify-center bg-[#6D9B38] border-r-[4px] border-[#0D3066] shadow-[inset_2px_2px_0_rgba(255,255,255,0.2)] p-2">
                <span className="font-bold text-xl uppercase drop-shadow-[2px_2px_0_#000] text-white">{item.day}</span>
                <span className="text-sm text-white drop-shadow-[1px_1px_0_#000] mt-1 font-bold">{item.date}</span>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center gap-3 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                {item.location.map((loc, i) => (
                  <div key={i} className="flex items-start gap-3 text-base font-bold relative z-10">
                    <div className="w-4 h-4 mt-0.5 shrink-0 bg-[#FFD335] border-2 border-[#0D3066]"></div>
                    <span className="leading-tight">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (theme === 'minecraft2') {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full flex flex-col gap-4 mt-4 font-title flex-1 justify-between">
          {schedule.map((item, index) => (
            <div key={index} className="flex bg-[#A3A3A3] border-[4px] border-[#1F2937] shadow-[inset_2px_2px_0_rgba(255,255,255,0.4),_4px_4px_0_#1F2937] text-[#111] items-stretch flex-1">
              <div className="w-[140px] shrink-0 flex flex-col items-center justify-center bg-[#D9D9D9] border-r-[4px] border-[#1F2937] shadow-[inset_2px_2px_0_rgba(255,255,255,0.9)] p-2">
                <span className="font-black text-2xl uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] text-[#1F2937]">{item.day}</span>
                <span className="text-base text-[#1F2937] mt-1 font-bold">{item.date}</span>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center gap-3 relative overflow-hidden">
                {item.location.map((loc, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg font-bold relative z-10">
                    <div className="w-5 h-5 mt-1 shrink-0 bg-[#42B8C1] border-2 border-[#1F2937]"></div>
                    <span className="leading-tight">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (isRoblox) {
    return (
      <Layout title="Lịch Trình Trại" theme={theme}>
        <div className="w-full bg-white border-4 border-[#0D3066] rounded-xl shadow-[0_8px_0_#0D3066] flex flex-col mt-4 font-sans text-gray-800 overflow-hidden flex-1 justify-between">
          {schedule.map((item, index) => (
            <div key={index} className={`flex flex-1 ${index !== schedule.length - 1 ? 'border-b-4 border-[#0D3066]' : ''} hover:bg-yellow-50 transition-colors`}>
              <div className="w-[150px] shrink-0 flex flex-col items-center justify-center p-4 border-r-4 border-[#0D3066] bg-gray-50/50">
                <span className="font-black text-xl uppercase text-[#E52222]">{item.day}</span>
                <span className="font-bold text-base text-[#0D3066] mt-1">{item.date}</span>
              </div>
              <div className="flex-1 p-5 flex flex-col gap-3 justify-center">
                {item.location.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#FFD335] font-black text-2xl leading-none w-5 text-center">»</span>
                    <span className="font-bold text-[#0D3066] text-lg">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  // Memphis 1 Return
  return (
    <Layout title="Lịch Trình Trại" theme={theme}>
      <div className="w-full mt-6 relative z-10 px-2">
        {schedule.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`w-full ${index > 0 ? '-mt-7' : ''}`}>
               <div className={`w-[48%] bg-white border-[4px] border-black px-4 py-3 shadow-[6px_6px_0_#000] block ${isLeft ? 'mr-auto transform -rotate-1' : 'ml-auto transform rotate-1'}`}>
                  <div className="flex flex-col gap-1">
                    <span className={`inline-block font-title text-[20px] font-black text-white px-3 py-1 border-[3px] border-black self-start ${isLeft ? 'bg-[#F47B95] -rotate-1' : 'bg-[#70C9F0] rotate-1'} shadow-[3px_3px_0_#000]`}>
                      {item.day} - {item.date}
                    </span>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {item.location.map((loc, i) => (
                        <p key={i} className="font-bold text-[16px] leading-tight text-[#0D3066] flex items-start gap-2">
                          <span className="text-[#F47B95] text-[18px] leading-none mt-0.5">●</span>
                          {loc}
                        </p>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
