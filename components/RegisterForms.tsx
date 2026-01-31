import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Button } from './ui/Button';

interface OwnerFormProps {
    onSubmit: (data: any) => void;
}

export const OwnerForm: React.FC<OwnerFormProps> = ({ onSubmit }) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        age: '',
        dietaryNotes: '',
        location: '',
    });

    const inputClass = `w-full px-5 py-4 rounded-2xl font-medium mb-4 border-2 border-transparent ${isDarkMode ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-gray-50 text-gray-900 placeholder-gray-400'}`;
    const labelClass = `text-sm font-bold mb-2 ml-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`;

    return (
        <View className={`rounded-[32px] p-6 mb-6 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <View className="items-center mb-8">
                <View className={`w-20 h-20 rounded-full mb-4 justify-center items-center ${isDarkMode ? 'bg-orange-900/40' : 'bg-orange-50'}`}>
                    <FontAwesome name="paw" size={32} color={isDarkMode ? '#FB923C' : '#F97316'} />
                </View>
                <Text className={`text-2xl font-black font-display mb-2 text-center ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                    刊登您的寶貝資訊
                </Text>
                <Text className={`text-base font-medium text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    填寫詳細資料，為您的寵物找到最合適的玩伴
                </Text>
            </View>

            <View className="space-y-4">
                <View>
                    <Text className={labelClass}>寵物姓名</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="例如：麻糬"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.name}
                        onChangeText={t => setFormData({ ...formData, name: t })}
                    />
                </View>
                <View>
                    <Text className={labelClass}>品種</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="例如：柴犬"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.breed}
                        onChangeText={t => setFormData({ ...formData, breed: t })}
                    />
                </View>
                <View>
                    <Text className={labelClass}>年紀 (歲)</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="數字"
                        keyboardType="numeric"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.age}
                        onChangeText={t => setFormData({ ...formData, age: t })}
                    />
                </View>
                <View>
                    <Text className={labelClass}>所在地區</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="例如：台北市大安區"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.location}
                        onChangeText={t => setFormData({ ...formData, location: t })}
                    />
                </View>
                <View>
                    <Text className={labelClass}>飲食注意事項</Text>
                    <TextInput
                        className={`${inputClass} h-32`}
                        multiline
                        textAlignVertical="top"
                        placeholder="例如：對什麼過敏、固定餵食量等..."
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.dietaryNotes}
                        onChangeText={t => setFormData({ ...formData, dietaryNotes: t })}
                    />
                </View>

                <Button
                    label="刊登寵物"
                    onPress={() => onSubmit(formData)}
                    variant="primary"
                    size="lg"
                    className="mt-4"
                />
            </View>
        </View>
    );
};

export const RenterForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const [formData, setFormData] = useState({
        name: '',
        gender: '女',
        age: '',
        bio: '',
    });

    const inputClass = `w-full px-5 py-4 rounded-2xl font-medium mb-4 border-2 border-transparent ${isDarkMode ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-gray-50 text-gray-900 placeholder-gray-400'}`;
    const labelClass = `text-sm font-bold mb-2 ml-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`;

    return (
        <View className={`rounded-[32px] p-6 mb-6 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <View className="items-center mb-8">
                <View className={`w-20 h-20 rounded-full mb-4 justify-center items-center ${isDarkMode ? 'bg-blue-900/40' : 'bg-blue-50'}`}>
                    <FontAwesome name="user" size={32} color={isDarkMode ? '#60A5FA' : '#2563EB'} />
                </View>
                <Text className={`text-2xl font-black font-display mb-2 text-center ${isDarkMode ? 'text-white' : 'text-text-main'}`}>
                    成為陪伴者
                </Text>
                <Text className={`text-base font-medium text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    分享您的愛心，陪伴可愛的毛孩度過快樂時光
                </Text>
            </View>

            <View className="space-y-4">
                <View>
                    <Text className={labelClass}>真實姓名</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="輸入您的姓名"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.name}
                        onChangeText={t => setFormData({ ...formData, name: t })}
                    />
                </View>

                <View>
                    <Text className={labelClass}>性別 (選擇)</Text>
                    <View className="flex-row space-x-4 mb-4">
                        {['男', '女', '其他'].map((option) => (
                            <Pressable
                                key={option}
                                onPress={() => setFormData({ ...formData, gender: option })}
                                className={`flex-1 py-3 items-center rounded-xl border-2 ${formData.gender === option
                                    ? 'border-cta bg-blue-50'
                                    : isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-gray-50'
                                    }`}
                            >
                                <Text className={`font-bold ${formData.gender === option ? 'text-cta' : isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                                    {option}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                <View>
                    <Text className={labelClass}>年齡</Text>
                    <TextInput
                        className={inputClass}
                        placeholder="您的年齡"
                        keyboardType="numeric"
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.age}
                        onChangeText={t => setFormData({ ...formData, age: t })}
                    />
                </View>

                <View className="flex-row items-center mb-4 bg-green-50 p-3 rounded-lg">
                    <FontAwesome name="shield" size={14} color="#22c55e" className="mr-2" />
                    <Text className="text-green-600 font-bold text-sm">通過加密身分驗證系統</Text>
                </View>

                <View>
                    <Text className={labelClass}>自我介紹 / 養狗經驗</Text>
                    <TextInput
                        className={`${inputClass} h-32`}
                        multiline
                        textAlignVertical="top"
                        placeholder="告訴飼主為什麼您是最好的陪伴人選..."
                        placeholderTextColor={isDarkMode ? '#64748b' : '#9ca3af'}
                        value={formData.bio}
                        onChangeText={t => setFormData({ ...formData, bio: t })}
                    />
                </View>

                <Button
                    label="送出身分驗證並加入"
                    onPress={() => onSubmit(formData)}
                    variant="cta"
                    size="lg"
                    className="mt-4"
                />
            </View>
        </View>
    );
};
