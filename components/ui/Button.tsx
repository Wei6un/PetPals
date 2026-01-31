import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

type ButtonVariant = 'primary' | 'cta' | 'subtle' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: React.ComponentProps<typeof FontAwesome>['name'];
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    onPress,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    disabled = false,
    loading = false,
    className = '',
}) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    // Base styles
    const baseContainer = "flex-row justify-center items-center rounded-xl active:translate-y-1";
    const baseText = "font-bold text-center";

    // Variant styles
    const variants = {
        primary: {
            container: `bg-primary border-b-4 border-orange-700 active:border-b-0`,
            text: "text-white",
            icon: "white",
        },
        cta: {
            container: `bg-cta border-b-4 border-blue-700 active:border-b-0`,
            text: "text-white",
            icon: "white",
        },
        subtle: {
            container: isDarkMode ? "bg-slate-700" : "bg-orange-50",
            text: isDarkMode ? "text-orange-400" : "text-primary",
            icon: isDarkMode ? "#FB923C" : "#F97316",
        },
        outline: {
            container: `border-2 ${isDarkMode ? "border-slate-600" : "border-gray-200"} bg-transparent`,
            text: isDarkMode ? "text-slate-300" : "text-gray-600",
            icon: isDarkMode ? "#CBD5E1" : "#4B5563",
        },
        ghost: {
            container: "bg-transparent",
            text: isDarkMode ? "text-slate-400" : "text-gray-500",
            icon: isDarkMode ? "#94A3B8" : "#6B7280",
        },
    };

    // Size styles
    const sizes = {
        sm: { container: "px-3 py-2", text: "text-xs", iconSize: 12 },
        md: { container: "px-5 py-3", text: "text-sm", iconSize: 14 },
        lg: { container: "w-full py-4", text: "text-xl", iconSize: 20 },
    };

    const currentVariant = variants[variant];
    const currentSize = sizes[size];

    // Disabled styles
    if (disabled || loading) {
        return (
            <View className={`${baseContainer} ${currentSize.container} bg-gray-300 dark:bg-slate-800 opacity-50 ${className}`}>
                {loading && <ActivityIndicator size="small" color={isDarkMode ? "white" : "black"} className="mr-2" />}
                <Text className={`${baseText} ${currentSize.text} text-gray-500 dark:text-slate-500`}>{label}</Text>
            </View>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            className={`${baseContainer} ${currentVariant.container} ${currentSize.container} ${className}`}
        >
            {icon && iconPosition === 'left' && (
                <FontAwesome name={icon} size={currentSize.iconSize} color={typeof currentVariant.icon === 'string' ? currentVariant.icon : 'white'} className="mr-2" />
            )}

            <Text className={`${baseText} ${currentVariant.text} ${currentSize.text}`}>
                {label}
            </Text>

            {icon && iconPosition === 'right' && (
                <FontAwesome name={icon} size={currentSize.iconSize} color={typeof currentVariant.icon === 'string' ? currentVariant.icon : 'white'} className="ml-2" />
            )}
        </Pressable>
    );
};
