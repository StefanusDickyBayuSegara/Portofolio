import { Download, GraduationCap, Briefcase, Award, Users, Calendar } from 'lucide-react';
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

        {/* Baris Atas: Paragraf Narasi Profil + Tombol Unduh CV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
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

          {/* Kotak ringkasan nilai tambah / fokus */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-dark-surface/50 border border-dark-border">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Core Focus
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Full-stack Web Engineering (Laravel, React, Flask)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-1.5 shrink-0" />
                <span>Modern Android Apps (Kotlin, MVVM, SQLite, Firebase)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-1.5 shrink-0" />
                <span>Database Design, ERD, SQL & Content-Based Recommendation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Grid 4 Statistik Angka Utama (Bukan card generik) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {aboutContent.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-slate-700 transition-colors"
            >
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-50 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-mono text-primary font-medium">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                {t(stat.label)}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                {typeof stat.sub === 'object' ? t(stat.sub) : stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Sub-Section: Pengalaman & Kegiatan (MBKM, Asdos, Organisasi) */}
        <div className="pt-4">
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

