import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaCertificate, FaChartBar, FaDatabase, FaLaptopCode, FaRobot, FaTools, FaUserTie } from "react-icons/fa";
import {
  SiAxios,
  SiBootstrap,
  SiDjango,
  SiGooglesheets,
  SiGooglecloud,
  SiLooker,
  SiGoogleanalytics,
  SiAndroidstudio,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiFlask,
  SiGit,
  SiGooglecolab,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiFramer,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSpring,
  SiSupabase,
  SiWordpress,
  SiTailwindcss,
  SiVuedotjs
} from "react-icons/si";
import { LuBolt } from "react-icons/lu";
import { FaJava, FaPhp } from "react-icons/fa";
import m1 from "../assets/dokumentasi/m1.jpeg";
import m2 from "../assets/dokumentasi/m2.jpeg";
import m3 from "../assets/dokumentasi/m3.jpeg";
import m4 from "../assets/dokumentasi/m4.jpeg";
import m5 from "../assets/dokumentasi/m5.jpeg";
import m6 from "../assets/dokumentasi/m6.jpeg";
import m7 from "../assets/dokumentasi/m7.png";
import m8 from "../assets/dokumentasi/m8.png";
import hima1 from "../assets/dokumentasi/hima1.jpg";
import hima2 from "../assets/dokumentasi/hima2.JPG";
import skif from "../assets/dokumentasi/skif.png";
import bap from "../assets/dokumentasi/bap.png";
import freelance from "../assets/dokumentasi/f1.png";
import hacth from "../assets/dokumentasi/hacth.jpg";
import oracle from "../assets/dokumentasi/oracle.jpg";
import bitlab from "../assets/dokumentasi/bitlab.jpg";
import aiBeginner from "../assets/dokumentasi/ai_beginner.jpg";
import aiIntermediate from "../assets/dokumentasi/ai_intermidiate.jpg";
import aiAdvanced from "../assets/dokumentasi/ai_advanced.jpg";
import bnsp from "../assets/dokumentasi/bnsp.jpg";
import reactCert from "../assets/dokumentasi/react.png";
import toefl from "../assets/dokumentasi/toefl.jpg";
import revou from "../assets/dokumentasi/revou.jpg";
import vibeCodingCertImage from "../assets/dokumentasi/vibecoding.jpg";
import poster from "../assets/gambar_project/ngalir/poster.jpg";
import dashboard from "../assets/gambar_project/ngalir/dashboard.png";
import sertifDgm from "../assets/dokumentasi/digital_marketing/Sertif_dgm.jpg";
import suratRekomendasiDgm from "../assets/dokumentasi/digital_marketing/srkdb.jpg";
import { useLanguage } from "../context/LanguageContext";

const pratamaMotorPhase2Images = []; // Belum ada gambar dokumentasi spesifik untuk Phase 2

const digitalMarketingImagesByName = import.meta.glob(
  "../assets/dokumentasi/digital_marketing/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  {
    eager: true,
    import: "default"
  }
);

const digitalMarketingImages = [
  "Dk1.png",
  "Dk2.jpeg",
  "R1.jpg",
  "R2.jpg",
  "T1.jpg"
]
  .map((fileName) =>
    Object.entries(digitalMarketingImagesByName).find(([path]) => path.endsWith(`/${fileName}`))?.[1]
  )
  .filter(Boolean);


const highlights = [
  {
    key: "background",
    title: "Background",
    value: "Informatika, IPK 3.65",
    description: "Lulusan 2025 dari Universitas Katolik Musi Charitas."
  },
  {
    key: "focus",
    title: "Core Focus",
    value: "Software + Data + AI",
    description: "Fokus pada pengembangan aplikasi, analitik data, dan AI integration."
  },
  {
    key: "experience",
    title: "Experience",
    value: "Organisasi, Magang, Freelance",
    description: "Menggabungkan teamwork, digitalisasi, dan delivery project."
  }
];

