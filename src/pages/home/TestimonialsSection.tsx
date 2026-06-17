import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James & Sarah Mitchell',
    location: 'Kellyville, NSW',
    text: 'From the initial consultation to the final installation, SolEarth Energy made the whole process incredibly smooth. Our electricity bills have dropped by $180 a month!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  {
    name: 'Priya Patel',
    location: 'Chermside, QLD',
    text: 'Absolutely professional team. They explained everything in detail and finished the job in one day. The app monitoring is fantastic — I can see my savings in real time!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b048?w=120&q=80',
  },
  {
    name: 'Mark Thompson',
    location: 'Parramatta, NSW',
    text: 'Got three quotes and SolEarth had the best price and the best warranty. 8 months in and the system is performing above expectations. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
  },
  {
    name: 'Chloe & Liam Davies',
    location: 'Geelong, VIC',
    text: "The customer service was exceptional. They handled all the council permits and grid approvals for us. We're now generating 100% of our daily power!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
  {
    name: 'David Chen',
    location: 'Adelaide, SA',
    text: 'Super happy with our new hybrid solar and battery storage. It feels great to be completely self-sufficient and protected from blackout surges.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
  },
  {
    name: 'Samantha Cooper',
    location: 'Newcastle, NSW',
    text: 'SolEarth installed a 10kW system at our business workshop. The energy offset has significantly lowered our operating costs. Outstanding return on investment.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80',
  },
  {
    name: 'Aaron Wilson',
    location: 'Gold Coast, QLD',
    text: 'Professional, transparent, and prompt. No pushy sales calls — just high-quality advice and a top-tier installation team. Five stars all round.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
  },
  {
    name: 'Olivia Martin',
    location: 'Toowoomba, QLD',
    text: 'Our quarterly bill went from $850 down to a credit of $35! The solar battery is amazing and the installation was extremely neat and tidy.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
  },
];

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[selectedIndex];

  // Dynamic sliding window of 4 avatars centered around the selected index
  const startIdx = Math.max(0, Math.min(testimonials.length - 4, selectedIndex - 1));

  return (
    <section id="testimonials" className="py-10 bg-white text-[#022D62] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Title area matching the screenshot */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase text-[#022D62]/70 tracking-widest mb-3">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="text-black">Real stories.</span>{' '}
            <span className="text-[#022D62]">Real trust.</span>
          </h2>
        </div>

        {/* Testimonial slider layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Side: Avatar Buttons Selection (Sliding 4 out of 8) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-6">
            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              {testimonials.slice(startIdx, startIdx + 4).map((t) => {
                const originalIndex = testimonials.findIndex((item) => item.name === t.name);
                const isActive = originalIndex === selectedIndex;
                return (
                  <button
                    key={t.name}
                    onClick={() => {
                      setSelectedIndex(originalIndex);
                      setIsAutoPlaying(false);
                    }}
                    className="relative focus:outline-none cursor-pointer transition-all duration-300 group"
                  >
                    {isActive ? (
                      <div className="p-1 rounded-full border-2 border-[#1B74BB] flex items-center justify-center scale-105">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-24 h-24 rounded-full object-cover border border-slate-200"
                        />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full border border-slate-100 flex items-center justify-center opacity-45 hover:opacity-90 grayscale hover:grayscale-0 scale-95 transition-all">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Tooltip name */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                      {t.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hint label */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2">
              Select an avatar to pause autoplay
            </div>
          </div>

          {/* Right Side: Active review display block */}
          <div className="lg:col-span-6 relative flex flex-col text-left justify-center min-h-[260px] pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Large double quotes */}
                <span className="text-7xl font-serif text-[#022D62] leading-none select-none block -mb-4">
                  “
                </span>

                <p className="text-lg sm:text-xl font-semibold italic text-[#022D62] leading-relaxed">
                  {currentTestimonial.text}
                </p>

                <div className="pt-4">
                  <h4 className="text-base font-extrabold text-black">
                    — {currentTestimonial.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                    {currentTestimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
