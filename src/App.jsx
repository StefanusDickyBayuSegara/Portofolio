import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col selection:bg-primary/20 selection:text-primary">
        {/* Sticky Top Navbar */}
        <Navbar />

        {/* Konten Utama */}
        <main className="flex-1">
          {/* Section 1: Hero / Beranda */}
          <Hero />

          {/* Section 2: Tentang Saya & Pengalaman */}
          <About />

          {/* Section 3: Keahlian & Tools */}
          <Skills />

          {/* Section 4: Proyek Terpilih */}
          <Projects />

          {/* Section 5: Sertifikasi */}
          <Certificates />

          {/* Section 6: Kontak */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
