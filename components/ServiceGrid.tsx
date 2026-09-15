import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

export default function ServiceGrid({items,group='commercial'}:{items:{slug:string;title:string;desc:string;image:string;eyebrow?:string}[];group?:'home'|'commercial'}){
  return <div className="service-grid">
    {items.map(x=><Link href={`/services/${group}/${x.slug}`} className="service-card" key={x.slug}>
      <img src={x.image} alt={x.title}/>
      <div className="service-card-copy">
        <div className="eyebrow">{x.eyebrow||'COMMERCIAL INTERIORS'}</div>
        <h3>{x.title}</h3>
        <p>{x.desc}</p>
        <span>Explore <ArrowRight size={15}/></span>
      </div>
    </Link>)}
  </div>
}
