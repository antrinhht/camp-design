import { kv } from '@vercel/kv';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { eventName, properties } = req.body || {};
    
    // Lấy thông tin thiết bị và IP (Vercel tự động cung cấp qua headers)
    const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';
    const country = req.headers['x-vercel-ip-country'] || 'unknown';
    const city = req.headers['x-vercel-ip-city'] || 'unknown';

    const logEntry = {
      eventName,
      properties,
      ip,
      userAgent,
      country,
      city,
      time: new Date().toISOString()
    };

    // Đẩy log mới nhất lên đầu danh sách (List)
    await kv.lpush('tracking_logs', JSON.stringify(logEntry));
    // Chỉ giữ lại 1000 bản ghi mới nhất để tránh đầy bộ nhớ
    await kv.ltrim('tracking_logs', 0, 999);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Tracking Error:', error);
    return res.status(500).json({ error: 'Failed to track event' });
  }
}
