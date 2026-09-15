import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ConversionCardProps {
  title?: string;
  text?: string;
  ctaText?: string;
  href?: string;
  style?: React.CSSProperties;
}

export default function ConversionCard({
  title = "YOUR HOME CAN BE HERE",
  text = "Tell us what you're planning and let's create something that feels like yours.",
  ctaText = "Talk to a Designer",
  href = "/contact",
  style
}: ConversionCardProps) {
  return (
    <div 
      className="conversion-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--ivory)',
        border: '1px solid var(--gold)',
        padding: '40px 20px',
        height: '100%',
        minHeight: '400px',
        width: '100%',
        ...style
      }}
    >
      <div 
        style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '.15em',
          color: 'var(--gold)',
          marginBottom: '16px',
          fontWeight: 600
        }}
      >
        {title}
      </div>
      <h3 
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '28px',
          fontWeight: 500,
          margin: '0 0 24px',
          lineHeight: 1.3,
          maxWidth: '80%'
        }}
      >
        {text}
      </h3>
      <Link 
        href={href} 
        className="outline-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          borderColor: 'var(--charcoal)',
          color: 'var(--charcoal)',
          padding: '12px 24px'
        }}
      >
        {ctaText} <ArrowRight size={14} />
      </Link>
    </div>
  );
}
