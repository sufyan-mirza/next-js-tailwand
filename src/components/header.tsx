import Image from 'next/image';
import Link from 'next/link';
import image from './assets/Logo 1.png';
export default function Header() {
    return (
        <header className="py-4 bg-[#F3F3F3]">
  <div className="max-w-screen-lg mx-auto">
    <div className="flex justify-between items-center">
      <Image src={image} alt="Logo" className="w-[160px]" />
      <div className="hidden md:flex">
        <ul className="flex space-x-6">
          <li className="text-sm font-semibold uppercase text-[#1B1B1B]">
            <Link href='/'>Home</Link></li>
          <li className="text-sm font-semibold uppercase text-[#1B1B1B]"><Link href='/about'>About</Link></li>
          <li className="text-sm font-semibold uppercase text-[#1B1B1B]"><Link href='/service'>Service</Link></li>
          <li className="text-sm font-semibold uppercase text-[#1B1B1B]"><Link href='/portfolio'>Portfolio</Link></li>
        </ul>
      </div>
      <div className="md:block">
        <button className="bg-[#f0592a] text-white py-2 px-6 rounded">Contact</button>
      </div>
    </div>
  </div>
</header>


    );
}
