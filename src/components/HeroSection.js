// src/components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column - Woman + Phone */}
          <div className="flex-1 space-y-8">
            <div className="aspect-[3/4] bg-gray-200 rounded-2xl"></div>
            
            <div className="flex items-center gap-6">
              <div className="w-32 h-48 bg-gray-300 rounded-xl"></div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Turn your waste<br/>into Opportunities!</h2>
                <div className="flex gap-4">
                  <div className="w-32 h-10 bg-gray-400 rounded-lg"></div>
                  <div className="w-32 h-10 bg-gray-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Column - Text */}
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Aethink'gecycle.<br/>Reinvent!
            </h1>
            <p className="text-gray-600 text-lg">
              Committed by providing corporate and imaginative premigratory by adopting
              two responsible habits. Naturally to create a world where nature is set,
              but everything is transformed.
            </p>
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
              8%
            </div>
          </div>
        </div>
      </section>
    );
  }