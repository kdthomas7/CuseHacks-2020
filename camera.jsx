import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as FileSystem from 'expo-file-system';



/*function HomeStuff(){
   
var peanut = false;
var milk = false;
// var allergens = [peanut,milk];

return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      
<Button
        title="Peanut"
        onPress={() => peanut = true}
      />

      <Button
        title="Milk"
        onPress={() => milk = true}
      /> 

    </View>
  );
}*/

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
var allergies = [];

global.userInput = [global.peanut,global.milk,global.eggs]; 

for(inp of global.userInput){

if(inp == "peanut"){
  allergies.push("peanut");
}
if(inp == "milk" ){
    allergies.push("milk");
}

if(inp == "eggs" ){
    allergies.push("eggs");
}

}

var foods = new Object();
foods = {
    "2100023033": 
    {"product": "Philadelphia Cream Cheese",
      "allergens": ["milk"]},
    "012000150135": {"product": "Sierra Mist Lemon Lime Soda",
    "allergens": ["none"]},
    "024100940141": {"product": "Cheezit Original",
    "allergens": ["milk","wheat","soy"]},
    "028400040112": {"product": "Cheetos", "allergens": ["milk"]}

};


data = data.toString();
data = data.substring(1,data.length);

//alert(`Bar code with type ${type} and data ${data} has been scanned!`);




var allergic = false;

if(foods[data] != null){
  //alert("food found");

  var al;

for (al of (foods[data])["allergens"]){
  
if(allergies.includes(al)){
  alert("You CANT eat this\n" + al + " is an ingriedent");
  allergic = true;


}
else if(allergic == false){
  alert("youre good to go");
}

//alert(al);
}

}
else{
  alert("food not in list");
}

//alert((foods[data])["allergens"]);



/*const file = FileSystem.readAsStringAsync("file://foods.txt", FileSystem.EncodingType.UTF8)

var x = file.toString();
alert(file);*/


/*
if(file.toString().includes(data)){
//alert(`product found`);}
else{
//alert(`product NOT found`);  
}
*/

/*
const fs = require('fs') 
  
fs.readFile('foods.txt', (err, fdata) => { 
    if (err) throw err; 
  
    console.log(fdata.toString()); 

    if(fdata.toString().includes(data)){
alert(`product found`);
}

})  */


    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
