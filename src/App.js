import React from 'react';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ThemeSection from './components/ThemeSection';
import HighlightsSection from './components/HighlightsSection';
import CallForPapers from './components/CallForPapers';
import DeadlinesSection from './components/DeadlinesSection';
import BenefitsSection from './components/BenefitsSection';
import ProceedingsSection from './components/ProceedingsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <HeroSection />
      <WelcomeSection />
      <ThemeSection />
      <HighlightsSection />
      <CallForPapers />
      <DeadlinesSection />
      <BenefitsSection />
      <ProceedingsSection />
      <Footer />
    </div>
  );
}

export default App;