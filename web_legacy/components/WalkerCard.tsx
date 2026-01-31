
import React from 'react';
import { Renter } from '../types';

interface WalkerCardProps {
  walker: Renter;
  onContact: (walker: Renter) => void;
  isDarkMode?: boolean;
}

const WalkerCard: React.FC<WalkerCardProps> = ({ walker, onContact, isDarkMode }) => {
  return (
    <div className={`rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-300 ${isDarkMode ? 'bg-slate-800 shadow-clay-dark' : 'bg-white shadow-clay'}`}>
      <div className="relative flex-shrink-0">
        <img src={walker.imageUrl} alt={walker.name} className={`w-24 h-24 rounded-full object-cover ring-4 ${isDarkMode ? 'ring-slate-700' : 'ring-orange-100'}`} loading="lazy" decoding="async" />
        {walker.isVerified && (
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm" title="通過實名驗證">
            <i className="fas fa-check text-sm"></i>
          </div>
        )}
      </div>
      <div className="flex-grow text-center sm:text-left w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
          <div>
            <h3 className={`text-xl font-black font-display flex items-center justify-center sm:justify-start ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
              {walker.name}
              <span className={`ml-3 px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wide ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-500'}`}>
                {walker.gender} / {walker.age}歲
              </span>
            </h3>
            <div className="flex items-center justify-center sm:justify-start text-yellow-400 text-sm mt-2">
              <i className="fas fa-star mr-1"></i>
              <span className="font-black text-lg mr-1">{walker.rating}</span>
              <span className={`font-medium ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>(12 則評價)</span>
            </div>
          </div>
          <button
            onClick={() => onContact(walker)}
            className={`mt-4 sm:mt-0 font-bold text-sm transition-all px-4 py-2 rounded-xl ${isDarkMode ? 'text-orange-400 hover:bg-slate-700' : 'text-primary hover:bg-orange-50'}`}
          >
            聯繫詳談 <i className="fas fa-chevron-right ml-1"></i>
          </button>
        </div>
        <p className={`text-base mt-2 line-clamp-2 leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500/90'}`}>
          {walker.bio}
        </p>
      </div>
    </div>
  );
};

export default React.memo(WalkerCard);
