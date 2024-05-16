import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistroUsuario from './screens/RegistroUsuario';
import ListaLibros from './screens/ListaLibros';
import LoginUsuario from './screens/LoginUsuario';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={RegistroUsuario} />
      <Tab.Screen name="Login" component={LoginUsuario} />
      <Tab.Screen name="Libros" component={ListaLibros} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
