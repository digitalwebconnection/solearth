import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

// Define static variables outside the component to keep the render function completely pure
const STARS = [
  { id: 0, left: '12%', top: '15%', size: 1.2, delay: 0.5 },
  { id: 1, left: '85%', top: '10%', size: 2.1, delay: 1.2 },
  { id: 2, left: '45%', top: '78%', size: 1.5, delay: 2.3 },
  { id: 3, left: '68%', top: '32%', size: 2.2, delay: 0.8 },
  { id: 4, left: '25%', top: '65%', size: 1.1, delay: 3.1 },
  { id: 5, left: '92%', top: '80%', size: 1.8, delay: 1.9 },
  { id: 6, left: '15%', top: '88%', size: 2.2, delay: 2.7 },
  { id: 7, left: '55%', top: '18%', size: 1.4, delay: 0.2 },
  { id: 8, left: '72%', top: '55%', size: 1.9, delay: 1.5 },
  { id: 9, left: '38%', top: '42%', size: 2.3, delay: 3.4 },
  { id: 10, left: '80%', top: '68%', size: 1.3, delay: 0.7 },
  { id: 11, left: '5%', top: '50%', size: 1.6, delay: 2.1 },
  { id: 12, left: '62%', top: '90%', size: 2.0, delay: 1.1 },
  { id: 13, left: '30%', top: '12%', size: 1.7, delay: 2.8 },
  { id: 14, left: '88%', top: '40%', size: 1.5, delay: 3.0 },
  { id: 15, left: '18%', top: '38%', size: 2.4, delay: 0.4 },
  { id: 16, left: '50%', top: '50%', size: 1.2, delay: 1.7 },
  { id: 17, left: '77%', top: '22%', size: 1.9, delay: 2.5 },
  { id: 18, left: '35%', top: '72%', size: 2.1, delay: 0.9 },
  { id: 19, left: '95%', top: '58%', size: 1.4, delay: 3.3 },
  { id: 20, left: '22%', top: '25%', size: 2.3, delay: 1.6 },
  { id: 21, left: '60%', top: '60%', size: 1.7, delay: 0.1 },
  { id: 22, left: '42%', top: '85%', size: 1.5, delay: 2.9 },
  { id: 23, left: '82%', top: '85%', size: 2.0, delay: 0.6 },
  { id: 24, left: '10%', top: '70%', size: 1.2, delay: 3.5 },
  { id: 25, left: '67%', top: '75%', size: 1.8, delay: 2.0 },
  { id: 26, left: '28%', top: '52%', size: 2.5, delay: 1.4 },
  { id: 27, left: '74%', top: '5%', size: 1.3, delay: 2.2 },
  { id: 28, left: '48%', top: '95%', size: 1.6, delay: 0.3 },
  { id: 29, left: '90%', top: '28%', size: 2.2, delay: 1.8 },
  { id: 30, left: '15%', top: '58%', size: 1.4, delay: 2.6 },
  { id: 31, left: '52%', top: '38%', size: 1.9, delay: 0.9 },
  { id: 32, left: '84%', top: '50%', size: 2.1, delay: 3.2 },
  { id: 33, left: '36%', top: '20%', size: 1.7, delay: 1.5 },
  { id: 34, left: '70%', top: '48%', size: 1.3, delay: 2.4 },
  { id: 35, left: '8%', top: '30%', size: 2.0, delay: 0.7 },
  { id: 36, left: '58%', top: '80%', size: 1.5, delay: 3.5 },
  { id: 37, left: '94%', top: '15%', size: 1.8, delay: 1.0 },
  { id: 38, left: '40%', top: '5%', size: 2.2, delay: 2.9 },
  { id: 39, left: '64%', top: '12%', size: 1.6, delay: 0.4 },
]

