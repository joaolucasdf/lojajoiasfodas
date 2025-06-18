import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../App';

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setUser({ email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entrar no App</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setUser({ anonimo: true })}>
        <Text style={styles.link}>Usar como Visitante</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, color: '#FFD700', marginBottom: 20, textAlign: 'center' },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: { backgroundColor: '#FFD700', padding: 12, borderRadius: 8 },
  buttonText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#FFD700', textAlign: 'center', marginTop: 12 },
});
