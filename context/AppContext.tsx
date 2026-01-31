import { useColorScheme } from 'nativewind';
import React, { createContext, useContext, useState } from 'react';
import { MOCK_PETS, MOCK_RENTERS } from '../constants/data';
import { Pet, Renter } from '../types';

interface AppContextType {
    pets: Pet[];
    renters: Renter[];
    addPet: (pet: Pet) => void;
    addRenter: (renter: Renter) => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pets, setPets] = useState<Pet[]>(MOCK_PETS);
    const [renters, setRenters] = useState<Renter[]>(MOCK_RENTERS);
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const addPet = (pet: Pet) => {
        setPets(prev => [pet, ...prev]);
    };

    const addRenter = (renter: Renter) => {
        setRenters(prev => [renter, ...prev]);
    };

    return (
        <AppContext.Provider value={{
            pets,
            renters,
            addPet,
            addRenter,
            isDarkMode: colorScheme === 'dark',
            toggleDarkMode: toggleColorScheme
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within an AppProvider');
    return context;
};
