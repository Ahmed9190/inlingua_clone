import { useState, type ReactNode } from 'react';
import { 
  Phone, 
  Search, 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  CheckCircle, 
  Clock, 
  Target, 
  Smile, 
  ChevronRight,
  PlayCircle,
  FileText,
  Users,
  Briefcase,
  Globe,
  MessageCircle,
  Headphones
} from 'lucide-react';

// --- Data & Translations ---

const translations = {
  de: {
    nav: {
      home: "Home",
      news: "Aktuelles",
      learn: "Sprachen lernen",
      exams: "Sprachprüfungen",
      corporate: "Firmenservice",
      about: "Über uns",
      contact: "Kontakt",
      blog: "Blog"
    },
    hero: {
      title: "Und die Welt steht Ihnen offen.",
      button: "HOME",
      handwritten: "Hannover spricht inlingua"
    },
    offers: {
      title: "Unsere neuen Angebote",
      card1: { title: "Englisch-Gruppenkurs Level B1", date: "04.06.2025", subtitle: "Gruppenkurs - Englisch Level B1 (online)" },
      card2: { title: "Leben in Deutschland", date: "23.09.2025", subtitle: "Einbürgerungstest" },
      card3: { title: "Englisch-Gruppenkurs Level A1", date: "27.06.2025", subtitle: "Englisch-Gruppenkurs" },
      more: "MEHR"
    },
    welcome: {
      title: "Herzlich willkommen bei inlingua Hannover",
      text: "Welche Sprache möchten Sie lernen? Ob Englisch für den Beruf, Spanisch, Chinesisch oder Deutsch als Fremdsprache: Mit einer inlingua Hannover ist ein anerkanntes Prüfungszentrum für TELC und bietet Sprachdiplome für verschiedene Sprachlevel.",
      button: "HOME"
    },
    tiles: {
      learn: "Sprachen lernen",
      corporate: "Firmenservice",
      exams: "Sprachprüfungen",
      test: "Einstufungstest",
      desc_learn: "Sie möchten Ihre Fremdsprachenkenntnisse gezielt erweitern?",
      desc_corporate: "Weltweit ist inlingua für viele namhafte Institutionen Partner.",
      desc_exams: "Sie brauchen ein Sprachdiplom oder Zertifikat?",
      desc_test: "Der inlingua Einstufungstest dient der zuverlässigen Einschätzung."
    },
    quote: {
      text: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
      author: "Ludwig Wittgenstein"
    },
    features: {
      title: "Sprachkurse bei inlingua Hannover",
      f1: { title: "Authentischer", text: "Mit inlingua lernen Sie Sprachen durch Sprechen. So nah als wären Sie da." },
      f2: { title: "Gezielter", text: "Mit der inlingua Methode kommen Sie Ihrer Zielsprache Schritt für Schritt näher." },
      f3: { title: "Schneller", text: "inlingua bedeutet Spracherfolg in kurzer Zeit. Bei uns müssen Sie nicht erst Vokabeln büffeln." },
      f4: { title: "Mit Mehr Spaß", text: "Mit inlingua Hannover ist das Lernen leicht, weil Ihre Trainerin die Motivation schon mitbringt." }
    },
    footer: {
      rights: "Ihr gutes Recht",
      network: "inlingua Netzwerk",
      direct: "Direkteinstieg",
      contact: "Kontakt",
      address: "inlingua Sprachschule Hannover GmbH\nAndreaestraße 3\nD-30159 Hannover"
    },
    contact: {
      title: "Wie finde ich?",
      form_title: "Nachricht",
      name: "Name*",
      email: "E-Mail*",
      message: "Nachricht",
      consent: "Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen gespeichert werden.",
      send: "SENDEN"
    }
  },
  en: {
    nav: {
      home: "Home",
      news: "News",
      learn: "Learn Languages",
      exams: "Exams",
      corporate: "Corporate",
      about: "About Us",
      contact: "Contact",
      blog: "Blog"
    },
    hero: {
      title: "And the world is open to you.",
      button: "HOME",
      handwritten: "Hannover speaks inlingua"
    },
    offers: {
      title: "Our New Offers",
      card1: { title: "English Group Course Level B1", date: "04.06.2025", subtitle: "Group Course - English Level B1 (online)" },
      card2: { title: "Life in Germany", date: "23.09.2025", subtitle: "Naturalization Test" },
      card3: { title: "English Group Course Level A1", date: "27.06.2025", subtitle: "English Group Course" },
      more: "MORE"
    },
    welcome: {
      title: "Welcome to inlingua Hannover",
      text: "Which language would you like to learn? Whether English for work, Spanish, Chinese or German as a foreign language: inlingua Hannover is a recognized examination center for TELC and offers language diplomas for various language levels.",
      button: "HOME"
    },
    tiles: {
      learn: "Learn Languages",
      corporate: "Corporate Service",
      exams: "Language Exams",
      test: "Placement Test",
      desc_learn: "Do you want to expand your foreign language skills in a targeted manner?",
      desc_corporate: "Inlingua is a partner for many well-known institutions worldwide.",
      desc_exams: "Do you need a language diploma or certificate?",
      desc_test: "The inlingua placement test serves for reliable assessment."
    },
    quote: {
      text: "The limits of my language mean the limits of my world.",
      author: "Ludwig Wittgenstein"
    },
    features: {
      title: "Language Courses at inlingua Hannover",
      f1: { title: "More Authentic", text: "With inlingua you learn languages by speaking. As close as if you were there." },
      f2: { title: "More Targeted", text: "With the inlingua method, you get closer to your target language step by step." },
      f3: { title: "Faster", text: "inlingua means language success in a short time. You don't have to cram vocabulary first." },
      f4: { title: "With More Fun", text: "Learning is easy with inlingua Hannover because your trainer brings the motivation." }
    },
    footer: {
      rights: "Your Rights",
      network: "inlingua Network",
      direct: "Quick Links",
      contact: "Contact",
      address: "inlingua Sprachschule Hannover GmbH\nAndreaestraße 3\nD-30159 Hannover"
    },
    contact: {
      title: "How do I find?",
      form_title: "Message",
      name: "Name*",
      email: "E-Mail*",
      message: "Message",
      consent: "I agree that my details will be stored for contact and assignment for possible queries.",
      send: "SEND"
    }
  }
};

