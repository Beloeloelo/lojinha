// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <ImageBackground source={require('../../assets/foto1.jpeg')} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.label}>NOME:</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />

        <Text style={styles.label}>SOBRENOME:</Text>
        <TextInput style={styles.input} placeholder="Digite seu sobrenome" value={sobrenome} onChangeText={setSobrenome} />

        <Text style={styles.label}>TELEFONE:</Text>
        <TextInput style={styles.input} placeholder="Digite seu telefone" value={telefone} onChangeText={setTelefone} />

        <Text style={styles.label}>DATA DE NASCIMENTO:</Text>
        <TextInput style={styles.input} placeholder="00/00/0000" value={dataNascimento} onChangeText={setDataNascimento} />

        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF" value={cpf} onChangeText={setCpf} />

        <Button title="ENTRAR" onPress={() => navigation.navigate('Home')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(255,255,255,0.8)' },
  label: { marginTop: -6 },
  input: { borderWidth: 1, padding: 5, marginBottom: 5, backgroundColor: '#fff' },
  Button: {backgroundColor: 'black'}
});