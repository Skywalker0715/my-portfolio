import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChartLine, FaGithub, FaGlobe, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRobot, FaServer, FaYoutube } from "react-icons/fa";
import { FILTER_CONFIG, PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const PROJECT_COPY = [
  {
    match: /Aplikasi Klasifikasi Sentimen terhadap Merek Smartphone di Indonesia/i,
    en: {
      title: "Sentiment Classification App for Smartphone Brands in Indonesia",
      description:
        "A web app for analyzing YouTube comments across 21 smartphone types from 5 popular brands in Indonesia. The Naive Bayes model with TF-IDF and FastText achieved 92-98% accuracy and presents the output in easy-to-read charts and tables."
    }
  },
  {
    match: /MoodSense - Aplikasi Pemantau Mood Harian/i,
    en: {
      title: "MoodSense - Daily Mood Monitoring App",
      description:
        "A daily mood tracking app that analyzes emotions with IndoBERT and provides personalized suggestions through OpenAI GPT. Mood history is stored so emotional progress can be reviewed over time."
    }
  },
  {
    match: /Aplikasi IM-Signature Project Magang Thamrin 2024/i,
    en: {
      title: "IM-Signature App - Thamrin Internship Project 2024",
      description:
        "A digital memorandum approval system that cut approval time from 3 days to 24 hours and reduced paper usage by up to 40%. Built with Laravel, MySQL, and a cleaner Agile workflow."
    }
  },
  {
    match: /Catatan Belanja - Aplikasi Pencatat Pengeluaran dari Struk/i,
    en: {
      title: "Shopping Notes - Receipt-based Expense Tracker",
      description:
        "A web app that lets users upload receipt photos, then reads the text with OCR, turns it into structured data using Cohere AI, and stores it in the database. Includes a Filament admin panel for expense management."
    }
  },
  {
    match: /Sistem Manajemen Tiket TickTrack/i,
    en: {
      title: "TickTrack Ticket Management System",
      description:
        "A ticket management web app that centralizes issue reports into one system. It includes role-based access, real-time status tracking, communication history, and a monitoring dashboard so issues do not get lost in email or chat."
    }
  },
  {
    match: /HireSpace - Platform Manajemen Perekrutan/i,
    en: {
      title: "HireSpace - Recruitment Management Platform",
      description:
        "A modern recruitment platform with two interfaces: an admin dashboard for managing vacancies and an applicant portal for browsing jobs, submitting applications, and managing profiles. Includes application tracking, interview schedules, and real-time notifications."
    }
  },
  {
    match: /Hiring API - Backend System for Recruitment Platform/i,
    en: {
      title: "Hiring API - Backend System for Recruitment Platform",
      description:
        "A modular RESTful API backend for a recruitment platform with more than 13 endpoints for job posts, applications, applicant profiles, interviews, and notifications. Includes JWT authentication, multi-role access control, and full request validation."
    }
  },
  {
    match: /Aplikasi Sistem Informasi Penjualan dan Manajemen Stok Barang Pratama Motor/i,
    en: {
      title: "Pratama Motor Sales & Stock Management System",
      description:
        "A web application that helps digitize Pratama Motor store operations, including product and stock management, sales transactions with automatic stock deduction, returns, price history, sales and finance reports, PDF and Excel export, and role-based Admin/Cashier authentication."
    }
  },
  {
    match: /Kumpulan Proyek Pemrograman Berbasis Mobile/i,
    en: {
      title: "Collection of Mobile-Based Programming Projects",
      description:
        "A collection of mobile programming projects that includes various mobile app implementations in one GitHub repository. This project serves as organized documentation of mobile development exploration and practice."
    }
  },
  {
    match: /Prediksi Kualitas Mobil dengan Model Machine Learning/i,
    en: {
      title: "Car Quality Prediction with a Machine Learning Model",
      description:
        "A K-Nearest Neighbors classification model for assessing used car feasibility based on condition, price, and vehicle age. The project achieved 81% accuracy and can be used as automatic screening on a used car marketplace."
    }
  },
  {
    match: /AI Assistant Telegram Bot/i,
    en: {
      title: "AI Assistant Telegram Bot",
      description:
        "An AI-powered Telegram bot that integrates Google Gemini through an n8n automation workflow. The bot can reply automatically, keep conversation context, and log interaction history to Google Sheets for monitoring and analysis."
    }
  },
  {
    match: /Warehouse AI - Smart Inventory Management System/i,
    en: {
      title: "Warehouse AI - Smart Inventory Management System",
      description:
        "A Gemini 2.5 Flash and RAG-based inventory system that lets users query warehouse data in natural language, predicts stockouts automatically, and monitors stock capacity in real time. Built as an efficient, scalable multi-tenant SaaS."
    }
  },
  {
    match: /NGALIR/i,
    en: {
      title: "NGALIR - AI-Powered Smart Cashier App for SMEs",
      description:
        "NGALIR is an AI-powered cashier app built for the GDG Live Indonesia Hackathon to help Indonesian SMEs optimize business operations. It integrates Voice AI Chat and Proactive AI with Google Gemini API, real-time inventory management, automatic transaction calculations, and PDF report export."
    }
  },
  {
    match: /Data Entry & Dashboard Produk Toko Online/i,
    en: {
      title: "Online Store Product Data Entry & Dashboard",
      description:
        "A data entry and visualization training project for 100 self-created online store products. The data is processed in Excel into an interactive dashboard for tracking stock, popular categories, and inventory value through Pivot Tables, Charts, and Slicers."
    }
  },
  {
    match: /E-Commerce Data Analysis Project: Customer Insights & Sales Trends/i,
    en: {
      title: "E-Commerce Data Analysis Project: Customer Insights & Sales Trends",
      description:
        "An analysis of the UK Online Retail dataset to reveal customer buying patterns and sales trends. The process includes data cleaning, exploratory data analysis, and actionable business insights."
    }
  },
  {
    match: /Project: Analisis Tren Pasar Gaya Hidup & Kesehatan 2025/i,
    en: {
      title: "Lifestyle and Health Market Trend Analysis 2025",
      description:
        "An analysis of post-pandemic lifestyle and health trends by combining Google Trends, marketplace data, and consumer surveys. The results provide insight into market interest patterns and health-sector marketing opportunities for 2025."
    }
  },
  {
    match: /Himalaya Expedition Data Analysis & Visualization/i,
    en: {
      title: "Himalaya Expedition Data Analysis & Visualization",
      description:
        "An analysis and visualization project using the 1905-2024 Himalaya expedition dataset with 11,425 expeditions and 89,000 climbers. The project highlights success trends, gender distribution, seasonal effects, and climbing risks through end-to-end cleaning and EDA."
    }
  },
  {
    match: /E-Commerce Book Data Scraping & Cleaning/i,
    en: {
      title: "E-Commerce Book Data Scraping & Cleaning",
      description:
        "An automated scraping pipeline built with Python to extract 1,000+ book product records from public e-commerce pages, including name, price, rating, and stock status from 50 category pages. The raw data was cleaned with Pandas, handling six quality issues, and exported as a two-sheet Excel file with 99.8% data accuracy."
    }
  },
  {
    match: /PDF Directory to Spreadsheet/i,
    en: {
      title: "PDF Directory to Spreadsheet - Lead Data Entry",
      description:
        "Extraction of 200+ professional contact records from a 26-page PDF directory from the Estate Planning Council of Cleveland. Each row was manually entered with 11 fields and standardized in Google Sheets for CRM import, mail merge, and outreach campaigns."
    }
  },
  {
    match: /PDF Report to Spreadsheet/i,
    en: {
      title: "PDF Report to Spreadsheet - School Network Data",
      description:
        "A manual data entry project that extracted school network data from a multi-page PDF report by SIATech Inc. The result is a structured Google Sheet dataset ready for analysis and reporting."
    }
  },
  {
    match: /UI Design for Online Bookstore/i,
    en: {
      title: "UI Design for Online Bookstore",
      description:
        "UI/UX design for an online bookstore e-commerce website with 8 main pages. The design focuses on intuitive navigation, a modern look, and a comfortable shopping flow on desktop and mobile."
    }
  },
  {
    match: /UI Design for Consultation Patient Doctorify/i,
    en: {
      title: "UI Design for Consultation App Doctorify",
      description:
        "UI/UX design for the Doctorify mobile app for online specialist doctor consultations. The design includes onboarding, login, and a main dashboard that shows doctors by specialty."
    }
  },
  {
    match: /UI Design for Finance App Fineto/i,
    en: {
      title: "UI Design for Finance App Fineto",
      description:
        "UI/UX design for the Fineto mobile app to monitor investment portfolios, record daily transactions, and track income and expenses in a clean, informative interface."
    }
  },
  {
    match: /Web Design Cars Rent/i,
    en: {
      title: "Cars Rent Web Design",
      description:
        "A website design for a premium car showroom from Amsterdam with multi-page navigation and elegant visuals. The design emphasizes a premium user experience aligned with a high-end automotive brand."
    }
  },
  {
    match: /TeaZen/i,
    en: {
      title: "TeaZen - Organic Tea E-Commerce Web Design",
      description:
        "An e-commerce website design for the premium organic tea brand TeaZen with a clean, natural, and elegant look. The design includes a hero landing page, multi-page navigation, and a UI that reflects a wellness and mindfulness brand identity."
    }
  },
  {
    match: /CineWorld/i,
    en: {
      title: "CineWorld - Movie Streaming Landing Page",
      description:
        "A landing page design for a movie streaming platform called CineWorld with an elegant dark mode inspired by Netflix. Designed in Figma and implemented with Bolt.new, it includes a featured hero section, multi-section navigation, a rating system, and an immersive cinema-like UI."
    }
  },
  {
    match: /Wisata Indonesia/i,
    en: {
      title: "Wisata Indonesia - Travel Landing Page",
      description:
        "A travel agency landing page themed around Indonesian tourism using Emergent.sh as the AI builder. The concept starts with a PRD in Claude AI and a Figma draft, then becomes a single-page app with smooth-scroll navigation and scenic hero visuals."
    }
  },
  {
    match: /Fluenta - Aplikasi Pembelajaran Bahasa Inggris AI/i,
    en: {
      title: "Fluenta - AI English Learning App for Indonesians",
      description:
        "Fluenta is a Streamlit app for learning English through conversation with an AI tutor. Built for Indonesian learners with Mandarin and Japanese support as learning languages. The app supports text and voice chat, grammar correction with explanations in Indonesian, plus translation and document processing pages. Chat session history is stored in a local SQLite database."
    }
  },
  {
    match: /StockPilot AI - Local-First Stock Image Workspace/i,
    en: {
      title: "StockPilot AI - Local-First Stock Image Workspace",
      description:
        "StockPilot AI is a local-first workspace for stock image creators to organize assets, prepare metadata, and review AI-generated image insights. Images and editable metadata are stored in a local SQLite database. Optional Cohere analysis suggests metadata and visual observations; the creator reviews suggestions before applying them. Manual library work does not require an AI key. Built with Python FastAPI backend and React TypeScript Vite frontend."
    }
  }
];

const getLocalizedProjectCopy = (project, isEnglish) => {
  if (!isEnglish) {
    return { title: project.title, description: project.description };
  }

  const matched = PROJECT_COPY.find((entry) => entry.match.test(project.title));
  return matched?.en || { title: project.title, description: project.description };
};

const applyFilters = (items, search, filters, isEnglish) => {
  const query = search.trim().toLowerCase();
  return items.filter((item) => {
    const localized = getLocalizedProjectCopy(item, isEnglish);
    const searchable = [
      item.title,
      item.description,
      localized.title,
      localized.description,
      item.period,
      item.status,
      item.format,
      ...(item.stack || []),
      ...(item.tech || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchQuery =
      query.length === 0 || searchable.includes(query);

    const matchType = filters.type === "All" || item.format === filters.type;

    return matchQuery && matchType;
  });
};

const CategoryDetail = ({ category, items, onBack }) => {
  const { t, isEnglish } = useLanguage();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ type: "All" });
  const [gallery, setGallery] = useState(null);

  const filtered = useMemo(() => applyFilters(items, search, filters, isEnglish), [items, search, filters, isEnglish]);
  const showFormatFilter = ["software", "uiux"].includes(category.id);
  const formatLabel = (format) => {
    if (format === "Web") return { icon: <FaGlobe className="text-xs" />, label: "Web" };
    if (format === "Mobile") return { icon: <FaMobileAlt className="text-xs" />, label: "Mobile" };
    if (format === "API") return { icon: <FaServer className="text-xs" />, label: "API" };
    if (format === "Bot") return { icon: <FaRobot className="text-xs" />, label: "Bot" };
    if (format === "Analytics") return { icon: <FaChartLine className="text-xs" />, label: "Analytics" };
    return { icon: <FaGlobe className="text-xs" />, label: format || "Project" };
  };

  const openGallery = (project, index = 0) => {
    setGallery({ project, index });
  };

  const closeGallery = () => setGallery(null);
  const currentImage = gallery ? gallery.project.images[gallery.index] : null;
  const galleryCopy = gallery ? getLocalizedProjectCopy(gallery.project, isEnglish) : null;
  const placeholderIcon = (format) => {
    if (format === "Mobile") return <FaMobileAlt className="text-5xl text-blue-200/80" />;
    if (format === "API") return <FaServer className="text-5xl text-blue-200/80" />;
    if (format === "Bot") return <FaRobot className="text-5xl text-purple-200/80" />;
    if (format === "Analytics") return <FaChartLine className="text-5xl text-emerald-200/80" />;
    return <FaGlobe className="text-5xl text-blue-200/80" />;
  };

  return (
    <section className="mb-20">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition mb-6"
      >
        <FaArrowLeft />
        {t("projects.back")}
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mb-10 text-center md:text-left">
        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-3 md:mb-0 shadow-lg border border-white/5">{category.icon}</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md md:max-w-2xl mx-auto md:mx-0 leading-relaxed">{category.subtitle}</p>
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 mb-8 ${showFormatFilter ? "lg:grid-cols-4" : "lg:grid-cols-1"}`}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("projects.search")}
            className={`bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-blue-400 transition ${showFormatFilter ? "lg:col-span-3" : "lg:col-span-1"}`}
          />
        {showFormatFilter && (
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            aria-label={t("projects.filter.format")}
            className="bg-black/40 border border-white/10 text-white px-3 py-3 rounded-xl outline-none focus:border-blue-400 transition"
          >
            {FILTER_CONFIG.type.map((option) => (
              <option key={option} value={option} className="bg-black">
                {option}
              </option>
            ))}
          </select>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="text-gray-400 text-center py-10 border border-white/10 rounded-2xl bg-white/5">
          {t("projects.empty")}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 perspective-[1200px]">
        {filtered.map((project, index) => (
          (() => {
            const localized = getLocalizedProjectCopy(project, isEnglish);
            const projectTitle = localized.title;
            const projectDescription = localized.description;

            return (
          <motion.div
            key={`${project.title}-${index}`}
            className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden shadow-xl group transform-gpu"
            whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              {project.images?.[0] || project.image ? (
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="block w-full text-left"
                    aria-label={`Open screenshots for ${localized.title}`}
                  >
                  <img
                    src={project.images?.[0] || project.image}
                    alt={projectTitle}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-900"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openGallery(project, 0)}
                  className="h-44 w-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex flex-col items-center justify-center text-center px-6 text-sm text-gray-300"
                >
                  {placeholderIcon(project.format)}
                  <span className="mt-3 text-sm text-slate-200/80">
                    {project.format} project
                  </span>
                </button>
              )}
                {project.images?.length > 0 && (
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="absolute bottom-3 left-3 bg-black/70 hover:bg-black/90 text-xs px-3 py-1 rounded-full border border-white/20 transition inline-flex items-center gap-2"
                  >
                  {t("projects.lihatGambar")}
                  {project.images.length > 1 && <span>+{project.images.length - 1}</span>}
                </button>
              )}
              <div className="absolute top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full border border-white/20">
                {project.status}
              </div>
              <div className="absolute top-3 right-3 bg-blue-600/80 text-xs px-3 py-1 rounded-full">
                <span className="inline-flex items-center gap-1">
                  {formatLabel(project.format).icon}
                  {formatLabel(project.format).label}
                </span>
              </div>
            </div>
            <div className="p-6">
              {project.period && (
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60 mb-2">
                  {project.period}
                </p>
              )}
              <h3 className="text-xl font-semibold mb-2">{projectTitle}</h3>
              <p className="text-gray-300 text-sm mb-4">{projectDescription}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                {project.stack.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/15 border border-white/20 rounded-full text-slate-50 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-5">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-emerald-500/10 border border-emerald-300/30 rounded-full text-slate-50 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-full transition"
                  >
                    <FaGlobe className="text-xs" />
                    {t("projects.demo")}
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 text-center bg-rose-600/90 hover:bg-rose-600 text-white text-sm py-2 rounded-full transition"
                  >
                    <FaYoutube className="text-xs" />
                    {t("projects.youtube")}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 text-center bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-full transition"
                  >
                    <FaGithub className="text-xs" />
                    {t("projects.github")}
                  </a>
                )}
                {project.images?.length > 0 && (
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="inline-flex flex-1 items-center justify-center gap-2 text-center bg-amber-500/80 hover:bg-amber-500 text-white text-sm py-2 rounded-full transition"
                  >
                    {t("projects.lihatGambar")}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
            );
          })()
        ))}
      </div>

      {gallery && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-slate-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <button
              type="button"
              onClick={closeGallery}
              className="fixed top-6 right-6 z-[100] w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm text-white hover:bg-black border-2 border-white/20 shadow-2xl flex items-center justify-center text-xl font-bold transition-all duration-200 hover:scale-110 active:scale-95 mx-4"
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] ml-0 lg:ml-0">
              <div className="bg-black">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={`${galleryCopy?.title || gallery.project.title} screenshot ${gallery.index + 1}`}
                    className="w-full h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] max-h-[75vh] object-contain mx-auto bg-black p-4"
                  />
                ) : (
                  <div className="w-full h-[55vh] lg:h-[70vh] bg-gradient-to-br from-slate-900 via-black to-slate-950 flex flex-col items-center justify-center text-center px-6">
                    {placeholderIcon(gallery.project.format)}
                    <h4 className="mt-4 text-xl font-semibold text-white">{galleryCopy?.title || gallery.project.title}</h4>
                    <p className="mt-2 text-sm text-gray-300 max-w-md">
                      {t("about.activity.noImage")}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-5 lg:p-6 flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60">{gallery.project.period}</p>
                  <h3 className="text-2xl font-semibold mt-2">{galleryCopy?.title || gallery.project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{galleryCopy?.description || gallery.project.description}</p>
                </div>

                {gallery.project.images?.length > 0 && (
                  <>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>
                        {t("projects.screenshot")} {gallery.index + 1} / {gallery.project.images.length}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setGallery((prev) => ({
                            ...prev,
                            index: (prev.index - 1 + prev.project.images.length) % prev.project.images.length
                          }))}
                          className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
                        >
                          {t("about.activity.previous")}
                        </button>
                        <button
                          type="button"
                          onClick={() => setGallery((prev) => ({
                            ...prev,
                            index: (prev.index + 1) % prev.project.images.length
                          }))}
                          className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
                        >
                          {t("about.activity.next")}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 max-h-48 overflow-auto pr-1">
                      {gallery.project.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setGallery((prev) => ({ ...prev, index }))}
                          className={`rounded-xl overflow-hidden border transition ${index === gallery.index ? "border-blue-400 ring-2 ring-blue-400/40" : "border-white/10 opacity-80 hover:opacity-100"}`}
                        >
                          <img src={image} alt={`${gallery.project.title} thumb ${index + 1}`} className="h-20 w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {gallery.project.demo && (
                    <a
                      href={gallery.project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full"
                    >
                      <FaGlobe className="text-xs" />
                      {t("projects.demo")}
                    </a>
                  )}
                  {gallery.project.youtube && (
                    <a
                      href={gallery.project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm px-4 py-2 rounded-full"
                    >
                      <FaYoutube className="text-xs" />
                      {t("projects.youtube")}
                    </a>
                  )}
                  {gallery.project.github && (
                    <a
                      href={gallery.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full"
                    >
                      <FaGithub className="text-xs" />
                      {t("projects.github")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const categoryMeta = {
  software: {
    icon: <FaLaptopCode className="text-blue-300 text-3xl" />
  },
  aiml: {
    icon: <FaRobot className="text-purple-300 text-3xl" />
  },
  data: {
    icon: <FaChartLine className="text-emerald-300 text-3xl" />
  },
  uiux: {
    icon: <FaPaintBrush className="text-pink-300 text-3xl" />
  }
};

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = PROJECT_CATEGORIES.map((item) => ({
    ...item,
    title: t(`projects.category.${item.id}.title`),
    subtitle: t(`projects.category.${item.id}.subtitle`),
    icon: categoryMeta[item.id]?.icon
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-gray-900 to-black text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[140px]" />

      <motion.div
        className="max-w-6xl mx-auto mb-16 text-center relative"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{t("projects.page.title")}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("projects.page.description")}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {!activeCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 perspective-[1200px]">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative text-left bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-slate-950/40 border border-white/10 rounded-3xl p-8 shadow-xl transition duration-300 group transform-gpu overflow-hidden"
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-blue-400/35 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-emerald-400/25 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md group-hover:scale-105 transition">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                    <p className="text-xs text-blue-200/70 mt-1">
                      {PROJECTS[category.id]?.length || 0} {t("projects.countLabel")}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-6 relative z-10">{category.subtitle}</p>
                <div className="inline-flex items-center gap-2 text-sm text-blue-200/80 relative z-10">
                  {t("projects.viewDetail")}
                  <FaArrowRight className="text-blue-300/80" />
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {activeCategory && (
          <CategoryDetail
            category={categories.find((item) => item.id === activeCategory)}
            items={PROJECTS[activeCategory] || []}
            onBack={() => setActiveCategory(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
