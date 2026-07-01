

interface PageItem {
  name: string;
}

interface NavigationBarProps {
  pages: PageItem[];
  currentPage: number;
  setCurrentPage: (index: number) => void;
}

export const NavigationBar = ({ pages, currentPage, setCurrentPage }: NavigationBarProps) => {
  const getPosition = (index: number) => {
    const diff = index - currentPage;
    if (diff === 0) return 0; // center
    if (diff === 1 || diff === -3) return 1; // right
    if (diff === -1 || diff === 3) return -1; // left
    return 2; // hidden
  };

  // Vuốt để chuyển tab
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDist = touchEndX - touchStartX;
    if (swipeDist > 50) {
      // Swipe right -> Prev
      setCurrentPage((currentPage - 1 + pages.length) % pages.length);
    } else if (swipeDist < -50) {
      // Swipe left -> Next
      setCurrentPage((currentPage + 1) % pages.length);
    }
  };

  return (
    <div className="mb-4 lg:mb-8 w-full print:hidden z-50 relative px-4 lg:px-0">
      <div 
        className="relative w-full max-w-[400px] h-16 mx-auto flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {pages.map((page, index) => {
          const pos = getPosition(index);
          let transformStr = '';
          let opacityStr = 'opacity-0 pointer-events-none';
          let zIndexStr = 'z-0';

          if (pos === 0) {
            transformStr = 'translateX(0) scale(1.1)';
            opacityStr = 'opacity-100';
            zIndexStr = 'z-20';
          } else if (pos === -1) {
            transformStr = 'translateX(-95%) scale(0.9)';
            opacityStr = 'opacity-50 hover:opacity-80';
            zIndexStr = 'z-10 cursor-pointer';
          } else if (pos === 1) {
            transformStr = 'translateX(95%) scale(0.9)';
            opacityStr = 'opacity-50 hover:opacity-80';
            zIndexStr = 'z-10 cursor-pointer';
          } else {
            transformStr = 'translateX(0) scale(0)';
          }

          return (
            <button
              key={index}
              onClick={() => { if (pos !== 0) setCurrentPage(index) }}
              className={`absolute px-6 py-2 rounded-xl font-bold border-2 transition-all duration-500 ease-out whitespace-nowrap ${opacityStr} ${zIndexStr} ${
                pos === 0 ? 'bg-camp-yellow border-camp-textdark text-camp-textdark shadow-lg' : 'bg-white border-gray-300 text-gray-500'
              }`}
              style={{ transform: transformStr }}
            >
              {page.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
