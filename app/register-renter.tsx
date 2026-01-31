import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RenterForm } from '../components/RegisterForms';
import { useApp } from '../context/AppContext';
import { Renter } from '../types';

export default function RegisterRenterScreen() {
    const { addRenter, isDarkMode } = useApp();
    const router = useRouter();

    const handleSubmit = (data: Omit<Renter, 'id' | 'imageUrl' | 'rating' | 'isVerified'>) => {
        const newRenter: Renter = {
            id: Date.now().toString(),
            ...data,
            isVerified: true,
            imageUrl: `https://picsum.photos/seed/${data.name}/150/150`,
            rating: 5.0
        };
        addRenter(newRenter);
        alert('加入成功');
        router.dismiss(); // Close modal
        router.replace('/(tabs)/walkers');
    };

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-warm-bg dark:bg-slate-900">
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <RenterForm onSubmit={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
}
