import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChartLine, FaGithub, FaGlobe, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRobot, FaServer, FaYoutube } from "react-icons/fa";
import { FILTER_CONFIG, PROJECTS, PROJECT_CATEGORIES } from "../data/projects";

const applyFilters = (items, search, filters) => {
  const query = search.trim().toLowerCase();
  return items.filter((item) => {
    const searchable = [
      item.title,
      item.description,
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
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ type: "All" });
  const [gallery, setGallery] = useState(null);

  const filtered = useMemo(() => applyFilters(items, search, filters), [items, search, filters]);
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
        Kembali ke kategori
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">{category.icon}</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">{category.title}</h2>
          <p className="text-gray-300">{category.subtitle}</p>
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 mb-8 ${showFormatFilter ? "lg:grid-cols-4" : "lg:grid-cols-1"}`}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Keyword project..."
          className={`bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-blue-400 transition ${showFormatFilter ? "lg:col-span-3" : "lg:col-span-1"}`}
        />
        {showFormatFilter && (
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            aria-label="Filter format"
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
          Tidak ada project yang sesuai filter ini.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 perspective-[1200px]">
        {filtered.map((project, index) => (
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
                  aria-label={`Open screenshots for ${project.title}`}
                >
                  <img
                    src={project.images?.[0] || project.image}
                    alt={project.title}
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
                  Lihat gambar
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
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
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
                    Demo
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
                    YouTube
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
                    GitHub
                  </a>
                )}
                {project.images?.length > 0 && (
                  <button
                    type="button"
                    onClick={() => openGallery(project, 0)}
                    className="inline-flex flex-1 items-center justify-center gap-2 text-center bg-amber-500/80 hover:bg-amber-500 text-white text-sm py-2 rounded-full transition"
                  >
                    Lihat gambar
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {gallery && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6">
          <div className="relative w-full max-w-5xl bg-slate-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black border border-white/15"
              aria-label="Close gallery"
            >

              x
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr]">
              <div className="bg-black">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={`${gallery.project.title} screenshot ${gallery.index + 1}`}
                    className="w-full h-[55vh] lg:h-[70vh] object-contain bg-black"
                  />
                ) : (
                  <div className="w-full h-[55vh] lg:h-[70vh] bg-gradient-to-br from-slate-900 via-black to-slate-950 flex flex-col items-center justify-center text-center px-6">
                    {placeholderIcon(gallery.project.format)}
                    <h4 className="mt-4 text-xl font-semibold text-white">{gallery.project.title}</h4>
                    <p className="mt-2 text-sm text-gray-300 max-w-md">
                      Project ini tidak memiliki screenshot, jadi detail visualnya ditampilkan sebagai ikon dan informasi project.
                    </p>
                  </div>
                )}
              </div>

              <div className="p-5 lg:p-6 flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200/60">{gallery.project.period}</p>
                  <h3 className="text-2xl font-semibold mt-2">{gallery.project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{gallery.project.description}</p>
                </div>

                {gallery.project.images?.length > 0 && (
                  <>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>
                        Screenshot {gallery.index + 1} / {gallery.project.images.length}
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
                          Prev
                        </button>
                        <button
                          type="button"
                          onClick={() => setGallery((prev) => ({
                            ...prev,
                            index: (prev.index + 1) % prev.project.images.length
                          }))}
                          className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
                        >
                          Next
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
                      Demo
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
                      YouTube
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
                      GitHub
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
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = PROJECT_CATEGORIES.map((item) => ({
    ...item,
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Pilih kategori project terlebih dahulu, lalu cari project lewat keyword judul, stack, atau topik. Untuk Software dan UI/UX, kamu juga bisa filter Web atau Mobile.
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
                      {PROJECTS[category.id]?.length || 0} Projects
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-6 relative z-10">{category.subtitle}</p>
                <div className="inline-flex items-center gap-2 text-sm text-blue-200/80 relative z-10">
                  Lihat detail
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
