import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../App';

const ItemDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price}</Text>

      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>Ir para Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  image: { width: '100%', height: 300, borderRadius: 12, marginBottom: 20 },
  name: { color: '#FFD700', fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { color: '#fff', fontSize: 20, marginBottom: 20 },
  button: { backgroundColor: '#FFD700', padding: 12, borderRadius: 8, marginTop: 8 },
  buttonText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
