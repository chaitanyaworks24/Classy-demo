"use client";

import { useState } from 'react';
import { homeownerFaqs } from '@/data/company';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {homeownerFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleOpen(index)}
              aria-expanded={isOpen}
            >
              <h3>{faq.question}</h3>
              <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div 
              className="faq-answer-wrapper" 
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
