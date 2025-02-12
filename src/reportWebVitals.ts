import type { Metric } from 'web-vitals';

export const reportWebVitals = async (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const { onCLS, onLCP } = await import('web-vitals');
    
    onCLS(onPerfEntry);
    onLCP(onPerfEntry);
  }
};