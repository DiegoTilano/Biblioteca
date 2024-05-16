import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { UserContext } from "../context/UserContext";
import Auth from "../services/auth";

export default function LoginUsuario() {
  const auth = new Auth();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { addUser } = useContext(UserContext);

  const handleLogin = async () => {

    const user = await auth.login({
      email: correo.trim(),
      password: contrasena,
    });

    if (!user.ok) {
      if (user.errors) {
        const errors = Object.values(user.errors).map(
          (infoErr) => infoErr.msg
        );
        Alert.alert("Error", errors.join("\n"));
        window.alert(errors.join("\n"));
        return;
      }
      if (user.msg) {
        Alert.alert("Error", user.msg);
        window.alert(user.msg);
        return;
      }
    }
    addUser({ nombre: user.name, correo, contrasena });
    Alert.alert("Éxito", `${user.name} has iniciado sesion`);
    window.alert(`${user.name} has iniciado sesion`);
  };

  return (
    <View style={styles.container}>
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
        title="Iniciar sesion"
        onPress={handleLogin}
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
  },
  input: {
    width: "90%",
    height: 40,
    border: "2px solid black",
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 12,
  },
  button: {
    width: 300,
    height: 30,
    marginTop: 10,
  },
};
