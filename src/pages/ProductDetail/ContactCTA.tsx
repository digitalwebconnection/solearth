import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import supportPerson from '../../assets/downloaded-images/support-person.jpg';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B74BB] text-white py-16" id="quote-section">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Texts */}
          <div className="lg:col-span-7">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FCC200]">
              Unlock Premium Clean Energy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 leading-tight">
              Work With a Team That Works for You
            </h2>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
              Ready to maximize your solar investment? Solearth Energy offers expert consultations, tailors high-efficiency setups, and handles the entire rebate and installation process.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              {/* Contact phone */}
              {/* <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FCC200] flex items-center justify-center text-white shadow-lg">
                  <Phone size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-semibold uppercase">24/7 Support</p>
                  <h4 className="font-bold text-white text-lg">1300 504 912</h4>
                </div>
              </div> */}

              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-[#1B74BB] px-8 py-3.5 rounded-full font-black flex items-center gap-2.5 transition duration-300 shadow-xl hover:scale-105"
              >
                Request A Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Headshot Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={supportPerson}
                alt="Solearth Energy support expert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
