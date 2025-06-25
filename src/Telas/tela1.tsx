import React, {useState} from "react";
import { View, Button, TextInput,Alert,  TouchableOpacity } from "react-native";
import Estilo from "../estilo/style";
 
export default function LoginsScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', 'Email: ${email}\nSenha: ${senha}');
  };
export default function Tela1( {navigation}){

  return (
    <View style={styles.container}>
      
      <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
      autoCapitalize="none"
      value={email}
      onChangeText={setEmail}
      />

    <TextInput
    style={styles.input}
    placeholder="Senha"
    secureTextEntry
    value={senha}
    onChangeText={setSenha}
    />

    
   
    <View style={Estilo.container}>
        <Button
        title="Entrar"
         onPress={() => navigation.navigate('Tela2')}>       
    </View>


      <TouchableOpacity>
        <Text style={styles.registerText}>Ainda não possui uma conta?</Text>
      </TouchableOpacity>
    </View>
  );
}
}





