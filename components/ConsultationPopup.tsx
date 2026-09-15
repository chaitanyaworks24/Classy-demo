"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import { usePathname } from 'next/navigation';

export const POPUP_CONFIG = {
  initialDelay: 15000,
  subsequentPageDelay: 15000,
  suppressedRoutes: ['/estimate', '/studio', '/showcase'],
  image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
};

export default function ConsultationPopup() {
  const pathname = usePathname();
  
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const hasSubmittedGlobal = useRef(false);
  const hasClosedCurrentPage = useRef(false);
  const isFirstVisit = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Close popup handler
  const handleClose = () => {
    setIsOpen(false);
    hasClosedCurrentPage.current = true;
  };

  // Route change and timer logic
  useEffect(() => {
    // 1. Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // 2. If submitted, do nothing globally
    if (hasSubmittedGlobal.current) return;

    // 3. Reset closed state for the new page
    hasClosedCurrentPage.current = false;

    // 4. Check for suppressed routes
    const isSuppressed = pathname && POPUP_CONFIG.suppressedRoutes.some(route => pathname.startsWith(route));
    if (isSuppressed) return;

    // 5. Start appropriate timer
    const delay = isFirstVisit.current ? POPUP_CONFIG.initialDelay : POPUP_CONFIG.subsequentPageDelay;
    isFirstVisit.current = false;

    timerRef.current = setTimeout(() => {
      if (!hasClosedCurrentPage.current && !hasSubmittedGlobal.current) {
        setIsOpen(prev => {
          if (!prev) return true;
          return prev;
        });
      }
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.formType = 'consultation_popup';
    payload.source = 'website';
    payload.timestamp = new Date().toISOString();

    const url = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;
    if (!url) {
      // Simulate success for local testing if webhook is not configured
      setTimeout(() => {
        setStatus('success');
        hasSubmittedGlobal.current = true;
      }, 500);
      return;
    }

    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!r.ok) throw new Error();
      
      setStatus('success');
      hasSubmittedGlobal.current = true;
    } catch {
      setStatus('error');
      setErrorMessage('We could not send the form right now. Please try again or use WhatsApp.');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="consultation-backdrop" 
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      <div className="consultation-modal">
        <div className="consultation-image">
          <img src={POPUP_CONFIG.image} alt="Interior Consultation" />
        </div>
        <div className="consultation-content">
          <button className="consultation-close" onClick={handleClose} aria-label="Close modal">×</button>
          
          {status === 'success' ? (
            <div className="consultation-success">
              <h2 id="consultation-title">You're on the list.</h2>
              <p>We’ll get in touch to arrange your free consultation and site visit.</p>
              <button className="gold-btn mt-xl" onClick={handleClose}>Close</button>
            </div>
          ) : (
            <>
              <h2 id="consultation-title">Book a Free Site Visit</h2>
              <p className="consultation-desc">Let’s understand your space, requirements and ideas — and help you plan your interiors with clarity.</p>
              
              <form className="consultation-form" onSubmit={handleSubmit}>
                <div className="calc-input-group">
                  <label>Your Name</label>
                  <input name="name" required placeholder="Enter your name" />
                </div>
                <div className="calc-input-group mt-md">
                  <label>Phone Number</label>
                  <input name="phone" required inputMode="tel" placeholder="Enter phone number" />
                </div>
                <label className="whatsapp-optin mt-md">
                  <input type="checkbox" name="whatsappOptIn" defaultChecked />
                  <span>Reach me on WhatsApp</span>
                </label>

                {status === 'error' && <p className="form-status error">{errorMessage}</p>}

                <div className="consultation-actions mt-xl">
                  <button type="submit" className="gold-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Booking...' : 'Book My Free Site Visit'}
                  </button>
                  <button type="button" className="outline-btn" onClick={handleClose}>
                    Maybe Later
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
