import { useState, useEffect } from 'react';
import { useTracking } from './useTracking';
import type { ThemeType } from '../components/ThemeSelector'; // Sẽ cập nhật kiểu ThemeType sau

export type GachaRarity = 'Normal' | 'Rare' | 'SR' | 'SSR' | 'UR' | 'Legendary';

export interface GachaItem {
  id: ThemeType;
  name: string;
  rarity: GachaRarity;
  dropRateStr: string;
  pity: number; // Mốc roll chắc chắn ra
  color: string;
}

export const GACHA_POOL: Record<ThemeType, GachaItem> = {
  'memphis': { id: 'memphis', name: 'Memphis', rarity: 'Normal', dropRateStr: '100%', pity: 0, color: '#FFD335' },
  'cyberpunk': { id: 'cyberpunk', name: 'Cyberpunk', rarity: 'Rare', dropRateStr: '5%', pity: 20, color: '#00ff00' },
  'pixel': { id: 'pixel', name: 'Pixel', rarity: 'SR', dropRateStr: '2%', pity: 50, color: '#ff00ff' },
  'roblox': { id: 'roblox', name: 'Roblox', rarity: 'SSR', dropRateStr: '1%', pity: 100, color: '#ff4444' },
  'minecraft2': { id: 'minecraft2', name: 'Minecraft', rarity: 'UR', dropRateStr: '0.5%', pity: 500, color: '#55ff55' },
  'glass': { id: 'glass', name: 'Liquid Glass', rarity: 'Legendary', dropRateStr: '0.1%', pity: 1000, color: '#00ffff' },
  'minecraft': { id: 'minecraft', name: 'Minecraft (Old)', rarity: 'Normal', dropRateStr: '0%', pity: 0, color: '#000' } // Bỏ qua
};

export const useGacha = () => {
  const { trackEvent } = useTracking();
  const [totalRolls, setTotalRolls] = useState<number>(0);
  const [unlockedThemes, setUnlockedThemes] = useState<ThemeType[]>(['memphis']);
  const [isInitialized, setIsInitialized] = useState(false);

  // Khôi phục dữ liệu từ LocalStorage
  useEffect(() => {
    const savedRolls = localStorage.getItem('gacha_totalRolls');
    const savedThemes = localStorage.getItem('gacha_unlockedThemes');
    
    if (savedRolls) setTotalRolls(parseInt(savedRolls, 10));
    if (savedThemes) {
      try {
        const parsed = JSON.parse(savedThemes);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setUnlockedThemes(parsed);
        }
      } catch (e) {
        console.error("Lỗi parse unlockedThemes", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Lưu dữ liệu mỗi khi thay đổi
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem('gacha_totalRolls', totalRolls.toString());
    localStorage.setItem('gacha_unlockedThemes', JSON.stringify(unlockedThemes));
  }, [totalRolls, unlockedThemes, isInitialized]);

  const roll = (multiplier: number = 1): { items: GachaItem[], isNew: boolean } => {
    const newTotal = totalRolls + multiplier;
    setTotalRolls(newTotal);
    trackEvent('chest_rolled', { multiplier, currentTotal: newTotal });

    let highestRarityItem: GachaItem = GACHA_POOL['memphis'];
    let gotNewItem = false;
    let newlyUnlocked: ThemeType[] = [];

    // Chạy logic roll `multiplier` lần (chỉ tính pity cho lần cao nhất hoặc random cho vui)
    // Để tối ưu, nếu multiplier lớn, ta kiểm tra xem có vượt mốc pity nào không
    
    // Logic gacha đơn giản (có thể thay bằng random weighted thực tế)
    // Ở đây ta ưu tiên logic Pity: Nếu newTotal vượt qua Pity, cấp luôn
    
    if (newTotal >= 1000 && !unlockedThemes.includes('glass')) {
      highestRarityItem = GACHA_POOL['glass'];
      newlyUnlocked.push('glass');
    } else if (newTotal >= 500 && !unlockedThemes.includes('minecraft2')) {
      highestRarityItem = GACHA_POOL['minecraft2'];
      newlyUnlocked.push('minecraft2');
    } else if (newTotal >= 100 && !unlockedThemes.includes('roblox')) {
      highestRarityItem = GACHA_POOL['roblox'];
      newlyUnlocked.push('roblox');
    } else if (newTotal >= 50 && !unlockedThemes.includes('pixel')) {
      highestRarityItem = GACHA_POOL['pixel'];
      newlyUnlocked.push('pixel');
    } else if (newTotal >= 20 && !unlockedThemes.includes('cyberpunk')) {
      highestRarityItem = GACHA_POOL['cyberpunk'];
      newlyUnlocked.push('cyberpunk');
    } else {
      // Nếu không trúng Pity, rớt random những cái đã có (hoặc hên rớt cái mới)
      // Giả lập random (vì chủ yếu game này farm pity)
      const rand = Math.random();
      if (rand < 0.001) highestRarityItem = GACHA_POOL['glass'];
      else if (rand < 0.005) highestRarityItem = GACHA_POOL['minecraft2'];
      else if (rand < 0.01) highestRarityItem = GACHA_POOL['roblox'];
      else if (rand < 0.02) highestRarityItem = GACHA_POOL['pixel'];
      else if (rand < 0.05) highestRarityItem = GACHA_POOL['cyberpunk'];
      else highestRarityItem = GACHA_POOL['memphis']; // default rác
      
      if (!unlockedThemes.includes(highestRarityItem.id) && !newlyUnlocked.includes(highestRarityItem.id)) {
        newlyUnlocked.push(highestRarityItem.id);
      }
    }

    if (newlyUnlocked.length > 0) {
      gotNewItem = true;
      const updatedThemes = [...new Set([...unlockedThemes, ...newlyUnlocked])];
      setUnlockedThemes(updatedThemes);
      newlyUnlocked.forEach(theme => {
        trackEvent('theme_unlocked', { theme, rolls_taken: newTotal });
      });
    }

    // Trả về mảng 1 item đại diện cho kết quả cao nhất (để làm animation)
    return { items: [highestRarityItem], isNew: gotNewItem };
  };

  return { totalRolls, unlockedThemes, roll, isInitialized };
};
