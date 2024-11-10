
export default function Banner() {
    return (
      <div>
        <section className="bg-[#1b1b1b] py-20 md:py-10">
  <div className="max-w-screen-lg mx-auto relative">
    {/* Banner Image (hidden on small screens) */}
  
    
    {/* Banner Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h4 className="text-sm font-light text-white mb-2">FOR MILLIONS OF USERS</h4>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Power Digital <br />
        IT Solution Company
        </h1>
        <p className="text-xs md:text-sm text-[#cdcdcd] mb-4"> Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.</p>
        <a href="#" className="text-[#F0592A] text-xs md:text-sm hover:underline">Learn More</a>
      </div>

      {/* Form Section */}
      <div className="w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-lg font-medium mb-4">Sign up for our Newsletter</h1>
        <p className="text-xs text-[#acacac] mb-6">Stay updated with the latest news and offers.</p>
        <form action="#">
          <input type="text" className="w-full bg-[#ececec] p-3 mb-4 text-sm rounded-md border-none" placeholder="Name" />
          <input type="email" className="w-full bg-[#ececec] p-3 mb-4 text-sm rounded-md border-none" placeholder="Email" />
          <button type="submit" className="w-full bg-[#F0592A] text-white py-3 rounded-md text-xs">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }
  
