import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Gift, QrCode } from 'lucide-react';

const steps = [
  {
    icon: ShoppingBag,
    title: "Handleturen",
    desc: "Kunden handlar som vanleg på Vinmonopolet. Dei er avslappa og har tid.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: CreditCard,
    title: "Vis Legg",
    desc: "Kunden viser legitimasjon uoppfordra. Ei ansvarleg handling.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Gift,
    title: "Løna",
    desc: "Tilsett gir ein kjærleik på pinne. 'Takk for at du tek ansvar.'",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: QrCode,
    title: "Bindeleddet",
    desc: "På papiret er ein QR-kode: 'Du tek ansvar. Vil du hjelpe nabolaget?'",
    color: "bg-green-100 text-green-600"
  }
];

export const UserJourney: React.FC = () => {
  return (
    <section id={SectionId.JOURNEY} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Characters Illustration */}
        <motion.div 
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
             <img 
                src="/characters.png" 
                alt="Illustrasjon: Vis Legg - Bli Helt. Ida, Sam og Geir."
                className="max-w-full md:max-w-2xl sketch-border bg-white"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x400/FEF9C3/4C1D95?text=Bilde:+Ida,+Sam+og+Geir";
                }}
            />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Slik fungerer det</h2>
        
        <div className="relative mb-24">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-purple-200 -z-10 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-[#FEF9C3] md:bg-transparent p-6 rounded-2xl md:p-0"
              >
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg border-4 border-[#FEF9C3] z-10`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-purple-800/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flow Illustration */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-900">Frå polet til nabolaget</h3>
            <div className="flex justify-center">
                <img 
                    src="/journey-flow.png" 
                    alt="Illustrasjon: Flytskjema Ditt bidrag startet på polet"
                    className="w-full max-w-3xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x500/FFF/4C1D95?text=Bilde:+Flytskjema";
                    }}
                />
            </div>
        </div>

      </div>
    </section>
  );
};