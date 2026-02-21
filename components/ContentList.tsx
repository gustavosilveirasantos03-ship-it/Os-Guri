
import React from 'react';

const contents = [
  "MegaFunk Pesados",
  "MegaFunk Pancadão",
  "MegaFunk Mandelão",
  "Mega Funk Automotivo",
  "Mega Flashback",
  "Mega Sertanejo",
  "Os Melhores DJs",
  "Pastas organizadas"
];

export const ContentList: React.FC = () => {
  return (
    <section>
      <div className="mb-12 flex items-center gap-4 reveal opacity-0 translate-y-10 transition-all duration-700">
        <div className="h-px flex-1 bg-zinc-800"></div>
        <h3 className="text-2xl font-bold uppercase tracking-widest text-zinc-500">O QUE VOCÊ RECEBE</h3>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contents.map((item, index) => (
          <div 
            key={index}
            className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 reveal opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform"></div>
            <span className="text-xl md:text-2xl font-bold uppercase italic">{item}</span>
          </div>
        ))}
        
        {/* Destaque Final: E MUITO MAIS ! */}
        <div 
          className="group p-6 bg-red-600/10 border border-red-600/30 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 hover:border-red-600 hover:bg-red-600/20 reveal opacity-0 translate-y-10 transition-all duration-700 md:col-span-2"
          style={{ transitionDelay: `${contents.length * 50}ms` }}
        >
          <span className="text-2xl md:text-4xl font-black uppercase italic text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)] animate-pulse">
            E MUITO MAIS !
          </span>
        </div>
      </div>
    </section>
  );
};
