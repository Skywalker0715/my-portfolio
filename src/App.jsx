import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <main className="container mx-auto px-6 py-12 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto perspective-[1200px]">
                  {/* About Me */}
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
                        <h2 className="text-2xl font-semibold">About</h2>
                        <p className="text-xs text-blue-200/70 mt-1">Profile & Background</p>
                      </div>
                    </div>
                    <p className="text-gray-300">Kenali lebih jauh tentang keterampilan, pengalaman, dan fokus karier saya.</p>
                    </Link>
                  </section>

                  {/* Projects */}
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
                        <h2 className="text-2xl font-semibold">Projects</h2>
                        <p className="text-xs text-emerald-200/70 mt-1">Selected Works</p>
                      </div>
                    </div>
                    <p className="text-gray-300">Jelajahi portofolio project software, AI/ML, UI/UX, Web Design dan Data Analytics.</p>
                    </Link>
                  </section>

                  {/* Contact */}
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
                        <h2 className="text-2xl font-semibold">Contact</h2>
                        <p className="text-xs text-purple-200/70 mt-1">Let’s Connect</p>
                      </div>
                    </div>
                    <p className="text-gray-300">Mari berkolaborasi dan diskusikan peluang bersama.</p>
                    </Link>
                  </section>
                </div>
              </main>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
