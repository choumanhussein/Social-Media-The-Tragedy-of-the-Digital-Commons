export default function WhoWeAre() {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gamma-dark mb-12">Who we are</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-3xl text-gray-600 leading-relaxed">
              We're more than just a technology company. We're pioneers of innovation,
              dedicated to revolutionizing the landscape of lending and financial services.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Analysis', 'Collaboration', 'Customization', 'Integration'].map((item, index) => (
                <div key={item} className="p-4 border rounded-lg">
                  <span className="text-gamma-blue font-bold">({String(index+1).padStart(2, '0')})</span>
                  <h4 className="text-lg font-semibold mt-2">{item}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-xl">
            <p className="text-gray-600 text-lg">
              With Gammas proven process, you can confidently embrace
              the future of lending with efficiency, precision, and innovation.
            </p>
            <button className="mt-6 px-6 py-3 bg-gamma-blue text-white rounded-lg hover:bg-blue-700">
              About Company
            </button>
          </div>
        </div>
      </section>
    );
  }