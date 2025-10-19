import React from 'react';
import Newsletter from '../components/Newsletter';

export default function ComingSoon(){
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FBFFFB]">
      <div className="max-w-xl mx-auto text-center p-8">
        <div className="mb-6">
          <img src="/favicon.svg" alt="Logo" className="mx-auto w-20 h-20" />
        </div>
        <h1 className="font-playfair text-3xl font-bold text-[#184E3A]">Organized & Unbothered</h1>
        <p className="mt-3 text-gray-700">Take Your Time & Health Back — launching soon.</p>
        <div className="mt-6">
          <Newsletter />
        </div>
        <p className="mt-6 text-xs text-gray-500">We’ll email you when we launch. No spam — ever.</p>
      </div>
    </main>
  );
}
