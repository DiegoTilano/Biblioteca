import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BookCard = ({ imageSource, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Alquilar libro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '10rem',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: '#841584',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BookCard;
