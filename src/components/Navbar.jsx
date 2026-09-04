import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, navigationLinks } from '../data/content';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Deteksi scroll untuk memberi efek visual glassmorphism saat halaman digeser ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Hitung section mana yang sedang aktif di viewport
      const sections = navigationLinks.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile ketika link diklik
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo / Branding */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="text-xl font-bold text-slate-100 tracking-tight transition-colors group-hover:text-primary">
            {personalInfo.shortName}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary inline-block transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-dark-surface/60'
                }`}
              >
                {t(link.label)}
                {/* Indikator aktif di bawah teks */}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Toggle Bahasa (ID / EN) */}
          <button
            onClick={toggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-surface border border-dark-border text-slate-300 hover:text-primary hover:border-primary/40 transition-all duration-200 cursor-pointer"
            title={language === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className={language === 'id' ? 'text-primary font-bold' : 'text-slate-400'}>ID</span>
            <span className="text-slate-500">/</span>
            <span className={language === 'en' ? 'text-primary font-bold' : 'text-slate-400'}>EN</span>
          </button>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-slate-100 bg-dark-surface border border-dark-border focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-xl px-5 py-4 transition-all animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-dark-surface'
                  }`}
                >
                  {t(link.label)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

