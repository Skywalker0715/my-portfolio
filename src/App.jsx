import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
              <main className="container mx-auto px-6 py-8 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                  {/* About Me */}
                  <section id="about" className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.href = '/about'}>
                    <div className="flex justify-center mb-4">
                      <FontAwesomeIcon icon={faUser} className="h-12 w-12 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-semibold">About</h2>
                    <p className="text-gray-300 mt-5">Kenali lebih jauh tentang keterampilan dan pengalaman saya.</p>
                  </section>

                  {/* Projects */}
                  <section id="projects" className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.href = '/projects'}>
                    <div className="flex justify-center mb-4">
                      <FontAwesomeIcon icon={faProjectDiagram} className="h-12 w-12 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-semibold">Project</h2>
                    <p className="text-gray-300 mt-5">Jelajahi portofolio proyek yang telah saya selesaikan.</p>
                  </section>

                  {/* Contact */}
                  <section id="contact" className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.href = '/contact'}>
                    <div className="flex justify-center mb-4">
                      <FontAwesomeIcon icon={faEnvelope} className="h-12 w-12 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-semibold">Contact</h2>
                    <p className="text-gray-300 mt-5">Mari berkolaborasi dan diskusikan peluang bersama!</p>
                  </section>
                </div>
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
