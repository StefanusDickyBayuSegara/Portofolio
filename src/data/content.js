/**
 * PUSAT DATA KONTEN PORTOFOLIO (Bilingual ID / EN)
 * File ini dirancang agar mudah diedit dan ditambah di kemudian hari.
 */

export const personalInfo = {
  name: "Stefanus Dicky Bayu Segara",
  shortName: "Dicky",
  brand: "Dicky.",
  email: "stefanussegara@gmail.com",
  phone: "+62 822-8609-1079",
  whatsappUrl: "https://wa.me/6282286091079",
  github: "https://github.com/StefanusDickyBayuSegara",
  linkedin: "https://linkedin.com/in/stefanus-segara",
  cvPath: "/CV_Stefanus_Dicky_Bayu_Segara_ID.pdf", // Mengarah ke file CV asli di folder public/
  
  location: {
    id: "D.I. Yogyakarta, Indonesia",
    en: "Yogyakarta Special Region, Indonesia",
  },
  roles: {
    id: "Web & Android Developer",
    en: "Web & Android Developer",
  },
  status: {
    id: "Tersedia untuk Peluang Kerja (Yogyakarta / Remote)",
    en: "Available for Opportunities (Yogyakarta / Remote)",
  },
};

export const navigationLinks = [
  { id: "beranda", label: { id: "Beranda", en: "Home" } },
  { id: "tentang", label: { id: "Tentang", en: "About" } },
  { id: "keahlian", label: { id: "Keahlian", en: "Skills" } },
  { id: "proyek", label: { id: "Proyek", en: "Projects" } },
  { id: "sertifikasi", label: { id: "Sertifikasi", en: "Certificates" } },
  { id: "kontak", label: { id: "Kontak", en: "Contact" } },
];

export const heroContent = {
  greeting: {
    id: "Halo, saya",
    en: "Hello, I'm",
  },
  subtitle: {
    id: "Lulusan Informatika yang berfokus membangun aplikasi web full-stack dan mobile Android fungsional, terstruktur, dan berorientasi pada solusi nyata pengguna.",
    en: "Informatics graduate focused on engineering robust, high-performance full-stack web and Android applications built for real-world user solutions.",
  },
  ctaProjects: {
    id: "Lihat Proyek",
    en: "View Projects",
  },
  ctaContact: {
    id: "Hubungi Saya",
    en: "Get in Touch",
  },
};

export const aboutContent = {
  sectionTitle: {
    id: "Tentang Saya",
    en: "About Me",
  },
  badge: {
    id: "Latar Belakang & Profil",
    en: "Background & Profile",
  },
  bio: {
    id: "Lulusan Informatika dari Universitas Sanata Dharma (IPK 3.41/4.00, predikat Sangat Memuaskan) dengan pengalaman langsung membangun aplikasi web full-stack dan aplikasi Android melalui program magang serta proyek akademik mandiri. Terbiasa bekerja dengan PHP, CodeIgniter, Laravel, Python (Flask), JavaScript, React.js, dan Kotlin (Android), dengan pengalaman praktis dalam perancangan basis data, analisis proses bisnis, dan sistem rekomendasi berbasis konten. Berpengalaman sebagai asisten dosen untuk mata kuliah Analisis Proses Bisnis dan aktif dalam organisasi kampus.",
    en: "Informatics graduate from Sanata Dharma University (GPA 3.41/4.00, Very Satisfactory distinction) with hands-on experience building full-stack web and Android applications through internship programs and independent academic projects. Proficient in working with PHP, CodeIgniter, Laravel, Python (Flask), JavaScript, React.js, and Kotlin (Android), with practical expertise in database architecture, business process analysis, and content-based recommendation systems. Experienced as a teaching assistant for Business Process Analysis and actively engaged in campus organizations.",
  },
  downloadCv: {
    id: "Unduh CV Lengkap",
    en: "Download Full Resume",
  },
  stats: [
    {
      value: "S1",
      unit: "Informatika",
      sub: "Univ. Sanata Dharma (2022–2026)",
      label: { id: "Pendidikan", en: "Education" },
    },
    {
      value: "3.41",
      unit: "/ 4.00",
      sub: { id: "Predikat Sangat Memuaskan", en: "Very Satisfactory Distinction" },
      label: { id: "IPK Kelulusan", en: "Cumulative GPA" },
    },
    {
      value: "4+",
      unit: "Proyek",
      sub: { id: "Web Full-stack & Android", en: "Full-stack Web & Android" },
      label: { id: "Portofolio Proyek", en: "Completed Projects" },
    },
    {
      value: "1",
      unit: "MBKM",
      sub: "PT Kanisius (Divisi HR & SIM)",
      label: { id: "Pengalaman Magang", en: "Industry Internship" },
    },
  ],
};