// --- Mock Data ---

const newsData = [
  { id: 1, date: "07.10.2025", title: "Die Prüfungsergebnisse sind da!", desc: "Wir haben Ihre Prüfungsergebnisse erhalten: DTZ-Prüfung vom 12.09.2025...", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400" },
  { id: 2, date: "04.06.2025", title: "Englisch-Gruppenkurs Level B1", desc: "Gruppenkurs - Englisch Level B1 (online). Start: 05.06.2025...", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" },
  { id: 3, date: "23.09.2025", title: "Leben in Deutschland", desc: "Einbürgerungstest. Termine: 25.11.2025...", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" },
  { id: 4, date: "27.06.2025", title: "Englisch-Gruppenkurs Level A1", desc: "Start: 15.09.2025, montags 17:30 Uhr bis 19:00 Uhr...", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" },
  { id: 5, date: "22.08.2025", title: "DTZ-Prüfung (A2-B1) gast e.V.", desc: "DTZ-Prüfung (A2-B1) gast e.V. Termine...", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400" },
  { id: 6, date: "19.08.2025", title: "DeuFöV-Sprachkurs Level C1", desc: "DeuFöV-Sprachkurs Level C1 (Frühpädagogik). 400 Unterrichtsstunden...", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" },
];

const blogData = [
  { id: 1, date: "28.11.2024", title: "Astor Grand Cinema - Hannovers Kinopalast", img: "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?auto=format&fit=crop&q=80&w=400" },
  { id: 2, date: "06.11.2024", title: "Die Markthalle: Bunt wie die Welt", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400" },
  { id: 3, date: "21.02.2024", title: "Meine Story - Mein Leben", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" }
];

// --- Components ---

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "white" | "nav";
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", className = "", onClick }: ButtonProps) => {
  const baseStyle = "px-6 py-2 text-sm font-semibold transition-colors duration-200 uppercase tracking-wide";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    white: "bg-white text-blue-900 hover:bg-gray-100",
    nav: "text-gray-700 hover:text-red-500 font-medium"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

interface CardProps {
  date?: string;
  title: string;
  subtitle?: string;
  img?: string;
  children?: ReactNode;
  moreText?: string;
}

const Card = ({ date, title, subtitle, img, children, moreText }: CardProps) => (
  <div className="bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="text-xs text-gray-400 mb-2">{date}</div>
    <h3 className="text-blue-600 font-bold text-lg mb-2">{title}</h3>
    {subtitle && <p className="text-sm text-gray-600 mb-4 font-medium">{subtitle}</p>}
    {img && <img src={img} alt={title} className="w-full h-40 object-cover mb-4" />}
    <div className="text-sm text-gray-600 mb-6 flex-grow">
      {children}
    </div>
    <div className="flex justify-end mt-auto">
      <Button variant="outline" className="text-xs py-1 px-4">{moreText}</Button>
    </div>
  </div>
);

// --- Main Application ---
const NavLink = ({ viewName, label, currentView, onClick }: { viewName: string, label: string, currentView: string, onClick: (view: string) => void }) => (
  <button 
    onClick={() => onClick(viewName)}
    className={`text-sm font-bold uppercase tracking-tight hover:text-red-600 transition-colors ${currentView === viewName ? 'text-red-600' : 'text-gray-800'}`}
  >
    {label}
  </button>
);

export default function App() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [view, setView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (newView: string) => {
    setView(newView);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };



  return (
    <div className="min-h-screen font-sans bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-12 py-2 flex justify-between items-center text-xs text-blue-900 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={14} className="mr-1 text-green-500" /> +49 511 9556356700</span>
          </div>
          <div className="flex items-center space-x-6">
             <div className="relative">
               <input type="text" className="border-b border-blue-200 focus:outline-none focus:border-blue-600 text-right w-32" />
               <Search size={14} className="absolute right-0 top-1 text-blue-600" />
             </div>
             <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="font-bold cursor-pointer">
               <span className={lang === 'de' ? 'text-blue-600' : 'text-gray-400'}>DE</span> | <span className={lang === 'en' ? 'text-blue-600' : 'text-gray-400'}>EN</span>
             </button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-12 py-6 flex justify-between items-end">
          <div 
            className="cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
             <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-1">
                        <div className="w-4 h-4 bg-white rounded-full translate-x-1"></div>
                    </div>
                    <span className="text-3xl font-black tracking-tighter">inlingua</span>
                </div>
                <span className="text-xs text-gray-400 tracking-widest pl-1">Ihr Personal Coach für Spracherfolg</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex space-x-6 pb-1">
            <NavLink viewName="home" label={t.nav.home} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="news" label={t.nav.news} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="learn" label={t.nav.learn} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="exams" label={t.nav.exams} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="corporate" label={t.nav.corporate} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="about" label={t.nav.about} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="contact" label={t.nav.contact} currentView={view} onClick={handleNavClick} />
            <NavLink viewName="blog" label={t.nav.blog} currentView={view} onClick={handleNavClick} />
          </nav>

          {/* Mobile Menu Button */}
          <button className="xl:hidden pb-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-gray-50 p-4 space-y-4 shadow-inner">
            <div className="flex flex-col space-y-4">
              <NavLink viewName="home" label={t.nav.home} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="news" label={t.nav.news} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="learn" label={t.nav.learn} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="exams" label={t.nav.exams} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="corporate" label={t.nav.corporate} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="about" label={t.nav.about} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="contact" label={t.nav.contact} currentView={view} onClick={handleNavClick} />
              <NavLink viewName="blog" label={t.nav.blog} currentView={view} onClick={handleNavClick} />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-fade-in">
            {/* Hero */}
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1600" alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/90 to-transparent flex items-center">
                    <div className="container mx-auto px-4 lg:px-12">
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-8 leading-tight">
                                {t.hero.title}
                            </h1>
                            <Button onClick={() => handleNavClick('contact')}>{t.hero.button}</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Handwritten Script */}
            <div className="py-12 text-center bg-white relative overflow-hidden">
                <h2 className="text-6xl md:text-8xl text-black font-cursive opacity-90 transform -rotate-2 font-medium" style={{ fontFamily: 'cursive' }}>
                    {t.hero.handwritten}
                </h2>
                <div className="absolute right-0 top-0 w-32 h-full bg-red-600 transform skew-x-12 translate-x-16"></div>
            </div>

            {/* Offers Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">{t.offers.title}</h2>
                        <Button variant="primary" className="bg-blue-600">{t.offers.more}</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card 
                          date={t.offers.card1.date} 
                          title={t.offers.card1.title} 
                          subtitle={t.offers.card1.subtitle} 
                          moreText={t.offers.more}
                        >
                            <p>Start: 05.06.2025</p>
                            <p className="mt-2 text-blue-500 text-xs underline cursor-pointer">Infos...</p>
                        </Card>
                        <Card 
                          date={t.offers.card2.date} 
                          title={t.offers.card2.title} 
                          subtitle={t.offers.card2.subtitle} 
                          img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
                          moreText={t.offers.more}
                        >
                            <p>Termine: 25.11.2025 / 11.12.2025</p>
                        </Card>
                         <Card 
                          date={t.offers.card3.date} 
                          title={t.offers.card3.title} 
                          subtitle={t.offers.card3.subtitle} 
                          img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
                          moreText={t.offers.more}
                        >
                            <p>Start: 15.09.2025</p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Video Placeholder */}
            <div className="w-full bg-blue-600 h-96 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600" className="absolute w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Video cover" />
                <PlayCircle className="text-white w-20 h-20 relative z-10" />
                <div className="absolute bottom-10 left-10 text-white z-10 font-bold text-4xl">SPRUNG <br/>INS <br/>WASSER</div>
            </div>

            {/* Welcome Section */}
            <div className="container mx-auto px-4 lg:px-12 py-20 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                     <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" alt="Students walking" className="rounded-sm shadow-xl" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-blue-600 text-2xl font-bold mb-6">{t.welcome.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">{t.welcome.text}</p>
                    <Button variant="primary" onClick={() => handleNavClick('home')}>{t.welcome.button}</Button>
                </div>
            </div>

            {/* Color Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-red-500 p-10 text-white hover:bg-red-600 transition-colors cursor-pointer group" onClick={() => handleNavClick('learn')}>
                    <Headphones className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-bold mb-2">{t.tiles.learn}</h3>
                    <p className="text-sm opacity-90">{t.tiles.desc_learn}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs font-bold uppercase">inlingua <ChevronRight size={14}/></div>
                </div>
                <div className="bg-yellow-200 p-10 text-gray-800 hover:bg-yellow-300 transition-colors cursor-pointer group" onClick={() => handleNavClick('corporate')}>
                    <Briefcase className="w-10 h-10 mb-4 text-gray-800" />
                    <h3 className="text-xl font-bold mb-2">{t.tiles.corporate}</h3>
                    <p className="text-sm opacity-80">{t.tiles.desc_corporate}</p>
                     <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs font-bold uppercase">inlingua <ChevronRight size={14}/></div>
                </div>
                 <div className="bg-green-500 p-10 text-white hover:bg-green-600 transition-colors cursor-pointer group" onClick={() => handleNavClick('exams')}>
                    <FileText className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-bold mb-2">{t.tiles.exams}</h3>
                    <p className="text-sm opacity-90">{t.tiles.desc_exams}</p>
                     <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs font-bold uppercase">inlingua <ChevronRight size={14}/></div>
                </div>
                 <div className="bg-purple-500 p-10 text-white hover:bg-purple-600 transition-colors cursor-pointer group" onClick={() => handleNavClick('contact')}>
                    <Target className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-bold mb-2">{t.tiles.test}</h3>
                    <p className="text-sm opacity-90">{t.tiles.desc_test}</p>
                     <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs font-bold uppercase">inlingua <ChevronRight size={14}/></div>
                </div>
            </div>

            {/* Quote */}
            <div className="py-24 bg-white container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 max-w-4xl mx-auto">
                    {t.quote.text}
                 </h2>
                 <p className="text-blue-500 font-medium">{t.quote.author}</p>
            </div>

            {/* Features */}
            <div className="bg-white pb-20">
                <div className="container mx-auto px-4 lg:px-12">
                    <h2 className="text-center text-3xl font-bold mb-16">{t.features.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                         <div className="text-center">
                             <div className="w-16 h-16 rounded-full border-2 border-blue-200 flex items-center justify-center mx-auto mb-6 text-blue-600">
                                 <CheckCircle />
                             </div>
                             <h4 className="text-blue-600 font-bold mb-2">{t.features.f1.title}</h4>
                             <p className="text-sm text-gray-600">{t.features.f1.text}</p>
                         </div>
                         <div className="text-center">
                             <div className="w-16 h-16 rounded-full border-2 border-blue-200 flex items-center justify-center mx-auto mb-6 text-blue-600">
                                 <Target />
                             </div>
                             <h4 className="text-blue-600 font-bold mb-2">{t.features.f2.title}</h4>
                             <p className="text-sm text-gray-600">{t.features.f2.text}</p>
                         </div>
                         <div className="text-center">
                             <div className="w-16 h-16 rounded-full border-2 border-blue-200 flex items-center justify-center mx-auto mb-6 text-blue-600">
                                 <Clock />
                             </div>
                             <h4 className="text-blue-600 font-bold mb-2">{t.features.f3.title}</h4>
                             <p className="text-sm text-gray-600">{t.features.f3.text}</p>
                         </div>
                         <div className="text-center">
                             <div className="w-16 h-16 rounded-full border-2 border-blue-200 flex items-center justify-center mx-auto mb-6 text-blue-600">
                                 <Smile />
                             </div>
                             <h4 className="text-blue-600 font-bold mb-2">{t.features.f4.title}</h4>
                             <p className="text-sm text-gray-600">{t.features.f4.text}</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Large Image */}
             <div className="h-[500px] w-full relative">
                <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1600" alt="Hiking" className="w-full h-full object-cover" />
             </div>

             {/* Personal side */}
             <div className="container mx-auto px-4 lg:px-12 py-20 text-center">
                 <h2 className="text-4xl font-serif font-bold text-blue-900 mb-12">Persönlich an Ihrer Seite.</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                     <div>
                         <h3 className="font-bold text-xl mb-4">Ihr persönlicher Bildungsbegleiter:in</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">Unsere Bildungsbegleiter:innen sind für Sie da, vom ersten Kontakt bis zur Zielerreichung. Sie stellen den Bildungsbedarf fest, passen Bildungspläne individuell auf Ihre Bedürfnisse an und überblicken Ihren Lernfortschritt.</p>
                     </div>
                     <div>
                         <h3 className="font-bold text-xl mb-4">Ihr persönlicher Sprachtrainer:in</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">Unsere Sprachtrainer:innen sind nicht nur didaktisch geschult, sondern ausnahmslos Muttersprachler:innen, die ihre Sprache mit Herz und Leidenschaft vermitteln.</p>
                     </div>
                 </div>
             </div>

             {/* Bottom CTA */}
             <div className="container mx-auto px-4 lg:px-12 pb-20">
                 <div className="flex flex-col md:flex-row gap-8">
                     <div className="flex-1 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden relative group">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                         <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" className="w-full h-64 object-cover" alt="Platform" />
                         <div className="absolute bottom-6 left-6 z-20 text-white">
                             <h3 className="font-bold text-xl mb-2">Jetzt einfach ausprobieren!</h3>
                             <p className="text-sm mb-4">Testzugang zu unserer Lernplattform "my.inlingua"</p>
                             <Button variant="white" className="text-xs">IHR TESTZUGANG</Button>
                         </div>
                     </div>
                     <div className="flex-1 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg shadow-xl p-8 text-white flex flex-col justify-center items-start">
                         <h3 className="font-bold text-2xl mb-4">Follow us on social media!</h3>
                         <p className="mb-6 opacity-90">Wir sind auf instagram, facebook und you tube</p>
                         <div className="flex space-x-4 mb-8">
                            <Facebook className="hover:text-blue-800 cursor-pointer"/>
                            <Instagram className="hover:text-pink-800 cursor-pointer"/>
                            <Youtube className="hover:text-red-800 cursor-pointer"/>
                         </div>
                         <Button variant="white" className="text-xs">INSTAGRAM</Button>
                     </div>
                 </div>
             </div>
          </div>
        )}

        {view === 'news' && (
           <div className="container mx-auto px-4 lg:px-12 py-12 animate-fade-in">
              <h1 className="text-4xl font-serif font-bold mb-12">{t.nav.news}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {newsData.map(item => (
                    <Card key={item.id} date={item.date} title={item.title} img={item.img} moreText={t.offers.more}>
                        <p>{item.desc}</p>
                    </Card>
                 ))}
              </div>
           </div>
        )}

        {view === 'learn' && (
           <div className="animate-fade-in">
               <div className="h-[400px] w-full relative mb-12">
                   <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Learn" />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                       <h1 className="text-5xl font-serif font-bold text-white">{t.nav.learn}</h1>
                   </div>
               </div>
               
               <div className="container mx-auto px-4 lg:px-12 pb-20">
                   <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-16">
                       Internationales Know-how – direkt vor Ort. Sie möchten Ihre Fremdsprachenkenntnisse gezielt erweitern? 
                       Vom Einzel- über den Crashkurs zum Gruppen- oder Firmenkurs: inlingua Hannover bietet maßgeschneiderten Unterricht.
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                       <div className="bg-red-500 p-8 text-white min-h-[300px] flex flex-col justify-center items-start hover:bg-red-600 transition-colors">
                           <div className="bg-white/20 p-2 rounded-full mb-4"><Globe /></div>
                           <h3 className="text-2xl font-bold mb-4">Deutsch als Fremdsprache – Intensivkurse</h3>
                           <p className="text-sm opacity-90 mb-4">German as a Foreign Language – Intensive course</p>
                       </div>
                       <div className="relative h-[300px]">
                            <img src="https://images.unsplash.com/photo-1513258496098-b05360f979aa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Student" />
                       </div>
                       <div className="bg-cyan-300 p-8 text-white min-h-[300px] flex flex-col justify-center items-start hover:bg-cyan-400 transition-colors">
                            <div className="bg-white/20 p-2 rounded-full mb-4"><Users /></div>
                            <h3 className="text-2xl font-bold mb-4">Deutsch für ausländische Ärztinnen und Ärzte</h3>
                            <ul className="text-sm space-y-2 opacity-90">
                                <li>Einzelunterricht</li>
                                <li>Gruppenkurse</li>
                                <li>Crash-Kurse</li>
                            </ul>
                       </div>
                       
                       <div className="relative h-[300px]">
                            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Group" />
                       </div>
                       <div className="bg-green-400 p-8 text-white min-h-[300px] flex flex-col justify-center items-start hover:bg-green-500 transition-colors">
                            <div className="bg-white/20 p-2 rounded-full mb-4"><CheckCircle /></div>
                            <h3 className="text-2xl font-bold mb-4">Integrationskurse</h3>
                            <div className="bg-white text-black text-xs font-bold p-2">Bundesamt für Migration und Flüchtlinge</div>
                       </div>
                       <div className="bg-blue-800 p-8 text-white min-h-[300px] flex flex-col justify-center items-start hover:bg-blue-900 transition-colors">
                           <div className="bg-white/20 p-2 rounded-full mb-4"><Briefcase /></div>
                           <h3 className="text-2xl font-bold mb-4">berufsbezogene Sprachkurse (DeuFöV)</h3>
                           <p className="text-sm opacity-90">inlingua Hannover bietet folgende berufsbezogene Sprachkurse nach §45a AufenthG (DeuFöV) an.</p>
                       </div>

                       <div className="bg-yellow-200 p-8 text-gray-800 min-h-[300px] flex flex-col justify-center items-start hover:bg-yellow-300 transition-colors">
                           <div className="bg-white/50 p-2 rounded-full mb-4"><Target /></div>
                           <h3 className="text-2xl font-bold mb-4">Aktivierungs- und Vermittlungsgutschein</h3>
                           <ul className="text-sm space-y-2 opacity-80">
                                <li>individuelle berufsbezogene</li>
                                <li>Kenntnisvermittlung</li>
                                <li>Sprachen/Einzelunterricht</li>
                           </ul>
                           <span className="mt-4 font-black text-white text-xl">inlingua</span>
                       </div>
                        <div className="relative h-[300px]">
                            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Neon" />
                       </div>
                       <div className="bg-purple-400 p-8 text-white min-h-[300px] flex flex-col justify-center items-start hover:bg-purple-500 transition-colors">
                           <h3 className="text-2xl font-bold mb-4">individuelle Deutschkurse</h3>
                           <ul className="text-sm space-y-2 opacity-90">
                                <li>Einzel- und Duotraining</li>
                                <li>Konversationskurse | Abendkurse</li>
                                <li>Grammatikkurse | Intensivwochen</li>
                           </ul>
                           <span className="mt-4 font-black text-white text-xl">inlingua</span>
                       </div>
                   </div>
               </div>
           </div>
        )}

        {view === 'exams' && (
             <div className="animate-fade-in">
                 <div className="container mx-auto px-4 lg:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                         <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">{t.nav.exams}</h1>
                         <p className="text-lg text-gray-600 mb-4">{t.tiles.desc_exams} Dann sind wir die richtigen Ansprechpartner für Sie!</p>
                         <div className="h-2 w-20 bg-yellow-400 mt-8"></div>
                     </div>
                     <div className="md:w-1/2">
                         <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Writing exam" className="shadow-lg rounded" />
                     </div>
                 </div>

                 <div className="bg-gray-50 py-16">
                     <div className="container mx-auto px-4 lg:px-12">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                             <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600" alt="Consultation" className="rounded shadow-md"/>
                             <div>
                                 <p className="text-gray-600 leading-relaxed mb-6">
                                     Sie brauchen ein Sprachdiplom oder Zertifikat mit einer nationalen oder internationalen Anerkennung? 
                                     Wir bereiten Sie auf die Tests vor und melden Sie an. Inlingua Hannover ist ein anerkanntes Prüfungszentrum für TELC und bietet Sprachdiplome für verschiedene Sprachlevel bis hin zur Mittelstufenprüfung an.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="container mx-auto px-4 lg:px-12 py-20 text-center">
                     <h3 className="text-2xl font-bold text-blue-600 mb-12">Zur Auswahl Ihres Vorbereitungskurses bzw. Ihrer Prüfung klicken Sie bitte auf eines der folgenden Bilder:</h3>
                     <div className="flex flex-wrap justify-center gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500">
                         {/* Mock Logos */}
                         <div className="font-black text-3xl text-blue-900 border-2 border-blue-900 p-4 rounded-full">TOEFL</div>
                         <div className="font-black text-3xl text-red-600 flex flex-col items-center">
                             <div className="w-16 h-10 bg-gradient-to-b from-black via-red-600 to-yellow-400 mb-2"></div>
                             "Leben in Deutschland"
                         </div>
                         <div className="font-black text-4xl tracking-widest">telc</div>
                     </div>
                 </div>
             </div>
        )}

        {view === 'corporate' && (
             <div className="animate-fade-in">
                 <div className="container mx-auto px-4 lg:px-12 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
                      <div className="md:w-1/2">
                         <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">{t.nav.corporate}</h1>
                         <p className="text-lg text-gray-600 mb-4">Für Firmen erstellen wir ein individuelles Trainingskonzept, das in allen Komponenten exakt auf Ihre Bedürfnisse zugeschnitten ist.</p>
                         <div className="h-2 w-20 bg-yellow-400 mt-8"></div>
                     </div>
                     <div className="md:w-1/2 relative">
                         <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Corporate" className="shadow-lg rounded" />
                     </div>
                 </div>

                 {/* Video Placeholder Blue */}
                 <div className="bg-blue-600 py-20 flex justify-center items-center text-white">
                      <PlayCircle size={64} className="opacity-80 hover:scale-110 transition-transform cursor-pointer" />
                 </div>

                 <div className="container mx-auto px-4 lg:px-12 py-20">
                     <h2 className="text-3xl font-bold text-blue-600 mb-12">Unsere Kursformen</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="bg-gray-50 p-8 border-l-4 border-blue-200">
                             <h4 className="font-bold text-blue-600 mb-4 uppercase text-sm">Einzeltraining</h4>
                             <p className="text-sm text-gray-600">Sie bestimmen das Lerntempo, die Trainingszeiten, den Kursort und den Starttermin.</p>
                         </div>
                         <div className="bg-gray-50 p-8 border-l-4 border-blue-200">
                             <h4 className="font-bold text-blue-600 mb-4 uppercase text-sm">Gruppenkurse</h4>
                             <p className="text-sm text-gray-600">Lernen in einer kleinen homogenen Gruppe - in positivem Wettbewerb miteinander wächst schnell der eigene Leistungsanspruch.</p>
                         </div>
                         <div className="bg-gray-50 p-8 border-l-4 border-blue-200">
                             <h4 className="font-bold text-blue-600 mb-4 uppercase text-sm">Seminare</h4>
                             <p className="text-sm text-gray-600">Diese Kursform bietet sich vor allem zur Auffrischung, Festigung oder Vertiefung (fach-)spezifischer Sprachkenntnisse an.</p>
                         </div>
                     </div>
                 </div>

                 {/* Levels */}
                 <div className="bg-blue-50 py-16">
                    <div className="container mx-auto px-4 lg:px-12 text-center">
                        <h2 className="text-2xl font-bold mb-12">Welche Sprachkompetenz wünschen Sie sich für Ihre Mitarbeitenden?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {lvl: "A2", text: "sich verständigen"},
                                {lvl: "B1", text: "aktiv gestalten"},
                                {lvl: "B2", text: "kompetent agieren"},
                                {lvl: "C1-C2", text: "souverän managen"}
                            ].map((l, i) => (
                                <div key={i} className="bg-white p-6 shadow-sm">
                                    <div className="border-2 border-blue-200 text-blue-600 font-bold text-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">{l.lvl}</div>
                                    <h5 className="font-bold text-blue-900 text-sm mb-2">{i+1}. {l.text}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 {/* Contact Person */}
                 <div className="container mx-auto px-4 lg:px-12 py-20 flex justify-center">
                     <div className="bg-white border border-gray-100 shadow-xl p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8">
                         <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div> {/* Placeholder for Ewa Kuhn-Kyncl */}
                         <div>
                             <h3 className="text-xl font-bold text-blue-600 mb-2">Ihr direkter Draht zu uns:</h3>
                             <p className="font-bold mb-4">Ewa Kuhn-Kyncl</p>
                             <div className="flex items-center text-sm mb-2"><Phone size={14} className="mr-2"/> 0511/12 35 487-85</div>
                             <div className="flex items-center text-sm"><Mail size={14} className="mr-2"/> kuhn@inlingua-hannover.de</div>
                         </div>
                     </div>
                 </div>
             </div>
        )}

        {view === 'about' && (
             <div className="animate-fade-in">
                  <div className="container mx-auto px-4 lg:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                         <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">{t.nav.about}</h1>
                     </div>
                     <div className="md:w-1/2">
                         <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="About" className="shadow-lg rounded" />
                     </div>
                 </div>

                 <div className="bg-blue-50 py-20">
                     <div className="container mx-auto px-4 lg:px-12">
                         <h2 className="text-3xl font-bold mb-8">Sprachen lernen in Hannover</h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="bg-white p-6 shadow-sm">
                                 <h4 className="font-bold text-blue-600 mb-2 text-xs uppercase">Hannover - Stadt der Sprache</h4>
                                 <p className="text-sm text-gray-600">Lernen Sie Deutsch, wo man es am besten spricht! Hannover ist dafür bekannt.</p>
                             </div>
                             <div className="bg-white p-6 shadow-sm">
                                 <h4 className="font-bold text-blue-600 mb-2 text-xs uppercase">Hannovers schönste Seiten</h4>
                                 <p className="text-sm text-gray-600">Als Messe-, Event- und Sportstadt bietet Hannover Internationales Flair.</p>
                             </div>
                             <div className="bg-white p-6 shadow-sm">
                                 <h4 className="font-bold text-blue-600 mb-2 text-xs uppercase">An Hannover führt kein Weg vorbei</h4>
                                 <p className="text-sm text-gray-600">Wie auch immer Sie anreisen - mit den Autobahnen A7 und A2.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="container mx-auto px-4 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                          <h4 className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-2">Profis für Profis</h4>
                          <h2 className="text-3xl font-bold mb-6">Unsere Trainerinnen und Trainer</h2>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              Faktoren wie Motivation und Stimmung oder Lernmaterialien und Unterrichtsräume haben einen wesentlichen Einfluss auf die Qualität.
                              Unsere Trainer sind methodisch geschult und unterrichten grundsätzlich in ihrer Muttersprache.
                          </p>
                     </div>
                     <div className="md:w-1/2">
                         <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Trainers" className="rounded shadow-lg" />
                         <div className="bg-yellow-400 w-32 h-32 ml-auto -mt-16 relative z-10"></div>
                     </div>
                 </div>
                 
                 <div className="bg-gray-50 py-20">
                     <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
                         <div className="md:w-1/2">
                              <h4 className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-2">Die inlingua Methode</h4>
                              <h2 className="text-3xl font-bold mb-6">Lernen durch Sprechen</h2>
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                  Bei inlingua Hannover erleben Sie Sprachtraining, das Schritt für Schritt methodisch direkt zur Zielsprache führt.
                              </p>
                              <h3 className="font-bold text-xl mt-8 mb-4">Sprachen lernt man am besten durch Sprechen</h3>
                              <ul className="space-y-2 text-sm text-gray-600">
                                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Grammatik wird nicht gepaukt, sondern praktiziert.</li>
                                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Abwechslungsreiche Trainingsphasen.</li>
                                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Muttersprachliche und didaktisch qualifizierte Trainer.</li>
                              </ul>
                         </div>
                         <div className="md:w-1/2">
                             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Speaking" className="rounded shadow-lg" />
                         </div>
                     </div>
                 </div>
             </div>
        )}

        {view === 'contact' && (
             <div className="animate-fade-in">
                 <div className="container mx-auto px-4 lg:px-12 py-16">
                     <h1 className="text-4xl font-serif font-bold text-blue-600 mb-12">{t.contact.title}</h1>
                     <div className="flex flex-col lg:flex-row gap-12">
                         
                         {/* Info Side */}
                         <div className="lg:w-1/3">
                             <div className="flex items-center mb-6">
                                 <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                                     <div className="w-4 h-4 bg-white rounded-full translate-x-1"></div>
                                 </div>
                                 <span className="font-black text-2xl">inlingua</span>
                             </div>
                             
                             <div className="mb-8 text-sm">
                                 <p className="font-bold">inlingua Sprachschule Hannover GmbH</p>
                                 <p>Andreaestraße 3</p>
                                 <p>D-30159 Hannover</p>
                             </div>
                             
                             <div className="flex items-center gap-4 mb-8">
                                 <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
                                 </div>
                                 <div className="text-sm">
                                     <p>Telefon: +49 511 9556356700</p>
                                     <p>E-Mail: info@inlingua-hannover.de</p>
                                 </div>
                             </div>
                         </div>

                         {/* Form Side */}
                         <div className="lg:w-2/3 bg-white p-8 border border-gray-200 shadow-sm">
                             <form onSubmit={(e) => { e.preventDefault(); alert("Sent!"); }}>
                                 <div className="mb-4">
                                     <select className="w-full p-2 border border-blue-200 text-gray-700 focus:outline-none focus:border-blue-600">
                                         <option>Frau</option>
                                         <option>Herr</option>
                                     </select>
                                 </div>
                                 <div className="mb-4">
                                     <input type="text" placeholder={t.contact.name} className="w-full p-2 border border-blue-200 focus:outline-none focus:border-blue-600 placeholder-blue-600" required />
                                 </div>
                                 <div className="mb-4">
                                     <input type="email" placeholder={t.contact.email} className="w-full p-2 border border-blue-200 focus:outline-none focus:border-blue-600 placeholder-blue-600" required />
                                 </div>
                                 <div className="mb-6">
                                     <textarea placeholder={t.contact.message} rows={6} className="w-full p-2 border border-blue-200 focus:outline-none focus:border-blue-600 placeholder-blue-600" required></textarea>
                                 </div>
                                 <div className="mb-6 flex items-start text-xs text-gray-600">
                                     <input type="checkbox" className="mr-2 mt-1" required />
                                     <p>{t.contact.consent}</p>
                                 </div>
                                 <div className="flex justify-end">
                                     <Button variant="outline" className="px-8">{t.contact.send}</Button>
                                 </div>
                             </form>
                         </div>
                     </div>

                     {/* Map Placeholder */}
                     <div className="mt-16 w-full h-[400px] bg-gray-200 relative">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ansicht_Hannover_OpenStreetMap.png/640px-Ansicht_Hannover_OpenStreetMap.png" className="w-full h-full object-cover opacity-80" alt="Map" />
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <MapPin className="text-red-600 w-12 h-12 drop-shadow-lg" fill="currentColor" />
                         </div>
                     </div>
                 </div>
             </div>
        )}

        {view === 'blog' && (
             <div className="animate-fade-in container mx-auto px-4 lg:px-12 py-16">
                 <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">inlingua inside Hannover - Blog</h1>
                 <p className="text-gray-600 mb-12 max-w-2xl">Was kannst du in Hannover entdecken – lokale Schätze oder globales Miteinander? Schau in unseren Blog und finde es heraus.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {blogData.map(post => (
                         <div key={post.id} className="cursor-pointer group" onClick={() => handleNavClick('blog-post')}>
                             <div className="h-64 overflow-hidden mb-4">
                                 <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                             </div>
                             <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                             <h3 className="text-blue-600 font-bold text-lg mb-2 group-hover:text-blue-800 transition-colors">{post.title}</h3>
                             <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.title} - Intro text...</p>
                             <Button variant="outline" className="text-xs py-1 px-4">{t.offers.more}</Button>
                         </div>
                     ))}
                 </div>
             </div>
        )}

        {view === 'blog-post' && (
             <div className="animate-fade-in">
                 <div className="w-full h-[500px] bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Blog Hero" />
                 </div>
                 <div className="container mx-auto px-4 lg:px-12 py-12 max-w-4xl">
                     <div className="text-blue-600 font-bold mb-4">02. September 2023</div>
                     <h1 className="text-4xl font-bold mb-6">MEINE STORY - MEIN LEBEN</h1>
                     <p className="text-sm font-bold text-gray-600 mb-12">Nada – Ärztin aus Syrien, Teilnehmerin unserer Intensivkurse „Deutsch als Fremdsprache“</p>
                     
                     <div className="mb-12">
                         <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" className="w-full rounded shadow-lg mx-auto" alt="Story" />
                     </div>
                     
                     <div className="prose max-w-none text-gray-700 space-y-6">
                         <p>Im Februar 2023 bin ich nach Deutschland gekommen. Nach der Ankunft in Hannover habe ich mich für einen B2-Kurs in inlingua angemeldet, der im April angefangen hat.</p>
                         <p>Das Lernen bei inlingua hat mir viel Spaß gemacht. Die Atmosphäre, die hier herrscht, ist sehr familiär und dadurch konnte ich meine Sprachkenntnisse auf ein neues, höheres Niveau bringen.</p>
                         <p>In Deutschland ist alles sehr organisiert und die Leute legen einen großen Wert darauf – das gefällt mir besonders gut.</p>
                     </div>
                     
                     <div className="mt-12 flex justify-end">
                         <button className="text-blue-600 hover:underline" onClick={() => handleNavClick('blog')}>Next Post &rarr;</button>
                     </div>
                 </div>
             </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 text-sm">
         <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
             {/* Brand Column */}
             <div>
                  <div className="flex items-center mb-6 text-white">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-1">
                            <div className="w-4 h-4 bg-black rounded-full translate-x-1"></div>
                        </div>
                        <span className="text-2xl font-black tracking-tighter">inlingua</span>
                  </div>
                  <div className="space-y-1 mb-6 whitespace-pre-line">
                      {t.footer.address}
                  </div>
                  <h4 className="text-white font-bold mb-2 uppercase">{t.footer.contact}</h4>
                  <p>Telefon: +49 511 9556356700</p>
                  <p>E-Mail: info@inlingua-hannover.de</p>
             </div>

             {/* Links 1 */}
             <div>
                 <h4 className="text-white font-bold mb-4">{t.nav.home}</h4>
                 <ul className="space-y-2">
                     <li>{t.nav.about}</li>
                     <li>{t.nav.corporate}</li>
                     <li>Online Übungen</li>
                     <li>Suchmaschine</li>
                     <li>{t.nav.exams}</li>
                 </ul>
             </div>

             {/* Links 2 */}
             <div>
                 <h4 className="text-white font-bold mb-4">{t.footer.rights}</h4>
                 <ul className="space-y-2">
                     <li>{t.nav.news}</li>
                     <li>Unser Team</li>
                     <li>Opinions</li>
                     <li>{t.nav.blog}</li>
                     <li>Unsere Bildergalerie</li>
                     <li>Audiobibliothek</li>
                     <li>Impressum</li>
                 </ul>
             </div>

             {/* Links 3 */}
             <div>
                 <h4 className="text-white font-bold mb-4">{t.footer.network}</h4>
                 <ul className="space-y-2 mb-8">
                     <li>{t.footer.contact}</li>
                 </ul>

                 <h4 className="text-white font-bold mb-4">{t.footer.direct}</h4>
                 <ul className="space-y-2 mb-8">
                     <li>{t.footer.contact}</li>
                     <li>{t.nav.news}</li>
                     <li>Unser Team</li>
                 </ul>

                 <div className="flex space-x-4 text-white">
                     <Youtube size={16} />
                     <MessageCircle size={16} />
                     <Facebook size={16} />
                     <Instagram size={16} />
                     <Linkedin size={16} />
                 </div>
             </div>
         </div>
         
         <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-center text-gray-600">
             inlingua Hannover 2021. All rights reserved | Website Style - Strony WWW
         </div>
      </footer>
    </div>
  );
}
