import Image from 'next/image';
import mail from './assets/mail.png';
import phone from './assets/phone.png';
import location from './assets/location.png';

export default function Contact() {
  return (
    <section className="contact py-16 bg-gray-100">
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        <div className="contact-info w-full lg:w-1/2 space-y-8">
          <div className="text-center lg:text-left">
            <h4 className="text-orange-500 text-xs font-bold uppercase">Contact Us</h4>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mt-2">You can connect with us when need help!</h1>
          </div>
  
          <div className="flex items-center space-x-4">
            <Image src={location} alt="Office Location" width={50} height={50} className="w-1/5" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-gray-900">Office Location</h4>
              <p className="text-xs text-gray-500">22 Baker Street, London,<br /> United Kingdom, W1U 3BW</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <Image src={phone} alt="Phone" width={50} height={50} className="w-1/5" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-gray-900">Phone</h4>
              <p className="text-xs text-gray-500">+92-302-2758453</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <Image src={mail} alt="Email" width={50} height={50} className="w-1/5" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-gray-900">Email</h4>
              <p className="text-xs text-gray-500">info@gmail.com</p>
            </div>
          </div>
        </div>
  
        <div className="contact-form w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-10 space-y-4">
          <form>
            <h1 className="text-lg font-medium">Lorem Ipsum</h1>
            <p className="text-xs font-light mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief.</p>
            <input type="text" placeholder="Name" className="form-input mb-4 w-full bg-gray-200 rounded-lg p-3 text-xs text-gray-500" required />
            <input type="email" placeholder="Email" className="form-input mb-4 w-full bg-gray-200 rounded-lg p-3 text-xs text-gray-500" required />
            <input type="text" placeholder="Service" className="form-input mb-4 w-full bg-gray-200 rounded-lg p-3 text-xs text-gray-500" required />
            <textarea name="message" placeholder="Message" className="form-textarea mb-4 w-full bg-gray-200 rounded-lg p-3 text-xs text-gray-500" required></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white rounded-lg py-2 text-xs font-light">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
}
