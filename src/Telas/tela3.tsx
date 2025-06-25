// src/screens/ProductScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductScreen() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/produto1.jpg')} style={styles.image} />
      <Text style={styles.title}>BLUSA + SAIA PLISSADA CASUAL</Text>
      <Text style={styles.price}>R$ 349,90</Text>

      <Text style={styles.section}>COR</Text>
      <View style={styles.optionsRow}>
        <TouchableOpacity onPress={() => setSelectedColor('pink')} style={[styles.colorCircle, { backgroundColor: '#f8dcdc' }]} />
        <TouchableOpacity onPress={() => setSelectedColor('pink')} style={[styles.colorCircle, { backgroundColor: '#de6e6e' }]} />
      </View>

      <Text style={styles.section}>TAMANHO</Text>
      <View style={styles.optionsRow}>
        {['P', 'M', 'G'].map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => setSelectedSize(size)}
            style={[styles.sizeButton, selectedSize === size && styles.selectedSize]}
          >
            <Text>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartText}>ADICIONAR AO CARRINHO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 300, borderRadius: 10 },
  title: { fontSize: 18, marginVertical: 10 },
  price: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  section: { marginTop: 10, fontWeight: 'bold' },
  optionsRow: { flexDirection: 'row', marginVertical: 10 },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  sizeButton: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  selectedSize: {
    backgroundColor: '#e0e0e0'
  },
  cartButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5
  },
  cartText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
