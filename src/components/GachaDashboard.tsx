import { useState } from 'react';
import confetti from 'canvas-confetti';
import { useGacha, GACHA_POOL } from '../hooks/useGacha';
import type { GachaItem } from '../hooks/useGacha';
import type { ThemeType } from './ThemeSelector';

interface GachaDashboardProps {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
  onRollAction?: () => void;
  onViewCard?: () => void; // Bật Bottom Sheet / Modal
  trackRoll?: (theme: string) => void;
}

export const GachaDashboard = ({ theme, setTheme, onRollAction, onViewCard, trackRoll }: GachaDashboardProps) => {
  const { totalRolls, unlockedThemes, roll, isInitialized } = useGacha();
  const [rollPhase, setRollPhase] = useState<0 | 1 | 2 | 3>(0);
  const [recentDrop, setRecentDrop] = useState<GachaItem | null>(null);

  if (!isInitialized) return null;

  const handleRoll = (multiplier: number) => {
    if (rollPhase !== 0) return;
    
    // Phase 1: Lắc dồn dập (0.4s)
    setRollPhase(1);
    if (onRollAction) onRollAction();
    setRecentDrop(null);

    setTimeout(() => {
      // Phase 2: Nổ ánh sáng & tính kết quả (0.2s)
      setRollPhase(2);
      const result = roll(multiplier);
      const droppedItem = result.items[0];
      setRecentDrop(droppedItem);
      setTheme(droppedItem.id);
      
      // Gửi tracking
      if (trackRoll) trackRoll(droppedItem.id);

      if (result.isNew) {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 },
          colors: [droppedItem.color, '#ffffff', '#FFD335']
        });
      }

      setTimeout(() => {
        // Phase 3: Hiện thẻ bài
        setRollPhase(3);
        
        // Reset sau một lúc để cho phép roll tiếp (0.4s thẻ hiện)
        setTimeout(() => {
          setRollPhase(0);
        }, 400); 
      }, 200); // 0.2s thời gian nổ ánh sáng

    }, 400); // 0.4s lắc rương
  };

  const poolArray = [
    GACHA_POOL['memphis'],
    GACHA_POOL['cyberpunk'],
    GACHA_POOL['pixel'],
    GACHA_POOL['roblox'],
    GACHA_POOL['minecraft2'],
    GACHA_POOL['glass']
  ];

  const currentThemeData = poolArray.find(i => i.id === theme) || poolArray[0];

  return (
    <div 
      className="flex flex-col w-full h-full lg:h-auto justify-between lg:max-w-md bg-gray-950 lg:bg-gray-900/80 p-4 lg:p-6 lg:rounded-3xl lg:border text-white overflow-y-auto [&::-webkit-scrollbar]:hidden transition-all duration-700"
      style={{ borderColor: `${currentThemeData.color}40`, boxShadow: `0 0 60px ${currentThemeData.color}15, inset 0 0 20px ${currentThemeData.color}10` }}
    >
      
      {/* Header */}
      <div className="flex justify-center items-center border-b pb-4 transition-colors duration-700" style={{ borderColor: `${currentThemeData.color}40` }}>
        <h2 className="text-xl lg:text-2xl font-bold font-title" style={{ color: currentThemeData.color, textShadow: `0 0 10px ${currentThemeData.color}80` }}>Gacha HDSD TKH</h2>
      </div>

      {/* Rương & Animation Area */}
      <div className="flex-1 flex flex-col items-center justify-center py-6 relative">
        
        {/* Hào quang khi nổ (Phase 2 & 3) */}
        {rollPhase >= 2 && recentDrop && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-full blur-[100px] animate-pulse opacity-50 z-0"
            style={{ backgroundColor: recentDrop.color }}
          ></div>
        )}

        {/* Thẻ bài kết quả đập vào màn hình (Phase 3) */}
        {rollPhase >= 2 && recentDrop && (
          <div className={`absolute z-20 flex flex-col items-center ${rollPhase === 3 ? 'animate-card-flip' : 'opacity-0 scale-50'}`}>
            <span className="text-sm font-bold bg-black/80 px-3 py-1 rounded-full text-green-400 mb-2 drop-shadow-md border border-green-500/50">DROP!</span>
            <div className="w-[180px] h-[260px] rounded-xl font-bold border-4 shadow-[0_0_40px_rgba(255,255,255,0.2)] bg-gray-900 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative" style={{ borderColor: recentDrop.color }}>
               {/* Background effect của thẻ */}
               <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${recentDrop.color}, transparent)`}}></div>
               <span className="text-4xl mb-4 relative z-10">✨</span>
               <div className="text-xl font-black relative z-10" style={{ color: recentDrop.color }}>
                 {recentDrop.name}
               </div>
               <div className="text-xs text-white/70 mt-2 relative z-10 font-mono">
                 {recentDrop.rarity}
               </div>
               <div className="text-xs text-[#FFD335] mt-1 relative z-10">
                 {recentDrop.dropRateStr}
               </div>
            </div>
          </div>
        )}

        {/* Rương Gacha (Ẩn đi khi ra thẻ) */}
        <div 
          className={`w-40 h-40 bg-gray-800 rounded-2xl border-4 flex items-center justify-center shadow-inner relative z-10 ${rollPhase === 1 ? 'animate-shake-intense' : ''} ${rollPhase >= 2 ? 'opacity-0 scale-50 transition-all duration-300' : 'opacity-100 scale-100 transition-all duration-500'}`}
          style={{ borderColor: currentThemeData.color, boxShadow: `inset 0 0 30px ${currentThemeData.color}40, 0 0 20px ${currentThemeData.color}20` }}
        >
           <span className="text-6xl select-none transition-transform hover:scale-110 duration-300">🎁</span>
        </div>

        {/* Total Rolls */}
        <div className="mt-6 text-center">
          <div className="text-xs lg:text-sm text-gray-400">Total Rolls</div>
          <div className="text-2xl lg:text-3xl font-black transition-colors duration-700" style={{ color: currentThemeData.color, textShadow: `0 0 10px ${currentThemeData.color}80` }}>{totalRolls}</div>
        </div>

      </div>

      {/* Buttons Area */}
      <div className="flex flex-col gap-3 mt-auto">
        {onViewCard && (
           <button 
             onClick={onViewCard}
             className="w-full py-3 mb-2 bg-gray-900 text-white font-bold rounded-xl transition-all active:scale-95 flex lg:hidden items-center justify-center gap-2 border-2"
             style={{ borderColor: currentThemeData.color, boxShadow: `0 0 10px ${currentThemeData.color}40` }}
           >
             📸 Hướng Dẫn Sử Dụng khi đi TKH 2026
           </button>
        )}

        <div className="flex gap-2 w-full">
          <button 
            disabled={rollPhase !== 0}
            onClick={() => handleRoll(1)}
            className="flex-1 py-4 font-black rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-lg text-black uppercase tracking-wider"
            style={{ 
              backgroundColor: currentThemeData.color, 
              boxShadow: `0 0 20px ${currentThemeData.color}80, inset 0 0 10px rgba(255,255,255,0.5)` 
            }}
          >
            {rollPhase !== 0 ? 'ROLLING...' : 'ROLL 1x'}
          </button>
        </div>

        <div className="flex gap-2 w-full">
          {totalRolls >= 100 ? (
            <button 
              disabled={rollPhase !== 0}
              onClick={() => handleRoll(3)}
              className="flex-1 py-3 text-black font-bold rounded-xl active:scale-95 disabled:opacity-50 transition-all opacity-90 hover:opacity-100"
              style={{ backgroundColor: currentThemeData.color, boxShadow: `0 0 15px ${currentThemeData.color}50` }}
            >
              ROLL 3x
            </button>
          ) : (
            <div className="flex-1 py-3 bg-gray-800/80 text-gray-500 text-center font-bold rounded-xl border border-dashed border-gray-600 text-xs flex items-center justify-center">
              🔒 3x (100 roll)
            </div>
          )}

          {totalRolls >= 500 ? (
            <button 
              disabled={rollPhase !== 0}
              onClick={() => handleRoll(5)}
              className="flex-1 py-3 text-black font-bold rounded-xl active:scale-95 disabled:opacity-50 transition-all opacity-90 hover:opacity-100"
              style={{ backgroundColor: currentThemeData.color, boxShadow: `0 0 15px ${currentThemeData.color}50` }}
            >
              ROLL 5x
            </button>
          ) : (
            <div className="flex-1 py-3 bg-gray-800/80 text-gray-500 text-center font-bold rounded-xl border border-dashed border-gray-600 text-xs flex items-center justify-center">
              🔒 5x (500 roll)
            </div>
          )}
        </div>
      </div>

      {/* Collection Sidebar / Grid (Mobile: Đặt dưới cùng cuộn xuống) */}
      <div className="mt-8 pt-4 border-t transition-colors duration-700" style={{ borderColor: `${currentThemeData.color}40` }}>
        <h3 className="font-bold mb-3 flex justify-between text-sm transition-colors duration-700" style={{ color: currentThemeData.color }}>
          <span style={{ textShadow: `0 0 10px ${currentThemeData.color}50` }}>Các skin đã mở</span>
          <span style={{ color: currentThemeData.color }}>{unlockedThemes.length} / {poolArray.length}</span>
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
          {poolArray.map((item) => {
            const isUnlocked = unlockedThemes.includes(item.id);
            const isSelected = theme === item.id;
            
            return (
              <button
                key={item.id}
                disabled={!isUnlocked || rollPhase !== 0}
                onClick={() => setTheme(item.id)}
                className={`relative p-2 lg:p-3 rounded-lg border text-left transition-all ${
                  !isUnlocked 
                    ? 'bg-gray-800/50 border-gray-800 opacity-60 cursor-not-allowed' 
                    : isSelected
                    ? 'bg-white/10 border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    : 'bg-gray-800/80 border-gray-700 hover:border-gray-500'
                }`}
              >
                <div className="font-bold text-xs lg:text-sm truncate" style={{ color: isUnlocked ? item.color : '#6b7280' }}>
                  {item.name}
                </div>
                <div className="text-[9px] lg:text-[10px] mt-0.5 text-gray-400">
                  {item.rarity}
                </div>
                {!isUnlocked && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-gray-600">
                    {item.pity > 0 && (
                      <span className="text-[9px] font-mono tracking-tighter bg-gray-900/50 px-1 rounded-sm border border-gray-700/50 shadow-inner">
                        {Math.min(totalRolls, item.pity)}/{item.pity}
                      </span>
                    )}
                    <span className="text-xs">🔒</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
