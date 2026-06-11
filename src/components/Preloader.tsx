import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden'

    const duration = 2500 // 2.5 seconds
    const intervalTime = 30
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onComplete()
            document.body.style.overflow = 'unset'
          }, 350)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = 'unset'
    }
  }, [onComplete])

  // Star field background data
  const stars = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }))

  return (
    <div className="fixed inset-0 z-[9999] bg-[#070b13] flex flex-col items-center justify-center font-sans overflow-hidden select-none">

      {/* Star Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Sun & Solar Panel Charging Animation Area */}
      <div className="relative w-full max-w-md h-[360px] scale-75 sm:scale-90 md:scale-100 origin-center transition-transform select-none">

        {/* Glowing Sun (Top Right) */}
        <div className="absolute top-4 right-4 z-10 flex flex-col items-center justify-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Outer glowing corona rings */}
            <div className="absolute w-36 h-36 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
            <div className="absolute w-28 h-28 rounded-full border border-amber-500/20 animate-spin-slow" />
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-orange-500/30 animate-spin-reverse" />

            {/* Orbiting particles around the sun */}
            <div className="absolute w-28 h-28 animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_6px_#facc15]" />
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
            </div>

            {/* Sun Core */}
            <div className="relative w-18 h-18 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-300 shadow-[0_0_40px_rgba(249,115,22,0.8)] flex items-center justify-center overflow-hidden border border-yellow-200/20">
              <div className="absolute top-1 left-1 w-8 h-8 bg-white/20 rounded-full blur-sm" />
              <div className="absolute inset-1 bg-gradient-to-bl from-amber-400 to-red-500 rounded-full animate-pulse" />
              <Zap className="relative w-6 h-6 text-white fill-white/10 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            </div>
          </div>

          {/* Sun label */}
          <div className="mt-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-950/40 border border-orange-500/20 backdrop-blur-sm">
            <span className="font-mono text-[8px] text-orange-400 tracking-widest font-bold">SOLAR_EMISSION_MAX</span>
          </div>
        </div>

        {/* Light Rays & Beams (Middle/Connecting Area) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ray Paths from Sun (Top Right) to Panel (Bottom Left) */}
            <path d="M 320,80 L 80,280" stroke="url(#ray-gradient)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-ray-flow" />
            <path d="M 300,50 L 60,250" stroke="url(#ray-gradient-fast)" strokeWidth="1" strokeDasharray="4,8" className="animate-ray-flow-fast" />
            <path d="M 340,110 L 100,310" stroke="url(#ray-gradient-slow)" strokeWidth="2" strokeDasharray="10,5" className="animate-ray-flow-slow" />
            <path d="M 310,95 L 70,295" stroke="url(#ray-gradient)" strokeWidth="1.2" strokeDasharray="8,4" className="animate-ray-flow" />
            <path d="M 330,65 L 90,265" stroke="url(#ray-gradient-fast)" strokeWidth="1.5" strokeDasharray="3,6" className="animate-ray-flow-fast" />

            {/* Gradients */}
            <defs>
              <linearGradient id="ray-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="ray-gradient-fast" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="ray-gradient-slow" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Photons / Particles flowing diagonally */}
          {Array.from({ length: 10 }).map((_, i) => {
            const delays = [0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
            const offsets = [
              { x: -10, y: 10 },
              { x: 10, y: -10 },
              { x: -20, y: 20 },
              { x: 20, y: -20 },
              { x: 0, y: 0 },
              { x: -5, y: 5 },
              { x: 5, y: -5 },
              { x: -15, y: 15 },
              { x: 15, y: -15 },
              { x: 0, y: 0 }
            ]
            const durations = [1.5, 1.2, 1.8, 1.4, 1.6, 1.3, 1.9, 1.5, 1.7, 1.4]
            const sizes = [3, 5, 4, 6, 3, 4, 5, 4, 3, 4]

            return (
              <div
                key={i}
                className="absolute animate-photon-travel"
                style={{
                  animationDelay: `${delays[i]}s`,
                  animationDuration: `${durations[i]}s`,
                }}
              >
                <div
                  className="rounded-full bg-gradient-to-br from-amber-400 to-yellow-200 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                  style={{
                    width: `${sizes[i]}px`,
                    height: `${sizes[i]}px`,
                    transform: `translate(${offsets[i].x}px, ${offsets[i].y}px)`,
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Solar Panel (Bottom Left) */}
        <div className="absolute bottom-4 left-4 z-10 flex flex-col items-center justify-center">
          {/* 3D Solar Panel */}
          <div
            className="relative w-44 h-28 bg-slate-950/90 border-2 border-slate-700/80 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col p-2 backdrop-blur-sm"
            style={{
              transform: 'perspective(800px) rotateX(35deg) rotateY(15deg) rotateZ(-10deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Frame Highlight */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-lg pointer-events-none" />

            {/* Solar Cells Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-1 h-full w-full">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative rounded bg-gradient-to-br from-[#0c2240] to-[#061226] border border-blue-900/40 overflow-hidden"
                >
                  {/* Internal grid circuit lines */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-500/10" />
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-500/10" />

                  {/* Charging highlight/glow when sunlight hits */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/20 to-amber-300/30 animate-pulse"
                    style={{
                      animationDelay: `${(idx % 4) * 0.15 + (Math.floor(idx / 4) * 0.2)}s`,
                      animationDuration: '1.5s'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Glossy overlay sheen */}
            <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 translate-x-[-50%] animate-sheen pointer-events-none" />
          </div>

          {/* Mini energy indicator at base of panel */}
          <div className="mt-3 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-sm animate-pulse">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span className="font-mono text-[8px] text-cyan-300 tracking-widest font-bold">ABSORBING_PHOTONS</span>
          </div>
        </div>
      </div>

      {/* Brand Header */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black italic tracking-widest text-white">
          SOLEARTH
        </h1>
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] text-slate-500 uppercase mt-2">
          OPTIMIZING PERFORMANCE
        </p>
      </div>

      {/* Loading Bar */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-64 h-1.5 bg-slate-900 border border-white/5 rounded-full overflow-hidden shadow-[0_0_12px_rgba(6,182,212,0.1)]">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500 transition-all duration-75 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-amber-500/80 mt-2 tracking-wider">
          LOADING SYSTEM PROTOCOLS... {Math.round(progress)}%
        </span>
      </div>

      {/* Top Right Tech Info */}
      <div className="absolute top-6 right-6 text-right font-mono text-[9px] text-slate-500 tracking-widest leading-relaxed">
        <div className="text-cyan-400 font-bold">SOLAR_CORE_L3_ACTIVE</div>
        <div>VOLTAGE: {Math.round(410 + (progress * 0.4))}V</div>
        <div>ABSORPTION_RATE: {Math.round(85 + (progress * 0.15))}%</div>
      </div>

      {/* Bottom Left Copyright */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-slate-600 tracking-wider">
        © 2026 SOLEARTH ENERGY
      </div>

      {/* Bottom Right Init State */}
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-slate-600 tracking-widest">
        SYSTEM_CHARGE: {(progress * 0.12).toFixed(2)} kWh
      </div>

      {/* Inject spinning and particle keyframes */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes photonTravel {
          0% {
            top: 20%;
            left: 78%;
            transform: scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1.1);
          }
          90% {
            opacity: 1;
            transform: scale(0.9);
          }
          100% {
            top: 80%;
            left: 22%;
            transform: scale(0.4);
            opacity: 0;
          }
        }
        @keyframes rayFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes sheen {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 6s linear infinite;
        }
        .animate-photon-travel {
          animation: photonTravel linear infinite;
        }
        .animate-ray-flow {
          animation: rayFlow 1.2s linear infinite;
        }
        .animate-ray-flow-fast {
          animation: rayFlow 0.8s linear infinite;
        }
        .animate-ray-flow-slow {
          animation: rayFlow 2s linear infinite;
        }
        .animate-sheen {
          animation: sheen 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
