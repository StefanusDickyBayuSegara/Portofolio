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
  roles: [
    { id: "Web & Android Developer", en: "Web & Android Developer" },
    { id: "Data Analyst", en: "Data Analyst" },
    { id: "Web Developer", en: "Web Developer" },
  ],
  status: {
    id: "Tersedia untuk Peluang Kerja: Web Developer, Project Support, Fullstack Developer (Yogyakarta / Remote)",
    en: "Available for Opportunities: Web Developer, Project Support, Fullstack Developer (Yogyakarta / Remote)",
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
    id: "Lulusan Informatika yang membangun aplikasi web full-stack secara terstruktur, didukung kemampuan analisis proses bisnis dan dokumentasi proyek yang rapi.",
    en: "Informatics graduate building structured full-stack web applications, supported by business process analysis skills and well-organized project documentation.",
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
    id: "Lulusan Informatika dari Universitas Sanata Dharma (IPK 3.41/4.00, predikat Sangat Memuaskan) dengan pengalaman kuat membangun aplikasi web full-stack, mulai dari perancangan basis data, pengembangan frontend (React.js), backend (PHP, CodeIgniter, Laravel, Flask), hingga integrasi API dan sistem rekomendasi berbasis konten. Pemahaman ini diperkuat oleh pengalaman sebagai asisten dosen mata kuliah Analisis Proses Bisnis, di mana saya terbiasa memetakan alur proses kerja, mengidentifikasi tahapan kritis, mengevaluasi progres, dan menyusun dokumentasi/laporan secara terstruktur. Ditambah dasar pemahaman sistem ERP melalui program SAP University Partnership Program serta pengalaman koordinasi tim dari kegiatan kampus, latar belakang saya seimbang antara kekuatan teknis dan kemampuan administrasi/koordinasi proyek.",
    en: "Informatics graduate from Sanata Dharma University (GPA 3.41/4.00, Very Satisfactory distinction) with strong experience building full-stack web applications, from database design and frontend development (React.js) to backend development (PHP, CodeIgniter, Laravel, Flask), API integration, and content-based recommendation systems. This foundation was strengthened through experience as a teaching assistant for Business Process Analysis, where I regularly mapped workflows, identified critical stages, evaluated progress, and prepared structured documentation and reports. Combined with foundational ERP knowledge from the SAP University Partnership Program and team coordination experience through campus activities, my background balances technical strength with project administration and coordination skills.",
  },
  downloadCv: {
    id: "Unduh CV Lengkap",
    en: "Download Full Resume",
  },
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
        id: "Merancang dan mengembangkan platform pelatihan internal berbasis web (LMS) untuk standarisasi alur pelatihan karyawan serta sistem monitoring evaluasi bagi administrator HR. Turut berkoordinasi dengan tim HR dan Fasilitas dalam pengumpulan kebutuhan sistem serta mendokumentasikan progres pengembangan secara berkala.",
        en: "Designed and developed an internal web-based training platform (LMS) to standardize employee training workflows and evaluation tracking for HR administration. Coordinated with HR and Facilities teams to gather system requirements and documented development progress regularly.",
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
        id: "Membimbing mahasiswa dalam memodelkan alur proses bisnis riil, penyusunan diagram alir, dan perancangan dokumen spesifikasi kebutuhan sistem perangkat lunak. Mengevaluasi tugas dan progres mahasiswa secara berkala, menyusun rekap hasil evaluasi sebagai bahan laporan ke dosen pengampu.",
        en: "Mentored students in modeling real-world business workflows, flowchart diagramming, and formulating software requirements specification documentation. Evaluated student assignments and progress regularly, preparing evaluation summaries for reports to the supervising lecturer.",
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
      { name: "Dasar ERP (SAP)", level: "Foundation", icon: "database", color: "#0FAAFF" },
    ],
  },
  {
    category: {
      id: "Administrasi & Manajemen Proyek",
      en: "Administration & Project Management",
    },
    skills: [
      { name: "Dokumentasi Proyek", level: "Core", icon: "database", color: "#38BDF8" },
      { name: "Koordinasi Lintas Tim", level: "Core", icon: "database", color: "#34D399" },
      { name: "Penyusunan Laporan Progres", level: "Core", icon: "database", color: "#A78BFA" },
      { name: "Evaluasi Tugas/Hasil Kerja", level: "Core", icon: "database", color: "#FBBF24" },
      { name: "Dasar Sistem ERP (SAP)", level: "Foundation", icon: "database", color: "#0FAAFF" },
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
      tech: ["React.js", "Flask (Python)", "MySQL", "SQLAlchemy", "JWT", "Bootstrap"],
      description: {
        id: "Sistem rekomendasi obat OTC berbasis gejala menggunakan React.js, Flask (Python), MySQL, SQLAlchemy, JWT, dan Bootstrap, dengan hasil evaluasi recall 100%, F1-score 60,88%, serta usability score di atas 90.",
        en: "Symptom-based OTC drug recommendation system built with React.js, Flask (Python), MySQL, SQLAlchemy, JWT, and Bootstrap, achieving 100% recall, a 60.88% F1-score, and a usability score above 90.",
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
      tech: ["Kotlin", "MVVM", "SQLite", "Firebase"],
      description: {
        id: "Aplikasi pencatat keuangan Android dengan kategori transaksi, grafik pie/bar, budget limit, ekspor PDF, backup/restore cloud, dan dark mode.",
        en: "Android finance tracker with transaction categories, pie/bar charts, budget limits, PDF export, cloud backup/restore, and dark mode.",
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
      badge: "Verified Credential",
      title: "SAP01 – SAP Overview",
      issuer: "SAP University Partnership Program & Universitas Kristen Duta Wacana",
      date: "November 2024",
      imagePlaceholder: "certificate-sap01.jpeg",
    },
    {
      id: "magang-sim-mbkm",
      badge: "Sertifikat Magang",
      title: "Sertifikat Magang SIM (Sistem Informasi Manajemen)",
      issuer: "PT KANISIUS - Divisi SDM, Sarpras dan SIM",
      date: "Desember 2025",
      imagePlaceholder: "Sertifikat Magang SIM MBKM an. Stefanus Dicky Bayu Segara.pdf",
    },
    {
      id: "asisten-praktikum-analisis-proses-bisnis",
      badge: "Sertifikat Asisten Dosen",
      title: "Surat Keterangan Asisten Praktikum - Analisis Proses Bisnis",
      issuer: "Program Studi Informatika, FST, Universitas Sanata Dharma",
      date: "Agustus 2026",
      imagePlaceholder: "SKAP_Genap 2025_225314015_Analisis Proses Bisnis_CP.jpg",
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

