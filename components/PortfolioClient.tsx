'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const ROOM_CATEGORIES = [
  'All', 'Kitchen', 'Bedrooms', 'Living Room', 'Crockery Unit', 
  'Kids Room', 'Pooja Room', 'Foyer', 'TV Unit', 'Wardrobes'
];

const BUDGET_RANGES = [
  { label: 'All Budgets', value: 'All' },
  { label: 'Under ₹10L', min: 0, max: 1000000 },
  { label: '₹10–15L', min: 1000000, max: 1500000 },
  { label: '₹15–25L', min: 1500000, max: 2500000 },
  { label: '₹25L+', min: 2500000, max: Infinity }
];

export default function PortfolioClient() {
  const [room, setRoom] = useState('All');
  const [homeType, setHomeType] = useState('All');
  const [budget, setBudget] = useState('All');
  const [style, setStyle] = useState('All');

  // Filter list
  const list = useMemo(() => {
    return projects.filter(p => {
      if (room !== 'All' && !p.roomTypes.includes(room)) return false;
      if (homeType !== 'All' && p.homeType !== homeType) return false;
      if (style !== 'All' && p.style !== style) return false;
      
      if (budget !== 'All') {
        const range = BUDGET_RANGES.find(r => r.label === budget);
        if (range) {
          // Check if project overlaps with budget range
          if (p.budgetMin > range.max! || p.budgetMax < range.min!) {
            return false;
          }
        }
      }
      return true;
    });
  }, [room, homeType, budget, style]);

  // Derived options based on current room selection
  const homeTypes = ['All', ...new Set(projects.filter(p => room === 'All' || p.roomTypes.includes(room)).map(p => p.homeType))];
  const styles = ['All', ...new Set(projects.filter(p => room === 'All' || p.roomTypes.includes(room)).map(p => p.style))];

  return (
    <div>
      <div className="portfolio-toolbar">
        <div className="tabs" style={{ flexWrap: 'wrap', marginBottom: '20px' }}>
          {ROOM_CATEGORIES.map(x => (
            <button 
              className={room === x ? 'active' : ''} 
              onClick={() => { setRoom(x); setHomeType('All'); setBudget('All'); setStyle('All'); }} 
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        
        <div className="filters" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <label>HOME TYPE 
            <select value={homeType} onChange={e => setHomeType(e.target.value)}>
              {homeTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label>BUDGET 
            <select value={budget} onChange={e => setBudget(e.target.value)}>
              {BUDGET_RANGES.map(b => <option key={b.label} value={b.label}>{b.label}</option>)}
            </select>
          </label>
          <label>STYLE 
            <select value={style} onChange={e => setStyle(e.target.value)}>
              {styles.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="project-grid">
        {list.map((p, i) => (
          <Link className={`project-tile tile-${i % 4}`} href={`/projects/${p.slug}`} key={p.slug}>
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>
            <h3>{p.title}</h3>
            <p style={{ marginTop: '5px' }}>{p.homeType} · {p.location} · {p.budgetLabel}</p>
            <span className="tile-arrow"><ArrowUpRight size={15} /></span>
          </Link>
        ))}
        {list.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: '#777' }}>
            No projects match your selected criteria.
          </div>
        )}
      </div>
    </div>
  );
}
