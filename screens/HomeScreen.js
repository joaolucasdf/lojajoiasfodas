import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../App';

const aneldeouro = require('../assets/aneldeouro.jpg');
const aneldeprata = require('../assets/aneldeprata.jpg');
const brincodediamante = require('../assets/brincodediamante.jpg');
const brincodesafira = require('../assets/brincodesafira.jpg');
const colardeouro = require('../assets/colardeouro.jpg');
const colardeperola = require('../assets/colardeperola.jpg');
const pingentedecoracao = require('../assets/pingentedecoração.jpg');
const pulseiradeourobranco = require('../assets/pulseiradeourobranco.jpg');
const pulseiradeprata = require('../assets/pulseiradeprata.jpg');
const relogiodeluxo = require('../assets/relogiodeluxo.jpg');

const jewelryData = [
  { id: '1', name: 'Anel de Ouro', price: 1200, image: aneldeouro },
  { id: '2', name: 'Anel de Prata', price: 540, image: aneldeprata },
  { id: '3', name: 'Brinco de Diamante', price: 5200, image: brincodediamante },
  { id: '4', name: 'Brinco de Safira', price: 4300, image: brincodesafira },
  { id: '5', name: 'Colar de Ouro', price: 1900, image: colardeouro },
  { id: '6', name: 'Colar de Pérola', price: 980, image: colardeperola },
  { id: '7', name: 'Pingente de Coração', price: 620, image: pingentedecoracao },
  { id: '8', name: 'Pulseira de Ouro Branco', price: 3700, image: pulseiradeourobranco },
  { id: '9', name: 'Pulseira de Prata', price: 750, image: pulseiradeprata },
  { id: '10', name: 'Relógio de Luxo', price: 8500, image: relogiodeluxo },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart, signOut } = useContext(AuthContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>R$ {item.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ItemDetail', { item })}
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => signOut()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>First Class</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>Catálogo de Joias</Text>

        <FlatList
          data={jewelryData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        />

        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.buttonText}>Ir para Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#000',
  },
  backButton: {
    paddingRight: 16,
    paddingVertical: 4,
  },
  backButtonText: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    flex: 1,
    textAlign: 'center',
    marginRight: 44,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  itemName: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemPrice: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

