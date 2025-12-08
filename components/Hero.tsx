import React from 'react';
import { SectionId } from '../types';
import { ArrowDown, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-6 tracking-wide uppercase border border-purple-200">
                Konsept av Iver Finne
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-purple-900">
                Frå "Vis legg"<br/>til <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">"Bli frivillig"</span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-purple-800/80 leading-relaxed">
                Me snur rekrutteringslogikken. I staden for at organisasjonar må mase, 
                lèt me individet vise interesse først – med ein slikkepinne som bindeledd.
              </p>
            </motion.div>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button 
                  onClick={() => document.getElementById(SectionId.PROTOTYPE)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-purple-900 text-white rounded-full font-bold text-lg hover:bg-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                  <HeartHandshake size={24} />
                  Sjå løysinga
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* ILLUSTRATION SLOT 1: Hand holding lollipop */}
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lollipop-hand.png" 
                alt="Illustrasjon: Hand som held slikkepinne med lapp 'Vis Hjerte'"
                className="w-full max-w-md mx-auto sketch-border bg-white"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/500x500/FFF/4C1D95?text=Bilde:+Hand+med+slikkepinne";
                }}
              />
            </div>
            
            {/* Background blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-200/50 rounded-full mix-blend-multiply filter blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-900/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};