
import React from 'react';
import { Renter } from '../types';

interface WalkerCardProps {
  walker: Renter;
  onContact: (walker: Renter) => void;
  isDarkMode?: boolean;
}

const WalkerCard: React.FC<WalkerCardProps> = ({ walker, onContact, isDarkMode }) => {
  return (
    <div className={`rounded-2xl shadow-md p-6 flex items-center space-x-6 border transition-all duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-700 shadow-slate-900/50' : 'bg-white border-gray-100 hover:border-orange-200'}`}>
      <div className="relative flex-shrink-0">
        <img src={walker.imageUrl} alt={walker.name} className={`w-20 h-20 rounded-full object-cover ring-4 ${isDarkMode ? 'ring-slate-700' : 'ring-orange-50'}`} />
        {walker.isVerified && (
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white" title="通過實名驗證">
            <i className="fas fa-check text-[10px]"></i>
          </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`text-lg font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {walker.name}
              <span className={`ml-2 px-2 py-0.5 text-[10px] rounded-full uppercase ${isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
                {walker.gender} / {walker.age}歲
              </span>
            </h3>
            <div className="flex items-center text-yellow-500 text-sm mt-1">
              <i className="fas fa-star mr-1"></i>
              <span className="font-bold">{walker.rating}</span>
              <span className={`ml-1 font-normal ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>(12 則評價)</span>
            </div>
          </div>
          <button 
            onClick={() => onContact(walker)}
            className="text-orange-500 hover:text-orange-700 font-semibold text-sm transition-colors"
          >
            聯繫詳談
          </button>
        </div>
        <p className={`text-sm mt-2 line-clamp-2 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          {walker.bio}
        </p>
      </div>
    </div>
  );
};

export default WalkerCard;
