import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
 } from 'react-native';

export default function Tela2() {
 

  const handleLogin = () => {
    Alert.alert('Pesquisa');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/imagem.png')} style={styles.profileImage} />
     
      <View style={styles.container}>
       <TextInput
        style={styles.input}
        placeholder="Pesquisar..."

        />
    </View>

    

      <TouchableOpacity>
        <Text style={styles.registerText}>Ainda não possui uma conta?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 32,
    borderRadius: 50,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
