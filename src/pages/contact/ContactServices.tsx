import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

// ============================================
// Simple CSS-class merging utility
// ============================================
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}

// ============================================
// SVG Icon Components
// ============================================
const FolderBackIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 16" className={cn("w-full h-full fill-current", className)}>
    <path d="M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z" />
  </svg>
)

const FolderCoverIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 16" className={cn("w-full h-full fill-current", className)}>
    <path d="M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z" />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-full h-full fill-current", className)}>
    <path
      opacity="0.3"
      d="M22.2,17.7l-4-2c-0.5-0.3-0.8-0.8-0.8-1.3v-1.6c0.1-0.1,0.2-0.3,0.4-0.5c0.5-0.8,0.9-1.6,1.2-2.5c0.5-0.2,0.9-0.6,0.9-1.2V7c0-0.4-0.2-0.7-0.4-0.9V3.7c0,0,0.5-3.7-4.6-3.7c-5,0-4.6,3.7-4.6,3.7v2.4C10.1,6.3,9.9,6.7,9.9,7v1.7c0,0.4,0.2,0.8,0.6,1c0.4,1.8,1.5,3.1,1.5,3.1v1.5c0,0.6-0.3,1.1-0.8,1.3l-3.7,2c-1.1,0.6-1.7,1.7-1.7,2.9v1.3H24v-1.3C24,19.4,23.3,18.3,22.2,17.7z"
    />
    <path
      opacity="0.5"
      d="M7.5,17.7l2.5-1.3c0,0,0,0,0,0l1.2-0.7c0.5-0.3,0.8-0.8,0.8-1.3v-1.5c0,0-0.4-0.5-0.9-1.4l0,0c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.4c0,0,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c-0.3-0.2-0.6-0.6-0.6-1V7c0-0.4,0.2-0.7,0.4-0.9V3.8C9.8,3.3,8.9,2.9,7.4,2.9c-4,0-4.1,3.3-4.1,3.3v2.1C3.1,8.5,2.9,8.8,2.9,9.1v1.4c0,0.4,0.2,0.7,0.5,0.9c0.4,1.6,1.6,2.7,1.6,2.7v1.3c0,0.5-0.3,0.9-0.7,1.1l-2.8,1.7C0.6,18.8,0,19.7,0,20.8v1.2h5.8v-1.3C5.8,19.4,6.5,18.3,7.5,17.7z"
    />
  </svg>
)

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("w-full h-full fill-current", className)}>
    <circle cx="12" cy="12" r="10" opacity="0.3" />
    <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z" />
  </svg>
)

const PadlockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 33.6" className={cn("w-full h-full fill-current", className)}>
    <path d="M23,13.5h-1.7V9.4C21.4,4.2,17.2,0,12,0C6.8,0,2.6,4.2,2.6,9.4v4.1H1c-0.5,0-1,0.4-1,1v18.2c0,0.5,0.4,1,1,1H23c0.5,0,1-0.4,1-1V14.4C24,13.9,23.6,13.5,23,13.5z M13.5,24.5v3.9c0,0.3-0.3,0.6-0.6,0.6h-1.8c-0.3,0-0.6-0.3-0.6-0.6v-3.9c-0.7-0.5-1.1-1.3-1.1-2.1c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6C14.6,23.3,14.2,24.1,13.5,24.5z M16.9,13.5H7.1V9.4c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9V13.5z" />
  </svg>
)

const CloudIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 22.2" className={cn("w-full h-full fill-current", className)}>
    <path d="M19.5,5.8c-0.3-1.5-1-2.9-2.2-4c-1.3-1.2-3-1.8-4.7-1.8C11.3,0,10,0.4,8.9,1.1C8,1.7,7.2,2.5,6.6,3.5c-0.2,0-0.5-0.1-0.7-0.1c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.5,0.1,0.8C0.8,9,0,10.6,0,12.3C0,13.6,0.5,15,1.4,16c1,1.1,2.2,1.7,3.6,1.8c0,0,0,0,0,0h4.2c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H5c-2-0.1-3.7-2-3.7-4.2c0-1.4,0.8-2.7,2-3.4c0.3-0.2,0.4-0.5,0.3-0.8C3.5,7.8,3.4,7.5,3.4,7.2c0-1.4,1.1-2.5,2.5-2.5c0.3,0,0.6,0,0.8,0.1c0.3,0.1,0.7,0,0.8-0.3c0.9-2,2.9-3.2,5.1-3.2c2.9,0,5.3,2.2,5.6,5.1c0,0.3,0.3,0.5,0.6,0.6c2.2,0.4,3.9,2.4,3.9,4.7c0,2.5-1.9,4.6-4.3,4.8h-3.6c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h3.7c0,0,0,0,0,0c1.5-0.1,2.9-0.8,4-2c1-1.1,1.6-2.6,1.6-4.1C24,8.9,22.1,6.5,19.5,5.8z M16,12.9c0.3-0.3,0.3-0.7,0-0.9l-3.5-3.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2L8,12c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l2.4-2.4v11c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-11l2.4,2.4C15.3,13.2,15.7,13.2,16,12.9z" />
  </svg>
)

// ============================================
// Types & Interfaces
// ============================================
export type FolderVariant =
  | "devi"
  | "rudras"
  | "ardra"
  | "shakti"
  | "kubera"
  | "hari"
  | "ravi"

const variantColors: Record<
  FolderVariant,
  {
    back: string;
    cover: string;
    deco: string;
  }
> = {
  devi: {
    back: "text-slate-900 dark:text-slate-900",
    cover: "text-slate-350 dark:text-slate-900",
    deco: "text-slate-800 dark:text-slate-200",
  },
  rudras: {
    back: "text-blue-700 dark:text-blue-800",
    cover: "text-blue-500 dark:text-blue-600",
    deco: "text-[#FCC200]",
  },
  ardra: {
    back: "text-rose-700 dark:text-rose-800",
    cover: "text-rose-500 dark:text-rose-600",
    deco: "text-rose-200 dark:text-rose-100",
  },
  shakti: {
    back: "text-indigo-800",
    cover: "text-indigo-600",
    deco: "text-[#FCC200]",
  },
  kubera: {
    back: "text-sky-800",
    cover: "text-sky-600",
    deco: "text-sky-100",
  },
  hari: {
    back: "text-[#1B74BB]",
    cover: "text-[#2AA9E4]",
    deco: "text-yellow-400",
  },
  ravi: {
    back: "text-amber-600",
    cover: "text-amber-500",
    deco: "text-[#1B74BB]",
  },
}

const createCircularPositions = (count: number, radius: number = 72) => {
  return Array.from({ length: count }, (_, i) => {
    const startAngle = Math.PI / count
    const angle = startAngle / 2 + startAngle * i
    return {
      x: Math.round(radius * Math.cos(angle)),
      y: Math.round(-radius * Math.sin(angle)),
    }
  })
}

// ============================================
// Folder Sub-Components
// ============================================
const DeviFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.devi
}> = ({ images, isHovered, colors }) => {
  const positions = createCircularPositions(images.length, 60)
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute w-8 h-8 object-cover rounded-full border border-white shadow-sm"
            initial={{ opacity: 0, scale: 0.7, x: 0, y: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: positions[i]?.x || 0, y: positions[i]?.y || 0 }
                : { opacity: 0, scale: 0.7, x: 0, y: 0 }
            }
            transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <div className="relative aspect-20/16 w-20" style={{ perspective: "800px" }}>
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className={cn("relative", colors.cover)}><FolderCoverIcon /></div>
      </div>
    </div>
  )
}

const RudrasFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.rudras
}> = ({ images, isHovered, colors }) => {
  const positions = createCircularPositions(images.length, 65)
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute w-8 h-8 object-cover rounded-full border border-white shadow-sm"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: -positions[i]?.x || 0, y: positions[i]?.y || 0 }
                : { opacity: 0, scale: 0, x: 0, y: 0 }
            }
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          />
        ))}
      </div>
      <div className="relative aspect-20/16 w-20" style={{ perspective: "800px" }}>
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3/4 bg-white rounded-md shadow-xs" />
        <motion.div
          className={cn("relative", colors.cover)}
          style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          animate={isHovered ? { rotateX: -30 } : { rotateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <UsersIcon />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const ArdraFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.ardra
}> = ({ images, isHovered, colors }) => {
  const [randomPositions] = useState(() =>
    images.map((_, i) => {
      const radius = 50 + Math.random() * 15
      const angle = (2 * (i + 1) * Math.PI) / images.length
      return {
        x: Math.round(radius * Math.cos(angle)),
        y: Math.round(radius * Math.sin(angle)),
      }
    })
  )
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute w-8 h-8 object-cover rounded-full border border-white shadow-sm"
            initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: randomPositions[i]?.x || 0, y: randomPositions[i]?.y || 0 }
                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
            }
            transition={{ duration: 0.4, ease: [0.1, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <motion.div className="relative w-20 aspect-20/16" animate={isHovered ? { scale: 0.88 } : { scale: 1 }}>
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className={cn("relative", colors.cover)}>
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <GlobeIcon />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ShaktiFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.shakti
}> = ({ images, isHovered, colors }) => {
  return (
    <motion.div className="relative" animate={isHovered ? { y: 8 } : { y: 0 }} transition={{ duration: 0.3 }}>
      <div className="relative w-20 aspect-20/16">
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="absolute w-8 h-10 object-cover rounded border border-white shadow-sm origin-[-300%_50%]"
              initial={{ opacity: 0, rotate: 0 }}
              animate={
                isHovered
                  ? { opacity: 1, rotate: -8 * (images.length - i - 1) - 10 }
                  : { opacity: 0, rotate: 0 }
              }
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          ))}
        </div>
        <div className={cn("relative", colors.cover)}>
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <PadlockIcon />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const KuberaFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.kubera
}> = ({ images, isHovered, colors }) => {
  const floatingMotions = React.useMemo(
    () =>
      images.map((_, i) => ({
        y: -120 - ((i * 15) % 35),
        x: ((i * 20) % 30) - 15,
      })),
    [images]
  )
  return (
    <div className="relative">
      <div className="relative w-20 aspect-20/16" style={{ perspective: "800px" }}>
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3/4 bg-white rounded-md shadow-xs" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 pointer-events-none">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="absolute w-full h-full object-cover rounded shadow-md"
              initial={{ opacity: 0 }}
              animate={
                isHovered
                  ? {
                    opacity: [1, 0],
                    y: [0, floatingMotions[i]?.y ?? -120],
                    x: floatingMotions[i]?.x ?? 0,
                  }
                  : { opacity: 0 }
              }
              transition={{
                duration: 1.5,
                delay: i * 0.4,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
            />
          ))}
        </div>
        <motion.div
          className={cn("relative", colors.cover)}
          style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          animate={isHovered ? { rotateX: -35 } : { rotateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <CloudIcon />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const HariFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.hari
}> = ({ images, isHovered, colors }) => {
  const positions = createCircularPositions(images.length, 80)
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute w-8 h-8 object-cover rounded-full border border-white shadow-sm"
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: -positions[i]?.x || 0, y: -positions[i]?.y || 0 }
                : { opacity: 0, scale: 0.5, x: 0, y: 0 }
            }
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          />
        ))}
      </div>
      <motion.div
        className="relative w-20 aspect-20/16"
        style={{ perspective: "800px", transformOrigin: "50% 100%" }}
        animate={isHovered ? { y: -8, scaleX: 0.94, scaleY: 0.94 } : { y: 0, scaleX: 1, scaleY: 1 }}
      >
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3/4 bg-white/80 rounded-md" />
        <motion.div
          className={cn("relative", colors.cover)}
          style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          animate={isHovered ? { rotateX: -25 } : { rotateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <GlobeIcon />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const RaviFolder: React.FC<{
  images: string[]
  isHovered: boolean
  colors: typeof variantColors.ravi
}> = ({ images, isHovered, colors }) => {
  const reorder = (arr: string[]) => {
    const result: string[] = []
    let i = Math.ceil(arr.length / 2)
    let j = i - 1
    while (j >= 0) {
      result.push(arr[j--])
      if (i < arr.length) result.push(arr[i++])
    }
    return result
  }
  const orderedImages = React.useMemo(() => reorder(images), [images])
  return (
    <div className="relative">
      <div className="relative w-20 aspect-20/16" style={{ perspective: "800px" }}>
        <div className={cn("absolute inset-0", colors.back)}><FolderBackIcon /></div>
        <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3/4 bg-white rounded-md shadow-xs" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-12 pointer-events-none">
          {orderedImages.map((img, i) => {
            const interval = 22
            const c = orderedImages.length
            const x = -interval * Math.floor(c / 2) + interval * i + (c % 2 === 0 ? interval / 2 : 0)
            const rotateInterval = 8
            const rotate = -rotateInterval * Math.floor(c / 2) + rotateInterval * i + (c % 2 === 0 ? rotateInterval / 2 : 0)
            return (
              <motion.img
                key={i}
                src={img}
                alt=""
                className="absolute w-full h-full object-cover rounded shadow-md"
                initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                animate={
                  isHovered
                    ? { opacity: 1, y: -40, x, rotate }
                    : { opacity: 0, x: 0, y: 0, rotate: 0 }
                }
                transition={{ duration: 0.35 }}
              />
            )
          })}
        </div>
        <motion.div
          className={cn("relative", colors.cover)}
          style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          animate={isHovered ? { rotateX: -30 } : { rotateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FolderCoverIcon />
          <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5", colors.deco)}>
            <PadlockIcon />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ============================================
// Main FolderPreview Component
// ============================================
interface FolderPreviewProps {
  variant?: FolderVariant
  images: string[]
  isHovered?: boolean
}

export const FolderPreview: React.FC<FolderPreviewProps> = ({
  variant = "devi",
  images = [],
  isHovered = false
}) => {
  const colors = variantColors[variant]
  const renderFolder = () => {
    switch (variant) {
      case "devi":
        return <DeviFolder images={images} isHovered={isHovered} colors={colors} />
      case "rudras":
        return <RudrasFolder images={images} isHovered={isHovered} colors={colors} />
      case "ardra":
        return <ArdraFolder images={images} isHovered={isHovered} colors={colors} />
      case "shakti":
        return <ShaktiFolder images={images} isHovered={isHovered} colors={colors} />
      case "kubera":
        return <KuberaFolder images={images} isHovered={isHovered} colors={colors} />
      case "hari":
        return <HariFolder images={images} isHovered={isHovered} colors={colors} />
      case "ravi":
        return <RaviFolder images={images} isHovered={isHovered} colors={colors} />
      default:
        return <DeviFolder images={images} isHovered={isHovered} colors={colors} />
    }
  }

  return (
    <div className="inline-flex flex-col items-center overflow-visible">
      {renderFolder()}
    </div>
  )
}

// ============================================
// ContactServices Component Configuration
// ============================================
const serviceItems = [
  {
    title: 'Residential Solar',
    desc: 'High-performance solar configurations custom-built for homeowners across NSW & QLD.',
    color: 'text-amber-500',
    badgeColor: 'bg-amber-500/10 text-amber-600',
    variant: 'ravi' as FolderVariant,
    images: [
      '/images/solar/solar-panel-rooftop.jpg',
      '/images/solar/solar-residential-house.jpg',
      '/images/solar/solar-hero-wide.jpg'
    ],
    subjectValue: 'Residential Solar',
    inclusions: [
      'CEC-Approved Tier 1 Solar Modules (440W+)',
      'Smart Wi-Fi Micro-Inverters or String Inverters',
      'Full Net Metering & Utility Feed-in Tariff setup'
    ]
  },
  {
    title: 'Commercial Solar',
    desc: 'Scaleable solar systems designed to offset high corporate power tariffs and lower operating costs.',
    color: 'text-[#2AA9E4]',
    badgeColor: 'bg-[#2AA9E4]/10 text-sky-600',
    variant: 'kubera' as FolderVariant,
    images: [
      '/images/solar/solar-aerial-farm.jpg',
      '/images/solar/solar-ground-mounted.jpg',
      '/images/solar/solar-panel-detail.jpg'
    ],
    subjectValue: 'Commercial Solar',
    inclusions: [
      'Custom Feasibility & ROI Audit Modeling',
      'Grid connection negotiation & compliance paperwork',
      'Zero-CAPEX Power Purchase Agreement (PPA) support'
    ]
  },
  {
    title: 'Battery Backups',
    desc: 'Store surplus day power for evening use and blackout protection using Tesla Powerwalls or BYD systems.',
    color: 'text-emerald-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-600',
    variant: 'shakti' as FolderVariant,
    images: [
      '/images/solar/solar-inverter-tech.jpg',
      '/images/solar/commercial-solar-roof.jpg',
      '/images/solar/solar-panel-closeup.jpg'
    ],
    subjectValue: 'Battery Storage',
    inclusions: [
      'Backup power during blackouts (anti-islanding)',
      'Peak shaving & load shifting configuration',
      'Tesla Powerwall 3 / BYD Premium HVM installation'
    ]
  },
  {
    title: 'EV Charger Integration',
    desc: 'Smart level-2 electric vehicle charge portals hooked up to run on 100% solar generation.',
    color: 'text-purple-500',
    badgeColor: 'bg-purple-500/10 text-purple-600',
    variant: 'hari' as FolderVariant,
    images: [
      '/images/solar/ev-charging-solar.jpg',
      '/images/solar/battery-storage-unit.jpg',
      '/images/solar/solar-smart-home.jpg'
    ],
    subjectValue: 'System Upgrade',
    inclusions: [
      'Level 2 Fast Charger installation (7.2kW to 22kW)',
      'Solar-surplus tracking charge controller',
      'Universal Type-2 socket with keycard protection'
    ]
  },
  {
    title: 'System Expansion',
    desc: 'Retrofit panels, upgrade inverters, or add battery cells to your pre-existing solar array.',
    color: 'text-rose-500',
    badgeColor: 'bg-rose-500/10 text-rose-600',
    variant: 'ardra' as FolderVariant,
    images: [
      '/images/solar/solar-commercial-farm.jpg',
      '/images/solar/solar-tech-worker.jpg',
      '/images/solar/solar-panel-closeup.jpg'
    ],
    subjectValue: 'System Upgrade',
    inclusions: [
      'Adding solar modules to pre-existing rails',
      'Inverter replacement (Hybrid Wi-Fi-enabled)',
      'Smart consumption meter integration'
    ]
  },
  {
    title: 'Repairs & Health Checks',
    desc: 'CEC-certified diagnostic inspections, inverter replacement support, and maintenance.',
    color: 'text-blue-500',
    badgeColor: 'bg-blue-500/10 text-blue-600',
    variant: 'rudras' as FolderVariant,
    images: [
      '/images/solar/solar-installation-crew.jpg',
      '/images/solar/solar-engineer-panel.jpg',
      '/images/solar/solar-tech-worker.jpg'
    ],
    subjectValue: 'Maintenance',
    inclusions: [
      'CEC-certified electrical insulation testing',
      'AC/DC isolator inspections and swaps',
      'Solar panels thermal hotspot check'
    ]
  }
]

interface ContactServicesProps {
  selectedSubject?: string
  onSelectService?: (subject: string) => void
}

export default function ContactServices({ selectedSubject, onSelectService }: ContactServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleCardClick = (index: number, subjectValue: string) => {
    const isCurrentlyExpanded = expandedIndex === index
    setExpandedIndex(isCurrentlyExpanded ? null : index)

    if (onSelectService) {
      onSelectService(subjectValue)
    }

    // Smooth scroll down to form if expanded
    if (!isCurrentlyExpanded) {
      setTimeout(() => {
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">

        {/* Title */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full" />
            <span className="text-xs font-black text-[#1B74BB] uppercase tracking-widest">Our Offerings</span>
            <span className="h-0.5 w-8 bg-[#FCC200] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Which Solutions Do You Need?
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 max-w-2xl mx-auto font-semibold">
            Hover to peek inside our system folders; click to expand details and auto-select that option in the inquiry form below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {serviceItems.map((item, index) => {
            const isHovered = hoveredIndex === index
            const isSelected = selectedSubject === item.subjectValue
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index, item.subjectValue)}
                className={cn(
                  "bg-white rounded-xl border p-5 sm:p-8 text-left transition-all duration-300 shadow-lg shadow-black cursor-pointer flex flex-col justify-between group overflow-hidden relative",
                  isExpanded || isSelected
                    ? "border-[#1B74BB] bg-[#1B74BB]/1 ring-2 ring-[#1B74BB]/10 shadow-md scale-[1.01]"
                    : "border-slate-400 hover:border-[#1B74BB]/40  hover:shadow-md"
                )}
              >
                <div>
                  {/* Top bar accent */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1 transition-opacity duration-300",
                      isExpanded || isSelected ? "opacity-100 bg-[#1B74BB]" : "opacity-0 bg-[#FCC200] group-hover:opacity-100"
                    )}
                  />

                  {/* Folder Animation Box */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative w-24 h-16 flex items-center justify-center">
                      <FolderPreview
                        variant={item.variant}
                        images={item.images}
                        isHovered={isHovered}
                      />
                    </div>
                    <span className={cn(
                      "text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider transition-colors",
                      isExpanded || isSelected
                        ? "bg-[#1B74BB] text-white"
                        : "bg-slate-100 text-slate-900 group-hover:bg-[#FCC200]/10 group-hover:text-[#FCC200]"
                    )}>
                      {item.variant}
                    </span>
                  </div>

                  <h3 className={cn(
                    "font-black text-xl sm:text-2xl mb-2 transition-colors duration-200",
                    isExpanded || isSelected ? "text-[#1B74BB]" : "text-slate-900 group-hover:text-[#1B74BB]"
                  )}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
                    {item.desc}
                  </p>
                </div>

                {/* Inline Expansion Drawer */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="expansion-drawer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden mt-6 pt-6 border-t border-slate-200 text-left space-y-4"
                    >
                      <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                        System Specifications
                      </h4>
                      <ul className="space-y-2.5">
                        {item.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-800 font-semibold leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 text-[10px] font-bold text-slate-900 italic">
                        * Clicking selected this solution. Fill the form below to proceed.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Arrow Indicator */}
                <div className="flex items-center gap-1.5 text-[#1B74BB] text-xs font-black uppercase tracking-wider mt-6 group-hover:text-[#FCC200] transition-colors">
                  <span>{isExpanded ? "Selected (Fill Form)" : "Expand Details"}</span>
                  <ArrowRight className={cn(
                    "w-4 h-4 transition-transform",
                    isExpanded ? "rotate-90 text-[#FCC200]" : "group-hover:translate-x-1"
                  )} />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
