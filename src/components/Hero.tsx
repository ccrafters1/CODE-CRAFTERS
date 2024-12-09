import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(0,0,0,0)_100%)]" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            CODE CRAFTERS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            GENERAMOS SOLUCIONES EFICIENTES PARA TU NEGOCIO
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#services"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Nuestros Servicios
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-blue-600 text-blue-500 rounded-full hover:bg-blue-600/10 transition-colors duration-300"
            >
              Ver Proyectos
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8"
      >
        <FaChevronDown className="text-blue-500 h-6 w-6" />
      </motion.div>
    </section>
  );
};