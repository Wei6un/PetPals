
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

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newVal = !prev;
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
      return newVal;
    });
  };

  const getViewStateFromHash = (): ViewState => {
    const hash = window.location.hash.replace('#', '');
    switch (hash) {
      case 'pets': return 'PETS_LIST';
      case 'walkers': return 'WALKERS_LIST';
      case 'register-pet': return 'REGISTER_PET';
      case 'register-renter': return 'REGISTER_RENTER';
      default: return 'HOME';
    }
  };

  const getHashFromViewState = (view: ViewState): string => {
    switch (view) {
      case 'PETS_LIST': return '#pets';
      case 'WALKERS_LIST': return '#walkers';
      case 'REGISTER_PET': return '#register-pet';
      case 'REGISTER_RENTER': return '#register-renter';
      default: return '#home';
    }
  };

  const [view, setView] = useState<ViewState>(getViewStateFromHash());
  const [pets, setPets] = useState<Pet[]>(MOCK_PETS);
  const [renters, setRenters] = useState<Renter[]>(MOCK_RENTERS);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info'} | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setView(getViewStateFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newView: ViewState) => {
    window.location.hash = getHashFromViewState(newView);
    setView(newView);
  };

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleBooking = (pet: Pet) => {
    showNotification(`已送出與 ${pet.name} 的預約申請！`);
  };

  const handleContact = (walker: Renter) => {
    showNotification(`正在與 ${walker.name} 建立通訊...`, 'info');
  };

  const handleOwnerSubmit = (data: any) => {
    const newPet: Pet = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      breed: data.breed,
      age: parseInt(data.age),
      dietaryNotes: data.dietaryNotes,
      location: data.location,
      imageUrl: `https://picsum.photos/seed/${data.name}/400/300`,
      ownerName: '您自己'
    };
    setPets([newPet, ...pets]);
    showNotification('寵物刊登成功！');
    navigateTo('PETS_LIST');
  };

  const handleRenterSubmit = (data: any) => {
    const newRenter: Renter = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      gender: data.gender,
      age: parseInt(data.age),
      isVerified: true,
      bio: data.bio,
      imageUrl: `https://picsum.photos/seed/${data.name}/150/150`,
      rating: 5.0
    };
    setRenters([newRenter, ...renters]);
    showNotification('身分驗證成功，您已成為陪伴者！');
    navigateTo('WALKERS_LIST');
  };

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar currentView={view} onNavigate={navigateTo} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {notification && (
        <div className={`fixed top-24 right-4 z-[100] animate-bounce-in px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-white font-bold backdrop-blur-md ring-1 ring-white/20 transition-all ${isDarkMode ? 'bg-slate-800' : 'bg-gray-900'}`}>
          <div className={`w-2 h-2 rounded-full ${notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
          <span>{notification.message}</span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {view === 'HOME' && (
          <div className="space-y-16">
            <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 text-white p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-orange-500/10">
              <div className="lg:max-w-xl space-y-6 relative z-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight drop-shadow-md">
                  讓愛不再孤單，<br />為毛孩找個玩伴。
                </h1>
                <p className="text-lg opacity-90 leading-relaxed font-medium">
                  PetPals 是一個專為寵物愛好者打造的共享平台。無論是沒時間散步的飼主，還是渴望與毛孩互動的愛心人士，都能在這裡找到最溫慢的連結。
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => navigateTo('PETS_LIST')}
                    className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-50 transition-all active:scale-95"
                  >
                    找個毛孩玩
                  </button>
                  <button 
                    onClick={() => navigateTo('REGISTER_PET')}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
                  >
                    我有毛孩想委託
                  </button>
                </div>
              </div>
              <div className="hidden lg:block absolute right-[-5%] bottom-[-10%] opacity-10 pointer-events-none">
                <i className="fas fa-paw text-[30rem] rotate-12"></i>
              </div>
              <div className="mt-12 lg:mt-0 relative z-10 w-full max-w-md lg:max-w-none">
                 <img src="https://picsum.photos/seed/happy-dog/600/400" className="rounded-[2.5rem] shadow-2xl border-8 border-white/20 transform lg:rotate-3 w-full h-auto object-cover" alt="Happy Dog" />
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: 'fa-search', color: 'orange', title: '搜尋地點', desc: '輸入地區，輕鬆找到附近的寵物或專業陪伴人選。' },
                 { icon: 'fa-id-card', color: 'blue', title: '身分驗證', desc: '所有陪伴者皆經過實名驗證，確保毛孩安全無虞。' },
                 { icon: 'fa-calendar-alt', color: 'green', title: '彈性預約', desc: '無論是一次性散步還是長期陪伴，都能彈性規劃。' }
               ].map((item, idx) => (
                 <div key={idx} className={`p-8 rounded-[2rem] shadow-sm border transition-all hover:shadow-lg ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${isDarkMode ? `bg-orange-900/20 text-orange-400` : `bg-orange-100 text-orange-600`}`}>
                      <i className={`fas ${item.icon} fa-2x`}></i>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                    <p className={`text-center leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.desc}</p>
                 </div>
               ))}
            </section>
          </div>
        )}

        {view === 'PETS_LIST' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>探索毛孩</h2>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>在您附近尋找需要散步或玩耍的可愛寵物</p>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜尋地區或品種..." 
                  className={`pl-12 pr-4 py-3 rounded-2xl border outline-none w-full md:w-80 shadow-sm transition-all focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-gray-200 text-gray-900'}`}
                />
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} onBook={handleBooking} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        )}

        {view === 'WALKERS_LIST' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>專業陪伴者</h2>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>這些陪伴者都通過驗證，期待能帶您的寵物出去走走</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renters.map(walker => (
                <WalkerCard key={walker.id} walker={walker} onContact={handleContact} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        )}

        {view === 'REGISTER_PET' && (
          <div className="pt-4 animate-scale-in">
             <OwnerForm onSubmit={handleOwnerSubmit} isDarkMode={isDarkMode} />
             <div className="mt-8 text-center">
                <button onClick={() => navigateTo('HOME')} className="text-gray-500 hover:text-orange-500 text-sm font-medium transition-colors">
                  <i className="fas fa-arrow-left mr-2"></i> 返回首頁
                </button>
             </div>
          </div>
        )}

        {view === 'REGISTER_RENTER' && (
          <div className="pt-4 animate-scale-in">
             <RenterForm onSubmit={handleRenterSubmit} isDarkMode={isDarkMode} />
             <div className="mt-8 text-center">
                <button onClick={() => navigateTo('HOME')} className="text-gray-500 hover:text-blue-500 text-sm font-medium transition-colors">
                  <i className="fas fa-arrow-left mr-2"></i> 返回首頁
                </button>
             </div>
          </div>
        )}

      </main>

      {/* Mobile Footer Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 backdrop-blur-md border-t flex justify-around py-3 px-2 md:hidden z-50 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/80 border-gray-100'}`}>
          {[
            { id: 'HOME', icon: 'fa-home', label: '首頁' },
            { id: 'PETS_LIST', icon: 'fa-dog', label: '找寵物' },
            { id: 'WALKERS_LIST', icon: 'fa-user-friends', label: '找陪伴' },
            { id: 'REGISTER_PET', icon: 'fa-plus-circle', label: '刊登' }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => navigateTo(item.id as ViewState)} 
              className={`flex flex-col items-center space-y-1 transition-all ${view === item.id ? 'text-orange-500 scale-110' : (isDarkMode ? 'text-slate-500' : 'text-gray-400')}`}
            >
              <i className={`fas ${item.icon} text-xl`}></i>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .text-orange-400 { color: #fb923c; }
      `}</style>
    </div>
  );
};

export default App;
