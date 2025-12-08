import React from 'react';
import { Hero } from './components/Hero';
import { ConceptExplainer } from './components/ConceptExplainer';
import { UserJourney } from './components/UserJourney';
import { InteractiveOnboarding } from './components/InteractiveOnboarding';
import { Scalability } from './components/Scalability';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden text-purple-900">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <ConceptExplainer />
        <UserJourney />
        <InteractiveOnboarding />
        <Scalability />
      </main>
      <Footer />
    </div>
  );
};

export default App;