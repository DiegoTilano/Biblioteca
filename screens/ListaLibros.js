import React, { useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function ListaLibros() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    Alert.alert("Acceso denegado", "El usuario no está registrado.");
    return <View />;
  }

  return (
    <View>
      <Text>Bienvenido a la biblioteca, {currentUser.nombre}</Text>
      {/* Aquí iría el componente para listar y alquilar libros */}
      <Text>Listado de libros:</Text>
      {/* Simulamos un libro */}
      <Button title="Alquilar libro X" onPress={() => {}} />
    </View>
  );
}
