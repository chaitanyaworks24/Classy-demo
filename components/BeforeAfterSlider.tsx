"use client";

import { useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSlider = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;
      
      if (afterImageRef.current && handleRef.current) {
        afterImageRef.current.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
        handleRef.current.style.left = `${percentage}%`;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      updateSlider(e.clientX);
      container.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      updateSlider(e.clientX);
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDragging.current = false;
      container.releasePointerCapture(e.pointerId);
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container" ref={containerRef}>
        <div className="slider-image-before">
          <img src={beforeSrc} alt="Before interior" />
          <span className="slider-label label-before">BEFORE</span>
        </div>
        
        <div className="slider-image-after" ref={afterImageRef} style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}>
          <img src={afterSrc} alt="After interior" />
          <span className="slider-label label-after">AFTER</span>
        </div>
        
        <div className="slider-handle" ref={handleRef} style={{ left: '50%' }}>
          <div className="handle-line"></div>
          <div className="handle-button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
              <path d="M9 18l6-6-6-6" style={{transform: 'translateX(6px)'}} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
