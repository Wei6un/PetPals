import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Renter } from '../types';
import { Button } from './ui/Button';

interface WalkerCardProps {
    walker: Renter;
    onContact: (walker: Renter) => void;
}

const WalkerCard: React.FC<WalkerCardProps> = ({ walker, onContact }) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    return (
        <View className={`rounded-[24px] p-6 mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-sm`}>
            <View className="flex-row items-start space-x-4 mb-4">
                <View className="relative">
                    <Image
                        source={{ uri: walker.imageUrl }}
                        className={`w-24 h-24 rounded-full border-4 ${isDarkMode ? 'border-slate-700' : 'border-orange-100'}`}
                        contentFit="cover"
                    />
                    {walker.isVerified && (
                        <View className="absolute -bottom-1 -right-1 bg-blue-500 w-8 h-8 rounded-full justify-center items-center border-2 border-white">
                            <FontAwesome name="check" size={12} color="white" />
                        </View>
                    )}
                </View>

                <View className="flex-1 ml-4">
                    <View className="flex-row justify-between items-start">
                        <Text className={`text-xl font-black font-display mb-1 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                            {walker.name}
                        </Text>
                    </View>
                    <View className={`self-start px-3 py-1 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                        <Text className={`text-xs font-bold uppercase tracking-wide ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                            {walker.gender} / {walker.age}歲
                        </Text>
                    </View>

                    <View className="flex-row items-center mt-2">
                        <FontAwesome name="star" size={16} color="#FACC15" className="mr-1" />
                        <Text className="text-lg font-black mr-1 text-black dark:text-white">{walker.rating}</Text>
                        <Text className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                            (12 則評價)
                        </Text>
                    </View>
                </View>
            </View>

            <Text className={`text-base leading-relaxed font-medium mb-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500/90'}`} numberOfLines={2}>
                {walker.bio}
            </Text>

            <Button
                label="聯繫詳談"
                onPress={() => onContact(walker)}
                variant="subtle"
                icon="chevron-right"
                iconPosition="right"
                className="w-full"
            />
        </View>
    );
};

export default memo(WalkerCard);
