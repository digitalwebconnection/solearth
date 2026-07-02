import { useEffect, useState } from "react";

const slides = [
  { img: "/images/solar/solar-panel-rooftop.webp" },
  { img: "/images/solar/solar-workers-roof.webp" },
  { img: "/images/solar/solar-sunset-array.webp" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax
  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  // Click Left = Previous | Right = Next
  const handleClick = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();

    if (e.clientX < rect.width / 2) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative h-full md:h-[95vh] min-h-[600px] overflow-hidden cursor-pointer select-none"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            draggable={false}
            loading={index === 0 ? "eager" : "lazy"}
            {...(index === 0 ? { fetchPriority: "high" } : {})}
            className="absolute inset-0 w-[110%] h-[110%] object-cover transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.08)`,
            }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Bottom Wave */}
      <div className="absolute -bottom-px left-0 right-0 z-20 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[40px] lg:h-[80px]"
        >
          <path
            fill="white"
            d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H0Z"
          />
        </svg>
      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}