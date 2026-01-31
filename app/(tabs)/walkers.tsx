import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WalkerCard from '../../components/WalkerCard';
import { useApp } from '../../context/AppContext';
import { Renter } from '../../types';

export default function WalkersScreen() {
    const { renters, isDarkMode } = useApp();

    const handleContact = (walker: Renter) => {
        alert(`已建立與 ${walker.name} 的聯繫！`);
    };

    return (
        <SafeAreaView className="flex-1 bg-warm-bg dark:bg-slate-900 px-4">
            <Text className={`text-3xl font-black font-display text-center my-6 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                專業<Text className="text-secondary">陪伴者</Text>
            </Text>
            <FlatList
                data={renters}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <WalkerCard walker={item} onContact={handleContact} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
