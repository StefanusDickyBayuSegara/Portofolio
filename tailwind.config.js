/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet warna kustom agar tampilan tidak generik/AI template
        dark: {
          bg: '#0b0f17',        // Latar belakang utama (Deep Navy Slate)
          surface: '#121929',   // Container / kartu
          border: '#1e2a42',    // Garis batas halus
          card: '#162035',      // Card dengan kontras sedikit lebih tinggi
          hover: '#1e2c4a',     // Background saat hover
        },
        primary: {
          DEFAULT: '#38bdf8',   // Sky-400 (warna aksen utama: modern, bersih)
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        accent: {
          indigo: '#818cf8',    // Indigo-400 (aksen sekunder untuk variasi)
          teal: '#2dd4bf',      // Teal-400 (untuk status/tag khusus)
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

