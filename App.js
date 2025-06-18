import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import CheckoutScreen from './screens/CheckoutScreen';

// Contexto de autenticação e carrinho
export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, cart, addToCart, clearCart }}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Catálogo' }}
              />
              <Stack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={{ title: 'Detalhes' }}
              />
              <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ title: 'Checkout' }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Entrar' }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Criar Conta' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
