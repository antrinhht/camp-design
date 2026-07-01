import React, { useState, useEffect } from 'react';

export const AdminDashboard = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    // Trong môi trường thật, ở đây sẽ gọi API lấy dữ liệu từ DB (VD: fetch('/api/logs'))
    // Hiện tại lấy từ localStorage demo
    const localLogs = JSON.parse(localStorage.getItem('tracking_logs') || '[]');
    setLogs(localLogs.reverse());
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

        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6 mb-8 text-blue-200">
          <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
             ⚠️ LƯU Ý QUAN TRỌNG
          </h2>
          <p className="mb-2">
            Vì hệ thống hiện tại là trang web tĩnh (Static Web) và <strong>chưa có Backend / Cơ sở dữ liệu (Database)</strong>, 
            nên các sự kiện tracking (roll gacha, xem thẻ bài) hiện chỉ đang được lưu nháp tại Local Storage của <strong>trình duyệt của bạn</strong>.
          </p>
          <p>
            Để thu thập log của <strong>tất cả người dùng</strong>, bạn cần cấp cho hệ thống một Database (VD: Firebase, Supabase, Google Sheets, hoặc Vercel KV). 
            Hãy nhắn cho AI biết bạn muốn dùng nền tảng nào nhé!
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
          <div className="p-4 bg-gray-800/50 border-b border-gray-800 font-bold flex justify-between">
            <span>Lịch sử sự kiện ({logs.length} bản ghi)</span>
            <button 
              onClick={() => { localStorage.removeItem('tracking_logs'); setLogs([]); }}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Xóa log (Local)
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-800/20 text-gray-400 text-sm">
                <tr>
                  <th className="p-4">Thời gian</th>
                  <th className="p-4">Sự kiện (Event)</th>
                  <th className="p-4">Chi tiết (Properties)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {logs.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-gray-500">
                      Chưa có dữ liệu log nào
                    </td>
                  </tr>
                ) : logs.map((log, index) => (
                  <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4 text-gray-400 text-sm whitespace-nowrap">
                      {new Date(log.time).toLocaleString('vi-VN')}
                    </td>
                    <td className="p-4 font-bold text-blue-400">
                      {log.eventName}
                    </td>
                    <td className="p-4 text-sm font-mono text-gray-300">
                      <pre className="whitespace-pre-wrap max-w-md">
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
