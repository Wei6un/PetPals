
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
    <nav className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-b border-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('HOME')}>
            <span className="text-orange-500 text-3xl mr-2">
              <i className="fas fa-paw"></i>
            </span>
            <span className={`font-bold text-xl tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>PetPals</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('PETS_LIST')}
              className={`${currentView === 'PETS_LIST' ? 'text-orange-600 border-b-2 border-orange-600' : (isDarkMode ? 'text-slate-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500')} px-1 py-2 text-sm font-medium transition-all`}
            >
              找寵物玩
            </button>
            <button 
              onClick={() => onNavigate('WALKERS_LIST')}
              className={`${currentView === 'WALKERS_LIST' ? 'text-orange-600 border-b-2 border-orange-600' : (isDarkMode ? 'text-slate-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500')} px-1 py-2 text-sm font-medium transition-all`}
            >
              找陪伴者
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'}`}
              aria-label="切換主題"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
            </button>

            <button 
              onClick={() => onNavigate('REGISTER_PET')}
              className={`hidden sm:inline-block border px-4 py-2 rounded-full text-sm font-semibold transition-all ${isDarkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-orange-500 text-orange-500 hover:bg-orange-50'}`}
            >
              我是飼主
            </button>
            <button 
              onClick={() => onNavigate('REGISTER_RENTER')}
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md active:scale-95"
            >
              我要陪伴
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
