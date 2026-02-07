import React from 'react';
import { COLORS } from '../constants';
import Logo from './Logo';

interface AboutMeProps {
  onBack: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onBack }) => {
  const whatsappUrl = "https://wa.me/4915908117549";
  const sparkGradient = `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.olive}, ${COLORS.orange})`;

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col items-center" style={{ backgroundColor: '#efdfde' }}>
      {/* Navigation - Tagline positioned below name like on Home Page, optimized for mobile */}
      <nav className="relative z-30 w-full px-4 md:px-8 py-6 md:py-12 max-w-7xl mx-auto flex justify-between items-center gap-3">
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer group" onClick={onBack}>
          <div className="h-24 md:h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0">
            <Logo className="h-full w-auto" shouldBlend={true} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-4xl font-bold tracking-tight leading-none uppercase text-gray-800">
              Lee Gatto
            </span>
            <span className="playful text-lg md:text-2xl mt-0 md:mt-1 block" style={{ 
              background: sparkGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              lineHeight: '1.2',
            }}>
              spark something
            </span>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500 hover:text-black transition flex-shrink-0"
        >
          Back
        </button>
      </nav>

      {/* Main content - ensured spacing so no overlap */}
      <main className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-transparent px-4 md:px-12 mb-20">
        {/* Left: Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden shadow-2xl">
          <img 
            src="https://image2url.com/r2/default/images/1770273952783-0ca7f9ce-b840-4276-b6ce-b0789304870a.png" 
            alt="Lee Gatto" 
            className="w-full h-full object-cover min-h-[500px] lg:min-h-[700px]"
          />
        </div>

        {/* Right: Text Card Section */}
        <div className="lg:w-1/2 bg-white p-10 md:p-16 lg:p-20 flex flex-col justify-center shadow-xl">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider serif text-gray-900 leading-tight uppercase">ME</h1>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400 mt-2 block">
              Doula, Yoga, and Baby Massage Instructor
            </p>
          </div>
          
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-light">
            <p>
              I am her, mosadi, she, sie, Elle, mother of 3 and wife.
            </p>
            
            <p>
              I am a certified birth doula with Childbirth International, registered with Doulas of South Africa (DOSA), a childbirth educator, baby massage educator, and yoga specialist.
            </p>
            
            <p>
              I followed my passion for yoga all the way to India and became a certified instructor in the holy city of Rishikesh.
            </p>
            
            <p>
              I am a freelance writer and I am devoted to helping women navigate the journey of motherhood. Join me.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-4 rounded-full border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 min-w-[180px] text-center"
            >
              Contact
            </a>
          </div>
        </div>
      </main>

      {/* Footer from HomePage for consistency */}
      <footer className="w-full py-8 border-t border-black/5 bg-white/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.6em] font-black opacity-30 mb-6" style={{ color: COLORS.brown }}>
            Featured in & Certified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://image2url.com/r2/default/images/1770144701026-c9650d83-aa64-44a7-9d37-08850232b755.png" className="h-12 md:h-16 w-auto object-contain" alt="Partner 1" />
            <img src="https://image2url.com/r2/default/images/1770146313203-54757fe0-543f-45d2-b63d-cd3776b5d4ac.png" className="h-12 md:h-16 w-auto object-contain" alt="Partner 2" />
            <img src="https://image2url.com/r2/default/images/1770145705113-407b7795-8a1d-4cda-9c25-8b6dfca830b6.png" className="h-12 md:h-16 w-auto object-contain" alt="Partner 3" />
            <img src="https://image2url.com/r2/default/images/1770146687247-dbd742c6-6712-4a38-9884-34b0b9285ae1.png" className="h-12 md:h-16 w-auto object-contain" alt="Partner 4" />
            <img src="https://image2url.com/r2/default/images/1770146775782-2e1534c6-c64d-4e55-a8a0-03fcdb113716.png" className="h-12 md:h-16 w-auto object-contain" alt="Partner 5" />
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30" style={{ color: COLORS.brown }}>
            <div className="flex items-center gap-2">
              <div className="h-4 w-auto">
                <Logo className="h-full" shouldBlend={false} />
              </div>
              <span>© {new Date().getFullYear()} Lee Gatto</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
            <span>Doula Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;