const activities = [
  {
    key: "organization",
    title: "Organisasi HIMA Informatika",
    period: "2022 - 2023",
    role: "Pengurus / Koordinator Kegiatan",
    images: [skif, hima1, hima2],
    description:
      "Memimpin perencanaan dan eksekusi 3 acara untuk meningkatkan keterlibatan mahasiswa sebesar 45% dan mengelola workshop teknologi dengan 50+ peserta.",
    impact: ["Leadership", "Time Management", "Communication", "Problem Solving"],
    details: [
      "Memimpin perencanaan dan eksekusi 3 acara.",
      "Meningkatkan keterlibatan mahasiswa sebesar 45%.",
      "Mengelola workshop teknologi dengan 50+ peserta.",
      "Membantu instalasi Windows/Linux dan setup aplikasi."
    ]
  },
  {
    key: "internship",
    title: "Magang Thamrin Group",
    period: "26 Feb - 29 Jun 2024",
    role: "Software Developer Intern - ICT Division",
    images: [m1, m2, m3, m4, m5, m6, m7, m8],
    description:
      "Berkontribusi pada pengembangan IM-Signature yang mengurangi penggunaan kertas hingga 40% dan mempercepat proses persetujuan memorandum dari 3 hari menjadi 24 jam.",
    impact: ["Laravel", "MySQL", "Paperless", "Documentation"],
    details: [
      "Mengembangkan fitur aplikasi menggunakan Laravel dan MySQL.",
      "Melakukan analisis kebutuhan sistem dan menyusun spesifikasi teknis.",
      "Menulis dokumentasi sistem untuk maintenance dan pengembangan.",
      "Mendorong proses persetujuan memorandum dari 3 hari ke 24 jam."
    ]
  },
  {
    key: "community",
    title: "Pengabdian Masyarakat",
    period: "Agustus 2024",
    role: "Web Application Developer",
    images: [bap],
    description:
      "Membangun sistem manajemen data berbasis web untuk monitoring kondisi psikologi dan pelaporan staff dengan fitur CRUD, authentication, dashboard, dan reporting.",
    impact: ["CRUD", "Auth", "Dashboard", "MySQL"],
    details: [
      "Membangun web application dengan CRUD lengkap.",
      "Merancang database schema untuk data psikologi.",
      "Mengimplementasikan authentication dan authorization.",
      "Membuat dashboard dan reporting system yang mudah dipakai."
    ]
  },
  {
    key: "aiTrack",
    title: "AI Track FGA",
    period: "Mar - Mei 2025",
    role: "Peserta Pelatihan AI",
    images: [],
    description:
      "Mengikuti pelatihan bersertifikat di bidang AI dari Kominfo RI dengan total 55+ jam, mencakup AI Beginner, AI Intermediate, dan AI Advanced.",
    impact: ["Azure", "Cloud", "AI Deployment", "GitHub Copilot"],
    details: [
      "Menyelesaikan 3 level pelatihan: Beginner, Intermediate, dan Advanced.",
      "Belajar cloud computing, plugin AI, agent AI, dan deployment model.",
      "Memahami solusi AI berbasis cloud dan pipeline deployment.",
      "Total pelatihan lebih dari 55 jam."
    ]
  },
  {
    key: "freelance",
    title: "Freelance Project Phase 1",
    period: "Des 2025 - April 2026",
    role: "Web Application Developer",
    images: [freelance],
    description:
      "Membangun aplikasi Sistem Informasi Penjualan dan Manajemen Stok Barang untuk Pratama Motor guna mendigitalisasi dan merapikan proses operasional toko.",
    impact: ["Finished", "System Design", "Web App"],
    details: [
      "Membangun sistem autentikasi dengan hak akses berbasis role Admin dan Kasir.",
      "Mengembangkan manajemen produk, stok barang, dan transaksi penjualan dengan pengurangan stok otomatis.",
      "Membuat fitur retur barang dan histori harga produk.",
      "Mengembangkan laporan penjualan & keuangan dengan fitur export PDF dan Excel.",
      "Proyek selesai dan dilanjutkan ke kontrak baru (Phase 2) dengan fitur yang lebih kompleks."
    ]
  },
  {
    key: "hackathon",
    title: "AI/ML & Full Stack Developer - GDG Live Indonesia Hackathon",
    period: "Mei 2026",
    role: "AI/ML & Full Stack Developer",
    images: [poster, dashboard],
    description:
      "Mengembangkan aplikasi kasir cerdas berbasis AI bernama NGALIR untuk membantu UMKM Indonesia mengoptimalkan operasional bisnis mereka dalam ajang GDG Live Indonesia.",
    impact: ["AI Integration", "Machine Learning", "Full Stack Development", "Finished", "Hackathon"],
    details: [
      "Mengintegrasikan Google AI Studio & Gemini API untuk fitur Voice AI Chat dan Proactive AI yang memberikan insight bisnis secara otomatis.",
      "Membangun arsitektur database inventory real-time menggunakan Firebase.",
      "Mengembangkan sistem kasir digital dengan kalkulasi otomatis.",
      "Membuat fitur ekspor laporan bisnis langsung ke format PDF."
    ]
  },
  {
    key: "digitalMarketing",
    title: "Digital Marketing Bootcamp",
    period: "Mei 2026",
    role: "Digital Marketing Specialist",
    images: digitalMarketingImages,
    description:
      "Mengikuti 2 weeks intensive bootcamp Digital Marketing bersama KarirNex x Ebizmark, mempelajari dan mempraktikkan strategi digital marketing secara menyeluruh sebagai langkah transisi dari background programmer menuju dunia digital marketing.",
    impact: ["Digital Marketing", "SEO", "Content Strategy", "KOL Management"],
    details: [
      "Mempelajari riset customer persona dan value proposition untuk strategi pemasaran yang tepat sasaran.",
      "Mengembangkan strategi konten dan manajemen KOL (Key Opinion Leader) untuk meningkatkan brand awareness.",
      "Memahami dan mempraktikkan SEO serta optimasi landing page untuk meningkatkan visibilitas online.",
      "Bootcamp ini menjadi langkah awal transisi karir dari background programmer menuju dunia digital marketing."
    ]
  },
  {
    key: "pratamaMotorPhase2",
    title: "Web Application Developer - Pratama Motor Project (Phase 2)",
    company: "Pratama Motor",
    type: "Freelance",
    period: "Jun 2026 - Present",
    duration: "2 bulan",
    location: "Palembang, South Sumatra, Indonesia (Remote)",
    role: "Web Application Developer",
    images: pratamaMotorPhase2Images, // array gambar dokumentasi
    description: "Alhamdulillah dipercaya kembali untuk melanjutkan pengembangan Sistem Informasi Penjualan & Stok Barang Pratama Motor ke Phase 2 melalui kontrak baru.",
    impact: ["Manajemen Piutang", "Integrasi Supplier", "Kalkulasi Laba Rugi", "System Improvement"],
    details: [
        "Mengembangkan fitur Manajemen Piutang",
        "Melakukan integrasi dengan sistem Supplier",
        "Meningkatkan perhitungan Laba Rugi yang lebih lengkap dan akurat",
        "Melakukan improvement keseluruhan sistem dari Phase 1",
        "Bekerja secara Full Remote dari Palembang untuk klien di Muara Enim"
    ]
}
];

