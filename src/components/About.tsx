import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Sobre Nosotros</h2>
            <p className="text-gray-300 mb-4">
              En CODE CRAFTERS, somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales comprometidos con la excelencia técnica y la innovación.
            </p>
            <p className="text-gray-300 mb-4">
              Desde 2020, hemos estado ayudando a empresas de todos los tamaños a transformar sus ideas en soluciones digitales robustas y escalables.
            </p>
            <p className="text-gray-300">
              Nuestro enfoque combina tecnología de vanguardia con diseño centrado en el usuario para crear experiencias digitales excepcionales.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">100+</h3>
              <p className="text-white">Proyectos Completados</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">50+</h3>
              <p className="text-white">Clientes Satisfechos</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">15+</h3>
              <p className="text-white">Expertos en el Equipo</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">24/7</h3>
              <p className="text-white">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};