
import React from 'react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  onBook: (pet: Pet) => void;
  isDarkMode?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onBook, isDarkMode }) => {
  return (
    <div className={`rounded-[1.5rem] overflow-hidden hover:scale-[1.02] transition-all duration-300 ${isDarkMode ? 'bg-slate-800 shadow-clay-dark' : 'bg-white shadow-clay'}`}>
      <div className="relative h-56 group">
        <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className={`absolute top-4 right-4 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-white/20 ${isDarkMode ? 'bg-slate-900/80 text-orange-400' : 'bg-white/90 text-primary'}`}>
          {pet.breed}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-2xl font-black font-display ${isDarkMode ? 'text-white' : 'text-text-main'}`}>{pet.name}</h3>
          <span className={`px-3 py-1 rounded-lg text-sm font-bold ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-orange-100 text-orange-600'}`}>{pet.age} 歲</span>
        </div>
        <div className={`flex items-center mb-4 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
          <i className="fas fa-location-dot mr-2 text-primary"></i>
          {pet.location}
        </div>
        <div className={`p-4 rounded-xl mb-6 transition-colors ${isDarkMode ? 'bg-slate-700/50' : 'bg-orange-50/80 border border-orange-100'}`}>
          <p className={`text-xs font-bold mb-1 uppercase tracking-wide ${isDarkMode ? 'text-orange-300' : 'text-orange-400'}`}>飲食注意事項</p>
          <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{pet.dietaryNotes}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs mr-2">
              {pet.ownerName[0]}
            </div>
            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{pet.ownerName}</span>
          </div>
          <button
            onClick={() => onBook(pet)}
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-clay hover:shadow-lg active:scale-95 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1"
          >
            預約散步
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
