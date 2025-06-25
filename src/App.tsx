import Tela1 from './telas/Tela1';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela01" component={Tela1}/>
        <Stack.Screen name="Tela2" component={Tela2}/>   
       < Stack.Screen name="Tela3" component={Tela3}/>     
      </Stack.Navigator>
    </NavigationContainer>

  );
}