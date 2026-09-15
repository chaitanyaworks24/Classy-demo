import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { Inter, Playfair_Display } from 'next/font/google';
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
const playfair=Playfair_Display({subsets:['latin'],variable:'--font-playfair',display:'swap',weight:['500','600']});
export const metadata={title:'Classy Craft Interiors — Crafting Spaces. Creating Experiences.',description:'A premium interior design studio digital showroom for residential and commercial interiors.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body><SiteChrome>{children}</SiteChrome></body></html>}
