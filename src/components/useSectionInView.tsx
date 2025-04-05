import { useEffect, useRef } from 'react';

export const useInViewSection = (
  sectionId: string,
  setActiveSection: (id: string) => void
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // Check if this section is near the top (not just visible at bottom)
          const top = entry.boundingClientRect.top;
          const bottom = entry.boundingClientRect.bottom;
          const viewportHeight = window.innerHeight;

          const isEnteringFromTop = top >= 0 && top <= viewportHeight / 2;
          const isEnteringFromBottom = bottom >= viewportHeight / 2;

          if (isEnteringFromTop || isEnteringFromBottom) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: 0, // Trigger as soon as it starts entering
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [sectionId, setActiveSection]);

  return ref;
};