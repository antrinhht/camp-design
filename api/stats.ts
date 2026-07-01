import { redis } from './redis';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const uniqueVisitors = await redis.scard('unique_visitors') || 0;
    const deviceStats = await redis.hgetall('device_stats') || {};
    const totalRolls = await redis.get('total_rolls') || 0;
    const themeUnlocks = await redis.hgetall('theme_unlocks') || {};
    const totalTimeSpent = await redis.get('total_time_spent') || 0;

    return res.status(200).json({
      uniqueVisitors,
      deviceStats,
      totalRolls,
      themeUnlocks,
      totalTimeSpent
    });
  } catch (error: any) {
    console.error('Fetch Stats Error:', error);
    return res.status(500).json({ error: 'Failed to fetch stats', message: error.message || String(error) });
  }
}
