
import React from 'react';

export const FinalCall: React.FC = () => {
  const checkoutUrl = "https://pay.cakto.com.br/3ajh5d3_772288";

  return (
    <section id="final-cta" className="relative p-6 md:p-16 bg-gradient-to-b from-zinc-900 to-black rounded-[2rem] md:rounded-[2.5rem] border border-zinc-800 overflow-hidden text-center reveal opacity-0 translate-y-10 transition-all duration-700">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-10">
        <div className="space-y-3">
          <p className="text-green-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">PRODUTO 100% DIGITAL</p>
          <h3 className="text-2xl md:text-5xl font-black uppercase text-white leading-tight max-w-sm md:max-w-none mx-auto">
            Acesso imediato <br className="hidden md:block" /> após o pagamento
          </h3>
        </div>

        <div className="w-full flex justify-center py-2 md:py-4">
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 md:px-14 py-5 md:py-6 bg-red-600 rounded-full font-heading text-lg md:text-2xl tracking-widest text-white transition-all duration-300 red-glow hover:scale-105 active:scale-95 shadow-2xl shadow-red-900/20 text-center uppercase italic"
          >
            GARANTIR MEU PACK AGORA
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>Compra 100% Segura</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full"></div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            <span>Entrega via E-mail</span>
          </div>
        </div>
      </div>
    </section>
  );
};
