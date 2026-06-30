import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import man from '../../../public/images/solar/rivew.jfif';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jayla Houston',
    location: 'Kellyville, NSW',
    text: 'Excellent',
    avatar: man,
  },
  {
    name: 'N Zaidaalvin',
    location: 'Chermside, QLD',
    text: 'Good place',
    avatar:man,
  },
  {
    name: 'Ekky Firman',
    location: 'Parramatta, NSW',
    text: 'Kushal personally followed up a week after installation to make sure everything was performing as expected and to answer any questions we had about the monitoring system.',
    avatar: man,
  },
  {
    name: 'Aaaa Maaa',
    location: 'Geelong, VIC',
    text: "Called with a technical question on a Saturday and someone actually picked up and resolved my concern within the conversation, no ticket system or callback wait",
    avatar: man,
  },
  {
    name: 'Clayton Murphy',
    location: 'Adelaide, SA',
    text: 'Kushal personally followed up a week after installation to make sure everything was performing as expected and to answer any questions we had about the monitoring system.',
    avatar: man,
  },
  {
    name: 'krijan prajapati',
    location: 'Newcastle, NSW',
    text: 'Brilliant work Kaushal your work is very professional. You installed my battery in 1 day.. and no unnecessary conduits all cabels passed through the wall keeps very clean',
    avatar: man,
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
        <div className="text-center mb-8 md:mb-16">
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
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
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
                      <div className="p-0.5 sm:p-1 rounded-full border-2 border-[#1B74BB] flex items-center justify-center scale-105">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border border-slate-200"
                        />
                      </div>
                    ) : (
                      <div className="p-0.5 sm:p-1 rounded-full border border-slate-100 flex items-center justify-center opacity-45 hover:opacity-90 grayscale hover:grayscale-0 scale-95 transition-all">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
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
            <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest pt-2">
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

                <p className="text-base sm:text-lg md:text-xl font-semibold italic text-[#022D62] leading-relaxed">
                  {currentTestimonial.text}
                </p>

                <div className="pt-4">
                  <h4 className="text-base font-extrabold text-black">
                    — {currentTestimonial.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
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
