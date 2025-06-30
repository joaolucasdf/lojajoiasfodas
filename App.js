import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PaymentScreen from './screens/PaymentScreen';

export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Função para fazer login (seta usuário)
  const signIn = (userData) => {
    setUser(userData);
  };

  // Função para deslogar
  const signOut = () => {
    setUser(null);
    setCart([]);
  };

  // Adicionar item no carrinho
  const addToCart = (item) => setCart((prev) => [...prev, item]);

  // Limpar carrinho
  const clearCart = () => setCart([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
        cart,
        addToCart,
        clearCart,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
              <Stack.Screen name="Payment" component={PaymentScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
