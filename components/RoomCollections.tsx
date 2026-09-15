import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {roomCollections} from '@/data/rooms';

export default function RoomCollections(){
  return <div className="room-collection-grid">
    {roomCollections.map(r=><Link className="collection-card" href={`/projects/rooms/${r.slug}`} key={r.slug}>
      <img src={r.images[0]} alt={r.name}/>
      <div><span>{r.name}</span><ArrowUpRight size={15}/></div>
    </Link>)}
  </div>
}