const certificates = [
  {
    key: "vibeCodingCert",
    title: "Top 100 Juara Vibe Coding",
    issuer: "Google Developers Group",
    date: "Jun 2026",
    credentialId: "JVC2605-MFUJ-JQP9",
    description: "Generative AI Studio, Application Development and +3 skills",
    image: vibeCodingCertImage
},
  {
    key: "digitalMarketingCert",
    title: "2 Weeks Intensive Bootcamp Digital Marketing Batch 3",
    issuer: "KarirNex by PT Ebiz Karisma Internasional",
    date: "Mei 2026",
    image: sertifDgm
  },
  {
    key: "digitalMarketingReco",
    title: "Surat Rekomendasi Keahlian Digital Marketing",
    issuer: "KarirNex by PT Ebiz Karisma Internasional",
    date: "Mei 2026",
    image: suratRekomendasiDgm
  },
  {
    title: "AI Productivity and AI API Integration for Developers",
    issuer: "Hacktiv8 Indonesia",
    date: "Mar 2026",
    image: hacth
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    image: oracle
  },
  {
    title: "AI Made Simple: Learn, Apply, and Use Responsibly",
    issuer: "Bitlabs Academy",
    date: "Sep 2025",
    image: bitlab
  },
  {
    title: "ElevAIte AI Beginner",
    issuer: "Digital Talent Scholarship",
    date: "Feb 2025",
    image: aiBeginner
  },
  {
    title: "ElevAIte AI Intermediate",
    issuer: "Digital Talent Scholarship",
    date: "Apr 2025",
    image: aiIntermediate
  },
  {
    title: "ElevAIte AI Advanced",
    issuer: "Digital Talent Scholarship",
    date: "Mei 2025",
    image: aiAdvanced
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP",
    date: "Jul 2024",
    image: bnsp
  },
  {
    title: "Great Learning React JS Course",
    issuer: "Coursera",
    date: "Jan 2024",
    image: reactCert
  },
  {
    title: "Toefl Test",
    issuer: "English Domestic",
    date: "September 2025 - September 2027",
    image: toefl
  },
  {
    title: "Software Engineering",
    issuer: "RevoU",
    date: "Jun 2023",
    image: revou
  }
];

