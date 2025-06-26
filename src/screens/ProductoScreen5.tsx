import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductoScreen5() {
  const [selectedColor, setSelectedColor] = useState('pink')
  const [selectedSize, setSelectedSize] = useState('size');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/foto33.png')} style={styles.image} />
      <Text style={styles.title}>BLUSA FLORIDA</Text>
      <Text style={styles.price}>R$ 99,90</Text>

      <Text style={styles.section}>COR</Text>
      <View style={styles.optionsRow}>
        <TouchableOpacity
          onPress={() => setSelectedColor('pink')}
          style={[styles.colorCircle, selectedColor === 'rosa-claro' && styles.selectedBorder, { backgroundColor: '#f8dcdc' }]}
        />
        <TouchableOpacity
          onPress={() => setSelectedColor('BRANCO')}
          style={[styles.colorCircle, selectedColor === 'BRANCO' && styles.selectedBorder, { backgroundColor: 'white' }]}
        />
        <TouchableOpacity
          onPress={() => setSelectedColor('amarelo')}
          style={[styles.colorCircle, selectedColor === 'amarelo' && styles.selectedBorder, { backgroundColor: 'yellow' }]}
        />
        <TouchableOpacity
          onPress={() => setSelectedColor('pink')}
          style={[styles.colorCircle, selectedColor === 'rosa' && styles.selectedBorder, { backgroundColor: '#de6e6e' }]}
        />
      </View>

      <Text style={styles.section}>TAMANHO</Text>
      <View style={styles.optionsRow}>
        {['PP','P', 'M', 'G'].map((size) => (
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '80%', height: 300, borderRadius: 10, marginBottom: 4, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 50},
  title: { fontSize: 19, marginVertical: 10 },
  price: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  section: { marginTop: -5, fontWeight: 'bold' },
  optionsRow: { flexDirection: 'row', marginVertical: 10, alignItems: 'center' },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  selectedBorder: {
    borderColor: '#000',
    borderWidth: 2
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
