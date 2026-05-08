import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();
  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Azul');
  const [erros, setErros] = useState<any>({});

  const validar = () => {
    let _erros: any = {};
    if (nome.length < 3) _erros.nome = 'Nome deve ter no mínimo 3 caracteres';
    if (!cargo) _erros.cargo = 'Cargo é obrigatório';
    if (!anos || isNaN(Number(anos)) || Number(anos) <= 0) _erros.anos = 'Informe um número maior que 0';
    if (!tecnologia) _erros.tecnologia = 'Tecnologia é obrigatória';

    setErros(_erros);
    return Object.keys(_erros).length === 0;
  };

  const handleGerar = () => {
    if (validar()) {
      router.push({
        pathname: '/preview',
        params: { nome, cargo, empresa, anos, tecnologia, cor }
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome completo *</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: João Silva" />
      {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}

      <Text style={styles.label}>Cargo *</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} placeholder="Ex: Desenvolvedor React Native" />
      {erros.cargo && <Text style={styles.errorText}>{erros.cargo}</Text>}

      <Text style={styles.label}>Empresa (opcional)</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} placeholder="Ex: Tech Solutions" />

      <Text style={styles.label}>Anos de experiência *</Text>
      <TextInput style={styles.input} value={anos} onChangeText={setAnos} keyboardType="numeric" placeholder="Ex: 4" />
      {erros.anos && <Text style={styles.errorText}>{erros.anos}</Text>}

      <Text style={styles.label}>Tecnologia favorita *</Text>
      <TextInput style={styles.input} value={tecnologia} onChangeText={setTecnologia} placeholder="Ex: Expo" />
      {erros.tecnologia && <Text style={styles.errorText}>{erros.tecnologia}</Text>}

      <Text style={styles.label}>Cor do cartão</Text>
      <View style={styles.colorRow}>
        {['Azul', 'Verde', 'Roxo'].map(c => (
          <TouchableOpacity key={c} style={[styles.colorBtn, cor === c && styles.colorBtnActive]} onPress={() => setCor(c)}>
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.mainBtn} onPress={handleGerar}>
        <Text style={styles.mainBtnText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, backgroundColor: '#fff' },
  errorText: { color: 'red', fontSize: 12, marginTop: 2 },
  colorRow: { flexDirection: 'row', gap: 10, marginTop: 10 },
  colorBtn: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, alignItems: 'center' },
  colorBtnActive: { backgroundColor: '#e0e7ff', borderColor: '#6366f1' },
  mainBtn: { backgroundColor: '#6366f1', padding: 18, borderRadius: 12, marginTop: 30, alignItems: 'center' },
  mainBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});