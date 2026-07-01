import React from "react";
import "./sections.css";

export default function Contacts() {
  return (
    <section className="py-12 md:py-16 overflow-hidden" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Side: Contact Form (Grey Card with White Inputs) */}
          <div className="w-full lg:w-1/2 bg-[#f4f4f5] rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 animate-fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Let's Work Together
              </h2>
              <p className="text-base text-gray-600">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white border border-gray-200/60 rounded-xl px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white border border-gray-200/60 rounded-xl px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full bg-white border border-gray-200/60 rounded-xl px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="mt-2 w-fit bg-[#18181b] text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side: Map & Info */}
          <div className="w-full lg:w-1/2 bg-white rounded-[2rem] flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 animate-fade-in-up delay-100 overflow-hidden">
            
            {/* Top Part: Map */}
            <div className="flex-1 w-full relative min-h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58205.28271941067!2d89.87597070143669!3d24.247717964170697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2sTangail!5e0!3m2!1sen!2sbd!4v1782916695311!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Tangail Location"
              ></iframe>
            </div>
            
            {/* Bottom Part: Contact Details (No Overlap, Solid White Background) */}
            <div className="bg-white p-8 md:p-10 flex flex-col sm:flex-row justify-between gap-6 text-sm font-semibold border-t border-gray-100 z-10">
              <div className="flex flex-col">
                 <span className="uppercase tracking-wider text-xs font-bold text-gray-400">Email</span>
                 <span className="text-gray-800 mt-1 text-base">hello@yourportfolio.com</span>
              </div>
              <div className="flex flex-col sm:text-right">
                 <span className="uppercase tracking-wider text-xs font-bold text-gray-400">Location</span>
                 <span className="text-gray-800 mt-1 text-base">Tangail, Bangladesh</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
