import { useEffect } from 'react';

// Hook theo dõi thao tác người dùng (Gửi thẳng lên Vercel Serverless Function -> Upstash Redis)
export const useTracking = () => {
  useEffect(() => {
    // Khởi tạo tracking session
    const startTime = localStorage.getItem('session_start') || Date.now().toString();
    if (!localStorage.getItem('session_start')) {
      localStorage.setItem('session_start', startTime);
      trackEvent('session_start', { timestamp: startTime });
    }
  }, []);

  const trackEvent = async (eventName: string, properties?: any) => {
    console.log(`[TRACKING] Event: ${eventName}`, properties);
    
    // Gửi log về Backend API (Vercel Serverless Function)
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventName,
          properties
        })
      });
    } catch (e) {
      console.error('Failed to send tracking event', e);
    }
  };

  return { trackEvent };
};
