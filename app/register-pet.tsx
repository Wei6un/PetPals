import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OwnerForm } from '../components/RegisterForms';
import { useApp } from '../context/AppContext';
import { Pet } from '../types';

export default function RegisterPetScreen() {
    const { addPet, isDarkMode } = useApp();
    const router = useRouter();

    const handleSubmit = (data: Omit<Pet, 'id' | 'imageUrl' | 'ownerName'>) => {
        const newPet: Pet = {
            id: Date.now().toString(),
            ...data,
            imageUrl: `https://picsum.photos/seed/${data.name}/400/300`,
            ownerName: '您自己'
        };
        addPet(newPet);
        alert('刊登成功');
        router.dismiss(); // Close modal
        router.replace('/(tabs)/pets');
    };

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-warm-bg dark:bg-slate-900">
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <OwnerForm onSubmit={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
}
