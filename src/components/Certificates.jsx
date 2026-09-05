import { Award, CheckCircle2, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificatesContent } from '../data/content';
import ImageLightbox from './ui/ImageLightbox';

export default function Certificates() {
  const { t, language } = useLanguage();
  const certificateFiles = import.meta.glob('../assets/certificates/*', {
    eager: true,
    import: 'default',
  });

  return (
    <section id="sertifikasi" className="py-20 md:py-28 border-t border-dark-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-primary mb-3">
            <Award size={14} />
            <span>
              {language === 'id' ? 'Kredensial & Pelatihan' : 'Credentials & Training'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            {t(certificatesContent.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {t(certificatesContent.subtitle)}
          </p>
        </div>

        {/* Galeri / List Sertifikat (Mudah ditambah di content.js) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesContent.items.map((cert) => {
            const certFileKey = `../assets/certificates/${cert.imagePlaceholder}`;
            const certFileSrc = certificateFiles[certFileKey] || null;
            const isPdf = cert.imagePlaceholder.toLowerCase().endsWith('.pdf');

            return (
              <div
                key={cert.id}
                className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Slot Placeholder Preview Sertifikat */}
                  <div className="mb-5 overflow-hidden rounded-xl bg-dark-bg border border-dark-border/60">
                    {isPdf ? (
                      <a
                        href={certFileSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex aspect-[16/10] items-center justify-center text-sm font-mono text-primary hover:text-slate-100 transition-colors"
                      >
                        Buka dokumen PDF
                      </a>
                    ) : (
                      <ImageLightbox
                        src={certFileSrc}
                        alt={cert.title}
                        expectedFilename={`src/assets/certificates/${cert.imagePlaceholder}`}
                        aspectRatio="aspect-[16/10]"
                        className="group-hover:scale-102 transition-transform duration-300"
                        iconSize={32}
                      />
                    )}
                  </div>

                  {/* Badge Terverifikasi */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                    <CheckCircle2 size={14} />
                    <span>{cert.badge}</span>
                  </div>

                  {/* Judul Sertifikasi */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Institusi Penerbit */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 mb-3">
                    <Building2 size={15} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Tanggal Terbit */}
                <div className="pt-4 border-t border-dark-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar size={13} className="text-slate-400" />
                  <span>{cert.date}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

