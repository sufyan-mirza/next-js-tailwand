import Image from "next/image";
import aboutImg from './assets/img.png';


export default function About() {
  return (
    <section className="bg-[#f4f4f4] py-24 md:py-16">
  <div className="max-w-screen-xl mx-auto">
    {/* About Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="text-center md:text-left">
        <div className="overflow-hidden rounded-[32px]">
          <Image src={aboutImg} alt="About Image" className="w-full h-[465px] object-cover" />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left">
        <h4 className="text-[#F0592A] font-semibold text-sm mb-2">ABOUT US</h4>
        <h1 className="text-[#1b1b1b] font-semibold text-2xl md:text-3xl mb-4">What We Do?</h1>
        <p className="text-[#737373] text-base md:text-lg mb-6"> Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
              In on my jointure horrible margaret suitable he followed speedily.
              Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
              Blush be sorry no sight sang lose at the reachpoint.
              <br /><br />
              It is a long-established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        
        {/* Stats Section */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li className="text-center">
              <h1 className="text-3xl font-semibold">100+</h1>
              <p className="text-xs text-[#737373]">Clients</p>
            </li>
            <li className="text-center">
              <h1 className="text-3xl font-semibold">50+</h1>
              <p className="text-xs text-[#737373]">Projects</p>
            </li>
            <li className="text-center">
              <h1 className="text-3xl font-semibold">30+</h1>
              <p className="text-xs text-[#737373]">Awards</p>
            </li>
          </ul>
        </div>

        <button className="bg-[#F0592A] text-white font-medium py-3 px-6 rounded-md mt-6 md:w-auto w-full">Learn More</button>
      </div>
    </div>
  </div>
</section>

  );
}
