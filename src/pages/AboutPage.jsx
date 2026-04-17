import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaCertificate, FaChartBar, FaDatabase, FaLaptopCode, FaRobot, FaTools, FaUserTie } from "react-icons/fa";
import {
  SiAxios,
  SiBootstrap,
  SiDjango,
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
  SiTailwindcss,
  SiVuedotjs
} from "react-icons/si";
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

const highlights = [
  {
    title: "Background",
    value: "Informatika, IPK 3.65",
    description: "Lulusan 2025 dari Universitas Katolik Musi Charitas."
  },
  {
    title: "Core Focus",
    value: "Software + Data + AI",
    description: "Fokus pada pengembangan aplikasi, analitik data, dan AI integration."
  },
  {
    title: "Experience",
    value: "Organisasi, Magang, Freelance",
    description: "Menggabungkan teamwork, digitalisasi, dan delivery project."
  }
];

const activities = [
  {
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
    title: "Freelance Project",
    period: "Des 2025 - Ongoing",
    role: "Web Application Developer",
    images: [freelance],
    description:
      "Mengerjakan aplikasi sistem manajemen dan pembelian barang untuk Pratama Motor yang masih dalam tahap pengembangan.",
    impact: ["Ongoing", "System Design", "Web App"],
    details: [
      "Fokus pada sistem manajemen dan pembelian barang.",
      "Proyek masih berjalan dan terus dikembangkan.",
      "Menjaga struktur sistem agar mudah diperluas."
    ]
  }
];

const certificates = [
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
      { label: "Axios", icon: <SiAxios className="text-purple-300" /> }
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
                Software developer dengan fokus pada pengembangan aplikasi, data-driven solutions, dan AI. Pengalaman
                saya terbentuk dari organisasi, magang, pengabdian masyarakat, dan project freelance yang menekankan
                kolaborasi, dokumentasi, dan delivery yang rapi.
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
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70">{item.title}</p>
                  <h3 className="text-lg font-semibold mt-2">{item.value}</h3>
                  <p className="text-xs text-gray-300 mt-2">{item.description}</p>
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
            <h2 className="text-2xl font-semibold">Dokumentasi Kegiatan</h2>
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
                <h3 className="text-lg font-semibold mt-2">{activity.title}</h3>
                <p className="text-sm text-blue-200/80 mt-1">{activity.role}</p>
                <p className="text-sm text-gray-300 mt-3">{activity.description}</p>

                <div className="flex flex-wrap gap-2 mt-4 text-xs text-emerald-200">
                  {activity.impact.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {activity.details.map((detail) => (
                    <li key={detail}>{detail}</li>
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
            <h2 className="text-2xl font-semibold">Sertifikasi Unggulan</h2>
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
                <h3 className="text-sm font-semibold mt-2 leading-snug">{certificate.title}</h3>
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
            <h2 className="text-2xl font-semibold">Keahlian Inti</h2>
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

                <div className="grid grid-cols-2 gap-3 text-xs text-blue-200 md:grid-cols-3">
                  {group.items.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-400/30 leading-tight break-words min-h-[40px]"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="block">{item.label}</span>
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
