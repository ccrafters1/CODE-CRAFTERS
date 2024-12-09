import React from 'react';
import { FaLaptopCode, FaMobile, FaCloud } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías y mejores prácticas de desarrollo."
  },
  {
    icon: <FaMobile className="h-12 w-12 text-blue-500" />,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos aplicaciones nativas y multiplataforma que destacan en iOS y Android."
  },
  {
    icon: <FaCloud className="h-12 w-12 text-blue-500" />,
    title: "Soluciones Cloud",
    description: "Implementamos arquitecturas escalables y seguras en la nube para optimizar tu negocio."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};