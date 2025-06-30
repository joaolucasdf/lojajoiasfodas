import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { AuthContext } from '../App';

const PaymentScreen = ({ navigation }) => {
  const { clearCart } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFinish = () => {
    if (!name || !phone || !address || !cardNumber || !expiry || !cvv) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', 'Compra finalizada com sucesso!');
    clearCart();
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.header}>Informações Pessoais</Text>

      <TextInput
        placeholder="Nome completo"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Telefone"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Endereço"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <Text style={[styles.header, { marginTop: 20 }]}>Dados do Cartão</Text>

      <TextInput
        placeholder="Número do cartão"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      <TextInput
        placeholder="Validade (MM/AA)"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={expiry}
        onChangeText={setExpiry}
        maxLength={5}
      />
      <TextInput
        placeholder="CVV"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="number-pad"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
        maxLength={3}
      />

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
