
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'home' | 'about'>('landing');

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={() => setCurrentPage('home')} />
      )}
      {currentPage === 'home' && (
        <HomePage 
          onBack={() => setCurrentPage('landing')} 
          onNavigateAbout={() => setCurrentPage('about')}
        />
      )}
      {currentPage === 'about' && (
        <AboutMe onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
};

export default App;
