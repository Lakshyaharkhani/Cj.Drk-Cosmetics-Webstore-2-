import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus, Star, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data';

interface ProductDetailsProps {
  addToCart: (product: any) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const [openSection, setOpenSection] = useState<string | null>('ingredients');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return <div className="h-screen flex items-center justify-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 bg-brand-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left - Sticky Image */}
          <div className="relative h-fit lg:sticky lg:top-32">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-green" />
                <span className="text-xs font-bold text-brand-dark">Certified Organic</span>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-brand-sage font-bold uppercase tracking-widest text-sm">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-2 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm text-brand-dark/50">(128 Reviews)</span>
              </div>

              <p className="text-xl font-medium text-brand-dark mb-8">${product.price.toFixed(2)}</p>
              
              <p className="text-brand-dark/80 leading-relaxed text-lg mb-10">
                {product.description}
              </p>

              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isAdded 
                    ? 'bg-brand-green text-white scale-95' 
                    : 'bg-brand-dark text-white hover:bg-brand-green hover:shadow-lg'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={24} /> Added to Cart
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-2"
                    >
                      Add to Cart
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Accordion Sections */}
              <div className="mt-12 border-t border-brand-dark/10 divide-y divide-brand-dark/10">
                
                {/* Ingredients Section */}
                <div className="py-4">
                  <button 
                    onClick={() => toggleSection('ingredients')}
                    className="flex justify-between w-full text-left font-serif font-bold text-lg text-brand-dark items-center group"
                  >
                    Ingredients
                    <div className="bg-white/50 p-1 rounded-full group-hover:bg-white transition-colors">
                      {openSection === 'ingredients' ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openSection === 'ingredients' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-4 pb-2 space-y-2 text-brand-dark/70">
                          {product.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-sage shrink-0"></span>
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shipping Section */}
                <div className="py-4">
                  <button 
                    onClick={() => toggleSection('shipping')}
                    className="flex justify-between w-full text-left font-serif font-bold text-lg text-brand-dark items-center group"
                  >
                    Shipping & Returns
                    <div className="bg-white/50 p-1 rounded-full group-hover:bg-white transition-colors">
                      {openSection === 'shipping' ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openSection === 'shipping' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 text-brand-dark/70 space-y-3">
                           <div className="flex gap-3 items-start">
                             <Truck size={20} className="text-brand-sage shrink-0 mt-1" />
                             <p>Free worldwide shipping on orders over $100. All orders are processed within 1-2 business days.</p>
                           </div>
                           <p className="text-sm pl-8">Returns accepted within 30 days of purchase for unopened products.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;