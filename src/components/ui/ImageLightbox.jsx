import { useEffect, useState } from 'react';
import { RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';

export default function ImageLightbox({
  src,
  alt,
  expectedFilename,
  aspectRatio = 'aspect-video',
  className = '',
  iconSize = 28,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openLightbox = () => {
    if (src) {
      setScale(1);
      setIsOpen(true);
    }
  };

  const changeScale = (amount) => {
    setScale((currentScale) => Math.min(3, Math.max(1, currentScale + amount)));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    changeScale(event.deltaY < 0 ? 0.2 : -0.2);
  };

  return (
    <>
      <div
        className={`${src ? 'cursor-zoom-in' : ''} ${className}`}
        onClick={openLightbox}
        role={src ? 'button' : undefined}
        tabIndex={src ? 0 : undefined}
        onKeyDown={(event) => {
          if (src && (event.key === 'Enter' || event.key === ' ')) openLightbox();
        }}
      >
        <PlaceholderImage
          src={src}
          alt={alt}
          expectedFilename={expectedFilename}
          aspectRatio={aspectRatio}
          iconSize={iconSize}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} enlarged preview`}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${scale})` }}
              onWheel={handleWheel}
              onClick={(event) => event.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/15 bg-dark-surface/95 p-1.5 shadow-xl">
              <button
                type="button"
                title="Zoom out"
                aria-label="Zoom out"
                className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-dark-hover hover:text-white"
                onClick={() => changeScale(-0.2)}
              >
                <ZoomOut size={18} />
              </button>
              <button
                type="button"
                title="Reset zoom"
                aria-label="Reset zoom"
                className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-dark-hover hover:text-white"
                onClick={() => setScale(1)}
              >
                <RotateCcw size={17} />
              </button>
              <button
                type="button"
                title="Zoom in"
                aria-label="Zoom in"
                className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-dark-hover hover:text-white"
                onClick={() => changeScale(0.2)}
              >
                <ZoomIn size={18} />
              </button>
            </div>

            <button
              type="button"
              title="Close preview"
              aria-label="Close preview"
              className="absolute right-0 top-0 rounded-xl border border-white/15 bg-dark-surface/95 p-2.5 text-slate-200 shadow-xl transition-colors hover:bg-dark-hover hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
