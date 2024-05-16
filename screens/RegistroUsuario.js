import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { UserContext } from "../context/UserContext";
import Auth from "../services/auth";

export default function RegistroUsuario() {
  const auth = new Auth();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { addUser } = useContext(UserContext);

  const handleRegister = async () => {
    if (!nombre.match(/^[a-zA-Z ]*$/)) {
      Alert.alert("Error", "El nombre no debe contener números.");
      return;
    }

    const newUser = await auth.register({
      name: nombre.trim(),
      email: correo.trim(),
      password: contrasena,
    });

    if (!newUser.ok) {
      if (newUser.errors) {
        const errors = Object.values(newUser.errors).map(
          (infoErr) => infoErr.msg
        );
        Alert.alert("Error", errors.join("\n"));
        window.alert(errors.join("\n"));
        return;
      }
      if (newUser.msg) {
        Alert.alert("Error", newUser.msg);
        window.alert(newUser.msg);
        return;
      }
    }
    addUser({ nombre, correo, contrasena });
    Alert.alert("Éxito", "Usuario registrado con éxito!");
    window.alert("Usuario registrado con éxito!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
      />
      <TextInput
        style={{ ...styles.input, marginTop: 10 }}
        value={correo}
        onChangeText={setCorreo}
        placeholder="Ingrese su correo"
      />
      <TextInput
        style={{ ...styles.input, marginTop: 10 }}
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        placeholder="Ingrese su constrasenia"
      />
      <Button
        style={styles.button}
        title="Registrar"
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundImage: 'url("https://www.comunidadbaratz.com/wp-content/uploads/Todas-las-bibliotecas-son-bellas-por-el-servicio-que-ofrecen-a-sus-comunidades.jpg")'
  },
  input: {
    width: "90%",
    height: 40,
    border: "2px solid black",
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 12,
    backgroundColor: '#f9f9f9'
  },
  button: {
    width: 300,
    height: 30,
    marginTop: 10,
  },
};
