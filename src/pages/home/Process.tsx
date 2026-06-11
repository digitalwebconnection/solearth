import { useState } from 'react';
import {
  PhoneCall,
  FileEdit,
  HardHat,
  Radio,
  CheckCircle,
  ChevronRight,
  HeartHandshake,
  X
} from 'lucide-react';

interface StepData {
  num: string;
  icon: any;
  title: string;
  desc: string;
  image: string;
  bulletPoints: string[];
  duration: string;
}

export default function Process() {
  const steps: StepData[] = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Free Energy Audit',
      desc: 'We analyse your quarterly electricity bills and use satellite mapping to check roof shade.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      bulletPoints: [
        'Detailed analysis of energy consumption history',
        '3D roof space assessment using satellite imaging',
        'Accurate solar generation estimates',
        'Projected ROI and payback period calculation'
      ],
      duration: 'Takes 15-20 Minutes'
    },
    {
      num: '02',
      icon: FileEdit,
      title: 'Custom Engineering Design',
      desc: 'Our engineers structure a premium system configuration to optimize energy offset.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
      bulletPoints: [
        'Optimal panel layout for maximum solar absorption',
        'Premium inverter and battery sizing tailored to you',
        'Electrical engineering layout schematic validation',
        'Detailed structural engineering compliance checklist'
      ],
      duration: 'Completed in 2-3 Days'
    },
    {
      num: '03',
      icon: HardHat,
      title: 'Professional Installation',
      desc: 'CEC-accredited local technicians install your systems with absolute structural security.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
      bulletPoints: [
        'CEC-accredited electrical technicians',
        'Premium quality racking and framing mounts',
        'Rigorous safety protocols and onsite inspection',
        'Clean site completion and waste recycling'
      ],
      duration: 'Typically Done in 1 Day'
    },
    {
      num: '04',
      icon: Radio,
      title: 'Grid Connection & Support',
      desc: 'We complete government inspections, connect you to the grid, and configure real-time apps.',
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=600&q=80',
      bulletPoints: [
        'Grid export authorization paperwork handling',
        'Real-time mobile app tracking setup (Wi-Fi/4G)',
        'Full customer handover tutorial session',
        'Ongoing lifetime monitoring support services'
      ],
      duration: 'Within 7-10 Business Days'
    }
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);

  return (
    <section id="process" aria-label="Solar System Installation Process" className="relative overflow-hidden py-10">

      {/* Decorative timeline line behind card headers on desktop */}
      <div className="hidden lg:block absolute left-[12%] right-[12%] top-[260px] h-0.5 border-t border-dashed border-slate-200 z-0" />

      {/* Ambient background glow spots */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#28A8E4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1B74BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header section */}
        <div className="text-center max-w-7xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Our Installation Process</span>
            <span className="h-0.5 w-8 bg-[#F8C000] rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Your Seamless Journey <br /> To Solar Energy
          </h2>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            We handle everything from initial energy assessment and custom engineering design to professional installation and grid connection.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-slate-400 hover:border-[#1B74BB]/40 rounded-lg p-4 shadow-lg hover:shadow-xl shadow-black hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between min-h-[300px] z-10"
              >
                <div className="space-y-5">
                  {/* Top Image Container */}
                  <div className="relative h-36 rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-white text-[#1B74BB] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step Number Badge */}
                    <span className="absolute top-3 right-3 text-2xl font-black text-white/30 tracking-tight leading-none group-hover:text-white/60 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Text Details - Only Title */}
                  <div className="space-y-2 text-left">
                    <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-widest">
                      Phase {step.num}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#1B74BB] transition-colors duration-300 leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Read More button at the bottom */}
                <div className="pt-2 text-left border-t border-slate-100/60">
                  <button
                    onClick={() => setSelectedStep(step)}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#1B74BB] hover:text-[#28A8E4] transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA bottom section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              setShowPopup(true);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-yellow-500 to-amber-500 hover:opacity-95 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-orange-500/20 transition-all cursor-pointer hover:scale-[1.01]"
          >
            <span>Get Your Free Proposal</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Step Detail Modal */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedStep(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-4 sm:p-8 border border-slate-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#28A8E4] to-[#1B74BB]" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-4 text-left mt-2">
              <div className="relative h-54 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-white text-[#1B74BB] flex items-center justify-center shadow-md">
                  {(() => {
                    const SelectedIcon = selectedStep.icon;
                    return <SelectedIcon className="w-5 h-5" />;
                  })()}
                </div>
                <span className="absolute top-3 right-3 text-2xl font-black text-white/30 tracking-tight leading-none">
                  {selectedStep.num}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Phase {selectedStep.num}
                  </span>
                  <span className="h-1 w-1 bg-slate-350 rounded-full" />
                  <span className="text-[10px] font-extrabold text-[#1B74BB] uppercase tracking-wider">
                    {selectedStep.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mt-1">
                  {selectedStep.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedStep.desc}
              </p>

              {/* Key Deliverables list */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-wider">
                  Key Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedStep.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-600 leading-snug">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Button / Action */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedStep(null)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPopup(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-slate-100 overflow-hidden z-10">
            {/* Design accents */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#28A8E4] to-[#1B74BB]" />

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center space-y-2 mb-6 mt-2">
              <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto shadow-sm">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-blue-950">Get Your Free Proposal</h3>
              <p className="text-sm text-slate-500 leading-normal">
                Submit details below and our CEC engineering team will design your customized energy offset plan.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); setShowPopup(false); alert("Thank you! Our engineering team will contact you shortly."); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm font-semibold text-slate-800 bg-slate-50"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm font-semibold text-slate-800 bg-slate-50"
                  placeholder="e.g. 0400 123 456"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm font-semibold text-slate-800 bg-slate-50"
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white font-extrabold rounded-xl shadow-lg transition-colors"
                >
                  Send Proposal Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
