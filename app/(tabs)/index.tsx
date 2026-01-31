import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../../context/AppContext';

export default function HomeScreen() {
  const { isDarkMode, toggleDarkMode } = useApp();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-warm-bg dark:bg-slate-900">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row justify-between items-center px-6 py-4">
          <View className="flex-row items-center">
            <FontAwesome name="paw" size={24} color="#F97316" />
            <Text className="text-2xl font-black font-display text-text-main dark:text-white ml-2">
              PetPals
            </Text>
          </View>
          <Pressable onPress={toggleDarkMode} className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
            <FontAwesome name={isDarkMode ? 'sun-o' : 'moon-o'} size={20} color={isDarkMode ? '#FDB813' : '#475569'} />
          </Pressable>
        </View>

        <View className="px-4 mt-4">
          <View className={`rounded-[40px] overflow-hidden p-8 ${isDarkMode ? 'bg-slate-800' : 'bg-[#FFF7ED]'} border-4 border-white/40 relative`}>
            {/* Decorative Circles roughly approximated */}
            <View className="absolute top-0 left-0 w-64 h-64 bg-orange-300 rounded-full opacity-20 -translate-x-20 -translate-y-20" />
            <View className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 translate-x-20 -translate-y-20" />

            <View className="z-10 items-center lg:items-start">
              <Text className={`text-5xl font-black leading-tight font-display text-center lg:text-left mb-6 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                讓愛不再孤單，{"\n"}
                <Text className="text-primary">為毛孩找個玩伴。</Text>
              </Text>

              <Text className={`text-lg leading-relaxed font-medium text-center lg:text-left mb-8 ${isDarkMode ? 'text-slate-300' : 'text-orange-900/70'}`}>
                PetPals 是一個專為寵物愛好者打造的共享平台。我們連接忙碌的飼主與熱情的陪伴者。
              </Text>

              <View className="flex-row flex-wrap justify-center gap-4 w-full">
                <Pressable
                  onPress={() => router.push('/(tabs)/pets')}
                  className="bg-primary px-8 py-4 rounded-2xl shadow-lg active:scale-95 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 mb-4 w-full sm:w-auto items-center"
                >
                  <Text className="text-white font-bold text-xl">找個毛孩玩</Text>
                </Pressable>

                <Pressable
                  onPress={() => router.push('/register-pet')}
                  className={`px-8 py-4 rounded-2xl w-full sm:w-auto items-center border-2 border-transparent ${isDarkMode ? 'bg-slate-700 shadow-md' : 'bg-white shadow-md'}`}
                >
                  <Text className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-text-main'}`}>刊登毛孩委託</Text>
                </Pressable>
              </View>
            </View>

            <View className="mt-12 items-center">
              <Image
                source={{ uri: "https://picsum.photos/seed/happy-dog/600/400" }}
                className="w-full h-64 rounded-[40px] border-8 border-white"
                contentFit="cover"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
