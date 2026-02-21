
import React from 'react';

export const Hero: React.FC = () => {
  const checkoutUrl = "https://pay.cakto.com.br/3ajh5d3_772288";

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 overflow-hidden">
      {/* Luzes de fundo para profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent -z-10"></div>
      
      {/* Badge Superior */}
      <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 border border-red-600/50 rounded-full bg-red-600/10 reveal opacity-0 translate-y-10 transition-all duration-700">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-red-500 font-black tracking-widest italic text-[10px] md:text-sm uppercase">PACK ATUALIZADO 2026</span>
      </div>

      {/* Identificação do Produto */}
      <h2 className="text-xs md:text-2xl font-bold tracking-[0.3em] text-zinc-500 uppercase mb-6 reveal opacity-0 translate-y-10 transition-all duration-700">
        PACK MEGA FUNK - OS GURI DO MEGA
      </h2>
      
      {/* Headline de Alto Impacto */}
      <div className="mb-12 max-w-5xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
        <p className="text-[3.2rem] sm:text-6xl md:text-[5.5rem] font-black leading-[0.85] tracking-tighter italic uppercase text-white">
          O PACK <br className="md:hidden" /> DEFINITIVO <br />
          PARA <br className="md:hidden" /> ESTRADA E <br />
          <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            PAREDÃO.
          </span>
        </p>
      </div>

      {/* Call to Action Central - Ajustado para tamanho equilibrado */}
      <div className="flex flex-col items-center gap-8 w-full px-4 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-10 md:px-16 py-5 md:py-6 bg-red-600 rounded-full font-heading text-lg md:text-2xl tracking-widest text-white transition-all duration-300 red-glow hover:scale-105 active:scale-95 shadow-2xl shadow-red-900/20 text-center uppercase italic"
        >
          QUERO ACESSAR AGORA
        </a>
        
        {/* Benefícios Rápidos */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-zinc-500 font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase">
          <span className="flex items-center gap-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ACESSO IMEDIATO
          </span>
          <div className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
          <span className="flex items-center gap-2">
            <span className="text-red-600">+30 MIL</span> MÚSICAS
          </span>
          <div className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
          <span>QUALIDADE PREMIUM</span>
        </div>
      </div>
      
      {/* Detalhe de luz inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-red-600/5 blur-[80px] rounded-full -z-10"></div>
    </section>
  );
};
