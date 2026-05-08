import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams<{ nome: string; cargo: string; empresa: string; anos: string; tecnologia: string; cor: string }>();

  // Lógica de Cor
  const cardColors: any = {
    Azul: '#3b82f6',
    Verde: '#10b981',
    Roxo: '#8b5cf6'
  };

  // Lógica de Badge
  const anosNum = Number(params.anos);
  let nivel = { label: 'Júnior', color: '#9ca3af' };
  if (anosNum >= 3 && anosNum <= 5) nivel = { label: 'Pleno', color: '#3b82f6' };
  if (anosNum >= 6) nivel = { label: 'Sênior', color: '#fbbf24' };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cardColors[params.cor || 'Azul'] }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{params.nome?.[0].toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{params.nome}</Text>
        <Text style={styles.job}>{params.cargo}</Text>
        <Text style={styles.company}>{params.empresa || 'Freelancer'}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.spec}>Especialista em</Text>
        <Text style={styles.tech}>{params.tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: nivel.color }]}>
          <Text style={styles.badgeText}>{nivel.label}</Text>
        </View>
        <Text style={styles.exp}>{params.anos} anos de experiência</Text>
      </View>

      <TouchableOpacity style={styles.editBtn} onPress={() => router.back()}>
        <Text style={styles.editBtnText}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.finishBtn} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.finishBtnText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  card: { padding: 30, borderRadius: 20, alignItems: 'center', elevation: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 40, fontWeight: 'bold', color: '#333' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  job: { fontSize: 16, color: '#e0e7ff' },
  company: { fontSize: 14, color: '#e0e7ff', opacity: 0.8 },
  divider: { width: '80%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 20 },
  spec: { color: '#fff', fontSize: 12, textTransform: 'uppercase' },
  tech: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
  badge: { paddingVertical: 5, paddingHorizontal: 20, borderRadius: 20, marginBottom: 5 },
  badgeText: { color: '#fff', fontWeight: 'bold' },
  exp: { color: '#fff', fontSize: 12 },
  editBtn: { marginTop: 30, padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#6366f1', alignItems: 'center' },
  editBtnText: { color: '#6366f1', fontWeight: 'bold' },
  finishBtn: { marginTop: 10, padding: 15, borderRadius: 12, backgroundColor: '#6366f1', alignItems: 'center' },
  finishBtnText: { color: '#fff', fontWeight: 'bold' }
});