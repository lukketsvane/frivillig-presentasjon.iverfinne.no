import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Heart } from 'lucide-react';

export const ConceptExplainer: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} className="py-24 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-900">
                Piggy-backing på eksisterande infrastruktur
            </h2>
            <p className="text-xl text-purple-800/70 max-w-3xl mx-auto">
              Me rir på Vinmonopolet sine 350 butikkar for å nå folk i kvardagen – ikkje gjennom kampanjar, 
              men gjennom tilfeldig oppdaging. Vinmonopolet løyste eit tilsvarande problem for 20 år sidan 
              ved å flytte ansvaret for initiativet frå den tilsette til kunden.
            </p>
          </motion.div>
        </div>

        {/* The Analogy Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start relative">
            
            {/* Arrow visual for desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rounded-full p-3 z-10 shadow-xl">
                <ArrowRight size={32} className="text-purple-900" />
            </div>

            {/* Case 1: Vis Legg */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-purple-50 relative group hover:border-purple-200 transition-colors"
            >
                <div className="absolute -top-5 left-8 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-purple-200">
                    Inspirasjonen
                </div>
                <h3 className="text-2xl font-bold mb-6 mt-4 flex items-center gap-3">
                    <span className="text-4xl">🆔</span>
                    Alderskontroll
                </h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4 opacity-50 grayscale">
                        <div className="w-1 bg-red-200 rounded-full"></div>
                        <div>
                            <p className="text-xs font-bold uppercase text-red-400 mb-1">Gammal modell</p>
                            <p className="font-medium">Tilsett spør: "Er du gammal nok?"</p>
                            <p className="text-sm text-gray-500">Resultat: Mistenkeliggjering og ubehag.</p>
                        </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="flex gap-3">
                            <div className="mt-1"><CheckIcon /></div>
                            <div>
                                <p className="text-xs font-bold uppercase text-green-600 mb-1">Vis Legg Uoppfordra</p>
                                <p className="font-bold text-purple-900">Kunden viser legg før dei blir spurt.</p>
                                <p className="text-sm text-purple-700 mt-2">
                                    Initiativet er flytta. Det som før var kontroll, er no ei handling av stoltheit og ansvar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Case 2: Bindeledd */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-purple-900 text-yellow-50 p-8 rounded-3xl shadow-2xl relative"
            >
                <div className="absolute -top-5 left-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    Vår løysing
                </div>
                <h3 className="text-2xl font-bold mb-6 mt-4 flex items-center gap-3">
                    <span className="text-4xl">🤝</span>
                    Frivilligrekruttering
                </h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4 opacity-50">
                        <div className="w-1 bg-red-400 rounded-full"></div>
                        <div>
                            <p className="text-xs font-bold uppercase text-red-300 mb-1">Dagens modell</p>
                            <p className="font-medium text-purple-200">Organisasjonen spør: "Vil du hjelpe?"</p>
                            <p className="text-sm text-purple-300">Resultat: Frykt for å mase. 79% blir aldri spurt.</p>
                        </div>
                    </div>
                    
                    <div className="bg-purple-800 p-4 rounded-xl border border-purple-700 shadow-inner">
                        <div className="flex gap-3">
                            <div className="mt-1 text-green-400"><Heart className="fill-current" size={20}/></div>
                            <div>
                                <p className="text-xs font-bold uppercase text-green-400 mb-1">Vinmonopolet-Modellen</p>
                                <p className="font-bold text-white">Individet tek papiret og viser interesse først.</p>
                                <p className="text-sm text-purple-200 mt-2">
                                    Me fjernar den sosiale friksjonen. Når organisasjonen tar kontakt, veit dei allereie at svaret er ja.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Storefront Image Context */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto mt-20"
        >
            <div className="bg-yellow-100 rounded-3xl p-8 md:p-12 text-center border-4 border-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4 text-purple-900">Frå konfrontasjon til invitasjon</h4>
                    <p className="text-lg text-purple-800 mb-8">
                        Me brukar det same fysiske rommet – kassen på Polet – men endrar dynamikken fullstendig.
                    </p>
                    <img 
                        src="/storefront.png" 
                        alt="Illustrasjon: Vinmonopolet butikkfront"
                        className="w-full max-w-2xl mx-auto sketch-border bg-white rounded-xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                        onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/900x500/e9d5ff/4C1D95?text=Bilde:+Vinmonopolet+fasade";
                        }}
                    />
                </div>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);