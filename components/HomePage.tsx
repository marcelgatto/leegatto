import React, { useRef } from 'react';
import Logo from './Logo';
import Sparkles from './Sparkles';
import { COLORS } from '../constants';

interface HomePageProps {
  onBack: () => void;
  onNavigateAbout: () => void;
}

const StarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CardSpark = ({ delay, top, left }: { delay: string; top: string; left: string }) => (
  <div 
    className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-0"
    style={{ 
      top, 
      left, 
      animationDelay: delay,
      boxShadow: '0 0 8px 2px rgba(255,255,255,0.8)',
      animationDuration: `${2 + Math.random() * 2}s`
    }}
  />
);

interface TestimonialData {
  id: number;
  name: string;
  text: string;
  image: string;
  grayscale?: boolean;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Tirelo C.",
    text: "Choosing a water birth was the best decision I made, and having Lee by my side made it a truly positive and empowering journey. Her calm guidance and grounding energy were exactly what I needed to feel safe and connected during such a profound moment.",
    image: "https://image2url.com/r2/default/images/1770141632777-0a64557b-39a9-4d8e-91a8-6a73bbfafe01.png"
  },
  {
    id: 2,
    name: "Chantalle H.",
    text: "Lee, thank you. You were such a pillar of strength. Your support during the birth was more than we hoped for and helped us navigate every moment with peace and clarity.",
    image: "https://image2url.com/r2/default/images/1770143134545-dbf54c23-b0c4-4966-8f7c-d7ec073b9fd7.png",
    grayscale: true
  },
  {
    id: 3,
    name: "Tandi Z.",
    text: "My dream was always a gentle water birth, and Lee helped me achieve it perfectly. Her grounding energy in the room was exactly what I needed to stay centered and present through the entire journey.",
    image: "https://image2url.com/r2/default/images/1770143570047-fd610983-c497-4b2a-b530-8617a2cc8e14.png"
  },
  {
    id: 4,
    name: "Maria G.",
    text: "As a single mother, planning a water birth felt like a massive undertaking, but Lee made it possible. Her calm guidance gave me the strength to trust the natural process and welcome my baby with absolute peace and empowerment.",
    image: "https://image2url.com/r2/default/images/1770309428208-8b288bf7-7c3a-4f50-86ce-e07ecb7694f1.jpeg"
  },
  {
    id: 5,
    name: "Emma D.",
    text: "I can't imagine my birth without Lee. She was the calm, grounding presence we needed in the room. A truly life-changing experience that I will always cherish.",
    image: "https://image2url.com/r2/default/images/1770309507819-f73eae80-265f-4398-87e9-d127e3e3bf8f.jpeg",
    grayscale: true
  },
  {
    id: 6,
    name: "Zanele P.",
    text: "The prenatal yoga sessions with Lee were a revelation. I learned how to move with my changing body and use my breath as an anchor, which made my eventual birth experience so much more peaceful and connected.",
    image: "https://image2url.com/r2/default/images/1770309539903-9c95fefe-4e19-4da4-b06d-36b2f3e50734.jpeg"
  }
];

