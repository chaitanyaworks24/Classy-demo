"use client";

import { useRef, useEffect } from 'react';

const steps = [
  ['01', 'Consultation', 'We start with your home, routines, priorities and aspirations.'],
  ['02', 'Understanding Requirements', 'We translate the brief into a clear spatial and visual direction.'],
  ['03', 'Design', 'Developing the concepts into detailed, workable plans.'],
  ['04', 'Materials / Finishes', 'Materials, details, scope and investment are refined before execution.'],
  ['05', 'Execution', 'The design moves from drawings and decisions into the built space.'],
  ['06', 'Handover', 'We bring the final details together so the space feels complete.']
];

export default function ScrollTransformation({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      const section = sectionRef.current;
      const afterImage = afterImageRef.current;
      if (!section || !afterImage) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = rect.height - windowHeight;
      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(progress, 1));
      
      const percentage = progress * 100;
      
      afterImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      rafId.current = null;
    };

    const handleScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="scroll-transform-section" ref={sectionRef}>
      <div className="scroll-transform-sticky">
        <div className="scroll-image-before">
          <img src={beforeSrc} alt="Before state" />
        </div>
        <div className="scroll-image-after" ref={afterImageRef} style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}>
          <img src={afterSrc} alt="After state" />
        </div>
        {/* Dark gradient to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', zIndex: 1 }}></div>
      </div>

      <div className="scroll-transform-content">
        {steps.map((s) => (
          <div className="scroll-step" key={s[0]}>
            <div className="scroll-step-number">{s[0]}</div>
            <h2>{s[1]}</h2>
            <p>{s[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
