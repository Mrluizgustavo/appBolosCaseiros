import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloFuba(){
  return(
<View>
  <Text style={styles.txt}> As Melhores Receitas de Bolo</Text>
<Image source={require('../assets/bolo-fuba.jpg')} style={styles.img}/>

<Text style={styles.txt}>O fubá é uma farinha de milho fina e excelente para a produção de bolos e outros pratos, sendo que era uma farinha muito mais comum no Brasil colônia, sendo assim, ele veio como uma alternativa para uma farinha muito mais cara. <br/><br/>

Além disso, não existe um Estado que consiga afirmar-se como o “criador do bolo de fubá”. Como a receita era muito comum entre os tropeiros e os mascates da época.</Text>
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
  },
  txt:{
    margin: 20,
    textAlign:'center',
  },
});