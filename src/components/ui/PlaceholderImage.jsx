import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

/**
 * PlaceholderImage:
 * Mencoba memuat gambar asli terlebih dahulu. Jika gambar belum diunggah atau error 404,
 * akan menampilkan placeholder elegan dengan garis putus-putus (dashed border),
 * ikon, dan petunjuk nama file yang harus diletakkan user.
 */
export default function PlaceholderImage({
  src,
  alt = 'Placeholder Image',
  expectedFilename = 'image.jpg',
  aspectRatio = 'aspect-video',
  className = '',
  iconSize = 28,
}) {
  const [hasError, setHasError] = useState(false);

  // Jika src tidak diberikan atau gambar gagal dimuat (misal file belum ada di assets)
  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} flex flex-col items-center justify-center p-4 bg-dark-surface/80 border-2 border-dashed border-dark-border rounded-xl text-center group transition-colors hover:border-primary/40 ${className}`}
      >
        <div className="p-3 rounded-xl bg-dark-bg/60 border border-dark-border/60 text-slate-400 group-hover:text-primary transition-colors mb-2">
          <ImageIcon size={iconSize} />
        </div>
        <p className="text-xs font-mono text-slate-300 font-medium tracking-tight break-all">
          {expectedFilename}
        </p>
        <span className="text-[10px] text-slate-400 mt-0.5">
          Simpan file di folder <code className="text-primary/90 font-mono">src/assets/</code>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`w-full ${aspectRatio} object-cover transition-transform duration-500 ${className}`}
      loading="lazy"
    />
  );
}

