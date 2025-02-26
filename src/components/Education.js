// components/Education.js
import React from 'react';

const Education = () => (
  <section id="education" className="container mx-auto my-16">
    <h2 className="text-3xl font-bold mb-8">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow rounded p-8">
        <img src="images/inspire-icon.png" alt="Inspire Icon" className="w-20 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Inspire Change</h3>
        <p>Learn how small actions can make a big impact on the environment. Get inspired to make sustainable choices in your daily life.</p>
      </div>
      <div className="bg-white shadow rounded p-8">
        <img src="images/rethink-icon.png" alt="Rethink Icon" className="w-20 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Rethink, Recycle, Reinvent</h3>
        <p>Discover creative ways to rethink waste, recycle materials, and reinvent everyday items. Together, we can create a more sustainable future.</p>
      </div>
    </div>
    <p className="text-center text-xl mt-8">Together, let's create a world where nothing is wasted, everything is transformed!</p>
  </section>
);

export default Education;