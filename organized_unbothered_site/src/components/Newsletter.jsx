import React from 'react';

const MAILCHIMP_URL = 'https://mailchimp.com/placeholder'; // replace with your form action

export default function Newsletter(){{
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="font-semibold text-lg text-[#184E3A]">Join the Newsletter</h3>
      <p className="text-sm text-gray-600 mt-1">Get the Welcome Guide and planning tools.</p>
      <form className="mt-4 flex justify-center gap-2" action={MAILCHIMP_URL} method="post">
        <input type="email" name="EMAIL" required placeholder="Your email" className="border rounded-md px-3 py-2 w-64" />
        <button type="submit" className="bg-[#2E8B57] text-white px-4 py-2 rounded-md">Subscribe</button>
      </form>
    </div>
  );
}}
