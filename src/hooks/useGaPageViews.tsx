// src/hooks/useGaPageViews.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

export default function UseGaPageViews() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageView(window.location.origin + pathname + search);
  }, [pathname, search]);

  return null;
}
