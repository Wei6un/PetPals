import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { AppProvider } from '../context/AppContext';
import '../global.css';

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="register-pet"
          options={{
            presentation: 'modal',
            headerShown: true,
            title: '刊登毛孩',
            headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1e293b' : '#FFF7ED' },
            headerTintColor: colorScheme === 'dark' ? '#fff' : '#9A3412',
          }}
        />
        <Stack.Screen
          name="register-renter"
          options={{
            presentation: 'modal',
            headerShown: true,
            title: '成為陪伴者',
            headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1e293b' : '#FFF7ED' },
            headerTintColor: colorScheme === 'dark' ? '#fff' : '#9A3412',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <RootLayoutNav />
    </AppProvider>
  );
}
