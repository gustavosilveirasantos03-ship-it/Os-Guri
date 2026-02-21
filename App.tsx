
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { ContentList } from './components/ContentList';
import { TargetAudience } from './components/TargetAudience';
import { FAQ } from './components/FAQ';
import { FinalCall } from './components/FinalCall';

const App: React.FC = () => {
  // Simple scroll reveal simulation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Header / Brand */}
      <header className="pt-12 pb-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase reveal opacity-0 translate-y-10 transition-all duration-700">
          Os Guri <span className="text-red-600">Do Mega</span>
        </h1>
        <div className="w-12 h-1 bg-green-500 mt-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200"></div>
      </header>

      <main>
        <Hero />
        
        <div className="max-w-4xl mx-auto px-6 space-y-32 pb-32">
          <Impact />
          <ContentList />
          <TargetAudience />
          <FAQ />
          <FinalCall />
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Os Guri Do Mega. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
