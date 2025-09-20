// 이벤트 추적 유틸리티
// GA4, PostHog 등에 연결 가능
import { event as gtagEvent, isGtagLoaded } from './gtag';

export type AnalyticsEvent = {
  event: string;
  properties?: Record<string, unknown>;
  userId?: string;
  timestamp?: number;
};

// 이벤트 추적 함수
export const trackEvent = (event: AnalyticsEvent) => {
  // 개발 환경에서는 콘솔에 로그
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
    return;
  }

  // Google Analytics 4에 전송
  if (isGtagLoaded()) {
    gtagEvent({
      action: event.event,
      category: 'engagement',
      label: event.properties?.source as string,
      value: event.properties?.value as number,
    });
  }

  // PostHog (선택사항)
  if (typeof window !== 'undefined' && (window as unknown as { posthog?: { capture: (event: string, properties?: Record<string, unknown>) => void } }).posthog) {
    (window as unknown as { posthog: { capture: (event: string, properties?: Record<string, unknown>) => void } }).posthog.capture(event.event, event.properties);
  }
};

// 주요 전환 이벤트들
export const analyticsEvents = {
  // 리드 제출
  leadSubmitted: (source: string, email: string) => 
    trackEvent({
      event: 'lead_submitted',
      properties: { source, email }
    }),

  // 데모 요청
  demoRequested: (email: string, company?: string) =>
    trackEvent({
      event: 'demo_requested',
      properties: { email, company }
    }),

  // 웨이트리스트 가입
  waitlistJoined: (email: string) =>
    trackEvent({
      event: 'waitlist_joined',
      properties: { email }
    }),

  // 페이지 뷰
  pageView: (path: string, title: string) =>
    trackEvent({
      event: 'page_view',
      properties: { path, title }
    }),

  // CTA 클릭
  ctaClick: (ctaText: string, location: string) =>
    trackEvent({
      event: 'cta_click',
      properties: { cta_text: ctaText, location }
    }),

  // 프라이싱 페이지 방문
  pricingViewed: () =>
    trackEvent({
      event: 'pricing_viewed',
      properties: {}
    }),

  // 툴 페이지 방문
  toolViewed: (toolName: string) =>
    trackEvent({
      event: 'tool_viewed',
      properties: { tool_name: toolName }
    }),
};

// 페이지 뷰 추적을 위한 훅
export const usePageTracking = () => {
  if (typeof window === 'undefined') return;

  const trackPageView = (path: string, title: string) => {
    analyticsEvents.pageView(path, title);
  };

  return { trackPageView };
};