export const experiencesContent = {
  sectionTitle: {
    id: "Pengalaman & Organisasi",
    en: "Experience & Activities",
  },
  items: [
    {
      role: {
        id: "Peserta Magang (Program MBKM)",
        en: "Software Developer Intern (MBKM Program)",
      },
      institution: "PT Kanisius – Divisi HR, Fasilitas & SIM",
      period: "Agustus – Desember 2025",
      type: "Internship",
      description: {
        id: "Merancang dan mengembangkan platform pelatihan internal berbasis web (LMS) untuk standarisasi alur pelatihan karyawan serta sistem monitoring evaluasi bagi administrator HR.",
        en: "Designed and developed an internal web-based training platform (LMS) to standardize employee training workflows and evaluation tracking for HR administration.",
      },
    },
    {
      role: {
        id: "Asisten Dosen – Analisis Proses Bisnis",
        en: "Teaching Assistant – Business Process Analysis",
      },
      institution: "Universitas Sanata Dharma",
      period: "Semester Genap 2025/2026",
      type: "Academic",
      description: {
        id: "Membimbing mahasiswa dalam memodelkan alur proses bisnis riil, penyusunan diagram alir, dan perancangan dokumen spesifikasi kebutuhan sistem perangkat lunak.",
        en: "Mentored students in modeling real-world business workflows, flowchart diagramming, and formulating software requirements specification documentation.",
      },
    },
    {
      role: {
        id: "Koordinator Perlengkapan",
        en: "Logistics Coordinator",
      },
      institution: "Kepanitiaan Paskah, Campus Ministry USD",
      period: "Maret – April 2025",
      type: "Organization",
      description: {
        id: "Memimpin tim logistik dalam perencanaan inventaris, pengadaan teknis, dan manajemen operasional perlengkapan kegiatan komunitas kampus.",
        en: "Led the logistics crew in inventory planning, technical procurement, and operational equipment management for university community events.",
      },
    },
  ],
};

export const skillCategories = [
  {
    category: {
      id: "Bahasa Pemrograman",
      en: "Programming Languages",
    },
    skills: [
      { name: "PHP", level: "Primary", icon: "php", color: "#777BB4" },
      { name: "JavaScript", level: "Primary", icon: "javascript", color: "#F7DF1E" },
      { name: "Python", level: "Primary", icon: "python", color: "#3776AB" },
      { name: "Kotlin", level: "Primary", icon: "kotlin", color: "#7F52FF" },
      { name: "Java", level: "Secondary", icon: "java", color: "#ED8B00" },
      { name: "SQL", level: "Primary", icon: "database", color: "#4479A1" },
    ],
  },
  {
    category: {
      id: "Web & Framework",
      en: "Web & Frameworks",
    },
    skills: [
      { name: "React.js", level: "Primary", icon: "react", color: "#61DAFB" },
      { name: "Laravel (Blade)", level: "Primary", icon: "laravel", color: "#FF2D20" },
      { name: "CodeIgniter", level: "Primary", icon: "codeigniter", color: "#EF4223" },
      { name: "Flask (Python)", level: "Primary", icon: "flask", color: "#FFFFFF" },
      { name: "Tailwind CSS", level: "Primary", icon: "tailwind", color: "#06B6D4" },
      { name: "Bootstrap", level: "Secondary", icon: "bootstrap", color: "#7952B3" },
      { name: "HTML5 & CSS3", level: "Core", icon: "html5", color: "#E34F26" },
    ],
  },
  {
    category: {
      id: "Mobile & Cloud",
      en: "Mobile & Cloud",
    },
    skills: [
      { name: "Android SDK (Kotlin)", level: "Primary", icon: "android", color: "#3DDC84" },
      { name: "MVVM Architecture", level: "Primary", icon: "android", color: "#3DDC84" },
      { name: "LiveData & ViewModel", level: "Primary", icon: "android", color: "#3DDC84" },
      { name: "Firebase Authentication", level: "Cloud", icon: "firebase", color: "#FFCA28" },
      { name: "Cloud Firestore", level: "Cloud", icon: "firebase", color: "#FFCA28" },
    ],
  },
  {
    category: {
      id: "Database, Tools & Sistem",
      en: "Database, Tools & Systems",
    },
    skills: [
      { name: "MySQL", level: "Database", icon: "mysql", color: "#4479A1" },
      { name: "SQLite", level: "Database", icon: "sqlite", color: "#003B57" },
      { name: "Git & GitHub", level: "Version Control", icon: "github", color: "#F0F6FC" },
      { name: "SQLyog", level: "Tool", icon: "database", color: "#4479A1" },
      { name: "XAMPP", level: "Environment", icon: "xampp", color: "#FB7A24" },
      { name: "Postman / REST API", level: "Tool", icon: "postman", color: "#FF6C37" },
    ],
  },
];

