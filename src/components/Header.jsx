import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){{
  return (
    <header className="bg-[#F6FBF7] border-b">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <div>
            <h1 className="font-playfair text-lg font-bold">Organized & Unbothered</h1>
            <p className="text-xs text-gray-600">Take Your Time & Health Back</p>
          </div>
        </Link>
        <div className="flex gap-4 text-sm">
          <Link to="/program" className="hover:underline">Program</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="bg-[#2E8B57] text-white px-3 py-2 rounded-md">Book a Call</Link>
        </div>
      </nav>
    </header>
  );
}}
