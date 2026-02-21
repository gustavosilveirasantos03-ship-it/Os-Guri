
import React from 'react';

const targets = [
  "Quem viaja",
  "Caminhoneiros",
  "DJs",
  "Donos de paredão",
  "Quem quer som pronto no pendrive"
];

export const TargetAudience: React.FC = () => {
  return (
    <section>
      <div className="mb-12 flex items-center gap-4 reveal opacity-0 translate-y-10 transition-all duration-700">
        <div className="h-px flex-1 bg-zinc-800"></div>
        <h3 className="text-2xl font-bold uppercase tracking-widest text-zinc-500">PARA QUEM É</h3>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {targets.map((target, index) => (
          <span 
            key={index}
            className="px-6 py-3 bg-white text-black font-black uppercase italic rounded-full text-lg md:text-xl reveal opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {target}
          </span>
        ))}
      </div>
    </section>
  );
};
