import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';
// import { Container } from './styles';

export default function Accenture() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={AccentureLogo}
        // width={ 60 }
        // height={ 232 }
      />
      <Text style={styles.title} >Accenture</Text>
      <Text style={styles.paragraph}>Texto complementar</Text>

      <RectButton 
        style={styles.contactButton}
        onPress={() => {alert('chunchionou')}}>
        <Text style={styles.textButton}>Entrar em contato</Text> 
        < Feather name='send' size={ 20 } />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  logo: {
    marginBottom: 20,
    height: 62,
    width: 236,
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#b8b8b8',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'left',
    color: '#8f8f8f'
  },
  contactButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#A100FF',
    marginTop: 22,
  },
  textButton: {
    color: '#A100FF',
    fontSize: 18,
    marginRight: 18,
  }
})