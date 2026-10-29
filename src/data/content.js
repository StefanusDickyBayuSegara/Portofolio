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
  cvPath: {
    id: "/CV_Stefanus_ID_ATS.pdf",
    en: "/CV_Stefanus_EN_ATS.pdf",
  },
  
  location: {
    id: "D.I. Yogyakarta, Indonesia",
    en: "Yogyakarta Special Region, Indonesia",
  },
  roles: [
    { id: "Web Developer", en: "Web Developer" },
    { id: "Analisis Data", en: "Data Analysis" },
    { id: "Dukungan Proyek & Dokumentasi", en: "Project Support & Documentation" },
  ],
  status: {
    id: "Tersedia untuk peluang sebagai Web Developer, Analisis Data, serta Dukungan Proyek & Dokumentasi (Yogyakarta / Remote)",
    en: "Available for Web Developer, Data Analysis, and Project Support & Documentation roles (Yogyakarta / Remote)",
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
    id: "Lulusan S1 Informatika yang membangun aplikasi web full-stack dan menganalisis data dengan content-based filtering, TF-IDF, Cosine Similarity, SQL, dan Python. Berpengalaman dalam pengumpulan kebutuhan sistem, pemetaan proses bisnis, serta dokumentasi proyek dan serah terima teknis.",
    en: "Informatics graduate building full-stack web applications and analyzing data with content-based filtering, TF-IDF, Cosine Similarity, SQL, and Python. Experienced in gathering system requirements, mapping business processes, and preparing project documentation and technical handover materials.",
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
    id: "Lulusan S1 Informatika Universitas Sanata Dharma dengan IPK 3,41/4,00. Saya membangun aplikasi web full-stack menggunakan React.js, PHP, CodeIgniter, Laravel, Flask, dan MySQL, serta menganalisis data dengan Python, SQL, dan Excel. Skripsi saya membahas sistem rekomendasi obat OTC berbasis content-based filtering dengan TF-IDF dan Cosine Similarity; hasil evaluasi mencapai recall 100%, F1-score 60,88%, dan usability di atas 90. Saya terbiasa mendukung proyek melalui pengumpulan kebutuhan, pemetaan proses bisnis, dokumentasi, dan serah terima teknis; saya juga telah menyelesaikan pelatihan data dari MySkill dan Udemy serta SAP Overview, dengan kemampuan bahasa Inggris tingkat dasar (Bahasa Inggris (Dasar)).",
    en: "I hold a Bachelor of Informatics from Sanata Dharma University with a GPA of 3.41/4.00. I build full-stack web applications using React.js, PHP, CodeIgniter, Laravel, Flask, and MySQL, and analyze data with Python, SQL, and Excel. My thesis focused on an OTC drug recommendation system using content-based filtering with TF-IDF and Cosine Similarity; evaluation achieved 100% recall, a 60.88% F1-score, and a usability score above 90. I am experienced in project support, including requirements gathering, business process mapping, documentation, and technical handover; I have also completed data training with MySkill and Udemy as well as SAP Overview training, and have basic English proficiency (English (Basic)).",
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
        id: "Magang, Web Developer (Program MBKM) - HR, Fasilitas & MIS",
        en: "Web Developer Intern (MBKM Program) - HR, Facilities & MIS",
      },
      institution: "PT Kanisius - Divisi Management Information System (MIS)",
      period: { id: "Agustus–Desember 2025", en: "August–December 2025" },
      type: { id: "Magang", en: "Internship" },
      description: {
        id: "Mengembangkan platform pelatihan karyawan internal berbasis LMS dengan alur terpisah untuk karyawan dan admin menggunakan PHP, CodeIgniter, dan MySQL. Mengumpulkan kebutuhan sistem dan data administratif dari tim HR, Fasilitas, dan MIS; menyusun catatan kebutuhan serta mendokumentasikan progres secara berkala untuk pembimbing lapangan. Menyerahkan dokumentasi teknis dan alur sistem kepada tim internal.",
        en: "Developed an internal employee training platform using an LMS with separate workflows for employees and administrators, built with PHP, CodeIgniter, and MySQL. Gathered system requirements and administrative data from HR, Facilities, and MIS; maintained requirements notes and regular progress documentation for the field supervisor. Handed over technical documentation and system workflows to the internal team.",
      },
    },
    {
      role: {
        id: "Asisten Dosen, Analisis Proses Bisnis (Kelas CP)",
        en: "Teaching Assistant, Business Process Analysis (CP Class)",
      },
      institution: "Universitas Sanata Dharma",
      period: { id: "Semester Genap 2025/2026", en: "Even Semester 2025/2026" },
      type: { id: "Akademik", en: "Academic" },
      description: {
        id: "Membimbing mahasiswa Kelas CP dalam menerapkan metode analisis proses bisnis, memetakan alur proses, dan mengidentifikasi tahapan kritis. Mengevaluasi tugas dan progres, memberikan umpan balik, serta menyusun rangkuman evaluasi sebagai bahan laporan dosen.",
        en: "Guided students in the CP class in applying business process analysis methods, mapping workflows, and identifying critical stages. Evaluated assignments and progress, provided feedback, and prepared evaluation summaries for the lecturer's reports.",
      },
    },
    {
      role: {
        id: "Koordinator Perlengkapan",
        en: "Logistics Coordinator",
      },
      institution: "Kepanitiaan Paskah, Campus Ministry USD",
      period: { id: "Maret–April 2025", en: "March–April 2025" },
      type: { id: "Organisasi", en: "Organization" },
      description: {
        id: "Memimpin tim logistik dengan menyusun daftar kebutuhan dan jadwal persiapan, lalu menindaklanjuti setiap penanggung jawab agar persiapan perlengkapan kegiatan selesai tepat waktu.",
        en: "Led the logistics team by preparing a list of requirements and a preparation schedule, then following up with each owner to ensure event preparations were completed on time.",
      },
    },
    {
      role: {
        id: "Anggota",
        en: "Member",
      },
      institution: "UKM Kopma (Koperasi Mahasiswa), Universitas Sanata Dharma",
      period: "2024/2025",
      type: { id: "Organisasi", en: "Organization" },
      description: {
        id: "Anggota unit koperasi mahasiswa periode 2024/2025 dengan sertifikat keanggotaan resmi. Terlibat dalam kegiatan unit dan bekerja sama dengan anggota lain.",
        en: "Member of the student cooperative unit during the 2024/2025 period, with an official membership certificate. Participated in unit activities and collaborated with other members.",
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
      { name: "Java", level: "Primary", icon: "database", color: "#ED8B00" },
      { name: "Kotlin", level: "Primary", icon: "kotlin", color: "#7F52FF" },
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
      { name: "Laravel", level: "Primary", icon: "laravel", color: "#FF2D20" },
      { name: "CodeIgniter", level: "Primary", icon: "codeigniter", color: "#EF4223" },
      { name: "Flask", level: "Primary", icon: "flask", color: "#FFFFFF" },
      { name: "Tailwind CSS & Bootstrap", level: "Primary", icon: "tailwind", color: "#06B6D4" },
      { name: "REST API & JWT", level: "Integration", icon: "database", color: "#38BDF8" },
    ],
  },
  {
    category: {
      id: "Database & Tools",
      en: "Database & Tools",
    },
    skills: [
      { name: "MySQL & SQLite", level: "Database", icon: "mysql", color: "#4479A1" },
      { name: "Firebase (Authentication, Cloud Firestore)", level: "Database", icon: "firebase", color: "#FFCA28" },
      { name: "Git & GitHub", level: "Version Control", icon: "github", color: "#F0F6FC" },
      { name: "Microsoft Office", level: "Productivity", icon: "database", color: "#D83B01" },
    ],
  },
  {
    category: {
      id: "Analisis Data",
      en: "Data Analysis",
    },
    skills: [
      { name: "Excel", level: "Core", icon: "database", color: "#217346" },
      {
        name: {
          id: "Visualisasi Data",
          en: "Data Visualization",
        },
        level: "Core",
        icon: "database",
        color: "#F97316",
      },
      {
        name: {
          id: "Sistem Rekomendasi (TF-IDF, Cosine Similarity)",
          en: "Recommender Systems (TF-IDF, Cosine Similarity)",
        },
        level: "Core",
        icon: "database",
        color: "#34D399",
      },
      {
        name: {
          id: "Evaluasi Model (Recall, F1-Score)",
          en: "Model Evaluation (Recall, F1-Score)",
        },
        level: "Core",
        icon: "database",
        color: "#60A5FA",
      },
      {
        name: {
          id: "Data Mining & Machine Learning",
          en: "Data Mining & Machine Learning",
        },
        level: "Core",
        icon: "database",
        color: "#A78BFA",
      },
      {
        name: {
          id: "Dasar Analisis Data",
          en: "Data Analysis Fundamentals",
        },
        level: "Core",
        icon: "database",
        color: "#0FAAFF",
      },
    ],
  },
  {
    category: {
      id: "Dukungan Proyek & Dokumentasi",
      en: "Project Support & Documentation",
    },
    skills: [
      { name: { id: "Pengumpulan Kebutuhan", en: "Requirements Gathering" }, level: "Core", icon: "database", color: "#38BDF8" },
      { name: { id: "Dokumentasi Teknis", en: "Technical Documentation" }, level: "Core", icon: "database", color: "#34D399" },
      { name: { id: "Analisis Proses Bisnis", en: "Business Process Analysis" }, level: "Core", icon: "database", color: "#FBBF24" },
      { name: { id: "Pelaporan Progres", en: "Progress Reporting" }, level: "Core", icon: "database", color: "#A78BFA" },
      { name: { id: "Koordinasi Lintas Tim", en: "Cross-team Coordination" }, level: "Core", icon: "database", color: "#60A5FA" },
      { name: { id: "Dasar SAP/ERP", en: "SAP/ERP Fundamentals" }, level: "Foundation", icon: "database", color: "#0FAAFF" },
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
        id: "Membangun sistem rekomendasi obat bebas (OTC) berbasis gejala menggunakan Content-Based Filtering dengan TF-IDF dan Cosine Similarity. Mengimplementasikan React.js, Bootstrap, Flask REST API, SQLAlchemy, MySQL, dan JWT Authentication, serta filter keamanan berdasarkan usia, jenis kelamin, status kehamilan, dan riwayat medis. Evaluasi menghasilkan recall 100%, F1-score 60,88%, dan skor usability di atas 90.",
        en: "Built a symptom-based over-the-counter (OTC) drug recommendation system using content-based filtering with TF-IDF and Cosine Similarity. Implemented React.js, Bootstrap, a Flask REST API, SQLAlchemy, MySQL, and JWT authentication, with safety filters for age, sex, pregnancy status, and medical history. Evaluation achieved 100% recall, a 60.88% F1-score, and a usability score above 90.",
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
        id: "Membangun aplikasi Android untuk mencatat, memantau, dan menganalisis arus kas harian di beberapa dompet menggunakan Kotlin, MVVM, dan SQLite. Fitur mencakup transaksi berkategori, grafik pie dan bar, peringatan otomatis saat batas anggaran tercapai, ekspor laporan PDF, serta Firebase Authentication dan Cloud Firestore untuk login dan backup/restore data.",
        en: "Built an Android app to track, monitor, and analyze daily cash flow across multiple wallets using Kotlin, MVVM, and SQLite. Features include categorized transactions, pie and bar charts, automatic budget-limit alerts, PDF report export, and Firebase Authentication and Cloud Firestore for sign-in and data backup/restore.",
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
        id: "Mengembangkan platform pelatihan karyawan internal berbasis LMS dengan alur terpisah untuk karyawan dan admin menggunakan PHP, CodeIgniter, dan MySQL. Mengumpulkan kebutuhan sistem dari tim HR, Fasilitas, dan MIS, mendokumentasikan progres secara berkala, serta menyiapkan dokumentasi teknis dan alur sistem untuk serah terima kepada tim internal.",
        en: "Developed an internal employee training platform using an LMS with separate workflows for employees and administrators, built with PHP, CodeIgniter, and MySQL. Gathered system requirements from HR, Facilities, and MIS, documented progress regularly, and prepared technical documentation and system workflows for handover to the internal team.",
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
      id: "udemy-excel-python",
      badge: { id: "Sertifikat Penyelesaian", en: "Certificate of Completion" },
      title: { id: "Data Analytics & Visualization: Using Excel and Python", en: "Data Analytics & Visualization: Using Excel and Python" },
      issuer: { id: "Udemy (Instruktur: Meritshot Academy), 17 jam", en: "Udemy (Instructor: Meritshot Academy), 17 hours" },
      date: { id: "29 Oktober 2026", en: "October 29, 2026" },
      imagePlaceholder: "certificate-udemy-excel-python.pdf",
    },
    {
      id: "myskill-data-science-intro",
      badge: { id: "No. 351100/DTA/LM/10/2026", en: "No. 351100/DTA/LM/10/2026" },
      title: { id: "Data Science Introduction", en: "Data Science Introduction" },
      issuer: { id: "MySkill Short Class (PT Linimuda Inspirasi Negeri)", en: "MySkill Short Class (PT Linimuda Inspirasi Negeri)" },
      date: { id: "21 Oktober 2026", en: "October 21, 2026" },
      imagePlaceholder: "certificate-myskill-data-science-intro.pdf",
    },
    {
      id: "myskill-project-management",
      badge: { id: "No. 350374/PDM/LM/10/2026", en: "No. 350374/PDM/LM/10/2026" },
      title: { id: "Introduction to Project Management", en: "Introduction to Project Management" },
      issuer: { id: "MySkill Short Class (PT Linimuda Inspirasi Negeri)", en: "MySkill Short Class (PT Linimuda Inspirasi Negeri)" },
      date: { id: "19 Oktober 2026", en: "October 19, 2026" },
      imagePlaceholder: "certificate-myskill-project-management.pdf",
    },
    {
      id: "ukm-kopma",
      badge: { id: "No. 001/AGT/KOPMA-USD/X/2025", en: "No. 001/AGT/KOPMA-USD/X/2025" },
      title: { id: "Anggota UKM Koperasi Mahasiswa (Kopma)", en: "Member, Student Cooperative Unit (UKM Kopma)" },
      issuer: { id: "Universitas Sanata Dharma, Periode 2024/2025", en: "Sanata Dharma University, 2024/2025 Period" },
      date: { id: "Oktober 2025", en: "October 2025" },
      imagePlaceholder: "certificate-ukm-kopma.jpeg",
    },
    {
      id: "sap-01",
      badge: { id: "Verified Credential", en: "Verified Credential" },
      title: { id: "SAP01 – SAP Overview", en: "SAP01 – SAP Overview" },
      issuer: { id: "SAP University Partnership Program & Universitas Kristen Duta Wacana", en: "SAP University Partnership Program & Duta Wacana Christian University" },
      date: { id: "November 2024", en: "November 2024" },
      imagePlaceholder: "certificate-sap01.jpeg",
    },
    {
      id: "data-analysis-fundamental",
      badge: { id: "No. 341210/DTA/LM/9/2026", en: "No. 341210/DTA/LM/9/2026" },
      title: { id: "Data Analysis Fundamental", en: "Data Analysis Fundamental" },
      issuer: { id: "MySkill (PT Linimuda Inspirasi Negeri)", en: "MySkill (PT Linimuda Inspirasi Negeri)" },
      date: { id: "September 2026", en: "September 2026" },
      imagePlaceholder: "Sertif MySkill Data Analysis Fundamental.pdf",
    },
    {
      id: "magang-sim-mbkm",
      badge: { id: "Sertifikat Magang", en: "Internship Certificate" },
      title: { id: "Sertifikat Magang SIM (Sistem Informasi Manajemen)", en: "SIM (Management Information System) Internship Certificate" },
      issuer: { id: "PT KANISIUS - Divisi SDM, Sarpras dan SIM", en: "PT KANISIUS - Human Resources, Facilities, and Management Information Systems Division" },
      date: { id: "Desember 2025", en: "December 2025" },
      imagePlaceholder: "Sertifikat Magang SIM MBKM an. Stefanus Dicky Bayu Segara.pdf",
    },
    {
      id: "asisten-praktikum-analisis-proses-bisnis",
      badge: { id: "Sertifikat Asisten Dosen", en: "Teaching Assistant Certificate" },
      title: { id: "Surat Keterangan Asisten Praktikum - Analisis Proses Bisnis", en: "Teaching Assistant Certificate - Business Process Analysis Practicum" },
      issuer: { id: "Program Studi Informatika, FST, Universitas Sanata Dharma", en: "Informatics Program, Faculty of Science and Technology, Sanata Dharma University" },
      date: { id: "Agustus 2026", en: "August 2026" },
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
    id: "Terbuka untuk peluang kerja full-time, proyek lepas (freelance), maupun kolaborasi teknis. Silakan hubungi saya langsung melalui WhatsApp atau email.",
    en: "Open to full-time roles, freelance projects, and technical collaborations. Please contact me directly by WhatsApp or email.",
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
