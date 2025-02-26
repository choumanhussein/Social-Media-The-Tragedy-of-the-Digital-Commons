export default function MainContent() {
    return (
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Tags Section */}
        <div className="flex justify-center gap-4 mb-12">
          {['Blog', 'Education', 'Opportunities'].map((tag) => (
            <span key={tag} className="inline-flex items-center px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
  
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-center mb-8 leading-tight">
          Turn your waste
          <br />
          <span className="text-green-600">into Opportunities!</span>
        </h1>
  
        {/* Percentage Circle */}
        <div className="w-32 h-32 mx-auto mb-12 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          8%
        </div>
  
        {/* Slogan Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-green-600 font-bold text-center mb-8">
            Aethink'gecycle.Reinvent!
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Committed by providing corporate and imaginative premigratory by adopting
            <br />
            two responsible habits. Naturally to create a world
            <br />
            where nature is set, but everything is transformed.
          </p>
        </div>
  
        {/* Action Section */}
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <span className="block text-green-600 text-2xl font-bold">picolo</span>
            <span className="block text-green-600 text-2xl font-bold">picolo</span>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800">Inspire change!</h3>
          
          <div className="flex justify-center gap-8 text-xl font-semibold text-green-600">
            <span>Rethink</span>
            <span>Recycle</span>
            <span>Reinvent!</span>
          </div>
        </div>
      </main>
    );
  }