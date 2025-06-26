import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductoScreen2 from './screens/ProductoScreen2';
import ProductoScreen3 from './screens/ProductoScreen3';
import ProductoScreen4 from './screens/ProductoScreen4';
import ProductoScreen5 from './screens/ProductoScreen5';
import ProductoScreen6 from './screens/ProductoScreen6';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Vestidos" component={ProductScreen} />
        <Stack.Screen name="Vestido" component={ProductoScreen2} />
        <Stack.Screen name="Academia" component={ProductoScreen3} />
        <Stack.Screen name="Alfaiataria" component={ProductoScreen4} />
        <Stack.Screen name="Blusas" component={ProductoScreen5} />
        <Stack.Screen name="Blusa" component={ProductoScreen6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
