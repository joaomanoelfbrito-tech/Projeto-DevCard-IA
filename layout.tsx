import { Stack } from 'expo-router';

export default function Layout(): any {
  return (
    <Stack screenOptions={{ 
      headerStyle: { backgroundColor: '#6366f1' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="index" options={{ title: 'Bem-vindo' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="preview" options={{ title: 'Seu Cartão' }} />
      <Stack.Screen name="sucesso" options={{ title: 'Parabéns!', headerLeft: () => null }} />
    </Stack>
  );
}