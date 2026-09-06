import { Code2, Globe2, Smartphone, Database, Terminal, Cpu } from 'lucide-react';
import {
  SiAndroid, SiBootstrap, SiCodeigniter, SiFirebase, SiFlask,
  SiGithub, SiHtml5, SiJavascript, SiKotlin, SiLaravel, SiMysql,
  SiPhp, SiPostman, SiPython, SiReact, SiSqlite, SiTailwindcss, SiXampp,
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/content';

export default function Skills() {
  const { t, language } = useLanguage();

  // Helper untuk menentukan icon per kategori
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Code2 size={20} className="text-primary" />;
      case 1:
        return <Globe2 size={20} className="text-accent-indigo" />;
      case 2:
        return <Smartphone size={20} className="text-accent-teal" />;
      case 3:
        return <Database size={20} className="text-sky-400" />;
      default:
        return <Terminal size={20} className="text-primary" />;
    }
  };

  const skillIcons = {
    android: SiAndroid,
    bootstrap: SiBootstrap,
    codeigniter: SiCodeigniter,
    database: Database,
    firebase: SiFirebase,
    flask: SiFlask,
    github: SiGithub,
    html5: SiHtml5,
    javascript: SiJavascript,
    kotlin: SiKotlin,
    laravel: SiLaravel,
    mysql: SiMysql,
    php: SiPhp,
    postman: SiPostman,
    python: SiPython,
    react: SiReact,
    sqlite: SiSqlite,
    tailwind: SiTailwindcss,
    xampp: SiXampp,
  };

  return (
    <section id="keahlian" className="py-20 md:py-28 border-t border-dark-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-primary mb-3">
            <Cpu size={14} />
            <span>
              {language === 'id' ? 'Keahlian Teknis & Alat Kerja' : 'Technical Skills & Tooling'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            {language === 'id' ? 'Teknologi yang Sering Digunakan' : 'Technologies & Tech Stack'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {language === 'id'
              ? 'Pengembangan web full-stack yang terstruktur, didukung kemampuan analisis proses bisnis, dokumentasi, dan koordinasi proyek.'
              : 'Focused on structured full-stack web development, supported by business process analysis, documentation, and project coordination skills.'}
          </p>
        </div>

        {/* Modular Grid: 4 Kategori Keahlian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-dark-surface/60 border border-dark-border hover:border-slate-700 transition-all group"
            >
              {/* Header Kategori */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border/60">
                <div className="p-2.5 rounded-xl bg-dark-bg border border-dark-border group-hover:scale-105 transition-transform">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">
                    {t(cat.category)}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cat.skills.length} {language === 'id' ? 'teknologi' : 'technologies'}
                  </span>
                </div>
              </div>

              {/* Daftar Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 px-1 py-1.5 text-slate-200 hover:text-white transition-colors"
                  >
                    {(() => {
                      const SkillIcon = skillIcons[skill.icon] || Terminal;
                      return <SkillIcon size={19} aria-hidden="true" style={{ color: skill.color }} />;
                    })()}
                    <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

