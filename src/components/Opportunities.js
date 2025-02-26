// components/Opportunities.js
import React from 'react';

const Opportunities = () => (
  <section id="opportunities" className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Opportunities</h2>
      <p className="text-xl mb-8">Committed to providing conscious and sustainable groundbreaking solutions through eco-responsible means.</p>
      <div className="flex justify-center space-x-8 mb-8">
        <img src="images/google-play.png" alt="Google Play" className="w-40" />
        <img src="images/app-store.png" alt="App Store" className="w-40" />
      </div>
      <a href="#" className="bg-green-500 text-white px-8 py-4 rounded-full text-xl inline-block">Download the App</a>
    </div>
  </section>
);

export default Opportunities;