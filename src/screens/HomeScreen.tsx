
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
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Vestidos')}>
          
          <Text style={styles.subtitle}>VESTIDOS:</Text>
          <View style={styles.containerimg2}>


            <View style={styles.containerimg}>
              <Image source={require('../../assets/vestido.jpeg')} style={styles.image} />
               <Text style={styles.imagem}>
              VESTIDO CASUAL 
             </Text>
            </View>
        </View>
            </TouchableOpacity>




          </View>

          <View style={styles.containerimg2}>
            <View style={styles.containerimg}>
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('Vestido')}>
             <Image source={require('../../assets/foto2.jpeg')} style={styles.image} />
             <Text style={styles.imagem}>
              VESTIDO FLORIDO 
             </Text>
             </TouchableOpacity>
            </View>
            </View>
          </View>

        
       
      </View>


      <Text style={styles.subtitle}>TENDÊNCIAS:</Text>
      <View style={styles.containerimg2}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Academia')}>

     
       <View style={styles.containerimg}>
       <Image source={require('../../assets/tendencia1.jpeg')} style={styles.image} />
        <Text style={styles.imagem}>
              CONJUNTO ACADEMIA
             </Text>
       </View>
       </TouchableOpacity>
       </View>


       <View>
        <TouchableOpacity onPress={() => navigation.navigate('Alfaiataria')}>

         <View style={styles.containerimg}>
        <Image source={require('../../assets/tendencia2.png')} style={styles.image} />
         <Text style={styles.imagem}>
              CONJUNTO FORMAL
             </Text>

        </View>
        </TouchableOpacity>
        </View>
       
      </View>

      
      <Text style={styles.subtitle}>BLUSAS:</Text>
      <View style={styles.containerimg2}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Blusas')}>

        <View>
         <Image source={require('../../assets/foto33.png')} style={styles.image} />
             <Text style={styles.imagem}>
              BLUSA FLORIDA
             </Text>
        </View>

      </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Blusa')}>

          <View>
             <Image source={require('../../assets/foto4.png')} style={styles.image} />
             <Text style={styles.imagem}>
                TOP CASUAL
             </Text>
          </View>
          </TouchableOpacity>

        </View>
      </View>
          
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagem:{fontSize: 8, textAlign: 'center', marginVertical: 5},
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, textAlign: 'center', marginVertical: 10 },
  menu: { alignItems: 'center', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  image: { width: 140, height: 195, borderRadius: 8 },
  label: { textAlign: 'center', marginVertical: 5 },
  subtitle: { fontSize: 13, marginVertical: -10 },
  containerimg: { padding: -20, margin: 5},
  containerimg2: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 }
  

});
