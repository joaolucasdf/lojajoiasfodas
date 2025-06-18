import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../App';

const CheckoutScreen = () => {
  const { cart, clearCart } = useContext(AuthContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                {item.name} - R$ {item.price}
              </Text>
            )}
          />
          <Text style={styles.total}>Total: R$ {total}</Text>
          <TouchableOpacity style={styles.button} onPress={clearCart}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  header: { fontSize: 28, color: '#FFD700', marginBottom: 20, textAlign: 'center' },
  item: { color: '#fff', fontSize: 18, marginBottom: 6 },
  empty: { color: '#fff', textAlign: 'center', marginTop: 20 },
  total: { color: '#FFD700', fontSize: 20, marginVertical: 12, textAlign: 'center' },
  button: { backgroundColor: '#FFD700', padding: 12, borderRadius: 8, marginTop: 8 },
  buttonText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
