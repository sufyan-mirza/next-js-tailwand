import Image from 'next/image';
import div from './assets/div.png';
import logo1 from './assets/logo1.png';
import web from './assets/web.png';
import app from './assets/app.png';

export default function Portfolio() {
  return (
    <section className="portfolio py-16 bg-[#f4f4f4]">
    <div className="title-container max-w-[493px] mx-auto">
      <div className="portfolio-title text-center">
        <h4 className="text-[#F0592A] text-xs font-bold mb-2">PORTFOLIO</h4>
        <h1 className="text-[#1b1b1b] text-2xl font-semibold">
          Actionable insights.<br />Real-world experience
        </h1>
        <Image src={div} alt="Divider" width={80} height={10} />
        <p className="text-[#737373] text-xs font-normal my-2">Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
      </div>
    </div>
  
    <div className="portfolio-container max-w-[800px] mx-auto">
      <div className="portfolio-content grid gap-6 md:grid-cols-3 sm:grid-cols-1">
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={logo1} alt="Web Designing" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">Web Designing</h4>
          </div>
        </div>
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={app} alt="App Development" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text1 absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">App Development</h4>
          </div>
        </div>
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={web} alt="Web Designing" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">Web Designing</h4>
          </div>
        </div>
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={logo1} alt="Web Designing" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">Web Designing</h4>
          </div>
        </div>
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={app} alt="App Development" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text1 absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">App Development</h4>
          </div>
        </div>
        <div className="portfolio-box relative w-1/2 ml-auto mr-auto mb-4">
          <Image src={web} alt="Web Designing" width={400} height={250} className="w-full rounded-md" />
          <div className="portfolio-text absolute bottom-[-20px] left-4 right-4 bg-white p-4 rounded-md text-center">
            <h4 className="text-[#1b1b1b] text-sm">Web Designing</h4>
          </div>
        </div>
      </div>
  
      <div className="portfolio-btn flex justify-center mt-12">
        <button className="bg-[#F0592A] text-white py-2 px-6 text-xs font-light rounded-md">VIEW ALL</button>
      </div>
    </div>
  </section>
  
  );
}
