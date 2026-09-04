import { createContext, useContext, useState, useEffect } from 'react';

// Buat Context untuk bahasa
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Ambil preferensi bahasa dari localStorage jika ada, default 'id'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'en' ? 'en' : 'id';
  });

  // Simpan ke localStorage setiap kali bahasa berubah
  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    // Ubah atribut lang di tag <html> untuk aksesibilitas & SEO
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  /**
   * Helper function untuk mempermudah pemanggilan teks:
   * Contoh: t({ id: "Halo", en: "Hello" }) -> menghasilkan string sesuai bahasa aktif
   */
  const t = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item;
    return item[language] || item.id || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook kustom agar mudah dipanggil di komponen mana saja: const { language, toggleLanguage, t } = useLanguage();
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage harus digunakan di dalam <LanguageProvider>');
  }
  return context;
}

