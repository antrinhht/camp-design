import { kv } from '@vercel/kv';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Lấy danh sách tối đa 1000 log
    const logs = await kv.lrange('tracking_logs', 0, 999);
    
    // Đôi khi dữ liệu được lấy ra dưới dạng chuỗi JSON, ta cần parse lại nếu Upstash chưa parse
    const parsedLogs = logs.map(log => typeof log === 'string' ? JSON.parse(log) : log);
    
    return res.status(200).json(parsedLogs);
  } catch (error) {
    console.error('Fetch Logs Error:', error);
    return res.status(500).json({ error: 'Failed to fetch logs' });
  }
}
