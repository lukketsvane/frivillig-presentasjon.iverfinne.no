import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Network } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id={SectionId.IMPACT} className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-yellow-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[350px] h-[350px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-yellow-100"
          >
            Invertert rekrutteringslogikk
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-200 max-w-3xl mx-auto"
          >
            I staden for at sentralen leitar etter frivillige, kjem behovet til den frivillige 
            gjennom ein konkret, stadlokalisert førespursel. Dette er eit paradigmeskifte.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: TrendingUp,
              title: "Konkret, relasjonell",
              description: "Ikkje abstrakt 'bli frivillig', men 'dette mennesket treng deg'",
              color: "bg-green-500"
            },
            {
              icon: Users,
              title: "Unge som skaparar",
              description: "18-30 åringar bidreg med kompetansen sin utan langsiktig forpliktelse",
              color: "bg-blue-500"
            },
            {
              icon: Zap,
              title: "Under eitt minutt",
              description: "Skriv behov → vel stad/tid → få delbar QR-kode og lenke",
              color: "bg-yellow-500"
            },
            {
              icon: Network,
              title: "Distribuert infrastruktur",
              description: "Unge skapar innhald, Vinmonopolet distribuerer, 50-65 åringar oppdagar",
              color: "bg-pink-500"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-100">{item.title}</h3>
              <p className="text-purple-200 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-100 rounded-3xl p-8 md:p-12 text-purple-900"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Sluttresultatet</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold mb-2">Unge skapar</h4>
              <p className="text-sm text-purple-800">Oppretter engasjerande annonsar og formulerer tekstar</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="font-bold mb-2">Nettverk distribuerer</h4>
              <p className="text-sm text-purple-800">Vinmonopolet, bibliotek, butikkar spreier bodskapen</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold mb-2">50-65 åringar oppdagar</h4>
              <p className="text-sm text-purple-800">Moglegheiter der dei allereie er, i deira naturlege flyt</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
