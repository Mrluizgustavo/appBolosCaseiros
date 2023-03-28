import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloChocolate(){
  return(
<View>
  <Text style={styles.txt}> As Melhores Receitas de Bolo</Text>
<Image source={require('../assets/bolo-chocolate.jpg')} style={styles.img} />
<Text style={styles.txt}>O bolo surgiu no Egito Antigo e era feito a partir de pães adoçados com xaropes de frutas, tâmaras e passas.<br/><br/> No período renascentista a receita foi melhorada pelos romanos, que conheciam a técnica da fermentação. Foram eles que colocaram o nome bolo, por causa do formato redondo, vindo de bola.</Text>
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
    textAlign: 'center'

  },
   
})
