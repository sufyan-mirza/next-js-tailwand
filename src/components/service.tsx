import Image from 'next/image';
import div from './assets/div.png';
import group from './assets/group.png';

export default function Service() {
  return (
    <section className="service py-16 bg-[#f4f4f4] bg-no-repeat bg-contain bg-bottom">
  <div className="title-container max-w-screen-sm mx-auto">
    <div className="service-title text-center">
      <h4 className="text-[#F0592A] text-[11px] font-semibold mb-2">OUR SERVICES</h4>
      <h1 className="text-[#1b1b1b] text-2xl font-semibold mb-4">
        We provide IT & Business <br />
        solutions
      </h1>
      <Image src={div} alt="Divider" width={80} height={10} />
      <p className="text-[#737373] text-[11px] font-normal my-4">
        Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
      </p>
    </div>
  </div>

  <div className="service-container max-w-screen-xl mx-auto">
    <div className="service-content grid  justify-center">
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Business Process Outsourcing" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Business Process Outsourcing</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Back Office Solutions" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Back Office Solutions</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Sales Outsourcing" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Sales outsourcing</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Technical Resource for Hire" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Technical Resource for Hire</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Appointment Scheduler" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Appointment Scheduler</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Data Cleaning / Lead Generation" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Data Cleaning / Lead Generation</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>

    <div className="service-content2 grid justify-center flex-wrap text-center">
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Sales Outsourcing" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Sales outsourcing</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="service-box bg-white rounded-lg p-6 mx-4 mb-6 w-[90%] h-[200px] text-center">
        <Image src={group} alt="Technical Resource for Hire" width={60} height={60} className="mb-4 mx-auto" />
        <h1 className="text-[#1b1b1b] text-lg font-semibold mb-2">Technical Resource for Hire</h1>
        <p className="text-[#737373] text-sm font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>
</section>

  );
}
