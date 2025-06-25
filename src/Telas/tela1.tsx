import React, {useState} from "react";
import { View, Button } from "react-native";
import Estilo from "../estilo/style";
 
export default function Tela1( {navigation}){
    
    return( 
        <View style={Estilo.container}>

           <Button
           title="Entrar"
           onPress={() => navigation.navigate('Tela2')}/>

        </View> );
}