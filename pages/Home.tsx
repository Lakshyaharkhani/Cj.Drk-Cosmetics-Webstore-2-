import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Use images from the product data
  const parallaxImage1 = products[4].image; // Rosehip Night Oil
  const parallaxImage2 = products[2].image; // Niacinamide Glow Serum

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full bg-brand-dark text-brand-cream"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle background gradient for depth, keeping it mostly dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#111111] z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-brand-cream/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-medium">Est. 2024</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-brand-cream font-medium mb-8 leading-tight">
              Nature’s<br />Chemistry
            </h1>
            <p className="text-brand-cream/60 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
              CJ DRK Cosmetic ™ bridges the gap between raw earth and clinical efficacy. 
              Small-batch, cold-pressed skincare for the modern purist.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#DAD7CD] text-[#1A1A1A] rounded-full font-medium hover:bg-white transition-all transform hover:scale-105"
            >
              Shop Collection <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-brand-dark border-t border-brand-cream/10 py-6 overflow-hidden whitespace-nowrap relative z-20">
        <div className="animate-marquee inline-block">
          <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text-light font-bold px-4 text-brand-cream/10">
            PURE • ORGANIC • COLD PRESSED • CRUELTY FREE • SUSTAINABLE • 
          </span>
          <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text-light font-bold px-4 text-brand-cream/10">
            PURE • ORGANIC • COLD PRESSED • CRUELTY FREE • SUSTAINABLE • 
          </span>
        </div>
      </section>

      {/* Visuals / Parallax Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-brand-cream"
            >
              The Science of <span className="italic text-brand-sage">Slow Beauty</span>
            </motion.h2>
            <p className="text-lg text-brand-cream/70 leading-relaxed">
              We believe in the power of time. Our ingredients are macerated for weeks, not hours, allowing the full spectrum of nutrients to infuse into our oils. No heat, no shortcuts.
            </p>
            <Link to="/explore" className="inline-block text-brand-cream border-b border-brand-cream pb-1 hover:text-brand-sage hover:border-brand-sage transition-colors">
              Explore our process
            </Link>
          </div>
          
          <div className="relative h-[600px] w-full">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-10 border border-brand-cream/10">
              <img 
                src={parallaxImage2} 
                alt="Product visual 1" 
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-[#1A1A1A]">
              <img 
                src={parallaxImage1} 
                alt="Product visual 2" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="h-24"></div>
    </motion.div>
  );
};

export default Home;