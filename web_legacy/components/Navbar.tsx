
import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-800/90 shadow-clay-dark backdrop-blur-md' : 'bg-white/90 shadow-clay backdrop-blur-md border border-white/50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('HOME')}>
            <span className="text-primary text-3xl mr-3 group-hover:scale-110 transition-transform">
              <i className="fas fa-paw"></i>
            </span>
            <span className={`font-display font-black text-2xl tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-text-main group-hover:text-primary'}`}>PetPals</span>
          </div>

          <div className="hidden md:flex space-x-4 bg-gray-100/50 p-2 rounded-2xl">
            {['PETS_LIST', 'WALKERS_LIST'].map((viewName) => (
              <button
                key={viewName}
                onClick={() => onNavigate(viewName as ViewState)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${currentView === viewName
                  ? 'bg-white shadow-sm text-primary scale-105'
                  : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-primary')
                  }`}
              >
                {viewName === 'PETS_LIST' ? '找寵物玩' : '找陪伴者'}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-slate-700 text-yellow-400 shadow-inner' : 'bg-orange-50 text-orange-500 hover:bg-orange-100 shadow-clay-sm'}`}
              aria-label="切換主題"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
            </button>

            <button
              onClick={() => onNavigate('REGISTER_PET')}
              className={`hidden sm:inline-block px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-orange-900/60 hover:text-orange-800 hover:bg-orange-50'}`}
            >
              我是飼主
            </button>
            <button
              onClick={() => onNavigate('REGISTER_RENTER')}
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-clay hover:scale-105 active:scale-95 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1"
            >
              我要陪伴
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
