import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-bold text-xl mb-2">CODE CRAFTERS</h3>
            <p className="text-sm">Generamos Soluciones Eficientes para tu Negocio</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/company/yourcompany" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CODE CRAFTERS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};