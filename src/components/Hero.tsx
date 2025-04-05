import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { motion } from 'framer-motion';

import profilePic from '/assets/profile_pic.jpg';




export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center bg-gradient-to-b from-black to-blue-900">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <OrbitControls enableZoom={false} />
          <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center flex flex-col items-center"
>
  <img
    src={profilePic}
    alt="Rehan Qureshi"
    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-lg"
  />
  <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
    Hi, I'm <span className="text-blue-400">Rehan Qureshi</span>
  </h1>
  <p className="text-xl sm:text-2xl text-gray-300 mb-8">
    Senior Software Engineer | Go Developer | Cloud Architecture Enthusiast
  </p>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="flex flex-wrap justify-center space-x-4"
  >
    <a
      href="#contact"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors border border-blue-400"
    >
      Get in Touch
    </a>
    <a
      href="#projects"
      className="bg-transparent text-white px-6 py-3 rounded-lg hover:bg-blue-800/30 transition-colors border border-blue-400"
    >
      View Projects
    </a>
    <a
      href="assets/My_Resume.docx"
      download
      className="bg-transparent text-white px-6 py-3 rounded-lg hover:bg-blue-800/30 transition-colors border border-blue-400"
    >
      Download CV
    </a>
  </motion.div>
</motion.div>

      </div>
    </div>
  );
}