
import React from 'react';

export const Impact: React.FC = () => {
  return (
    <section className="space-y-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Frase de Impacto Principal - Atualizada conforme pedido */}
        <div className="space-y-2 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h3 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            MEGA FUNK<br />
            <span className="text-red-600">DE QUALIDADE.</span><br />
            <span className="text-white">100% ORGANIZADO.</span><br />
            <span className="text-white">PRONTO PRO PLAY.</span>
          </h3>
          <div className="w-24 h-2 bg-green-500 mt-6"></div>
        </div>

        {/* Frase Complementar */}
        <div className="max-w-xs space-y-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <p className="text-2xl md:text-3xl font-bold uppercase italic text-zinc-400 leading-tight">
            Sem internet.<br />
            Sem bagunça.<br />
            <span className="text-white underline decoration-red-600 decoration-4 underline-offset-8">Só sucesso.</span>
          </p>
        </div>
      </div>

      {/* Destaque das 30 Mil Músicas - Mais agressivo e visual */}
      <div className="relative group reveal opacity-0 translate-y-10 transition-all duration-700">
        <div className="absolute inset-0 bg-red-600 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-12 md:p-20 flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          
          <span className="text-red-600 text-7xl md:text-[10rem] font-black italic leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            +30.000
          </span>
          <h4 className="text-3xl md:text-5xl font-black uppercase italic mt-4 tracking-tight">
            Músicas Selecionadas
          </h4>
          <p className="text-zinc-500 text-lg md:text-xl font-medium mt-4 max-w-md uppercase tracking-widest">
            O MAIOR E MELHOR ACERVO DE MEGA FUNK DO BRASIL EM UM SÓ LUGAR
          </p>
          
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
