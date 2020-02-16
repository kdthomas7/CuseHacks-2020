import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from './camera.jsx';
//import HomeStuff from './camera.jsx';
  
 
global.peanut = "";
global.milk = "";
global.eggs = "";
//global.soy = ""; 
global.userInput = [global.peanut,global.milk,global.eggs];


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

 <Button 
        title="Peanut"
        onPress={() => global.peanut = "peanut"
        }
      />

      <Button 
        title="Milk" 
        onPress={() => global.milk = "milk"}
      /> 

       <Button 
        title="Eggs" 
        onPress={() => global.eggs = "eggs"}
      />


      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}

function CameraScreen() {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      // <Text>Camera Screen</Text>
      <Camera />
    // </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;