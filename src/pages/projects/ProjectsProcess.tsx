import { useLayoutEffect, useRef, useCallback } from 'react'
import { PhoneCall, FileEdit, HardHat, Radio, Check, ArrowRight } from 'lucide-react'

const scrollStackStyles = `
.scroll-stack-scroller {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: visible;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: scroll-position;
}

.scroll-stack-scroller.use-window-scroll {
  overflow: visible;
  height: auto;
}

.scroll-stack-inner {
  padding: 3vh 0rem 2vh;
  min-height: auto;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .scroll-stack-inner {
    padding: 4vh 0rem 3vh;
  }
}

.scroll-stack-card-wrapper {
  position: relative;
  width: 100%;
}

.scroll-stack-card {
  transform-origin: top center;
  will-change: transform, filter;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin: 40px 0;
  box-sizing: border-box;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
}
`;

export const ScrollStackItem = ({ children, itemClassName = '' }: { children: React.ReactNode; itemClassName?: string }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardOffsetsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller || document.documentElement
      };
    }
  }, [useWindowScroll]);

  // Measures offsets statically (ignoring current translations) to prevent feedback loops
  const measureOffsets = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    const offsets: number[] = [];

    // Temporarily reset transform styles to measure clean native layout offset heights
    const originalTransforms = cards.map(c => c.style.transform);
    const originalFilters = cards.map(c => c.style.filter);

    cards.forEach(c => {
      c.style.transform = 'none';
      c.style.filter = 'none';
    });

    cards.forEach((card) => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();
        offsets.push(rect.top + window.scrollY);
      } else {
        offsets.push(card.offsetTop);
      }
    });

    // Restore pre-measurement styles
    cards.forEach((card, i) => {
      card.style.transform = originalTransforms[i] || '';
      card.style.filter = originalFilters[i] || '';
    });

    cardOffsetsRef.current = offsets;
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const lastCardIndex = cardsRef.current.length - 1;
    const lastCardTop = cardOffsetsRef.current[lastCardIndex] || 0;
    const pinEnd = lastCardTop - stackPositionPx - itemStackDistance * lastCardIndex;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] || 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardOffsetsRef.current[j] || 0;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.perspective = '1000px';
    });

    measureOffsets();
    updateCardTransforms();

    const onScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        updateCardTransforms();
      });
    };

    const handleResize = () => {
      measureOffsets();
      updateCardTransforms();
    };

    if (useWindowScroll) {
      window.addEventListener('scroll', onScroll, { passive: true });
    } else {
      scroller.addEventListener('scroll', onScroll, { passive: true });
    }
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (useWindowScroll) {
        window.removeEventListener('scroll', onScroll);
      } else {
        scroller.removeEventListener('scroll', onScroll);
      }
      window.removeEventListener('resize', handleResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    measureOffsets,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'use-window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default function ProjectsProcess() {
  const steps = [
    {
      id: '01',
      title: 'Free Energy Audit',
      tag: 'Initial Evaluation',
      desc: 'We analyze your quarterly electricity bills and use advanced satellite mapping to inspect your roof geometry, orientation, and shading parameters.',
      icon: PhoneCall,
      color: 'text-[#FCC200]',
      bgColor: 'bg-[#FCC200]',
      deliverables: [
        'Quarterly consumption pattern analysis',
        'Satellite roof shading & pitch report',
        'Preliminary system capacity estimate'
      ],
      spotlight: {
        title: 'Phase Objective',
        text: 'Determine your property’s exact solar feasibility and calculate how much utility dependency we can offset before committing to a design.',
        highlight: 'Zero Obligation Assessment'
      }
    },
    {
      id: '02',
      title: 'Custom Engineering Design',
      tag: 'System Architecture',
      desc: 'Our CEC-accredited engineers structure a premium system configuration, mapping panel placements to optimize seasonal energy harvest.',
      icon: FileEdit,
      color: 'text-[#2AA9E4]',
      bgColor: 'bg-[#2AA9E4]',
      deliverables: [
        '3D CAD roof panel placement layout',
        'Annual solar yield & generation forecast',
        'Premium inverter & battery wiring schematic'
      ],
      spotlight: {
        title: 'Engineering Specs',
        text: 'Aligning panel strings to minimize voltage drop and maximize panel efficiency under extreme summer temperatures.',
        highlight: 'Fully Customized Proposals'
      }
    },
    {
      id: '03',
      title: 'Professional Installation',
      tag: 'CEC Certified Construction',
      desc: 'Our certified installation crews mount racking, deploy smart solar modules, wire inverters, and test safety isolators.',
      icon: HardHat,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500',
      deliverables: [
        'Premium mounting rails & framing anchorage',
        'CEC-compliant wiring & safety isolators',
        'System pressure & isolation verification'
      ],
      spotlight: {
        title: 'Installation Standards',
        text: 'All structural brackets are sealed for leak-proof protection, and electrical components comply strictly with AS/NZS standards.',
        highlight: 'Double-Checked Safety Protocols'
      }
    },
    {
      id: '04',
      title: 'Grid Connection & Support',
      tag: 'Activation & Handover',
      desc: 'We manage compliance inspections, fast-track grid metering approvals, and set up your real-time performance tracking application.',
      icon: Radio,
      color: 'text-[#1B74BB]',
      bgColor: 'bg-[#1B74BB]',
      deliverables: [
        'Grid meter reprogramming request',
        'Compliance certificate submission',
        'Mobile monitoring dashboard configuration'
      ],
      spotlight: {
        title: 'Post-Install Guarantee',
        text: 'Unlock real-time monitoring of your production, household consumption, and battery bank state right on your smartphone.',
        highlight: '10-Year Installation Warranty'
      }
    }
  ]

  return (
    <section className="py-10 bg-slate-50 relative overflow-hidden" id="engineering-standards">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1B74BB 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: scrollStackStyles }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-px w-8 bg-[#FCC200]" />
            <span className="text-xs font-black text-[#1B74BB] uppercase tracking-widest">Our Method</span>
            <span className="h-px w-8 bg-[#FCC200]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold max-w-3xl mx-auto text-slate-900 tracking-tight leading-tight">
            Our Solar Panel Installation Process 
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-900 max-w-6xl mx-auto">
          Follow our Solar Panel Installation Process, from assessment to grid connection, delivering reliable solar solutions across Australia.   </p>
        </div>

        {/* Scroll Stack Container */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={32}
          stackPosition="12%"
          scaleEndPosition="8%"
          baseScale={0.92}
          rotationAmount={0}
          blurAmount={0}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <ScrollStackItem
                key={step.id}
                itemClassName="bg-white border border-slate-350 rounded-lg p-6 sm:p-10 shadow-lg text-left flex flex-col md:grid md:grid-cols-12 gap-8 items-stretch overflow-hidden min-h-[380px]"
              >
                {/* Left Box (7 Cols) */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.bgColor} text-white shadow-sm shrink-0`}>
                        <Icon className="w-5 h-5 stroke-2" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-[#FCC200] uppercase tracking-wider block">
                          Step {step.id} — {step.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-slate-800 font-semibold">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Spotlight Card (5 Cols) */}
                <div className="md:col-span-5 flex">
                  <div className="bg-slate-50/50 border border-slate-400 rounded-xl p-6 md:p-8 flex flex-col justify-between w-full relative overflow-hidden">
                    <div className={`absolute top-0 right-0 left-0 h-1.5 ${step.bgColor}`} />

                    <div className="space-y-4 text-left">
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest block">
                        {step.spotlight.title}
                      </span>
                      <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                        {step.spotlight.text}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#1B74BB]">
                      <span>{step.spotlight.highlight}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            )
          })}
        </ScrollStack>

      </div>
    </section>
  )
}
