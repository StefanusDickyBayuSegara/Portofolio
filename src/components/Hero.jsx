import { useEffect, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, heroContent } from '../data/content';
import profileImg from '../assets/profile.jpg';
import ExternalLink from './ui/ExternalLink';
import PlaceholderImage from './ui/PlaceholderImage';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const roles = personalInfo.roles;

  useEffect(() => {
    let transitionTimeout;
    const intervalId = setInterval(() => {
      setRoleVisible(false);
      transitionTimeout = setTimeout(() => {
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        setRoleVisible(true);
      }, 250);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(transitionTimeout);
    };
  }, [roles.length]);

  // Fungsi navigasi smooth scroll ke section tertentu saat tombol diklik
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient glow halus (memberikan kedalaman visual tanpa berlebihan) */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-primary/10 via-accent-indigo/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Informasi Profil & Tombol Aksi (7 dari 12 kolom di layar besar) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Ketersediaan Kerja & Lokasi */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-dark-surface border border-dark-border text-slate-300">
                {/* Titik hijau berdenyut lembut (pulsating live indicator) */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t(personalInfo.status)}
              </span>

              {/* Tag Lokasi */}
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin size={13} className="text-primary" />
                {t(personalInfo.location)}
              </span>
            </div>

            {/* Sapaan & Nama Lengkap */}
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
              {t(heroContent.greeting)}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-50 tracking-tight leading-[1.15] mb-4">
              {personalInfo.name}
            </h1>

            {/* Peran / Title Spesialisasi */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-5">
              <span
                key={roleIndex}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 transition-opacity duration-500"
                style={{ opacity: roleVisible ? 1 : 0 }}
              >
                {t(roles[roleIndex])}
              </span>
            </h2>

            {/* Ringkasan Singkat Profil */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {t(heroContent.subtitle)}
            </p>

            {/* Tombol CTA (Call To Action) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9 w-full sm:w-auto">
              {/* Tombol Lihat Proyek */}
              <button
                type="button"
                onClick={() => scrollToSection('proyek')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-slate-950 font-semibold text-sm hover:bg-sky-400 active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary/20 cursor-pointer"
              >
                {t(heroContent.ctaProjects)}
              </button>

              {/* Tombol Hubungi Saya */}
              <button
                type="button"
                onClick={() => scrollToSection('kontak')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border hover:border-slate-600 text-slate-200 font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                {t(heroContent.ctaContact)}
              </button>
            </div>

            {/* Tautan Sosial Media (GitHub & LinkedIn) */}
            <div className="flex items-center gap-4 pt-4 border-t border-dark-border/60 w-full">
              <span className="text-xs text-slate-400 font-mono">
                Connect:
              </span>

              {/* GitHub Link */}
              <ExternalLink
                href={personalInfo.github}
                showIcon={false}
                className="p-2.5 rounded-lg bg-dark-surface border border-dark-border text-slate-300 hover:text-primary hover:border-primary/40 transition-colors"
                title="Kunjungi Profil GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </ExternalLink>

              {/* LinkedIn Link */}
              <ExternalLink
                href={personalInfo.linkedin}
                showIcon={false}
                className="p-2.5 rounded-lg bg-dark-surface border border-dark-border text-slate-300 hover:text-primary hover:border-primary/40 transition-colors"
                title="Kunjungi Profil LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </ExternalLink>

              {/* Email Direct Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-dark-surface border border-dark-border text-slate-300 hover:text-primary hover:border-primary/40 transition-colors"
                title="Kirim Email Langsung"
                aria-label="Direct Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Bingkai Foto Profil (5 dari 12 kolom di layar besar) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Bingkai dekorasi luar dengan aksen garis tipis */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/30 to-accent-indigo/30 opacity-40 blur-lg -z-10"
                aria-hidden="true"
              />

              {/* Box foto utama dengan sudut modern */}
              <div className="relative rounded-2xl p-2 bg-dark-surface border border-dark-border shadow-2xl overflow-hidden">
                <PlaceholderImage
                  src={profileImg}
                  expectedFilename="profile.jpg"
                  aspectRatio="aspect-[4/5]"
                  className="rounded-xl"
                  iconSize={36}
                />

                {/* Badge ringkas di atas foto */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-bg/90 backdrop-blur-md border border-dark-border p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-100">
                      {personalInfo.shortName}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      S1 Informatika USD
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    2022–2026
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

