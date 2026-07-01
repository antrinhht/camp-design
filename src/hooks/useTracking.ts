import { useEffect } from 'react';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

// Hook theo dõi thao tác người dùng (Gửi tổng hợp lên Vercel Serverless Function -> Upstash Redis)
export const useTracking = () => {
  useEffect(() => {
    const sendEvent = async (payload: any) => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (e) {
        console.error('Failed to send tracking event', e);
      }
    };

    // 1. Theo dõi lượt truy cập unique và loại thiết bị
    const hasStarted = sessionStorage.getItem('session_start');
    if (!hasStarted) {
      sessionStorage.setItem('session_start', 'true');
      sendEvent({ action: 'session_start', device: getDeviceType() });
    }

    // 2. Theo dõi thời gian trên trang (Ping mỗi 10 giây)
    const pingInterval = setInterval(() => {
      sendEvent({ action: 'ping', seconds: 10 });
    }, 10000);

    return () => clearInterval(pingInterval);
  }, []);

  // 3. Theo dõi lượt quay thẻ bài
  const trackRoll = async (themeRolled: string) => {
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'roll',
          theme: themeRolled
        })
      });
    } catch (e) {
      console.error('Failed to track roll', e);
    }
  };

  return { trackRoll };
};
