import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Pet } from '../types';
import { Button } from './ui/Button';

interface PetCardProps {
    pet: Pet;
    onBook: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onBook }) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    return (
        <View className={`rounded-[24px] overflow-hidden mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm`}>
            <View className="relative h-56 w-full">
                <Image
                    source={{ uri: pet.imageUrl }}
                    className="w-full h-full"
                    contentFit="cover"
                />
                <View className={`absolute top-4 right-4 px-4 py-1.5 rounded-full border border-white/20 ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/90'}`}>
                    <Text className={`text-sm font-bold ${isDarkMode ? 'text-orange-400' : 'text-primary'}`}>
                        {pet.breed}
                    </Text>
                </View>
            </View>

            <View className="p-6">
                <View className="flex-row justify-between items-start mb-2">
                    <Text className={`text-2xl font-black font-display ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                        {pet.name}
                    </Text>
                    <View className={`px-3 py-1 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-orange-100'}`}>
                        <Text className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-orange-600'}`}>
                            {pet.age} 歲
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center mb-4">
                    <FontAwesome name="map-marker" size={14} color="#F97316" className="mr-2" />
                    <Text className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                        {pet.location}
                    </Text>
                </View>

                <View className={`p-4 rounded-xl mb-6 ${isDarkMode ? 'bg-slate-700/50' : 'bg-orange-50/80 border border-orange-100'}`}>
                    <Text className={`text-xs font-bold mb-1 uppercase tracking-wide ${isDarkMode ? 'text-orange-300' : 'text-orange-400'}`}>
                        飲食注意事項
                    </Text>
                    <Text className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`} numberOfLines={2}>
                        {pet.dietaryNotes}
                    </Text>
                </View>

                <View className="flex-row justify-between items-center pt-2">
                    <View className="flex-row items-center">
                        <View className="w-8 h-8 rounded-full bg-orange-200 justify-center items-center mr-2">
                            <Text className="text-orange-700 font-bold text-xs">{pet.ownerName[0]}</Text>
                        </View>
                        <Text className={`text-sm font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                            {pet.ownerName}
                        </Text>
                    </View>

                    <Button
                        label="預約散步"
                        onPress={() => onBook(pet)}
                        variant="primary"
                    />
                </View>
            </View>
        </View>
    );
};

export default memo(PetCard);
