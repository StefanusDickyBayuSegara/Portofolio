import { FolderGit2, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsContent } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import ImageLightbox from './ui/ImageLightbox';
import { GithubIcon } from './ui/Icons';

export default function Projects() {
  const { t, language } = useLanguage();

  // Otomatis mendeteksi seluruh gambar di folder src/assets/projects/ (.png, .jpg, .webp)
  const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  });

  return (
    <section id="proyek" className="py-20 md:py-28 border-t border-dark-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-primary mb-3">
            <FolderGit2 size={14} />
            <span>
              {language === 'id' ? 'Karya & Pengembangan' : 'Work & Engineering'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            {t(projectsContent.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {t(projectsContent.subtitle)}
          </p>
        </div>

        {/* Grid Daftar Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsContent.items.map((project, idx) => {
            // Cari gambar yang cocok dari folder assets/projects berdasarkan ID atau nama proyek
            const matchedKey = Object.keys(projectImages).find((key) =>
              key.toLowerCase().includes(project.id) ||
              key.toLowerCase().includes(project.imagePlaceholder.split('.')[0])
            );
            const imageSrc = matchedKey ? projectImages[matchedKey] : null;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-dark-surface border border-dark-border overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-black/30"
              >
                <div>
                  {/* Container Placeholder / Gambar Thumbnail */}
                  <div className="p-3 pb-0">
                    <div className="overflow-hidden rounded-xl bg-dark-bg">
                      <ImageLightbox
                        src={imageSrc}
                        alt={project.title}
                        expectedFilename={`src/assets/projects/${project.imagePlaceholder}`}
                        aspectRatio={project.aspectRatio || 'aspect-[16/10]'}
                        className="group-hover:scale-102 transition-transform duration-300"
                        iconSize={32}
                      />
                    </div>
                  </div>

                  {/* Informasi Konten Proyek */}
                  <div className="p-6">
                    {/* Metadata: Tipe & Tahun */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {idx === 0 && <Sparkles size={12} />}
                        {t(project.type)}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={13} />
                        {project.year}
                      </span>
                    </div>

                    {/* Judul Proyek */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Deskripsi Proyek */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {t(project.description)}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.map((techItem, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-dark-bg border border-dark-border text-slate-300 hover:border-slate-600 transition-colors"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Kartu: Tombol Link Keluar */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-dark-border/60 flex items-center justify-between">
                    <ExternalLink
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-bg hover:bg-dark-hover border border-dark-border hover:border-primary/40 text-slate-200 text-xs sm:text-sm font-medium transition-all group/btn"
                    >
                      <GithubIcon size={16} />
                      <span>{t(projectsContent.viewGithub)}</span>
                    </ExternalLink>

                    <span className="text-[11px] font-mono text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

