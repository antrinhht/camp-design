import { useState, useEffect } from 'react';

export const AdminDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!stats && loading) return <div className="min-h-screen bg-gray-950 text-white p-8 flex justify-center items-center">Đang tải dữ liệu...</div>;
  if (!stats) return <div className="min-h-screen bg-gray-950 text-white p-8 flex justify-center items-center text-red-400">Lỗi không tải được dữ liệu</div>;

  const totalTimeInMinutes = Math.floor((stats.totalTimeSpent || 0) / 60);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 border-b border-gray-800 pb-4 gap-4">
          <h1 className="text-3xl font-bold text-[#FFD335] flex items-center gap-3">
            📊 Tổng Quan Thống Kê
            {loading && <span className="text-sm bg-gray-800 text-gray-400 px-2 py-1 rounded animate-pulse">Đang cập nhật...</span>}
          </h1>
          <a href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors whitespace-nowrap">
            ⬅ Trở về trang chính
          </a>
        </div>

        {/* 4 Chỉ số chính */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 lg:p-6 shadow-xl">
            <div className="text-gray-400 text-sm mb-1 font-bold">Lượt truy cập (Unique)</div>
            <div className="text-3xl lg:text-4xl font-black text-blue-400">{stats.uniqueVisitors || 0}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 lg:p-6 shadow-xl">
            <div className="text-gray-400 text-sm mb-1 font-bold">Tổng lượt Roll</div>
            <div className="text-3xl lg:text-4xl font-black text-green-400">{stats.totalRolls || 0}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 lg:p-6 shadow-xl">
            <div className="text-gray-400 text-sm mb-1 font-bold">Tổng thời gian (Phút)</div>
            <div className="text-3xl lg:text-4xl font-black text-purple-400">{totalTimeInMinutes}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 lg:p-6 shadow-xl">
            <div className="text-gray-400 text-sm mb-1 font-bold">Thiết bị</div>
            <div className="flex gap-4 mt-2">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-200">{stats.deviceStats?.Mobile || 0}</div>
                <div className="text-[10px] text-gray-500 uppercase">Mobile</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-200">{stats.deviceStats?.Desktop || 0}</div>
                <div className="text-[10px] text-gray-500 uppercase">Desktop</div>
              </div>
            </div>
          </div>
        </div>

        {/* Thống kê tiến trình Unlock Theme */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-gray-300 border-b border-gray-800 pb-2">Tiến trình Unlock Skin</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(stats.themeUnlocks || {}).sort((a: any, b: any) => b[1] - a[1]).map(([theme, count]: any) => (
              <div key={theme} className="bg-gray-950 p-4 rounded-lg border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-300 capitalize">{theme}</div>
                  <div className="text-xs text-gray-500 mt-1">Đã rơi ra</div>
                </div>
                <div className="text-2xl font-black text-[#FFD335]">{count}</div>
              </div>
            ))}
            {Object.keys(stats.themeUnlocks || {}).length === 0 && (
              <div className="col-span-full text-gray-500 text-center py-8">Chưa có ai roll trúng skin nào.</div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600">
          Dữ liệu được cập nhật tự động mỗi 10 giây thông qua Vercel Upstash KV.
        </div>
      </div>
    </div>
  );
};

