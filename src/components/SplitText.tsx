import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words' | 'lines'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  onLetterAnimationComplete?: () => void
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) {
  const ref = useRef<HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement | null>(null)
  const animationCompletedRef = useRef(false)
  const onCompleteRef = useRef(onLetterAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete
  }, [onLetterAnimationComplete])

  useEffect(() => {
    if (document.fonts && document.fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    } else {
      setFontsLoaded(true)
    }
  }, [])

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return
      // Prevent re-animation if already completed
      if (animationCompletedRef.current) return
      const el = ref.current

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      let targets: HTMLElement[] = []
      if (splitType === 'chars') {
        targets = Array.from(el.querySelectorAll('.split-char'))
      } else if (splitType === 'words') {
        targets = Array.from(el.querySelectorAll('.split-word'))
      } else {
        targets = Array.from(el.querySelectorAll('.split-line'))
      }

      if (targets.length === 0) return

      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4
          },
          onComplete: () => {
            animationCompletedRef.current = true
            onCompleteRef.current?.()
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      )

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill()
        })
        tween.kill()
      }
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded
      ],
      scope: ref
    }
  )

  const renderContent = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="split-char inline-block"
          style={{
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            willChange: 'transform, opacity'
          }}
        >
          {char}
        </span>
      ))
    }

    if (splitType === 'words') {
      return text.split(' ').map((word, index, arr) => (
        <span
          key={index}
          className="split-word inline-block"
          style={{ willChange: 'transform, opacity' }}
        >
          {word}
          {index < arr.length - 1 ? ' ' : ''}
        </span>
      ))
    }

    // fallback / lines
    return (
      <span className="split-line inline-block" style={{ willChange: 'transform, opacity' }}>
        {text}
      </span>
    )
  }

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal' as const,
    wordWrap: 'break-word' as const,
    willChange: 'transform, opacity'
  }
  const classes = `split-parent ${className}`
  const Tag = tag || 'p'

  return (
    <Tag ref={ref} style={style} className={classes}>
      {renderContent()}
    </Tag>
  )
}
