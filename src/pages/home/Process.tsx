import { useState } from 'react';
import { useToast } from '../ui/Toast';
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

export default function   Process() {
  const steps: StepData[] = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Free Energy Audit',
      desc: 'We analyse your quarterly electricity bills and use satellite mapping to check roof shade.',
      image: '/images/solar/SOLAR-ENERGY-AUDIT-SWAMI-ENERGY.png',
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
      image: '/images/solar/solar-engineer-panel.jpg',
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
      image: '/images/solar/solar-residential-house.jpg',
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
      image: '/images/solar/solar-tech-worker.jpg',
      bulletPoints: [
        'Grid export authorization paperwork handling',
        'Real-time mobile app tracking setup (Wi-Fi/4G)',
        'Full customer handover tutorial session',
        'Ongoing lifetime monitoring support services'
      ],
      duration: 'Within 7-10 Business Days'
    }
  ];

  const toast = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProposalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "a7519716-2587-431c-8bdb-7bcfce010f90");
      formData.append("subject", "New Solar Proposal Request via Process Timeline Modal");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setShowPopup(false);
        toast.success("Thank you! Our engineering team will contact you shortly.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="process" aria-label="Solar System Installation Process" className="relative overflow-hidden py-10">

      {/* Decorative timeline line behind card headers on desktop */}
      <div className="hidden lg:block absolute left-[12%] right-[12%] top-[260px] h-0.5 border-t border-dashed border-slate-200 z-0" />

      {/* Ambient background glow spots */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#28A8E4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1B74BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header section */}
        <div className="text-center max-w-7xl mx-auto md:mb-20 mb-10 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#1B74BB] uppercase tracking-widest">Our Installation Process</span>
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Your Seamless Journey <br />  to Clean Solar Energy
          </h2>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            From energy assessment and custom design to installation and grid connection, we deliver a seamless solar experience.
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
          {/* Backdrop */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 0 }}
            className="bg-slate-900/70 backdrop-blur-sm"
            onClick={() => setSelectedStep(null)}
          />

          {/* Modal panel — 3-zone: header | scrollable body | footer */}
          <div
            style={{ position: 'relative', zIndex: 1, width: '100%', maxHeight: 'min(95svh, 680px)' }}
            className="max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#2AA9E4] to-[#1B74BB]" />

            {/* ── STICKY HEADER ── */}
            <div className="shrink-0 px-4 pt-5 pb-3 border-b border-slate-100">
              {/* Close btn */}
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Phase badge + title */}
              <div className="flex items-center gap-2 mb-1 pr-8">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Phase {selectedStep.num}</span>
                <span className="h-1 w-1 bg-slate-300 rounded-full" />
                <span className="text-[9px] font-extrabold text-[#1B74BB] uppercase tracking-wider">{selectedStep.duration}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
                {selectedStep.title}
              </h3>
            </div>

            {/* ── SCROLLABLE BODY ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3 space-y-3">
              {/* Image */}
              <div className="relative h-36 sm:h-48 rounded-xl overflow-hidden shadow-sm shrink-0">
                <img src={selectedStep.image} alt={selectedStep.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-2 left-2 h-8 w-8 rounded-lg bg-white text-[#1B74BB] flex items-center justify-center shadow-md">
                  {(() => { const I = selectedStep.icon; return <I className="w-4 h-4" />; })()}
                </div>
                <span className="absolute top-2 right-2 text-xl font-black text-white/25 leading-none">{selectedStep.num}</span>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed">{selectedStep.desc}</p>

              {/* Key Deliverables */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Key Deliverables</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStep.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs font-semibold text-slate-700 leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── STICKY FOOTER ── */}
            <div className="shrink-0 px-4 pb-4 pt-2.5 border-t border-slate-100 flex justify-end bg-white">
              <button
                onClick={() => setSelectedStep(null)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Popup Modal */}
      {showPopup && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
          {/* Backdrop */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 0 }}
            className="bg-slate-900/65 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />

          {/* Modal panel */}
          <div
            style={{ position: 'relative', zIndex: 1, width: '100%', maxHeight: 'min(95svh, 560px)' }}
            className="max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#2AA9E4] to-[#1B74BB]" />

            {/* ── STICKY HEADER ── */}
            <div className="shrink-0 px-4 pt-5 pb-3 border-b border-slate-100 text-center">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-2 shadow-sm">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-base font-black text-blue-950 leading-tight">Get Your Free Proposal</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Our CEC engineering team will design your custom energy plan.
              </p>
            </div>

            {/* ── SCROLLABLE BODY / FORM ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">
              <form id="proposal-form" onSubmit={handleProposalSubmit}
                className="space-y-3">

                {/* Name + Phone — 2-col always */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="min-w-0">
                    <label className="block text-[9px] font-bold text-slate-600 uppercase tracking-wider mb-1">Name *</label>
                    <input type="text" required name="name"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm text-slate-800 bg-slate-50"
                      placeholder="John Doe" />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-[9px] font-bold text-slate-600 uppercase tracking-wider mb-1">Phone *</label>
                    <input type="tel" required name="phone"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm text-slate-800 bg-slate-50"
                      placeholder="0400 123 456" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] font-bold text-slate-600 uppercase tracking-wider mb-1">Email *</label>
                  <input type="email" required name="email"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#1B74BB] focus:ring-1 focus:ring-[#1B74BB] outline-none text-sm text-slate-800 bg-slate-50"
                    placeholder="john@example.com" />
                </div>
              </form>
            </div>

            {/* ── STICKY FOOTER / SUBMIT ── */}
            <div className="shrink-0 px-4 pb-5 pt-2.5 border-t border-slate-100 bg-white">
              <button
                type="submit"
                form="proposal-form"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-linear-to-r from-orange-500 to-amber-500 hover:opacity-95 active:scale-[0.98] text-white font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Proposal Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
