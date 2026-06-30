import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import supportAgent from '../../assets/support-agent-headset.webp';
import { useQuoteModal } from '../../components/QuoteModal';

export default function ConsultationSection() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="relative  bg-white overflow-hidden">
      <div className=" px-0 sm:px-6 lg:px-0 relative z-10">
        
        {/* Banner container with light gray background matching standard mock */}
        <div className="relative  bg-[#f4f7fa] overflow-hidden flex flex-col lg:flex-row min-h-[440px] shadow-xs">
          
          {/* Slanted Blue Background Block behind left side */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-[#022D62] lg:rounded-r-[4rem] z-0" />
          <div className="absolute inset-y-0 lg:left-[50%] lg:w-[15%] bg-[#022D62] lg:-skew-x-12 lg:rounded-tr-[4rem] lg:rounded-br-4xl z-0 hidden lg:block" />

          {/* Left Content Column */}
          <div className="relative z-10 lg:w-[56%] flex flex-col justify-center text-left py-12 lg:py-16 pl-6 sm:pl-12 lg:pl-16 pr-8 text-white">
            
            <div className="space-y-5 max-w-lg">
              {/* Primary Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight tracking-tight"
              >
                Work With a Team <br />
                That Works for You
              </motion.h2>

              {/* Body paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-sm md:text-base leading-relaxed text-slate-200/90"
              >
                Whether you're going solar for the first time or upgrading your existing system, SolEarth is here to help — with no shortcuts, no outsourcing, and no fluff.
              </motion.p>
            </div>

            {/* Action Buttons Console */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10"
            >
              
              {/* Book Consultation Button */}
              <button
                onClick={() => openQuoteModal('Consultation Section')}
                className="inline-flex items-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all text-[#000000] font-black text-xs uppercase tracking-wider h-14 pl-6 hover:scale-[1.01] cursor-pointer border-none p-0"
              >
                <span className="pr-4">Book A Consultation</span>
                <div className="h-full px-5 bg-[#FAC307] text-black flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              {/* 24/7 Phone callout */}
              <a
                href="tel:61435359431"
                className="flex items-center gap-3.5 text-left group cursor-pointer"
              >
                <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center text-[#022D62] shrink-0 shadow-md">
                  <Phone className="w-4.5 h-4.5 text-[#022D62] fill-[#022D62]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-white group-hover:text-slate-200 transition-colors">
                    24/7 Support: +61 435 359 431
                  </div>
                </div>
              </a>

            </motion.div>

          </div>

          {/* Right Photo Column */}
          <div className="relative lg:w-[44%] min-h-[300px] lg:min-h-full overflow-hidden z-10">
            <img
              src={supportAgent}
              alt="Friendly SolEarth consultant support team specialist"
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-bottom-right"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