// Target X and Y offsets represent displacement vectors from Sun (top-right) to Solar Panel (bottom-left)
const PHOTONS = [
  { id: 0, delay: 0.0, targetX: '-200px', targetY: '190px', duration: 1.5 },
  { id: 1, delay: 0.3, targetX: '-180px', targetY: '205px', duration: 1.4 },
  { id: 2, delay: 0.6, targetX: '-160px', targetY: '175px', duration: 1.6 },
  { id: 3, delay: 0.9, targetX: '-195px', targetY: '210px', duration: 1.35 },
  { id: 4, delay: 1.2, targetX: '-215px', targetY: '180px', duration: 1.5 },
  { id: 5, delay: 1.5, targetX: '-170px', targetY: '195px', duration: 1.45 },
  { id: 6, delay: 1.8, targetX: '-185px', targetY: '170px', duration: 1.65 },
  { id: 7, delay: 2.1, targetX: '-205px', targetY: '200px', duration: 1.4 },
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [statusText, setStatusText] = useState('INITIATING SOLAR CORES...')

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden'

    let currentProgress = 0
    const delay = 35 // ms

    const timer = setInterval(() => {
      // Non-linear simulation of loading progress for realism and tension
      let increment: number
      if (currentProgress < 25) {
        increment = 2.8 // fast start
      } else if (currentProgress < 65) {
        increment = 2.2 // normal charging
      } else if (currentProgress < 90) {
        increment = 1.6 // slowing down
      } else if (currentProgress < 99) {
        increment = 1.2 // tail end calibration
      } else {
        increment = 0.1 // crawl to finish
      }

      currentProgress = Math.min(currentProgress + increment, 100)
      setProgress(currentProgress)

      // Update status messages dynamically based on progress ranges
      if (currentProgress < 20) {
        setStatusText('BOOTING PHOTOVOLTAIC MODULES...')
      } else if (currentProgress < 40) {
        setStatusText('SYNCHRONIZING INVERTER ARCHITECTURE...')
      } else if (currentProgress < 60) {
        setStatusText('MEASURING PHOTON FLUX DENSITY...')
      } else if (currentProgress < 80) {
        setStatusText('STABILIZING GRID DC/AC POWER FLOW...')
      } else if (currentProgress < 98) {
        setStatusText('OPTIMIZING BATTERY CELL STORAGE...')
      } else {
        setStatusText('SOLAR SYSTEM ENGAGED & ONLINE')
      }

      if (currentProgress >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          setIsFading(true)
          // Call onComplete immediately so App can start mounting the page
          // underneath while the fade-out animation plays.
          // App.tsx delays the Preloader unmount by 800ms so the fade finishes first.
          onComplete()
          document.body.style.overflow = 'unset'
        }, 100) // hold 100% briefly
      }
    }, delay)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = 'unset'
    }
  }, [onComplete])

  // Circular progress loader geometry (Aligned on the Top-Right Side)
  const cx = 300
  const cy = 80
  const r = 52
  const circumference = 2 * Math.PI * r
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Calculate coordinates of the orbiting dot at the tip of the progress bar
  // Starts at top (-90 degrees)
  const angle = (progress / 100) * 360 - 90
  const rad = (angle * Math.PI) / 180
  const dotX = cx + r * Math.cos(rad)
  const dotY = cy + r * Math.sin(rad)

  return (
    <div
      className={`fixed inset-0 bg-[#040712] flex flex-col items-center justify-center font-sans overflow-hidden select-none transition-all duration-700 ease-in-out ${isFading ? 'opacity-0 scale-95 -translate-y-2.5 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      style={{ zIndex: 9999 }}
    >
      {/* Background Star Field */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute bg-blue-100 rounded-full animate-pulse opacity-40"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Radial Background Glow Behind Sun (Aligned to the Top-Right) */}
      <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Centerpiece Container */}
      <div className="relative w-[400px] h-[390px] flex flex-col items-center justify-start z-10 scale-75 xs:scale-90 sm:scale-100 transition-transform">

        {/* SVG overlay containing the loader circle, rays, and sun connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 390">
          <defs>
            {/* Sun Rays Gradient */}
            <linearGradient id="sun-ray-1" x1="80%" y1="20%" x2="20%" y2="80%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sun-ray-2" x1="80%" y1="20%" x2="20%" y2="80%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sun-ray-3" x1="80%" y1="20%" x2="20%" y2="80%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </linearGradient>

            {/* Circular Progress Ring Gradient */}
            <linearGradient id="loader-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* Flowing Energy Beams / Ray Paths (Sun on the Top-Right to Panel on the Bottom-Left) */}
          <path d="M 300,80 L 40,270" stroke="url(#sun-ray-1)" strokeWidth="1.5" strokeDasharray="5,6" className="animate-ray-flow" />
          <path d="M 300,80 L 80,280" stroke="url(#sun-ray-2)" strokeWidth="1" strokeDasharray="3,7" className="animate-ray-flow-fast" />
          <path d="M 300,80 L 120,285" stroke="url(#sun-ray-3)" strokeWidth="2" strokeDasharray="8,5" className="animate-ray-flow-slow" />
          <path d="M 300,80 L 160,280" stroke="url(#sun-ray-2)" strokeWidth="1" strokeDasharray="3,7" className="animate-ray-flow-fast" />
          <path d="M 300,80 L 200,270" stroke="url(#sun-ray-1)" strokeWidth="1.5" strokeDasharray="5,6" className="animate-ray-flow" />

          {/* Background Track Circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            className="stroke-slate-800/40"
            strokeWidth="3.5"
            fill="transparent"
          />

          {/* Active Progress Circular Ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="url(#loader-ring-grad)"
            strokeWidth="3.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-75 ease-out"
          />

          {/* Orbiting Charge Dot at Front edge of progress */}
          {progress > 0 && (
            <g>
              {/* Outer Glow Halo */}
              <circle
                cx={dotX}
                cy={dotY}
                r="8"
                className="fill-amber-500/40 blur-xs"
              />
              {/* Core Active Dot */}
              <circle
                cx={dotX}
                cy={dotY}
                r="4.5"
                className="fill-yellow-300"
                style={{ filter: 'drop-shadow(0 0 4px #facc15)' }}
              />
            </g>
          )}
        </svg>

        {/* Sun Core (Positioned on the Top-Right Side) */}
        <div className="absolute top-[40px] left-[260px] w-20 h-20 rounded-full flex items-center justify-center z-20">
          {/* Inner Glowing Sun Body */}
          <div className="relative w-14 h-14 rounded-full bg-linear-to-tr from-orange-600 via-amber-500 to-yellow-300 shadow-[0_0_35px_rgba(249,115,22,0.85)] flex items-center justify-center overflow-hidden border border-yellow-300/30">
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white/20 rounded-full blur-[1px]" />
            <div className="absolute inset-0.5 bg-linear-to-bl from-amber-400 to-red-500 rounded-full animate-pulse" />
            <Zap className="relative w-5 h-5 text-white fill-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] animate-bounce" style={{ animationDuration: '2s' }} />
          </div>

          {/* Outer Sun Corona Flares */}
          <div className="absolute w-20 h-20 rounded-full border border-dashed border-amber-500/25 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[86px] h-[86px] rounded-full border border-orange-500/10 animate-spin-reverse pointer-events-none" />
        </div>

        {/* Floating Photon Particles streaming diagonally from Sun to Panel */}
        {PHOTONS.map((photon) => (
          <div
            key={photon.id}
            className="absolute top-[80px] left-[300px] z-10 pointer-events-none animate-photon-travel"
            style={{
              animationDelay: `${photon.delay}s`,
              animationDuration: `${photon.duration}s`,
              '--photon-target-x': photon.targetX,
              '--photon-target-y': photon.targetY,
            } as React.CSSProperties & {
              '--photon-target-x': string
              '--photon-target-y': string
            }}
          >
            <div className="w-2 h-2 rounded-full bg-linear-to-br from-yellow-300 to-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
          </div>
        ))}

        {/* 3D Solar Panel Grid (Positioned on the Bottom-Left Side) */}
        <div className="absolute top-[230px] left-[25px] z-20 flex flex-col items-center justify-center">
          <div
            className="relative w-52 h-[76px] bg-slate-950/90 border border-slate-700/70 rounded-lg overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.12)] flex flex-col p-1.5 backdrop-blur-sm"
            style={{
              transform: 'perspective(300px) rotateX(35deg) rotateY(15deg) rotateZ(-10deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Grid Cells */}
            <div className="grid grid-cols-4 grid-rows-3 gap-1 h-full w-full">
              {Array.from({ length: 12 }).map((_, idx) => {
                const isPulse = progress > 0
                return (
                  <div
                    key={idx}
                    className="relative rounded-[2px] bg-linear-to-br from-[#0c2240] to-[#040c1a] border border-blue-900/30 overflow-hidden"
                  >
                    {/* Internal cell wafer grid */}
                    <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-cyan-500/5" />
                    <div className="absolute inset-y-0 left-1/2 w-[0.5px] bg-cyan-500/5" />

                    {/* Absorption glow effect */}
                    {isPulse && (
                      <div
                        className="absolute inset-0 bg-linear-to-tr from-cyan-500/0 via-cyan-400/20 to-amber-300/20 animate-pulse"
                        style={{
                          animationDelay: `${(idx % 4) * 0.12 + Math.floor(idx / 4) * 0.15}s`,
                          animationDuration: '1.2s'
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Glossy Sheen overlay sweep */}
            <div className="absolute -inset-full bg-linear-to-tr from-transparent via-white/5 to-transparent rotate-45 -translate-x-full animate-sheen pointer-events-none" />
          </div>

          {/* Power status indicator at base of panel */}
          <div className="mt-4 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/25 backdrop-blur-xs shadow-[0_0_10px_rgba(6,182,212,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[8px] text-cyan-300 tracking-[0.15em] font-bold">GRID_CONNECTED</span>
          </div>
        </div>

      </div>

      {/* Brand & Loading Info Footer Area */}
      <div className="mt-8 flex flex-col items-center text-center z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold italic tracking-[0.25em] text-white">
          SOLEARTH
        </h1>
        <p className="text-[9px] font-bold tracking-[0.5em] text-white uppercase mt-1">
          SUSTAINABLE ENERGY SYSTEMS
        </p>

        {/* Numeric percentage counter */}
        <div className="mt-6 flex items-baseline gap-0.5">
          <span className="font-mono text-3xl font-bold tracking-tight bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(245,158,11,0.25)]">
            {Math.round(progress)}
          </span>
          <span className="font-mono text-sm font-semibold text-orange-500">%</span>
        </div>

        {/* Text Loading diagnostics */}
        <div className="mt-2 text-[9px] font-mono text-white tracking-widest min-w-[280px] h-4 uppercase">
          {statusText}
        </div>
      </div>

      {/* Bottom Left Status */}
      <div className="absolute bottom-6 left-6 font-mono text-[8px] text-slate-800 tracking-wider hidden sm:block">
        © 2026 SOLEARTH ENERGY / WEB INTERFACE BOOT
      </div>

      {/* Bottom Right energy statistics */}
      <div className="absolute bottom-6 right-6 font-mono text-[8px] text-slate-800 tracking-widest text-right hidden sm:block">
        <div>GEN_RATE: {Math.round(280 + progress * 17.5)} W/m²</div>
        <div>EST_POWER: {(0.8 + (progress * 0.032)).toFixed(2)} kW</div>
      </div>

      {/* Local custom CSS keyframes for layout flows */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes rayFlow {
          to {
            stroke-dashoffset: -22;
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
        @keyframes photonTravel {
          0% {
            transform: translate(0px, 0px) scale(0.3);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: translate(calc(var(--photon-target-x) * 0.15), calc(var(--photon-target-y) * 0.15)) scale(1.1);
          }
          85% {
            opacity: 1;
            transform: translate(calc(var(--photon-target-x) * 0.85), calc(var(--photon-target-y) * 0.85)) scale(0.9);
          }
          100% {
            transform: translate(var(--photon-target-x), var(--photon-target-y)) scale(0.4);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 6s linear infinite;
        }
        .animate-ray-flow {
          animation: rayFlow 1.5s linear infinite;
        }
        .animate-ray-flow-fast {
          animation: rayFlow 0.9s linear infinite;
        }
        .animate-ray-flow-slow {
          animation: rayFlow 2.4s linear infinite;
        }
        .animate-sheen {
          animation: sheen 3.2s ease-in-out infinite;
        }
        .animate-photon-travel {
          animation: photonTravel linear infinite;
        }
      `}</style>
    </div>
  )
}
