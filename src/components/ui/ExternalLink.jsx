import { ExternalLink as ExternalIcon } from 'lucide-react';

/**
 * Komponen ExternalLink terstandarisasi:
 * - Selalu membuka di tab baru (target="_blank")
 * - Aman terhadap celah keamanan (rel="noopener noreferrer")
 * - Memiliki ikon kecil penanda link eksternal
 */
export default function ExternalLink({
  href,
  children,
  className = '',
  showIcon = true,
  iconSize = 14,
  ...props
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      {...props}
    >
      {children}
      {showIcon && (
        <ExternalIcon
          size={iconSize}
          className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

