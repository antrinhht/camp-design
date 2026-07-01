import { useState, useEffect, useRef } from 'react'
import * as htmlToImage from 'html-to-image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThoiGianPage } from './components/ThoiGianPage'
import { LichTrinhPage } from './components/LichTrinhPage'
import { HanhTrangPage } from './components/HanhTrangPage'
import { NoiQuyPage } from './components/NoiQuyPage'
import { GachaDashboard } from './components/GachaDashboard'
import type { ThemeType } from './components/ThemeSelector'
import { NavigationBar } from './components/NavigationBar'
import { GACHA_POOL } from './hooks/useGacha'
import { AdminDashboard } from './components/AdminDashboard'
import { useTracking } from './hooks/useTracking'

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 700 : -700,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 700 : -700,
    opacity: 0
  })
};

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [theme, setTheme] = useState<ThemeType>('memphis');
  const [isCapturing, setIsCapturing] = useState(false);
  const [scale, setScale] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (window.location.search.includes('admin=admin123')) {
      setIsAdmin(true);
    }
  }, []);

  const pages = [
    { name: 'Thời Gian', component: <ThoiGianPage theme={theme} /> },
    { name: 'Lịch Trình', component: <LichTrinhPage theme={theme} /> },
    { name: 'Hành Trang', component: <HanhTrangPage theme={theme} /> },
    { name: 'Nội Quy', component: <NoiQuyPage theme={theme} /> }
  ];

  // Tính toán tỷ lệ scale để CV Card vừa với màn hình khi bật Modal
  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const availableWidth = windowWidth - 32; 
      const newScale = Math.min(1, availableWidth / 700);
      setScale(newScale);
    };

    calculateScale();
    if (showCardModal) calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [showCardModal]);

  const handlePageChange = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  const handleDragEnd = (_e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      // vuốt sang trái -> xem trang tiếp theo
      setDirection(1);
      setCurrentPage(prev => (prev + 1) % pages.length);
    } else if (swipe > 50) {
      // vuốt sang phải -> xem trang trước đó
      setDirection(-1);
      setCurrentPage(prev => (prev - 1 + pages.length) % pages.length);
    }
  };

  const handleCapture = async () => {
    setIsCapturing(true);
    // Timeout để DOM cập nhật trạng thái
    setTimeout(async () => {
      const element = document.getElementById('screenshot-area');
      const container = containerRef.current;
      if (!element || !container) {
        setIsCapturing(false);
        return;
      }
      
      try {
        const originalTransform = element.style.transform;
        const originalTransition = element.style.transition;
        const originalPosition = element.style.position;
        const originalTop = element.style.top;
        const originalLeft = element.style.left;
        const originalMargin = element.style.margin;
        const originalZIndex = element.style.zIndex;

        element.style.transition = 'none';
        element.style.transform = 'scale(1)';
        element.style.position = 'fixed';
        element.style.top = '0px';
        element.style.left = '0px';
        element.style.margin = '0px';
        element.style.zIndex = '99999';

        // Đợi DOM áp dụng layout mới
        await new Promise(r => setTimeout(r, 100));

        const dataUrl = await htmlToImage.toPng(element, { 
          pixelRatio: 2, 
          backgroundColor: '#000000',
          width: 700,
          height: 1110
        });
        
        // Trả lại DOM như cũ
        element.style.transform = originalTransform;
        element.style.transition = originalTransition;
        element.style.position = originalPosition;
        element.style.top = originalTop;
        element.style.left = originalLeft;
        element.style.margin = originalMargin;
        element.style.zIndex = originalZIndex;

        if (dataUrl) {
          try {
            const link = document.createElement('a');
            link.download = `Gacha-Card-${currentThemeData.name}.png`;
            link.href = dataUrl;
            link.click();
            alert('✅ Đã tải thẻ bài về máy thành công!');
          } catch (e) {
             console.error(e);
             alert('❌ Có lỗi khi lưu file.');
          }
        }
      } catch (err) {
        console.error(err);
        alert('❌ Có lỗi xảy ra khi chụp ảnh.');
      } finally {
        setIsCapturing(false);
      }
    }, 500);
  };

  const handleRollAction = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const currentThemeData = GACHA_POOL[theme];

  // Khởi tạo tracking
  const { trackRoll } = useTracking(isAdmin);

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className={`fixed inset-0 bg-gray-950 flex flex-col lg:flex-row lg:items-start lg:justify-center p-0 lg:py-12 lg:px-8 lg:gap-12 overflow-y-auto overflow-x-hidden ${isShaking ? 'animate-shake' : ''}`}>
      
      {/* Loading Overlay khi đang chụp ảnh */}
      {isCapturing && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex flex-col items-center justify-center text-white">
          <div className="text-4xl animate-bounce mb-4">📸</div>
          <h2 className="text-2xl font-bold font-title text-[#FFD335]">Minting your Card...</h2>
          <p className="mt-2 text-gray-300">Đang ép thẻ bài chất lượng cao...</p>
        </div>
      )}

      {/* Background Effect for immersive theme change */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out opacity-40 z-0" 
        style={{ background: `radial-gradient(circle at 50% 0%, ${currentThemeData.color} 0%, transparent 70%)` }}
      ></div>
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out opacity-10 z-0" 
        style={{ background: `radial-gradient(circle at 50% 100%, ${currentThemeData.color} 0%, transparent 80%)` }}
      ></div>

      {/* Cột trái / Màn hình chính Mobile: Bảng điều khiển Gacha */}
      <div className="w-full h-full lg:w-[450px] lg:h-auto lg:sticky lg:top-12 flex-shrink-0 flex justify-center z-10">
        <GachaDashboard 
          theme={theme} 
          setTheme={setTheme} 
          onRollAction={handleRollAction} 
          onViewCard={() => setShowCardModal(true)}
          trackRoll={trackRoll}
        />
      </div>

      {/* Cột phải (PC) / Modal (Mobile): Khu vực Thẻ bài / CV */}
      <div className={`
        ${showCardModal ? 'fixed inset-0 z-50 flex opacity-100 pointer-events-auto bg-black/90 backdrop-blur-md' : 'fixed inset-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:relative lg:inset-auto lg:bg-transparent lg:backdrop-blur-none'}
        flex-col items-center justify-start overflow-y-auto lg:overflow-visible transition-all duration-300 w-full lg:w-auto
      `}>
        
        {/* Modal Header (Chỉ hiện trên Mobile) */}
        <div className="w-full flex lg:hidden justify-between items-center p-4 sticky top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
           <button 
             onClick={() => setShowCardModal(false)}
             className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold backdrop-blur-md"
           >
             ✕ ĐÓNG
           </button>
           <button 
             onClick={handleCapture}
             className="px-6 py-2 bg-[#FFD335] hover:bg-yellow-400 rounded-full text-black font-black shadow-[0_0_15px_rgba(255,211,53,0.5)]"
           >
             📸 CHỤP MÀN HÌNH
           </button>
        </div>

        {/* Nội dung Thẻ bài */}
        <div className="flex flex-col items-center gap-4 z-10 w-full relative p-4 lg:p-0 pb-20 lg:pb-0">
          <NavigationBar 
            pages={pages} 
            currentPage={currentPage} 
            setCurrentPage={handlePageChange}
          />
          
          <div 
            ref={containerRef}
            style={{ height: `${(990 + (isCapturing ? 120 : 0)) * scale}px`, width: `${700 * scale}px` }}
            className="relative flex justify-center transition-all duration-300 origin-top mt-4 lg:mt-0"
          >
            <div 
              id="screenshot-area" 
              className="bg-gray-900 origin-top absolute flex flex-col items-center rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-gray-800"
              style={{ 
                transform: `scale(${scale})`, 
                boxShadow: isCapturing ? 'none' : `0 0 30px ${currentThemeData.color}40`,
                borderColor: isCapturing ? 'transparent' : currentThemeData.color
              }}
            >
              {/* Header cho Thẻ bài (Chỉ hiện khi tải ảnh) */}
              {isCapturing && (
                <div className="w-[700px] h-[120px] bg-black text-white flex flex-col items-center justify-center border-b-4" style={{ borderColor: currentThemeData.color }}>
                   <div className="text-3xl font-black tracking-widest uppercase" style={{ color: currentThemeData.color }}>
                     [{currentThemeData.rarity}]
                   </div>
                   <div className="text-xl text-gray-400 mt-2 font-bold tracking-wider">
                     DROP RATE: {currentThemeData.dropRateStr}
                   </div>
                </div>
              )}
              
              <div className="w-[700px] h-[990px] relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  >
                    {pages[currentPage].component}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Nút chụp màn hình cho PC (Dưới cùng của Card) */}
          <button 
             onClick={handleCapture}
             className="hidden lg:flex mt-4 px-8 py-3 bg-[#FFD335] hover:bg-yellow-400 rounded-xl text-black font-black shadow-[0_0_20px_rgba(255,211,53,0.3)] transition-all active:scale-95 items-center gap-2"
           >
             📸 CHỤP MÀN HÌNH & TẢI VỀ
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

