import Image from 'next/image'
import Hero from './components/Hero'

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>main 
        <Hero/>
    </div>
  )
}
