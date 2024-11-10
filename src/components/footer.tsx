import Image from 'next/image';
import logo2 from './assets/logo2.png';
import mail1 from './assets/mail1.png';
import location1 from './assets/location1.png';
import phone1 from './assets/phone1.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-16 lg:py-20 max-w-4xl">
      <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        {/* Footer Text */}
        <div className="space-y-4 lg:w-2/5">
          <Image src={logo2} alt="Logo" width={80} height={80} className="w-4/5 mb-6" />
          <p className="text-xs leading-relaxed">
            Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man.
            Distrusts delighted. Excuse few the remain highly feebly add people manner say. It high at my mind by roof.
          </p>
          <div className="flex space-x-4">
            <i className="fa-brands fa-facebook-f text-gray-300 text-sm"></i>
            <i className="fa-brands fa-twitter text-gray-300 text-sm"></i>
            <i className="fa-brands fa-linkedin text-gray-300 text-sm"></i>
          </div>
        </div>
  
        {/* Footer Services */}
        <div className="space-y-4 lg:w-1/5">
          <h1 className="text-xs font-medium text-gray-100">OUR SERVICES</h1>
          <ul className="space-y-2">
            <li className="text-xs">Home</li>
            <li className="text-xs">About</li>
            <li className="text-xs">Service</li>
            <li className="text-xs">Portfolio</li>
            <li className="text-xs">Contact</li>
          </ul>
        </div>
  
        {/* Footer Contact */}
        <div className="space-y-4 lg:w-1/5">
          <h1 className="text-xs font-medium text-gray-100">CONTACT</h1>
          <div className="flex space-x-3 items-start">
            <Image src={location1} alt="Location Icon" width={20} height={20} className="w-1/5" />
            <p className="text-xs">22 Baker Street, London,<br />United Kingdom, W1U 3BW</p>
          </div>
          <div className="flex space-x-3 items-start">
            <Image src={phone1} alt="Phone Icon" width={20} height={20} className="w-1/5" />
            <p className="text-xs">+92-302-2758453</p>
          </div>
          <div className="flex space-x-3 items-start">
            <Image src={mail1} alt="Mail Icon" width={20} height={20} className="w-1/5" />
            <p className="text-xs">info@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="border-t border-gray-700 py-4 text-center">
      <p className="text-xs font-light">&copy; 2022 Design & Development by Geeks Root. All rights reserved</p>
    </div>
  </footer>
  
  );
}
