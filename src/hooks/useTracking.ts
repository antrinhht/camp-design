import { useEffect } from 'react';

// Mock Tracking Hook - Có thể thay thế bằng PostHog hoặc GA4 sau này
export const useTracking = () => {
  useEffect(() => {
    // Khởi tạo tracking session
    const startTime = localStorage.getItem('session_start') || Date.now().toString();
    if (!localStorage.getItem('session_start')) {
      localStorage.setItem('session_start', startTime);
      trackEvent('session_start', { timestamp: startTime });
    }
  }, []);

  const trackEvent = (eventName: string, properties?: any) => {
    // In môi trường thật, ở đây sẽ gọi posthog.capture() hoặc gtag()
    console.log(`[TRACKING] Event: ${eventName}`, properties);
    
    // Lưu lịch sử vào local storage cho mục đích debug (tùy chọn)
    const logs = JSON.parse(localStorage.getItem('tracking_logs') || '[]');
    logs.push({ eventName, properties, time: new Date().toISOString() });
    // Giới hạn log để không tràn bộ nhớ
    if (logs.length > 100) logs.shift();
    localStorage.setItem('tracking_logs', JSON.stringify(logs));
  };

  return { trackEvent };
};
