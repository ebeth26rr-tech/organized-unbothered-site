import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-[#F6FBF7] border-t mt-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Organized & Unbothered</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="mailto:ebeth26rr@gmail.com">ebeth26rr@gmail.com</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
