import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 text-white">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold text-xl flex items-center">
          <span className="text-red-500">Gamma</span>
          <span className="ml-1">Business</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Company</button>
          <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Company</Link>
            <Link to="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Team</Link>
            <Link to="/careers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</Link>
          </div>
        </div>
        
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Features</button>
          <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
            <Link to="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pricing</Link>
            <Link to="/testimonials" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Testimonials</Link>
            <Link to="/faq" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">FAQ</Link>
          </div>
        </div>
        
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Services</button>
          <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
            <Link to="/personalization" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Customer Personalization</Link>
            <Link to="/analytics" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Loan Predictive Analytics</Link>
            <Link to="/fraud" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Fraud Detection</Link>
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <Link to="/demo" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
          Book a Demo
        </Link>
      </div>
    </nav>
  </header>
);
