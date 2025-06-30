import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../App';

const CheckoutScreen = ({ navigation }) => {
  const { cart } = useContext(AuthContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemName}>
                  {item.name} - R$ {item.price}
                </Text>
              </View>
            )}
          />
          <Text style={styles.total}>Total: R$ {total}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Payment')}
          >
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  header: { fontSize: 28, color: '#FFD700', marginBottom: 20, textAlign: 'center' },
  empty: { color: '#fff', textAlign: 'center', marginTop: 20 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  itemName: { color: '#fff', fontSize: 18 },
  total: { color: '#FFD700', fontSize: 20, marginVertical: 12, textAlign: 'center' },
  button: { backgroundColor: '#FFD700', padding: 12, borderRadius: 8, marginTop: 8 },
  buttonText: { color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