const skillGroups = [
  {
    title: "Programming & Frameworks",
    icon: <FaLaptopCode className="text-blue-300" />,
    items: [
      { label: "Python", icon: <SiPython className="text-blue-300" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { label: "Dart", icon: <SiDart className="text-blue-400" /> },
      { label: "Java", icon: <FaJava className="text-red-300" /> },
      { label: "PHP", icon: <FaPhp className="text-indigo-300" /> },
      { label: "Laravel", icon: <SiLaravel className="text-red-400" /> },
      { label: "React.js", icon: <SiReact className="text-sky-300" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
      { label: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { label: "Django", icon: <SiDjango className="text-emerald-300" /> },
      { label: "Flask", icon: <SiFlask className="text-gray-200" /> },
      { label: "Spring Boot", icon: <SiSpring className="text-green-300" /> },
      { label: "VueJs", icon: <SiVuedotjs className="text-emerald-300" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
      { label: "NestJS", icon: <SiNestjs className="text-rose-400" /> },
      { label: "Bootstrap", icon: <SiBootstrap className="text-purple-300" /> }
    ]
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-emerald-300" />,
    items: [
      { label: "MySQL", icon: <SiMysql className="text-sky-300" /> },
      { label: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
      { label: "Firebase (NoSQL)", icon: <SiFirebase className="text-amber-300" /> }
    ]
  },
  {
    title: "Data & Machine Learning",
    icon: <FaRobot className="text-purple-300" />,
    items: [
      { label: "Pandas", icon: <SiPython className="text-blue-300" /> },
      { label: "Scikit-learn", icon: <SiScikitlearn className="text-amber-300" /> },
      { label: "TextBlob", icon: <SiPython className="text-blue-300" /> },
      { label: "NLTK", icon: <FaRobot className="text-emerald-300" /> },
      { label: "PyTorch", icon: <SiPytorch className="text-rose-300" /> },
      { label: "Hugging Face Transformers", icon: <FaRobot className="text-yellow-200" /> },
      { label: "IndoBERT", icon: <FaRobot className="text-blue-300" /> },
      { label: "Google Gemini API", icon: <FaRobot className="text-blue-200" /> }
    ]
  },
  {
    title: "Tools",
    icon: <FaTools className="text-yellow-300" />,
    items: [
      { label: "Git", icon: <SiGit className="text-orange-400" /> },
      { label: "VS Code", icon: <FaTools className="text-blue-400" /> },
      { label: "Postman", icon: <SiPostman className="text-orange-300" /> },
      { label: "Google Colab", icon: <SiGooglecolab className="text-amber-300" /> },
      { label: "Jupyter Notebook", icon: <SiJupyter className="text-orange-300" /> },
      { label: "Figma", icon: <SiFigma className="text-pink-300" /> },
      { label: "Framer", icon: <SiFramer className="text-cyan-300" /> },
      { label: "Microsoft Office", icon: <FaTools className="text-blue-300" /> },
      { label: "Vercel", icon: <FaTools className="text-gray-200" /> },
      { label: "Supabase", icon: <SiSupabase className="text-emerald-300" /> },
      { label: "Neon Serverless Postgres", icon: <FaDatabase className="text-cyan-300" /> },
      { label: "Axios", icon: <SiAxios className="text-purple-300" /> },
      { label: "Google Sheets", icon: <SiGooglesheets className="text-green-500" /> },
      { label: "Google Looker Studio", icon: <SiLooker className="text-blue-500" /> },
      { label: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
      { label: "Google Analytics", icon: <SiGoogleanalytics className="text-orange-500" /> },
      { label: "Android Studio", icon: <SiAndroidstudio className="text-green-400" /> },
      { label: "Google Antigravity", icon: <FaTools className="text-blue-400" /> },
      { label: "n8n", icon: <FaTools className="text-orange-400" /> },
      { label: "OpenClaw", icon: <FaTools className="text-slate-300" /> },
      { label: "Lovable", icon: <FaTools className="text-pink-300" /> },
      { label: "Bolt", icon: <LuBolt className="text-yellow-300" /> },
      { label: "Emergent", icon: <FaTools className="text-cyan-300" /> },
      { label: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
      { label: "Google AI", icon: <FaTools className="text-emerald-300" /> },
      { label: "WordPress", icon: <SiWordpress className="text-blue-300" /> }
    ]
  },
  {
    title: "Web & API",
    icon: <FaChartBar className="text-sky-300" />,
    items: [
      { label: "REST API", icon: <FaChartBar className="text-sky-300" /> },
      { label: "JSON", icon: <FaChartBar className="text-sky-300" /> },
      { label: "XML", icon: <FaChartBar className="text-sky-300" /> },
      { label: "API Testing", icon: <SiPostman className="text-orange-300" /> }
    ]
  },
  {
    title: "Additional Skills",
    icon: <FaAward className="text-rose-300" />,
    items: [
      { label: "Secure Coding", icon: <FaAward className="text-rose-300" /> },
      { label: "System Documentation", icon: <FaAward className="text-rose-300" /> },
      { label: "Software Testing (UAT & QA)", icon: <FaAward className="text-rose-300" /> },
      { label: "Agile Workflow", icon: <FaAward className="text-rose-300" /> }
    ]
  },
  {
    title: "Areas of Expertise",
    icon: <FaChartBar className="text-indigo-300" />,
    items: [
      { label: "Web Development", icon: <FaChartBar className="text-indigo-300" /> },
      { label: "Software Engineering", icon: <FaChartBar className="text-indigo-300" /> },
      { label: "Data Science", icon: <FaChartBar className="text-indigo-300" /> },
      { label: "Data Analytics", icon: <FaChartBar className="text-indigo-300" /> },
      { label: "AI Integration", icon: <FaChartBar className="text-indigo-300" /> }
    ]
  }
];

const cardMotion = {
  whileHover: { y: -8, scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: { type: "spring", stiffness: 220, damping: 18 }
};

const renderGallery = (images, altPrefix) => {
  if (!images || images.length === 0) return null;

  const countClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : images.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`mt-4 grid gap-2 ${countClass}`}>
      {images.map((image, index) => (
        <img
          key={`${altPrefix}-${index}`}
          src={image}
          alt={`${altPrefix} ${index + 1}`}
          className={`w-full rounded-xl object-cover border border-white/10 ${
            images.length === 1 ? "h-40 sm:max-w-sm sm:mx-auto" : "h-24 sm:h-28"
          }`}
        />
      ))}
    </div>
  );
};

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-gray-900 to-black text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="max-w-6xl mx-auto space-y-20">
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />
              <img
                src="Foto_Formal.jpg"
                alt="Profile"
                className="relative w-56 h-56 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Rendy Saputra</h1>
              <p className="text-gray-300 mt-4 max-w-3xl">
                {t("about.page.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 perspective-[1200px]">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                  {...cardMotion}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">{t(`about.highlight.${item.key}.title`)}</p>
                  <h3 className="text-lg font-semibold mt-2">{t(`about.highlight.${item.key}.value`)}</h3>
                  <p className="text-xs text-gray-300 mt-2">{t(`about.highlight.${item.key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-blue-300 text-2xl" />
            <h2 className="text-2xl font-semibold">{t("about.section.activities")}</h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <motion.div
                  key={activity.title}
                className="bg-black/40 border border-white/10 rounded-2xl p-5 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                {...cardMotion}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60">{activity.period}</p>
                <h3 className="text-lg font-semibold mt-2">{t(`about.activity.${activity.key}.title`)}</h3>
                <p className="text-sm text-blue-200/80 mt-1">{t(`about.activity.${activity.key}.role`)}</p>
                <p className="text-sm text-gray-300 mt-3">{t(`about.activity.${activity.key}.description`)}</p>

                <div className="flex flex-wrap gap-2 mt-4 text-xs text-emerald-200">
                  {activity.impact.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {activity.details.map((detail, index) => (
                    <li key={detail}>
                      {t(`about.activity.${activity.key}.detail${index + 1}`)}
                    </li>
                  ))}
                </ul>

                {renderGallery(activity.images, activity.title)}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-emerald-300 text-2xl" />
            <h2 className="text-2xl font-semibold">{t("about.section.certificates")}</h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {certificates.map((certificate) => (
              <motion.div
                key={`${certificate.title}-${certificate.date}`}
                className="bg-black/40 border border-white/10 rounded-2xl p-5 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                {...cardMotion}
              >
                {certificate.image && (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="mb-4 h-32 w-full rounded-xl object-cover border border-white/10"
                  />
                )}
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60">{certificate.date}</p>
                <h3 className="text-sm font-semibold mt-2 leading-snug">
                  {certificate.key === "digitalMarketingCert"
                    ? t("about.certificate.digitalMarketingCert")
                    : certificate.key === "digitalMarketingReco"
                      ? t("about.certificate.digitalMarketingReco")
                      : certificate.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2">{certificate.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
            <div className="flex items-center gap-3 mb-8">
              <FaAward className="text-emerald-300 text-2xl" />
            <h2 className="text-2xl font-semibold">{t("about.section.skills")}</h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                className="bg-black/40 border border-white/10 rounded-2xl p-5 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                {...cardMotion}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-blue-200">
                  {group.items.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-400/30 w-fit min-w-0 whitespace-nowrap"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;

