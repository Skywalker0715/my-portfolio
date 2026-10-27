import React, { Suspense } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { useLanguage } from "./context/LanguageContext";
import "./App.css";

const AboutPage = React.lazy(() => import("./pages/AboutPage"));

function App() {
  const { t } = useLanguage();

  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <main className="container mx-auto px-6 py-12 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto perspective-[1200px]">
                    <section
                      id="about"
                      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-7 rounded-3xl shadow-xl text-left cursor-pointer transform-gpu transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01]"
                    >
                      <Link to="/about" className="block h-full">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                            <FontAwesomeIcon icon={faUser} className="h-7 w-7 text-blue-300" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">{t("home.about.title")}</h2>
                            <p className="text-xs text-blue-200/70 mt-1">{t("home.about.subtitle")}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{t("home.about.description")}</p>
                      </Link>
                    </section>

                    <section
                      id="projects"
                      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-7 rounded-3xl shadow-xl text-left cursor-pointer transform-gpu transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01]"
                    >
                      <Link to="/projects" className="block h-full">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                            <FontAwesomeIcon icon={faProjectDiagram} className="h-7 w-7 text-emerald-300" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">{t("home.projects.title")}</h2>
                            <p className="text-xs text-emerald-200/70 mt-1">{t("home.projects.subtitle")}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{t("home.projects.description")}</p>
                      </Link>
                    </section>

                    <section
                      id="contact"
                      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 p-7 rounded-3xl shadow-xl text-left cursor-pointer transform-gpu transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01]"
                    >
                      <Link to="/contact" className="block h-full">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                            <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7 text-purple-300" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">{t("home.contact.title")}</h2>
                            <p className="text-xs text-purple-200/70 mt-1">{t("home.contact.subtitle")}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{t("home.contact.description")}</p>
                      </Link>
                    </section>
                  </div>
                </main>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Memuat halaman About…</div>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
