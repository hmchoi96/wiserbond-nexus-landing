// Google Analytics 설정
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Analytics 이벤트 추적
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// 커스텀 이벤트 추적
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// gtag 함수가 로드되었는지 확인하는 헬퍼 함수
export const isGtagLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// 전역 gtag 타입 선언
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
