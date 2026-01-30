
import React, { useState, useEffect } from 'react';
import { ViewState, Pet, Renter } from './types.ts';
import { MOCK_PETS, MOCK_RENTERS } from './constants.tsx';
import Navbar from './components/Navbar.tsx';
import PetCard from './components/PetCard.tsx';
import WalkerCard from './components/WalkerCard.tsx';
import { OwnerForm, RenterForm } from './components/RegisterForms.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === null ? true : saved === 'dark';
    } catch (e) {
      // Fallback if localStorage is disabled/inaccessible
      return true;
    }
  });

  const [view, setView] = useState<ViewState>('HOME');
  const [pets, setPets] = useState<Pet[]>(MOCK_PETS);
  const [renters, setRenters] = useState<Renter[]>(MOCK_RENTERS);
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      // Support both "#pets" and "#/pets" formats
      const hash = window.location.hash.replace(/^#\/?/, '');
      const routes: Record<string, ViewState> = {
        'pets': 'PETS_LIST',
        'walkers': 'WALKERS_LIST',
        'register-pet': 'REGISTER_PET',
        'register-renter': 'REGISTER_RENTER'
      };
      setView(routes[hash] || 'HOME');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Call immediately to set initial state
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newVal = !prev;
      try {
        localStorage.setItem('theme', newVal ? 'dark' : 'light');
      } catch (e) {
        // Ignore write error if storage is full or disabled
        console.warn('Unable to save theme preference', e);
      }
      return newVal;
    });
  };

  const navigateTo = (newView: ViewState) => {
    const hashes: Record<ViewState, string> = {
      'PETS_LIST': '#pets',
      'WALKERS_LIST': '#walkers',
      'REGISTER_PET': '#register-pet',
      'REGISTER_RENTER': '#register-renter',
      'HOME': '#home'
    };
    window.location.hash = hashes[newView];
  };

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-warm-bg text-text-main'}`}>
      <Navbar currentView={view} onNavigate={navigateTo} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {notification && (
        <div className="fixed top-24 right-4 z-[100] px-6 py-3 rounded-2xl shadow-clay flex items-center space-x-3 font-bold backdrop-blur-md bg-white/80 text-text-main animate-bounce-in border-4 border-white/50">
          <div className={`w-3 h-3 rounded-full ${notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
          <span className="font-display">{notification.message}</span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'HOME' && (
          <div className="space-y-16">
            <section className={`relative rounded-[2.5rem] overflow-hidden p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between shadow-clay border-4 border-white/40 ${isDarkMode ? 'bg-slate-800' : 'bg-[#FFF7ED]'}`}>
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

              <div className="lg:max-w-xl space-y-8 z-10 text-center lg:text-left relative">
                <h1 className={`text-5xl lg:text-7xl font-black leading-tight tracking-tight font-display ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                  讓愛不再孤單，<br />
                  <span className="text-primary">為毛孩找個玩伴。</span>
                </h1>
                <p className={`text-xl leading-relaxed font-medium ${isDarkMode ? 'text-slate-300' : 'text-orange-900/70'}`}>
                  PetPals 是一個專為寵物愛好者打造的<span className="font-bold underline decoration-wavy decoration-orange-400">共享平台</span>。
                  我們連接忙碌的飼主與熱情的陪伴者。
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <button onClick={() => navigateTo('PETS_LIST')} className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-clay hover:scale-105 transition-all active:shadow-clay-inset active:scale-95 border-b-4 border-orange-700">
                    找個毛孩玩
                  </button>
                  <button onClick={() => navigateTo('REGISTER_PET')} className={`px-8 py-4 rounded-2xl font-bold text-xl transition-all border-2 border-transparent hover:border-primary/30 ${isDarkMode ? 'bg-slate-700 text-white shadow-clay-dark' : 'bg-white text-text-main shadow-clay hover:shadow-lg'}`}>
                    刊登毛孩委託
                  </button>
                </div>
              </div>
              <div className="relative mt-12 lg:mt-0 z-10 hover:rotate-2 transition-transform duration-500 cursor-pointer">
                <img src="https://picsum.photos/seed/happy-dog/600/400" className="rounded-[2.5rem] shadow-clay border-8 border-white w-full max-w-md h-auto object-cover" alt="Happy Dog" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-clay flex items-center gap-3 animate-bounce">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Trusted</p>
                    <p className="text-sm font-bold text-gray-800">實名認證平台</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === 'PETS_LIST' && (
          <div className="space-y-8">
            <h2 className={`text-4xl font-black font-display text-center mb-12 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
              探索<span className="text-primary">毛孩</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pets.map(pet => <PetCard key={pet.id} pet={pet} onBook={() => showNotification(`預約 ${pet.name} 成功！`)} isDarkMode={isDarkMode} />)}
            </div>
          </div>
        )}

        {view === 'WALKERS_LIST' && (
          <div className="space-y-8">
            <h2 className={`text-4xl font-black font-display text-center mb-12 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
              專業<span className="text-secondary">陪伴者</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {renters.map(walker => <WalkerCard key={walker.id} walker={walker} onContact={() => showNotification('聯繫成功', 'info')} isDarkMode={isDarkMode} />)}
            </div>
          </div>
        )}

        {(view === 'REGISTER_PET' || view === 'REGISTER_RENTER') && (
          <div className="pt-4">
            {view === 'REGISTER_PET' ?
              <OwnerForm onSubmit={(data) => {
                const newPet = { id: Date.now().toString(), ...data, imageUrl: `https://picsum.photos/seed/${data.name}/400/300`, ownerName: '您自己' };
                setPets([newPet, ...pets]);
                showNotification('刊登成功');
                navigateTo('PETS_LIST');
              }} isDarkMode={isDarkMode} /> :
              <RenterForm onSubmit={(data) => {
                const newRenter = { id: Date.now().toString(), ...data, isVerified: true, imageUrl: `https://picsum.photos/seed/${data.name}/150/150`, rating: 5.0 };
                setRenters([newRenter, ...renters]);
                showNotification('加入成功');
                navigateTo('WALKERS_LIST');
              }} isDarkMode={isDarkMode} />
            }
          </div>
        )}
      </main>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </div>
  );
};

export default App;
