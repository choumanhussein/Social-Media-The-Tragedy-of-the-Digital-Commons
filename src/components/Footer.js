export default function Footer() {
  return (
    <footer className="bg-gamma-dark text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {['About Company', 'Team', 'Careers', 'Contact Us'].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Finitions</h3>
          <ul className="space-y-2">
            {['Pricing', 'Testimonials', 'F&O', 'User Cases'].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {['Customer Personalization', 'Loan Predictive Analytics', 'Fixed Detection', 
              'Risk Management Optimization'].map((service) => (
              <li key={service} className="hover:text-white cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {['Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
              <span key={platform} className="hover:text-white cursor-pointer">{platform}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500">
        <p>GGamma. Designed by four weeks.</p>
        <p className="mt-2">Marks in Finance</p>
      </div>
    </footer>
  );
}