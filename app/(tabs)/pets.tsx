import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PetCard from '../../components/PetCard';
import { useApp } from '../../context/AppContext';
import { Pet } from '../../types';

export default function PetsScreen() {
    const { pets, isDarkMode, addPet } = useApp();

    const handleBook = (pet: Pet) => {
        // In a real app this would open a booking modal
        alert(`預約 ${pet.name} 成功！`);
    };

    return (
        <SafeAreaView className="flex-1 bg-warm-bg dark:bg-slate-900 px-4">
            <Text className={`text-3xl font-black font-display text-center my-6 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                探索<Text className="text-primary">毛孩</Text>
            </Text>
            <FlatList
                data={pets}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PetCard pet={item} onBook={handleBook} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
