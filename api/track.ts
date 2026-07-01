import { kv } from '@vercel/kv';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, device, theme, seconds } = req.body || {};
    
    // Lấy thông tin thiết bị và IP (Vercel tự động cung cấp qua headers)
    const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown';

    if (action === 'session_start') {
      // SADD trả về 1 nếu IP mới, 0 nếu đã tồn tại
      const added = await kv.sadd('unique_visitors', ip);
      if (added === 1 && device) {
        await kv.hincrby('device_stats', device, 1);
      }
    } else if (action === 'roll') {
      await kv.incr('total_rolls');
      if (theme) {
        await kv.hincrby('theme_unlocks', theme, 1);
      }
    } else if (action === 'ping') {
      await kv.incrby('total_time_spent', seconds || 0);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Tracking Error:', error);
    return res.status(500).json({ error: 'Failed to track event' });
  }
}
