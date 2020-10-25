import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RotasStackPrincipal from './src/Rotas/RotasStack/RotasStackPrincipal';

export default function App() {
  return (
    <NavigationContainer>

        <RotasStackPrincipal />

    </NavigationContainer>
  );
}

