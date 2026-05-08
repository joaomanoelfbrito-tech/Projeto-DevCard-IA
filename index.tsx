import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconPlaceholder}><Text style={{fontSize: 40}}>📇</Text></View>
      <Text style={styles.title}>DevCard</Text>
      <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro')}>
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>Aplicações Móveis - Aula 7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f9fafb' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#6366f1', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 40 },
  button: { backgroundColor: '#6366f1', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 12 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  iconPlaceholder: { width: 80, height: 80, backgroundColor: '#e0e7ff', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  footer: { position: 'absolute', bottom: 20, color: '#9ca3af', fontSize: 12 }
});