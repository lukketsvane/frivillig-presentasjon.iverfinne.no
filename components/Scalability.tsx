import React from 'react';
import { SectionId } from '../types';
import { Users, Layers, BrickWall, Store } from 'lucide-react';
import { motion } from 'framer-motion';

export const Scalability: React.FC = () => {
  return (
    <section id={SectionId.SCALE} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4 tracking-wide uppercase"
          >
            Det økonomiske argumentet
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-900">Infrastruktur-Piggybacking</h2>
          <p className="text-lg md:text-xl text-purple-800/70 max-w-3xl mx-auto">
            Kvifor bygge nye vegar når me kan sette opp nye skilt på dei gamle?
            Vi utnyttar ein infrastruktur som allereie er finansiert, bemanna og besøkt.
          </p>
        </div>

        {/* The Layered Piggyback Visualization */}
        <div className="max-w-4xl mx-auto mb-24 relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-100 -z-10 dashed-line"></div>
            
            {/* Base Layer */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-8 rounded-3xl border-2 border-gray-200 mb-4 transform scale-95 opacity-80"
            >
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
                        <Store size={32} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">1. Fysisk Infrastruktur (Grunnmuren)</h4>
                        <p className="text-gray-500">351 butikkar. Logistikk. 40 millionar kundebesøk. Husleige og løn er allereie betalt.</p>
                    </div>
                </div>
            </motion.div>

            {/* Trust Layer */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-purple-100 p-8 rounded-3xl border-2 border-purple-200 mb-4 transform scale-100 shadow-sm relative z-10"
            >
                 <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-purple-200 text-purple-800 px-3 py-1 rounded-lg text-xs font-bold rotate-90 origin-bottom">
                    Eksisterande
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center text-purple-700">
                        <Users size={32} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-purple-900">2. Tillitskapital (Merkevara)</h4>
                        <p className="text-purple-700">Høgaste kundetilfredsheit i Noreg (87.4 poeng). Folk stoler på Polet. Vi lånar denne tilliten.</p>
                    </div>
                </div>
            </motion.div>

            {/* The Service Layer (Piggyback) */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-yellow-300 p-8 rounded-3xl border-4 border-purple-900 shadow-xl relative z-20 transform scale-105"
            >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-900 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <Layers size={18} />
                    VÅRT BIDRAG
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-900 border-2 border-purple-900">
                        <BrickWall size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-purple-900">3. Bindeleddet (Marginalkostnad ≈ 0)</h4>
                        <p className="text-purple-800 font-medium">
                            Vi legg berre til papiret. Ingen nye bygg. Ingen nye tilsette. Berre ein ny funksjon på eksisterande flyt.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* The Problem We're Solving */}
        <div className="mt-20 bg-yellow-50 rounded-3xl p-8 md:p-12 border-2 border-yellow-200">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">Problemstillinga</h3>
            <p className="text-lg text-purple-800 mb-6 leading-relaxed">
                Korleis kan vi gjere det meir attraktivt og relevant for vaksne mellom 50–65 år i bydel Østensjø å bli frivillige ved frivilligsentralen?
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        Målgruppa
                    </h4>
                    <ul className="space-y-2 text-purple-800">
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>40% av aldersgruppe 45-66 handlar på Vinmonopolet minst éin gong per veke</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>Dei kjem uansett - me treng ikkje rekruttere dei dit</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>79% av potensielle frivillige blir aldri spurt fordi organisasjonar ikkje torer ta kontakt</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        Løysinga
                    </h4>
                    <ul className="space-y-2 text-purple-800">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>Magnetisk bokmerke med praktisk verdi deles ut ved kassen</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>Budskap: "Du står i køen fordi du tek samfunnsansvar. Kanskje du har 2 timar i veka til meir?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>QR-kode går direkte til 3-5 konkrete mikro-oppgåver i Østensjø denne veka</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};