
import React from 'react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  onBook: (pet: Pet) => void;
  isDarkMode?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onBook, isDarkMode }) => {
  return (
    <div className={`rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white shadow-slate-900/50' : 'bg-white border-gray-100 text-gray-900'}`}>
      <div className="relative h-48">
        <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover" />
        <div className={`absolute top-3 right-3 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm ${isDarkMode ? 'bg-slate-900/80 text-orange-400' : 'bg-white/90 text-orange-600'}`}>
          {pet.breed}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{pet.name}</h3>
          <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{pet.age} 歲</span>
        </div>
        <div className={`flex items-center mb-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          <i className="fas fa-location-dot mr-2 text-orange-400"></i>
          {pet.location}
        </div>
        <div className={`p-3 rounded-lg mb-4 transition-colors ${isDarkMode ? 'bg-slate-700/50' : 'bg-orange-50'}`}>
          <p className={`text-xs font-semibold mb-1 ${isDarkMode ? 'text-orange-300' : 'text-orange-800'}`}>飲食注意事項：</p>
          <p className={`text-xs line-clamp-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{pet.dietaryNotes}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>飼主：{pet.ownerName}</span>
          <button 
            onClick={() => onBook(pet)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-sm active:scale-95"
          >
            預約散步
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
