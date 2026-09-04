import { ArrowUp, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, footerContent } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Footer() {
  const { t } = useLanguage();

  // Fungsi untuk scroll mulus kembali ke paling atas (Hero/Beranda)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-dark-border/80 bg-dark-surface/40 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Sisi Kiri: Branding & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group flex items-center gap-1.5 mb-2 focus:outline-none"
            >
              <span className="text-lg font-bold text-slate-100 tracking-tight transition-colors group-hover:text-primary">
                {personalInfo.shortName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            </a>
            <p className="text-xs text-slate-400 font-normal mb-1">
              {t(footerContent.copyright)}
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              {t(footerContent.tagline)}
            </p>
          </div>

          {/* Sisi Kanan: Social Links & Tombol Kembali ke Atas */}
          <div className="flex items-center gap-4">
            
            {/* Tautan Sosial */}
            <div className="flex items-center gap-2">
              <ExternalLink
                href={personalInfo.github}
                showIcon={false}
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-slate-400 hover:text-primary hover:border-primary/40 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </ExternalLink>

              <ExternalLink
                href={personalInfo.linkedin}
                showIcon={false}
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-slate-400 hover:text-primary hover:border-primary/40 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </ExternalLink>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-slate-400 hover:text-primary hover:border-primary/40 transition-colors"
                title="Email"
                aria-label="Direct Email"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Separator Vertikal */}
            <div className="h-5 w-[1px] bg-dark-border hidden sm:block" />

            {/* Tombol Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border hover:border-slate-600 text-slate-300 hover:text-primary transition-all duration-200 cursor-pointer group"
              title="Kembali ke atas"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}

