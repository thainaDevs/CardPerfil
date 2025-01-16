import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React  from 'react';
import CapaCard from './assets/capa-card.jpg';
import IconeCard from './assets/icone-card.jpg';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={CapaCard} style={styles.capaCard}/>
      <View style={{alignItems:'center'}}>
        <Image source={IconeCard} style={styles.iconeCard}/>
        <Text style={styles.titulo}>Thainá Cruz de Almeida</Text>
        <Text style={styles.descricao}>Com mais de 4 anos de experiência em automação de processos, atuo como Desenvolvedora e Analista de RPA, com expertise nas plataformas IBM RPA, Microsoft Power Automate e UiPath.
          Atualmente, estou aprofundando meus conhecimentos em automações utilizando Python e suas diversas bibliotecas. Paralelamente, estou focada no desenvolvimento mobile com React Native, ampliando minha capacidade de contribuir com soluções digitais robustas e modernas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#824975',
    alignItems: 'center',
    justifyContent: 'center',

  },
  capaCard:{
    width: 450,
    height: 470,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'white',

  },
  iconeCard:{
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white'
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: -10,
  },
  descricao:{
    fontSize: 12,
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontStyle:'italic'
  }
});
