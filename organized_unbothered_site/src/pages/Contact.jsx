import React from 'react';

const CALENDLY_URL = 'https://calendly.com/your-calendly'; // replace in code
export default function Contact(){
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-700">
      <h2 className="font-playfair text-3xl font-bold text-[#2E8B57]">Contact</h2>
      <p className="mt-2">Have questions or want to enroll? Email us directly at <strong>ebeth26rr@gmail.com</strong> or book a discovery call.</p>
      <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block bg-[#2E8B57] text-white px-4 py-2 rounded-md">Book a Discovery Call</a>
      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (placeholder)');}}>
        <input type="text" placeholder="Name" className="border rounded-md px-3 py-2" />
        <input type="email" placeholder="Email" className="border rounded-md px-3 py-2" />
        <textarea placeholder="Message" className="md:col-span-2 border rounded-md px-3 py-2 h-32" />
        <button className="md:col-span-2 bg-[#184E3A] text-white px-4 py-2 rounded-md">Send Message</button>
      </form>
    </main>
  );
}
