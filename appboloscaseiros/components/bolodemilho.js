import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BoloMilho(){
  return(
<View>
  <Text style={styles.txt}> As Melhores Receitas de Bolo</Text>
<Image source={require('../assets/bolo_milho.jpeg')} style={styles.img} />
<Text style={styles.txt}>O milho em si possui algumas incógnitas quando relacionado com a sua origem, já que ele é um alimento que depende de cuidados, planejamento e outros fatores importantes para o cultivo, como o clima, a preparação do solo, a safra, entre outros. <br/><br/>Portanto, acredita-se que ele pode ter sido desenvolvido de uma geração de milho “selvagem”, e que a partir de um teosinto (espécie de capim), ele pode ter sido domesticado pelos nossos ancestrais até chegar ao tipo de cultura que é atualmente.</Text>
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
  },txt:{
    margin: 20,
    textAlign:'center'

  },
});