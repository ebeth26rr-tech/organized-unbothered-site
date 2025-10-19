import React from 'react';
import Newsletter from '../components/Newsletter';

export default function Home(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center">
        <h2 className="font-playfair text-4xl font-bold text-[#184E3A]">Reclaim your energy, time, and joy</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">A 16-week coaching experience designed for mothers ready to live with intention, balance, and ease.</p>
      </section>
      <section className="mt-12">
        <Newsletter />
      </section>
    </main>
  );
}
