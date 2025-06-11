// src/components/sections/Services.jsx
import React from 'react';
import { services } from '../../data/services';
import { ServiceCard } from '../ui/Card';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          I offer a comprehensive range of development services to help bring your ideas to life
        </p>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              className="h-full"
            />
          ))}
        </div>
        
        {/* Process section */}
        <div className="mt-20 pt-16 border-t border-slate-700/50">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and goals'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating a detailed project roadmap'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with best practices'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Testing, deployment, and ongoing support'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;