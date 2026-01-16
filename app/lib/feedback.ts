// app/lib/feedback.ts
export const feedback = {
  click: () => {
    if (typeof window === 'undefined') return;
    navigator.vibrate?.(10);
  },
  strong: () => {
    if (typeof window === 'undefined') return;
    navigator.vibrate?.(20);
  },
  success: () => {
    if (typeof window === 'undefined') return;
    navigator.vibrate?.([10, 40, 10]);
  },
};

export default feedback;