export const projectsContent = {
  sectionTitle: {
    id: "Proyek Terpilih",
    en: "Featured Projects",
  },
  subtitle: {
    id: "Kombinasi sistem web rekomendasi cerdas, aplikasi mobile Android berarsitektur bersih, hingga platform pelatihan institusi.",
    en: "A mix of intelligent web recommendation systems, clean-architecture Android apps, and enterprise training platforms.",
  },
  viewGithub: {
    id: "Lihat Repository",
    en: "View Repository",
  },
  items: [
    {
      id: "medlink",
      title: "MedLink – Web-Based OTC Drug Recommendation System",
      type: { id: "Proyek Skripsi", en: "Thesis Project" },
      year: "2026",
      tech: ["React.js", "Flask (Python)", "MySQL", "TF-IDF", "Cosine Similarity", "JWT Auth", "Bootstrap"],
      description: {
        id: "Sistem rekomendasi obat OTC (Over The Counter) berbasis gejala pengguna menggunakan algoritma Content-Based Filtering (TF-IDF & Cosine Similarity) dengan hasil evaluasi recall 100%, F1-score 60,88%, dan usability di atas 90. Terintegrasi filter medis keamanan usia, gender, kondisi hamil, dan riwayat kesehatan.",
        en: "User symptom-based OTC drug recommendation system utilizing Content-Based Filtering (TF-IDF & Cosine Similarity) achieving 100% recall, 60.88% F1-score, and >90 usability score. Integrated with safety filters for age, gender, pregnancy status, and medical history.",
      },
      githubUrl: "https://github.com/StefanusDickyBayuSegara",
      demoUrl: null,
      imagePlaceholder: "project-medlink.jpg",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker – Aplikasi Pencatat Keuangan Pribadi",
      type: { id: "Aplikasi Android", en: "Android App" },
      year: "2026",
      tech: ["Kotlin", "Android SDK", "MVVM", "SQLite", "Firebase Auth", "Cloud Firestore"],
      description: {
        id: "Aplikasi pencatat keuangan personal dengan visualisasi grafik pie/bar, peringatan otomatis batas anggaran belanja, ekspor laporan PDF (dapat langsung dibagikan via WhatsApp/Email/Drive), sinkronisasi awan Firebase, widget saldo cepat, dan antarmuka dark mode.",
        en: "Personal finance tracker app featuring categorized budgeting, pie/bar chart analytics, automatic budget limit thresholds, PDF report generation, Firebase cloud sync/backup, desktop home balance widget, and dark theme support.",
      },
      githubUrl: "https://github.com/StefanusDickyBayuSegara",
      demoUrl: null,
      imagePlaceholder: "project-expense-tracker.jpg",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "kanisius-lms",
      title: "Internal Employee Training Platform",
      type: { id: "Proyek Magang PT Kanisius", en: "PT Kanisius Internship" },
      year: "2025",
      tech: ["PHP", "CodeIgniter", "MySQL", "SQLyog", "XAMPP"],
      description: {
        id: "Platform pelatihan internal berbasis web dengan model LMS (Learning Management System) modern, menyediakan jalur terpisah untuk alur belajar karyawan serta portal manajemen evaluasi pelatihan di sisi tim HR dan SIM.",
        en: "Internal web LMS platform designed for structured company skill training, providing separate role-based portals for employee self-paced learning and HR/SIM administrative course management.",
      },
      githubUrl: "https://github.com/StefanusDickyBayuSegara",
      demoUrl: null,
      imagePlaceholder: "project-kanisius-lms.jpg",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "recipe-app",
      title: "Recipe Web Application",
      type: { id: "Proyek Web", en: "Web Project" },
      year: "2025",
      tech: ["PHP", "Laravel (Blade)", "MySQL", "CSS"],
      description: {
        id: "Aplikasi web interaktif untuk eksplorasi dan kurasi resep masakan, dilengkapi kapabilitas CRUD komprehensif untuk komposisi bahan dan tahapan memasak, fitur pencarian cepat, serta tata letak responsif.",
        en: "Interactive recipe discovery and management web application featuring full CRUD capabilities for culinary ingredients and instructions, rapid search, and a responsive interface.",
      },
      githubUrl: "https://github.com/StefanusDickyBayuSegara",
      demoUrl: null,
      imagePlaceholder: "project-recipe.jpg",
    },
  ],
};

