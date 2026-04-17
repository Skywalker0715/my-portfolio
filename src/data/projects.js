const assetModules = import.meta.glob(
  [
    "../assets/gambar_project/**/*.{png,jpg,jpeg,JPG,PNG,JPEG}",
    "../assets/dokumentasi/**/*.{png,jpg,jpeg,JPG,PNG,JPEG}"
  ],
  {
    eager: true,
    import: "default"
  }
);

const assetMap = new Map(Object.entries(assetModules).map(([key, value]) => [key.replace(/\\/g, "/"), value]));

const resolveAsset = (relativePath) => {
  const normalized = `../assets/${relativePath}`.replace(/\\/g, "/");
  const exact = assetMap.get(normalized);
  if (exact) return exact;

  const suffix = normalized.replace(/^\.\.\//, "");
  const found = [...assetMap.entries()].find(([key]) => key.endsWith(suffix));
  return found?.[1] || "";
};

const projectImages = (folder, files) => files.map((file) => resolveAsset(`gambar_project/${folder}/${file}`));

export const PROJECT_CATEGORIES = [
  {
    id: "software",
    title: "Software Engineering / Programming",
    subtitle: "Aplikasi web, mobile, API, dan produk digital yang dibangun untuk kebutuhan nyata."
  },
  {
    id: "aiml",
    title: "AI / Machine Learning",
    subtitle: "Model ML, integrasi AI, dan automasi cerdas berbasis data."
  },
  {
    id: "data",
    title: "Data Analysis / Analytics",
    subtitle: "Analisis data, visualisasi, dan dashboard untuk menghasilkan insight yang actionable."
  },
  {
    id: "uiux",
    title: "UI/UX & Web Design",
    subtitle: "Desain antarmuka, prototipe, dan website visual yang lebih premium."
  }
];

export const PROJECTS = {
  software: [
    {
      title: "Aplikasi Klasifikasi Sentimen terhadap Merek Smartphone di Indonesia",
      period: "Jul 2024 - Jan 2025",
      description:
        "Aplikasi web untuk menganalisis komentar YouTube dari 21 tipe smartphone pada 5 merek populer di Indonesia. Model Naive Bayes dengan TF-IDF dan FastText menghasilkan akurasi 92-98% dan menyajikan output dalam grafik serta tabel yang mudah dipahami.",
      format: "Web",
      status: "Finished",
      stack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "FastText", "Laravel 11", "PHP", "MySQL", "Bootstrap", "JavaScript", "Firebase Studio"],
      tech: ["Sentiment Analysis", "NLP", "Dashboard", "Research"],
      images: projectImages("programming/likosen", ["index.jpg", "login.jpg", "kl1.jpg", "kl2.jpg", "kl3.jpg", "kl4.jpg", "kl5.jpg", "kl6.jpg", "kl7.jpg", "kl8.jpg", "kl9.jpg", "kl10.jpg"]),
      youtube: "https://youtu.be/wypdRdzpvhA"
    },
    {
      title: "MoodSense - Aplikasi Pemantau Mood Harian",
      period: "Mei - Sep 2025",
      description:
        "Aplikasi pemantau mood harian yang menganalisis emosi dengan IndoBERT dan memberi saran personal melalui OpenAI GPT. Riwayat mood disimpan agar perkembangan emosional pengguna dapat dilihat dari waktu ke waktu.",
      format: "Web",
      status: "Finished",
      stack: ["React", "Tailwind CSS", "Axios", "Chart.js", "React Icons", "Flask", "MySQL", "REST API", "IndoBERT", "OpenAI GPT", "PyTorch", "Transformers", "OpenAI API"],
      tech: ["AI Integration", "Emotion Analysis", "Personalization", "Full Stack"],
      images: projectImages("ai/moodsense", ["c1.jpg", "c2.jpg"]),
      github: "https://github.com/Skywalker0715/ChatBotMood.git"
    },
    {
      title: "Aplikasi IM-Signature Project Magang Thamrin 2024",
      period: "Feb 2024 - Jun 2024",
      description:
        "Sistem persetujuan memorandum digital yang memangkas proses approval dari 3 hari menjadi 24 jam dan mengurangi penggunaan kertas hingga 40%. Dibangun dengan Laravel, MySQL, dan alur kerja Agile yang lebih rapi.",
      format: "Web",
      status: "Finished",
      stack: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      tech: ["Workflow Automation", "Paperless", "Document Management"],
      images: projectImages("programming/imsignature", ["login.png", "2.png", "7.png"])
    },
    {
      title: "Catatan Belanja - Aplikasi Pencatat Pengeluaran dari Struk",
      period: "Sep 2025",
      description:
        "Aplikasi web yang memungkinkan pengguna mengunggah foto struk belanja, lalu sistem membaca teks dengan OCR, mengubahnya menjadi data terstruktur menggunakan Cohere AI, dan menyimpannya ke database. Dilengkapi admin panel Filament untuk pengelolaan data pengeluaran.",
      format: "Web",
      status: "Finished",
      stack: ["Laravel 12", "Filament v3", "Tesseract OCR", "Cohere AI API", "PostgreSQL", "Laravel Queue", "Laravel Filesystem", "PHP"],
      tech: ["OCR", "Automation", "Expense Tracking", "Admin Panel"],
      images: projectImages("programming/ocr", ["o1.jpg", "o2.jpg", "o3.jpg"]),
      github: "https://github.com/Skywalker0715/Laravel-OCR-AI"
    },
    {
      title: "Sistem Manajemen Tiket TickTrack",
      period: "Okt - Nov 2025",
      description:
        "Aplikasi web manajemen tiket yang memusatkan laporan masalah ke satu sistem. Dilengkapi role-based access, pelacakan status real-time, riwayat komunikasi, dan dashboard monitoring penyelesaian agar issue tidak tercecer di email atau chat.",
      format: "Web",
      status: "Finished",
      stack: ["Laravel 12", "PHP 8.2", "MySQL", "Laravel Sanctum", "Vue 3", "Pinia", "Axios", "Tailwind CSS", "Chart.js"],
      tech: ["Ticketing", "RBAC", "Real-time Tracking", "Dashboard"],
      images: projectImages("programming/ticktrack", ["t1.jpg", "t2.jpg", "t3.jpg"]),
      github: "https://github.com/Skywalker0715/TickTrack.git"
    },
    {
      title: "HireSpace - Platform Manajemen Perekrutan",
      period: "Nov 2025",
      description:
        "Platform rekrutmen modern dengan dua antarmuka: dashboard admin untuk mengelola lowongan dan portal pelamar untuk mencari kerja, mengajukan lamaran, dan mengelola profil. Dilengkapi pelacakan status lamaran, jadwal wawancara, dan notifikasi real-time.",
      format: "Web",
      status: "Finished",
      stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Zustand", "React Hook Form", "Zod", "TanStack Table", "Lucide Icons"],
      tech: ["Recruitment System", "Admin Dashboard", "Notifications", "Full Stack"],
      images: projectImages("programming/hirespace", ["index.jpg", "register.jpg", "login.jpg"]),
      github: "https://github.com/Skywalker0715/hiring-management-app.git",
      youtube: "https://youtu.be/qBNZBLKi27I"
    },
    {
      title: "Hiring API - Backend System for Recruitment Platform",
      period: "Des 2025 - Feb 2026",
      description:
        "Backend RESTful API modular untuk platform rekrutmen dengan lebih dari 13 endpoint untuk job posting, lamaran, profil pelamar, wawancara, dan notifikasi. Dilengkapi JWT authentication, multi-role access control, dan validasi request menyeluruh.",
      format: "API",
      status: "Finished",
      stack: ["NestJS", "Prisma ORM", "PostgreSQL", "Supabase", "JWT", "Class Validator", "Class Transformer", "Postman"],
      tech: ["REST API", "Authentication", "Validation", "Role-based Access"],
      images: [],
      github: "https://github.com/Skywalker0715/hiring-platform-api.git"
    },
    {
      title: "Aplikasi Sistem Manajemen dan Pembelian Barang Pratama Motor",
      period: "Des 2025 - Ongoing",
      description:
        "Sistem manajemen dan pembelian barang yang masih dalam tahap pengembangan untuk membantu proses operasional Pratama Motor agar lebih rapi, terstruktur, dan mudah diperluas.",
      format: "Web",
      status: "Ongoing",
      stack: ["Laravel", "MySQL", "Bootstrap", "Tailwind CSS", "PHP"],
      tech: ["System Design", "Inventory Management", "Web App", "Ongoing"],
      images: [resolveAsset("dokumentasi/f1.png")]
    },
    {
      title: "Kumpulan Proyek Pemrograman Berbasis Mobile (PBM)",
      period: "2025",
      description:
        "Kumpulan proyek pemrograman berbasis mobile yang mencakup berbagai implementasi aplikasi mobile dalam satu repositori GitHub. Project ini menjadi dokumentasi hasil eksplorasi dan latihan pengembangan aplikasi mobile secara terstruktur.",
      format: "Mobile",
      status: "Finished",
      stack: ["Mobile Programming"],
      tech: ["Android", "Mobile App", "Collection"],
      images: [],
      github: "https://github.com/Skywalker0715/PBM-Aplikasi.git"
    }
  ],
  aiml: [
    {
      title: "Prediksi Kualitas Mobil dengan Model Machine Learning",
      period: "Jan 2025",
      description:
        "Model klasifikasi berbasis K-Nearest Neighbors untuk menilai kelayakan mobil bekas berdasarkan kondisi, harga, dan usia kendaraan. Proyek ini menghasilkan akurasi 81% dan dapat digunakan sebagai screening otomatis di platform jual-beli mobil bekas.",
      format: "Analytics",
      status: "Finished",
      stack: ["Python", "Scikit-learn", "KNN", "Pandas", "Matplotlib", "Seaborn"],
      tech: ["Machine Learning", "Classification", "Decision Support", "Research"],
      images: projectImages("ai/ml", ["ml_project1.jpg", "ml_project2.jpg", "ml_project3.jpg", "ml_project4.jpg", "ml_project5.jpg", "ml_project6.jpg", "ml_project7.jpg"])
    },
    {
      title: "AI Assistant Telegram Bot",
      period: "Sep - Okt 2025",
      description:
        "Bot Telegram berbasis AI yang mengintegrasikan Google Gemini melalui workflow automation n8n. Bot mampu merespons pesan secara otomatis, menjaga konteks percakapan, dan mencatat riwayat interaksi ke Google Sheets untuk monitoring dan analisis.",
      format: "Bot",
      status: "Finished",
      stack: ["Telegram Bot API", "Google Gemini AI", "n8n", "Google Sheets"],
      tech: ["Automation", "Chatbot", "AI Integration", "Workflow"],
      images: projectImages("ai/assitant", ["a1.jpg", "a2.jpg", "a3.jpg"])
    },
    {
      title: "Warehouse AI - Smart Inventory Management System",
      period: "Mar 2026",
      description:
        "Sistem manajemen inventaris berbasis Gemini 2.5 Flash dan RAG yang memungkinkan query data gudang dengan bahasa natural, memprediksi stockout otomatis, dan memantau kapasitas stok secara real-time. Dibangun sebagai SaaS multi-tenant yang efisien dan scalable.",
      format: "Web",
      status: "Finished",
      stack: ["React 19", "Next.js 15", "Tailwind CSS", "Shadcn UI", "Node.js", "JWT", "Neon PostgreSQL", "Gemini 2.5 Flash", "Google Generative AI", "Zod", "Lucide React"],
      tech: ["AI Integration", "RAG", "Inventory", "SaaS"],
      images: projectImages("ai/warehouses", ["login.png", "w1.png", "w2.png", "w3.png", "w4.png"]),
      youtube: "https://youtu.be/LeEA4ohZeUY?si=AWRauR3u0udDR4RAD",
      demo: "https://warehouses-ai.vercel.app/"
    }
  ],
  data: [
    {
      title: "Data Entry & Dashboard Produk Toko Online",
      period: "Sep 2025",
      description:
        "Project latihan data entry dan dashboard visualization untuk 100 produk toko online yang dibuat sendiri. Data diolah di Excel menjadi dashboard interaktif untuk memantau stok, kategori populer, dan nilai persediaan melalui Pivot Table, Chart, dan Slicer.",
      format: "Analytics",
      status: "Finished",
      stack: ["Microsoft Excel", "Google Sheets"],
      tech: ["Dashboard", "Data Entry", "Visualization", "Business Intelligence"],
      images: projectImages("data_analys/dpto", ["db1.jpg", "db2.jpg", "tabel.jpg"])
    },
    {
      title: "E-Commerce Data Analysis Project: Customer Insights & Sales Trends",
      period: "Sep 2025",
      description:
        "Analisis dataset UK Online Retail untuk mengungkap pola pembelian pelanggan dan tren penjualan. Proses mencakup data cleaning, exploratory data analysis, dan insight bisnis yang dapat ditindaklanjuti.",
      format: "Analytics",
      status: "Finished",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      tech: ["EDA", "Sales Analysis", "Customer Insight", "Visualization"],
      images: projectImages("data_analys/ecomerce", ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg", "e5.jpg", "e6.jpg", "e7.jpg"])
    },
    {
      title: "Project: Analisis Tren Pasar Gaya Hidup & Kesehatan 2025",
      period: "Okt 2025",
      description:
        "Analisis tren gaya hidup dan kesehatan pasca-pandemi dengan menggabungkan Google Trends, data marketplace, dan survei konsumen. Hasilnya memberi insight tentang pola minat pasar dan peluang strategi pemasaran sektor kesehatan 2025.",
      format: "Analytics",
      status: "Finished",
      stack: ["Google Trends", "Tokopedia", "Shopee", "Lazada", "Survey Analysis", "Excel", "Spreadsheet"],
      tech: ["Market Research", "Trend Analysis", "Consumer Insight", "Strategy"],
      images: projectImages("data_analys/tren_ghk", ["p1.png"])
    },
    {
      title: "Himalaya Expedition Data Analysis & Visualization",
      period: "Des 2025",
      description:
        "Analisis dan visualisasi dataset ekspedisi Himalaya 1905-2024 dengan 11.425 ekspedisi dan 89.000 pendaki. Proyek ini mengungkap tren keberhasilan, distribusi gender, pengaruh musim, dan risiko pendakian melalui proses cleaning dan EDA end-to-end.",
      format: "Analytics",
      status: "Finished",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      tech: ["EDA", "Data Cleaning", "Visualization", "Research"],
      images: projectImages("data_analys/himalaya", ["h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg", "h5.jpg", "h6.jpg", "h7.jpg", "h8.jpg", "h9.jpg"])
    }
  ],
  uiux: [
    {
      title: "UI Design for Online Bookstore",
      period: "Okt 2025",
      description:
        "Perancangan UI/UX untuk website e-commerce toko buku online dengan 8 halaman utama. Desain berfokus pada navigasi yang intuitif, tampilan modern, dan alur belanja yang nyaman di desktop maupun mobile.",
      format: "Web",
      status: "Finished",
      stack: ["Figma"],
      tech: ["UI/UX", "E-commerce", "Responsive Design"],
      images: projectImages("ui_design/bookstore", ["login.jpg", "register.jpg", "tentang.jpg", "kontak.jpg", "kategori.jpg", "home.jpg", "detail.jpg", "checkout.jpg"])
    },
    {
      title: "UI Design for Consultation Patient Doctorify",
      period: "Mei 2023",
      description:
        "Perancangan UI/UX aplikasi mobile Doctorify untuk konsultasi dokter spesialis secara online. Desain mencakup onboarding, login, dan dashboard utama yang menampilkan daftar dokter berdasarkan spesialisasi.",
      format: "Mobile",
      status: "Finished",
      stack: ["Figma"],
      tech: ["UI/UX", "Mobile App", "Healthcare"],
      images: projectImages("ui_design/doctor", ["sign.png", "splash.png", "welcome.png"])
    },
    {
      title: "UI Design for Finance App Fineto",
      period: "Okt 2025",
      description:
        "Perancangan UI/UX aplikasi mobile Fineto untuk memantau portofolio investasi, mencatat transaksi harian, dan melacak pemasukan serta pengeluaran dalam tampilan yang bersih dan informatif.",
      format: "Mobile",
      status: "Finished",
      stack: ["Figma"],
      tech: ["UI/UX", "Finance", "Mobile App"],
      images: projectImages("ui_design/fineto", ["login.png", "Transactions.png", "Welcome.png", "Investment.png", "Dashboard.png"])
    },
    {
      title: "Web Design Cars Rent",
      period: "Jan 2026",
      description:
        "Perancangan website untuk showroom mobil premium asal Amsterdam dengan navigasi multi-halaman dan visual yang elegan. Fokus desain diarahkan pada pengalaman pengguna yang premium dan sesuai identitas brand otomotif kelas atas.",
      format: "Web",
      status: "Finished",
      stack: ["Framer"],
      tech: ["Web Design", "Landing Page", "Premium Brand"],
      images: projectImages("web_design/car", ["index.png"]),
      demo: "https://enlivened-run-081984.framer.app/"
    }
  ]
};

export const FILTER_CONFIG = {
  type: ["All", "Web", "Mobile"]
};
