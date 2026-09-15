import Link from 'next/link'; 
import { ArrowRight } from 'lucide-react';
import ScrollTransformation from '@/components/ScrollTransformation';
import FaqAccordion from '@/components/FaqAccordion';

export default function How() {
  return (
    <main>
      <div className="page" style={{ paddingBottom: 40 }}>
        <section className="page-intro" style={{ minHeight: 'auto', paddingBottom: 40 }}>
          <div>
            <div className="eyebrow">THE PROCESS</div>
            <h1>How It Works</h1>
          </div>
          <p>A straightforward process designed to make a complex interior project feel more understandable.</p>
        </section>
      </div>

      <ScrollTransformation beforeSrc="/assets/before.png" afterSrc="/assets/after.png" />

      <div className="page" style={{ paddingTop: 0 }}>
        <section className="black-cta" style={{ marginBottom: 70 }}>
          <div className="eyebrow gold">READY WHEN YOU ARE</div>
          <h2>Start with a conversation.</h2>
          <Link className="gold-btn" href="/contact">Talk to a Designer <ArrowRight size={15}/></Link>
        </section>

        <section className="faq-section" style={{ marginBottom: 70 }}>
          <h2>Questions you might have</h2>
          <FaqAccordion />
        </section>
      </div>
    </main>
  );
}
