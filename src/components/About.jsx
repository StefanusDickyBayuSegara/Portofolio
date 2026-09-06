import { Download, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, aboutContent, experiencesContent } from '../data/content';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="py-20 md:py-28 border-t border-dark-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-primary mb-3">
            <GraduationCap size={14} />
            <span>{t(aboutContent.badge)}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            {t(aboutContent.sectionTitle)}
          </h2>
        </div>

        {/* Narasi Profil + Tombol Unduh CV */}
        <div className="mb-12">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {t(aboutContent.bio)}
            </p>
            
            {/* Tombol Unduh CV */}
            <div className="pt-2">
              <a
                href={personalInfo.cvPath}
                download="CV-Stefanus-Dicky-Bayu-Segara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border hover:border-primary/50 text-slate-100 text-sm font-medium transition-all duration-200 group shadow-sm hover:shadow-primary/10"
              >
                <Download size={16} className="text-primary group-hover:-translate-y-0.5 transition-transform" />
                <span>{t(aboutContent.downloadCv)}</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-300">
                  (.PDF)
                </span>
              </a>
            </div>
        </div>

        {/* Sub-Section: Pengalaman & Kegiatan (MBKM, Asdos, Organisasi) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={20} className="text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              {t(experiencesContent.sectionTitle)}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiencesContent.items.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-surface/60 border border-dark-border flex flex-col justify-between hover:border-slate-700 hover:bg-dark-surface transition-all"
              >
                <div>
                  {/* Badge Tipe & Periode */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Posisi & Instansi */}
                  <h4 className="text-base font-semibold text-slate-100 mb-1">
                    {t(exp.role)}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mb-3.5">
                    {exp.institution}
                  </p>

                  {/* Deskripsi Singkat */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t(exp.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

