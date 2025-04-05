import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const  Section = ({ id, setActiveSection, children }:any) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setActiveSection(id);
  }, [inView, id, setActiveSection]);

  return (
    <section ref={ref} id={id} className="min-h-screen">
      {children}
    </section>
  );
};