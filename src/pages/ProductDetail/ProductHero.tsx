import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { type ProductData } from "../../data/products";
import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';

interface ProductHeroProps {
  product: ProductData;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  return (
    <section className="relative h-[280px] md:h-[380px] overflow-hidden pt-24 flex items-center bg-slate-950">
      {/* Background Image with modern gradient vignette */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <img
          src={solarRoof1}
          alt="Solar installation background"
          className="h-full w-full object-cover scale-105 opacity-60"
        />
        {/* Rich Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/75 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full text-white">
        <div className="flex flex-col gap-3">

          {/* Animated Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 text-xs text-white/60 font-black uppercase tracking-widest"
          >
            <Link to="/" className="hover:text-[#FE9900] transition-colors duration-200">Home</Link>
            <ChevronRight size={12} className="text-white/40" />
            <Link to="/products" className="hover:text-[#FE9900] transition-colors duration-200">Products</Link>
            <ChevronRight size={12} className="text-white/40" />
            <span className="text-[#FE9900]">{product.category}</span>
          </motion.div>

          {/* Title & Badge */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-[9px] font-black uppercase tracking-wider text-white"
            >
              <Sparkles size={10} className="text-[#FE9900]" />
              Premium {product.category.replace(/s$/, "")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
              className="text-3xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl text-transparent bg-clip-text bg-linear-to-r from-white via-white to-slate-200"
            >
              {product.name}
            </motion.h1>
          </div>

        </div>
      </div>
    </section>
  );
};
