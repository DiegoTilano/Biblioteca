import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { addUser } = useContext(UserContext);

  const handleRegister = () => {
    if (!nombre.match(/^[a-zA-Z ]*$/)) {
      Alert.alert("Error", "El nombre no debe contener números.");
      return;
    }

    const result = addUser({ nombre, contrasena });
    if (!result) {
      Alert.alert("Error", "Usuario ya registrado.");
    } else {
      Alert.alert("Éxito", "Usuario registrado con éxito!");
    }
  };

  return (
    <View>
      <Text>Nombre:</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
      />
      <Text>Contraseña:</Text>
      <TextInput
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        placeholder="Ingrese su contraseña"
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}
