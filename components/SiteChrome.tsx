'use client';

import { usePathname } from 'next/navigation';
import { Header, Footer, WhatsApp, MobileBottom } from '@/components/site';
import ConsultationPopup from '@/components/ConsultationPopup';
import React from 'react';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');
  const isShowcase = pathname?.startsWith('/showcase');
  const isExcluded = isStudio || isShowcase;
  const isContact = pathname?.startsWith('/contact');
  
  if (isExcluded) {
    return <>{children}</>;
  }
  
  return (
    <div className="public-site-layout">
      <Header />
      {children}
      <Footer />
      <WhatsApp />
      {!isContact && <ConsultationPopup />}
      <MobileBottom />
    </div>
  );
}
