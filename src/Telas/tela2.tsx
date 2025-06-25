// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SPRING FLOWER</Text>
      <View style={styles.menu}>
        <Text>ROUPAS | SAPATOS | ACESSÓRIOS | JOIAS</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={require('../assets/item1.jpg')} style={styles.image} />
          <Text style={styles.label}>BLUSAS</Text>
        </TouchableOpacity>
        {/* Adicione mais itens aqui se quiser */}
      </View>
      <Text style={styles.subtitle}>TENDÊNCIAS</Text>
      {/* Adicione aqui uma seção de tendências */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, textAlign: 'center', marginVertical: 10 },
  menu: { alignItems: 'center', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' },
  image: { width: 150, height: 200, borderRadius: 8 },
  label: { textAlign: 'center', marginVertical: 5 },
  subtitle: { fontSize: 20, marginVertical: 10 },
});
