import React, { useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import { UserContext } from "../context/UserContext";
import BookCard from "../components/BookCard";
import { ScrollView } from "react-native-web";

export default function ListaLibros() {
  const { currentUser } = useContext(UserContext);
  const books = [
    {
      title: "Pablo Escobar",
      thumball:
        "https://m.media-amazon.com/images/I/A16J4ZhHw4L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      id: 1,
    },
    {
      title: "Fundamentos de la Programacion",
      thumball:
        "https://1.bp.blogspot.com/-ym620D0SgNg/WXKt1lKPh1I/AAAAAAAAApQ/XAS6tWim_gM7qVUvG9PDnUGtgS9qa25mwCLcBGAs/s1600/Fundamentos-de-programaci%25C3%25B3n---Luis-Joyanes-Aguilar-FREELIBROS.jpg",
      id: 2,
    },
    {
      title: "Luicito Comunica",
      thumball:
        "https://m.media-amazon.com/images/I/81blbaDjqbL._AC_UF1000,1000_QL80_.jpg",
      id: 3,
    },
  ];
  if (!currentUser) {
    Alert.alert("Acceso denegado", "El usuario no está registrado.");
    return <View />;
  }

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Bienvenido a la biblioteca
        </Text>
      </View>
      {/* Aquí iría el componente para listar y alquilar libros */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 15,
          color: "white",
        }}
      >
        Listado de libros:
      </Text>
      {/* Simulamos un libro */}
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            imageSource={book.thumball}
            onPress={() => {
              Alert.alert("Success", `Se arquilo el libro ${book.title}`);
              window.alert(`Se arquilo el libro ${book.title}`);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: "#5a0357",
  },
};