export const certificatesContent = {
  sectionTitle: {
    id: "Sertifikasi",
    en: "Certifications",
  },
  subtitle: {
    id: "Pelatihan dan sertifikasi keahlian profesional yang terverifikasi.",
    en: "Verified professional skill training and certifications.",
  },
  items: [
    {
      id: "sap-01",
      title: "SAP01 – SAP Overview",
      issuer: "SAP University Partnership Program & Universitas Kristen Duta Wacana",
      date: "November 2024",
      imagePlaceholder: "certificate-sap01.jpeg",
    },
  ],
};

export const contactContent = {
  sectionTitle: {
    id: "Kontak & Diskusi",
    en: "Contact & Connect",
  },
  subtitle: {
    id: "Terbuka untuk peluang kerja full-time, proyek lepas (freelance), maupun kolaborasi teknis. Silakan tinggalkan pesan atau hubungi langsung via WhatsApp.",
    en: "Open for full-time career roles, freelance projects, or technical collaborations. Leave a message below or contact directly via WhatsApp.",
  },
  formspreeEndpoint: "https://formspree.io/f/xdknqvqz", // Ganti dengan ID formspree gratis milikmu jika sudah ada
  labels: {
    name: { id: "Nama Anda", en: "Your Name" },
    namePlaceholder: { id: "Contoh: Budi Santoso", en: "e.g., John Doe" },
    email: { id: "Alamat Email", en: "Email Address" },
    emailPlaceholder: { id: "nama@perusahaan.com", en: "name@company.com" },
    message: { id: "Pesan Anda", en: "Your Message" },
    messagePlaceholder: { id: "Tuliskan pesan, tawaran kerja, atau proyek Anda di sini...", en: "Write your message, job opportunity, or project details here..." },
    sendButton: { id: "Kirim Pesan", en: "Send Message" },
    sending: { id: "Mengirim...", en: "Sending..." },
    successMessage: { id: "Terima kasih! Pesan berhasil terkirim. Saya akan segera merespons.", en: "Thank you! Message sent successfully. I will get back to you soon." },
    errorMessage: { id: "Terjadi kendala pengiriman. Silakan hubungi langsung via WhatsApp atau Email.", en: "Failed to send message. Please reach out directly via WhatsApp or Email." },
    directChat: { id: "Chat WhatsApp Langsung", en: "Direct WhatsApp Chat" },
    copyEmail: { id: "Salin Email", en: "Copy Email" },
    copied: { id: "Tersalin!", en: "Copied!" },
  },
};

export const footerContent = {
  copyright: {
    id: `© ${new Date().getFullYear()} Stefanus Dicky Bayu Segara. Seluruh hak cipta dilindungi.`,
    en: `© ${new Date().getFullYear()} Stefanus Dicky Bayu Segara. All rights reserved.`,
  },
  tagline: {
    id: "Dirancang & dibangun dengan React.js dan Tailwind CSS.",
    en: "Designed & engineered with React.js and Tailwind CSS.",
  },
};

