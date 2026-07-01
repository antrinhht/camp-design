import { useState, useEffect } from 'react';

export const AdminDashboard = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/logs');
        const data = await res.json();
        setLogs(data);
      } catch (err) {
        console.error('Failed to fetch logs', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLogs();
    
    // Auto refresh every 10 seconds
    const interval = setInterval(fetchLogs, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-[#FFD335]">Admin Tracking Dashboard</h1>
          <a href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
            ⬅ Trở về trang chính
          </a>
        </div>

        <div className="bg-green-900/20 border border-green-800 rounded-xl p-6 mb-8 text-green-200 flex items-start gap-4">
          <div className="text-3xl">🟢</div>
          <div>
            <h2 className="font-bold text-xl mb-1">Kết nối Vercel KV (Upstash) Thành Công!</h2>
            <p className="text-sm">
              Hệ thống đã tự động đẩy toàn bộ sự kiện Tracking của người dùng thật lên DataBase thông qua Serverless Functions. 
              Giao diện này sẽ tự động tải lại 10 giây/lần để hiện Log mới nhất.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
          <div className="p-4 bg-gray-800/50 border-b border-gray-800 font-bold flex justify-between items-center">
            <span>Lịch sử sự kiện ({logs.length} bản ghi mới nhất)</span>
            {loading && <span className="text-sm text-gray-400">Đang tải...</span>}
          </div>
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto relative">
            <table className="w-full text-left">
              <thead className="bg-gray-800/80 text-gray-400 text-sm sticky top-0 backdrop-blur-md">
                <tr>
                  <th className="p-4">Thời gian</th>
                  <th className="p-4">Thiết bị & Vị trí</th>
                  <th className="p-4">Sự kiện (Event)</th>
                  <th className="p-4">Chi tiết (Properties)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {logs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      Chưa có dữ liệu log nào
                    </td>
                  </tr>
                ) : logs.map((log, index) => (
                  <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4 text-gray-400 text-sm whitespace-nowrap align-top">
                      {new Date(log.time).toLocaleString('vi-VN')}
                    </td>
                    <td className="p-4 align-top">
                      <div className="text-xs text-gray-400 mb-1 max-w-[150px] truncate" title={log.userAgent}>
                        {log.userAgent}
                      </div>
                      <div className="text-xs text-blue-400">
                        {log.ip} • {log.city !== 'unknown' ? `${log.city}, ` : ''}{log.country}
                      </div>
                    </td>
                    <td className="p-4 font-bold text-blue-400 align-top">
                      {log.eventName}
                    </td>
                    <td className="p-4 text-sm font-mono text-gray-300 align-top">
                      <pre className="whitespace-pre-wrap max-w-[300px]">
                        {JSON.stringify(log.properties, null, 2)}
                      </pre>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

