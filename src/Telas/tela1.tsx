import React, {useState} from "react";
import { View, Text, Button } from "react-native";
import Estilo from "../estilo/style";
 
export default function Tela1( {navigation}){
    //Variavel
    //const qtdClique: number = 25;
    const[qtdClique, setQtdClique] = useState(0);


    return( 
        <View style={Estilo.container}>

           <Button
           title="Ir a Tela 2"
           onPress={() => navigation.navigate('Tela2')}/>





            <Text style={Estilo.textoTitulo}> Uso do useStat </Text>
            <Text>Quantidade de Cliques: {qtdClique}</Text>
            <Button
            title = "Aumentar"
            onPress={() => setQtdClique (qtdClique +1)}
            />
            <Button
            title = "Diminuir"
            onPress={() => setQtdClique (qtdClique -1)}
            />
        </View>

    
    );
}