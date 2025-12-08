import React, { useState } from 'react';
import { SectionId, VolunteerTask } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, User, MapPin, Clock } from 'lucide-react';

const mockTasks: VolunteerTask[] = [
  {
    id: '1',
    title: 'Gå tur med Nils (83)',
    organization: 'Oppsal Frivilligsentral',
    time: 'Torsdag kl 14:00 (1t)',
    description: 'Nils treng følge til butikken. Han likar å prate om gamle dagar.',
    category: 'sosial'
  },
  {
    id: '2',
    title: 'Vaffelsteiking',
    organization: 'Manglerud Gård',
    time: 'Tirsdag kl 11:00 (2t)',
    description: 'Me treng ei ekstra hand til å steike vaflar for tysdagskaféen.',
    category: 'praktisk'
  },
  {
    id: '3',
    title: 'Leksehjelp',
    organization: 'Deichman Oppsal',
    time: 'Onsdag kl 16:00 (1.5t)',
    description: 'Hjelp 7. klassingar med matte og norsk. Enkel rettleiing.',
    category: 'kultur'
  }
];

export const InteractiveOnboarding: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTaskClick = (id: string) => {
    setSelectedTask(id);
  };

  const handleConfirm = () => {
    setIsSuccess(true);
    setTimeout(() => {
        setIsSuccess(false);
        setSelectedTask(null);
    }, 3500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id={SectionId.PROTOTYPE} className="py-24 bg-purple-900 text-yellow-50 relative overflow-hidden">
        {/* Background blobs for visual interest */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="mb-10 flex justify-center lg:justify-start">
                <img 
                    src="/lollipop-qr.png" 
                    alt="Illustrasjon: Slikkepinne med QR-kode lapp"
                    className="w-64 rotate-6 sketch-border bg-yellow-100"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/300x400/FEF9C3/4C1D95?text=Bilde:+Slikkepinne+QR";
                    }}
                />
             </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-100">
              Analog onboarding i ei digital tid
            </h2>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Dette skjer når kunden skannar slikkepinnen. Ingen lange skjema. Ingen "last ned app". 
              Berre konkrete, lokale oppgåver som senkar terskelen for å seie "ja".
            </p>
            <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-purple-900 font-bold shrink-0">1</div>
                    <span className="text-lg">Vel ei konkret oppgåve</span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-purple-900 font-bold shrink-0">2</div>
                    <span className="text-lg">Legg inn telefonnummer</span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-purple-900 font-bold shrink-0">3</div>
                    <span className="text-lg">Du vert kontakta av ein koordinator</span>
                </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            {/* Phone Mockup with Float Animation */}
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[320px] h-[640px] bg-white rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-[-2deg]"
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-gray-50 flex flex-col text-gray-800 overflow-hidden relative">
                    
                    {/* App Header */}
                    <div className="bg-yellow-200 p-6 pt-12 pb-8 rounded-b-[2rem] shadow-sm z-10">
                        <h3 className="font-bold text-xl text-purple-900">Hei, kvardagshelt! 👋</h3>
                        <p className="text-sm text-purple-800 mt-1">Her er 3 ting du kan gjere i Bydel Østensjø denne veka.</p>
                    </div>

                    {/* Task List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 hide-scrollbar">
                        <AnimatePresence mode='wait'>
                            {isSuccess ? (
                                <motion.div 
                                    key="success"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-6"
                                >
                                    <motion.div 
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1.2, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"
                                    >
                                        <Check size={48} />
                                    </motion.div>
                                    <h4 className="text-xl font-bold mb-2">Takk for at du bryr deg!</h4>
                                    <p className="text-sm text-gray-600">Koordinator Silje kontaktar deg på SMS innan 24 timar.</p>
                                </motion.div>
                            ) : selectedTask ? (
                                <motion.div
                                    key="detail"
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    className="bg-white rounded-2xl p-5 shadow-lg h-full flex flex-col"
                                >
                                    <button onClick={() => setSelectedTask(null)} className="text-sm text-gray-500 mb-4 flex items-center gap-1 hover:text-purple-700 transition-colors">
                                        ← Tilbake
                                    </button>
                                    {mockTasks.filter(t => t.id === selectedTask).map(task => (
                                        <div key={task.id} className="flex-1 flex flex-col">
                                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-md w-fit mb-3 uppercase">{task.category}</span>
                                            <h4 className="text-xl font-bold mb-2">{task.title}</h4>
                                            
                                            <div className="space-y-3 mt-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <User size={16} className="text-purple-500" />
                                                    <span>{task.organization}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock size={16} className="text-purple-500" />
                                                    <span>{task.time}</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <MapPin size={16} className="text-purple-500 mt-1" />
                                                    <span>Oppmøte: Oppsal Senter</span>
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 p-4 rounded-xl mt-6 border border-yellow-100">
                                                <p className="text-sm italic text-gray-700">"{task.description}"</p>
                                            </div>

                                            <div className="mt-auto pt-6">
                                                <motion.button 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={handleConfirm} 
                                                    className="w-full py-3 bg-purple-900 text-white rounded-xl font-bold shadow-md hover:bg-purple-800 transition-colors"
                                                >
                                                    Meld interesse
                                                </motion.button>
                                                <p className="text-xs text-center text-gray-400 mt-2">Uforpliktande påmelding</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="list"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ x: -300, opacity: 0 }}
                                    className="space-y-3"
                                >
                                    {mockTasks.map((task) => (
                                        <motion.div 
                                            key={task.id}
                                            variants={itemVariants}
                                            onClick={() => handleTaskClick(task.id)}
                                            whileHover={{ 
                                                scale: 1.03, 
                                                y: -2,
                                                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" 
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-colors active:scale-95 group relative z-0"
                                        >
                                            <div className="absolute inset-0 bg-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                            
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-md uppercase tracking-wider">{task.category}</span>
                                                <span className="text-xs text-gray-400">{task.time.split(' ')[0]}</span>
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{task.title}</h4>
                                            <p className="text-xs text-gray-500 line-clamp-2">{task.description}</p>
                                            <div className="mt-3 flex justify-end">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-purple-600" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Bottom Nav Mock */}
                    <div className="bg-white border-t border-gray-100 p-4 pb-6 flex justify-around text-gray-300">
                        <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};