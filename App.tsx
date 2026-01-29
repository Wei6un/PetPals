
import React, { useState, useEffect } from 'react';
import { ViewState, Pet, Renter } from './types.ts';
import { MOCK_PETS, MOCK_RENTERS } from './constants.tsx';
import Navbar from './components/Navbar.tsx';
import PetCard from './components/PetCard.tsx';
import WalkerCard from './components/WalkerCard.tsx';
import { OwnerForm, RenterForm } from './components/RegisterForms.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === null ? true : saved === 'dark';
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
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
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
    <div className={`min-h-screen pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar currentView={view} onNavigate={navigateTo} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {notification && (
        <div className="fixed top-24 right-4 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-white font-bold backdrop-blur-md ring-1 ring-white/20 bg-slate-800 animate-bounce-in">
          <div className={`w-2 h-2 rounded-full ${notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
          <span>{notification.message}</span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'HOME' && (
          <div className="space-y-16">
            <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 text-white p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between shadow-2xl">
              <div className="lg:max-w-xl space-y-6 z-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">讓愛不再孤單，<br />為毛孩找個玩伴。</h1>
                <p className="text-lg opacity-90 leading-relaxed">PetPals 是一個專為寵物愛好者打造的共享平台。</p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <button onClick={() => navigateTo('PETS_LIST')} className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">找個毛孩玩</button>
                  <button onClick={() => navigateTo('REGISTER_PET')} className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">刊登毛孩委託</button>
                </div>
              </div>
              <img src="https://picsum.photos/seed/happy-dog/600/400" className="mt-12 lg:mt-0 rounded-[2.5rem] shadow-2xl border-8 border-white/20 transform lg:rotate-3 w-full max-w-md h-auto object-cover" alt="Happy Dog" />
            </section>
          </div>
        )}

        {view === 'PETS_LIST' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black">探索毛孩</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pets.map(pet => <PetCard key={pet.id} pet={pet} onBook={() => showNotification(`預約 ${pet.name} 成功！`)} isDarkMode={isDarkMode} />)}
            </div>
          </div>
        )}

        {view === 'WALKERS_LIST' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black">專業陪伴者</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