const HomePage: React.FC<HomePageProps> = ({ onBack, onNavigateAbout }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sparkGradient = `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.olive}, ${COLORS.orange})`;
  const whatsappUrl = "https://wa.me/4915908117549";

  const ServiceBox = ({ text, bgColor }: { text: string; bgColor: string }) => (
    <div className="aspect-square md:aspect-auto md:h-1/4 rounded-[1.5rem] shadow-sm flex items-center justify-center p-4 transition-all hover:scale-[1.03] text-center" style={{ backgroundColor: bgColor, color: COLORS.brown }}>
      <span className="serif italic font-black uppercase tracking-tight md:tracking-[0.12em] leading-tight text-[19px] md:text-[13px] lg:text-[15px]">
        {text}
      </span>
    </div>
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const isMobile = window.innerWidth < 768;
      // Scroll by approximately one card width
      const amount = isMobile ? clientWidth * 0.48 : clientWidth * 0.35;
      const scrollTo = direction === 'left' ? scrollLeft - amount : scrollLeft + amount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: COLORS.background }}>
      <Sparkles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-6">
        {/* Navigation Bar */}
        <nav className="pt-2 pb-1 md:py-8 flex justify-between items-center mb-0 md:mb-8 gap-3">
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer group" onClick={onBack}>
            <div className="h-24 md:h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0">
              <Logo className="h-full w-auto" shouldBlend={true} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-4xl font-bold tracking-tight leading-none uppercase" style={{ color: COLORS.brown }}>
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
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white px-4 py-3 md:px-10 md:py-4 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center justify-center text-center leading-tight whitespace-nowrap" 
            style={{ backgroundColor: COLORS.brown }}
          >
            Book<br className="md:hidden" /> Consultation
          </a>
        </nav>

        {/* Top Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto mb-10">
          {/* Card 1: Green Logo Card */}
          <div className="hidden md:flex md:col-span-4 md:row-span-2 rounded-[2.5rem] p-12 flex-col justify-center items-center shadow-lg transition-all hover:scale-[1.01] relative overflow-hidden group/card" style={{ backgroundColor: COLORS.olive }}>
             <CardSpark top="20%" left="30%" delay="0.5s" />
             <CardSpark top="70%" left="20%" delay="1.2s" />
             <CardSpark top="40%" left="80%" delay="0.8s" />
             <CardSpark top="85%" left="70%" delay="2s" />
             <CardSpark top="15%" left="75%" delay="1.5s" />

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[60px] opacity-20 pointer-events-none transition-opacity duration-1000 group-hover/card:opacity-40" style={{ background: 'white' }}></div>
             
             <div className="w-56 h-auto mb-8 flex items-center justify-center float-animation relative">
                <Logo className="w-full h-auto drop-shadow-2xl" shouldBlend={true} />
             </div>
             
             <h1 className="text-white text-5xl font-bold serif tracking-tight text-center relative">Lee Gatto</h1>
             <p className="text-white/80 uppercase tracking-[0.4em] text-[11px] mt-4 font-bold relative">Doula Excellence</p>
          </div>

          {/* Card 2: About Me Card */}
          <div className="order-1 md:order-none md:col-span-6 md:row-span-2 rounded-[3rem] bg-white/40 p-1 shadow-sm border border-black/5 overflow-hidden">
            <div className="w-full h-full bg-white rounded-[2.5rem] flex flex-col md:flex-row shadow-inner overflow-hidden">
              <div className="flex-1 pt-10 pb-6 px-8 md:p-10 flex flex-col justify-center items-start">
                <h2 className="text-4xl md:text-5xl lg:text-6xl serif leading-[1.15] mb-6 md:mb-8" style={{ color: COLORS.brown }}>
                  Let me help your journey <span className="italic font-light" style={{ 
                    background: sparkGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>spark</span> with peace and clarity.
                </h2>
                <button 
                  onClick={onNavigateAbout}
                  className="text-white px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all"
                  style={{ backgroundColor: COLORS.deepGreen }}
                >
                  About Me
                </button>
              </div>
              <div className="w-full md:w-2/5 h-[520px] md:h-auto overflow-hidden">
                <img 
                  src="https://image2url.com/r2/default/images/1770139576161-6830a045-df8a-494b-995d-f18a780d1670.avif" 
                  alt="Lee Gatto Doula" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Service Boxes */}
          <div className="order-2 md:order-none md:col-span-2 md:row-span-2 grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-3">
            <ServiceBox text="Antenatal Education" bgColor={COLORS.pink} />
            <ServiceBox text="Pregnancy Yoga" bgColor={COLORS.teal} />
            <ServiceBox text="Birth Support" bgColor={COLORS.orange} />
            <ServiceBox text="Baby Massage" bgColor={COLORS.mutedOlive} />
          </div>
        </div>

        {/* CTA Grid - Certificates row */}
        <div className="grid grid-cols-3 md:grid-cols-12 gap-3 md:gap-6 mb-10">
          <div className="col-span-1 md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden transition-all hover:scale-[1.02] bg-white aspect-square md:aspect-auto text-center p-2 md:p-4">
            <img 
              src="https://image2url.com/r2/default/images/1770144701026-c9650d83-aa64-44a7-9d37-08850232b755.png" 
              alt="Certification 1" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-span-1 md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden transition-all hover:scale-[1.02] bg-white aspect-square md:aspect-auto text-center p-2 md:p-4">
            <img 
              src="https://image2url.com/r2/default/images/1770146313203-54757fe0-543f-45d2-b63d-cd3776b5d4ac.png" 
              alt="Certification 2" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-span-1 md:col-span-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden transition-all hover:scale-[1.02] bg-white aspect-square md:aspect-auto text-center p-2 md:p-4">
            <img 
              src="https://image2url.com/r2/default/images/1770145705113-407b7795-8a1d-4cda-9c25-8b6dfca830b6.png" 
              alt="Certification 3" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="col-span-3 md:col-span-6 rounded-[2.5rem] p-8 md:px-12 shadow-sm flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left transition-all hover:scale-[1.01] breathing-bob" style={{ backgroundColor: '#dfcfc1' }}>
            <h3 className="serif text-3xl md:text-4xl leading-tight" style={{ color: COLORS.brown }}>
              Let's chat over tea
            </h3>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#413933] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap flex items-center justify-center"
            >
              CONTACT LEE
            </a>
          </div>
        </div>

        {/* Testimonials Section Header */}
        <div className="mb-4 flex justify-between items-center px-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40" style={{ color: COLORS.brown }}>Testimonials</p>
          </div>
          <div className="flex gap-2 md:gap-3">
             <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-colors shadow-sm bg-white/50"
             >
               <svg className="w-4 h-4 md:w-5 md:h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
             </button>
             <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-colors shadow-sm bg-white/50"
             >
               <svg className="w-4 h-4 md:w-5 md:h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
             </button>
          </div>
        </div>

        {/* Testimonials Grid/Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 md:gap-6 pb-12 pt-4 px-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[45vw] md:w-[calc(33.333%-16px)] snap-start md:snap-center group relative h-[280px] md:h-[520px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-black/5"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-10">
                <img 
                  src={item.image} 
                  alt={`${item.name} Portrait`} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.grayscale ? 'grayscale' : ''}`}
                />
              </div>

              {/* Overlay Content Layer */}
              <div className="absolute inset-0 z-10 flex flex-col p-4 md:p-12 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-white/95">
                <div className="flex-1 pt-1 overflow-y-auto no-scrollbar">
                  <p className="text-gray-800 text-[10px] md:text-[16px] font-light italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex gap-0.5 mb-2 md:mb-4">
                  <StarIcon className="w-2 h-2 md:w-4 md:h-4" /> 
                  <StarIcon className="w-2 h-2 md:w-4 md:h-4" /> 
                  <StarIcon className="w-2 h-2 md:w-4 md:h-4" /> 
                  <StarIcon className="w-2 h-2 md:w-4 md:h-4" /> 
                  <StarIcon className="w-2 h-2 md:w-4 md:h-4" />
                </div>
                <div className="mt-1 flex justify-end items-end">
                  <p className="playful text-lg md:text-4xl leading-none" style={{ color: COLORS.brown }}>- {item.name}</p>
                </div>
              </div>
              
              {/* Mobile Floating Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/60 to-transparent pointer-events-none group-hover:hidden transition-opacity">
                <p className="playful text-lg md:text-3xl text-white drop-shadow-md">- {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default HomePage;