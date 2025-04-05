import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  

  return (
    <div className="bg-gray-50 text-gray-900">
    <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    
    <main>
    <Section id="home" setActiveSection={setActiveSection}>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
    </Section>
    <Section id="about" setActiveSection={setActiveSection}>
      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      >
        <About />
      </motion.section>
    </Section>  
    <Section id="experience" setActiveSection={setActiveSection}>
      <motion.section
       
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <Experience />
      </motion.section>
      </Section>
      <Section id="projects" setActiveSection={setActiveSection}>
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      >
        <Projects />
      </motion.section>
      </Section>
      <Section id="contact" setActiveSection={setActiveSection}>
      <motion.section
       
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <Contact />
      </motion.section>
      </Section>
    </main>
    

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; Rehan Qureshi</p>
            <div className="flex space-x-6">
              <a href="https://github.com/Rehanqr7" className="hover:text-gray-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rehanqureshi-/" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rehanqr007@gmail.com" className="hover:text-gray-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;