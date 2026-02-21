
import React, { useState } from 'react';

const faqItems = [
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento. Você recebe um link exclusivo para download."
  },
  {
    question: "As músicas são de alta qualidade?",
    answer: "Com certeza. Todas as +30.000 músicas foram selecionadas em alta qualidade (320kbps) para garantir o melhor som no seu paredão ou carro."
  },
  {
    question: "Posso colocar no Pendrive?",
    answer: "Sim, o pack é totalmente organizado em pastas por categorias. É só baixar, copiar para o pendrive e dar o play."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Totalmente seguro. Utilizamos as maiores e mais seguras plataformas de pagamento do Brasil, com criptografia de ponta a ponta."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mb-12 flex items-center gap-4 reveal opacity-0 translate-y-10 transition-all duration-700">
        <div className="h-px flex-1 bg-zinc-800"></div>
        <h3 className="text-2xl font-bold uppercase tracking-widest text-zinc-500 text-center">PERGUNTAS FREQUENTES</h3>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div className="space-y-4 reveal opacity-0 translate-y-10 transition-all duration-700">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border border-zinc-800 bg-zinc-900/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-6 flex items-center justify-between text-left group"
            >
              <span className="text-lg md:text-xl font-bold uppercase italic tracking-tight text-white">
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 border-red-600 bg-red-600/10' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={openIndex === index ? "#dc2626" : "currentColor"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            
            <div 
              className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-green-500 pl-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
