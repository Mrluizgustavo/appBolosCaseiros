import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props){
  return(
<View style={styles.txt}>
  <Text style={styles.txt}> As Melhores Receitas de Bolo</Text>
<Image source={require('../assets/bolo-principal.jpg')} style={styles.img}/>

<TouchableOpacity onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
  <Text>Bolo de Chocolate</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>{props.navigation.navigate('BoloFuba')}}>
  <Text>Bolo de fubá </Text>
</TouchableOpacity>

<TouchableOpacity onPress= {()=> {props.navigation.navigate('BoloMilho')}}>
  <Text>Bolo de Milho</Text>
</TouchableOpacity>

</View>

  );
}

const styles = StyleSheet.create({
 img: {
    margin: 25,
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode: 'Center',
    
  }, txt:{
    textAlign: 'center'

  },
   
})