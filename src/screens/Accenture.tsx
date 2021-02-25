import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AccentureLogo from '../images/Accenture.png';
import { getData } from '../services';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { Container } from './styles';
import { GetUnit, HeaderProps, IAllUnits } from '../interfaces';

export default function Accenture({ title }: HeaderProps, { id }: GetUnit) {
  const storageData = async ( value: string ) => {
    try {
      await AsyncStorage.setItem('@accentureUnit', value);
    } catch (error) {
      console.log(error);
    }
  }
  const route = useRoute();
  const params = route.params as GetUnit
  
  const [ unit, setUnit ] = useState<IAllUnits>()

  useEffect( () => {
    getData.get(`find?id=${params.id}`).then(
      response => {
        setUnit(response.data);
        storageData(JSON.stringify(response.data));
      }
    )
  }, [ params.id ])

  const navigation = useNavigation();
  function handlePushContact() {
    navigation.navigate('contact');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
      
        <Image style={styles.topImage} source={{uri:unit?.profile}}/>       
        
        <Image 
          style={styles.logo}
          source={AccentureLogo}
          // width={ 60 }
          // height={ 232 }
        />
        <Text style={styles.title}>{unit?.name}</Text>
        <Text style={styles.paragraph}>{unit?.describle}</Text>

        <Text style={styles.details}> País: {unit?.country}</Text>
        <Text style={styles.details}> Estado: {unit?.state}</Text>
        <Text style={styles.details}> Cidade: {unit?.city}</Text>
        <Text style={styles.details}> Endereço: {unit?.address.street}, {unit?.address.number}</Text>

        <RectButton 
          style={styles.contactButton}
          onPress={handlePushContact}>
          <Text style={styles.textButton}>Entrar em contato</Text> 
          < Feather name='send' size={ 20 } color={'#A100FF'}/>
        </RectButton>
      </View>
    </ScrollView>
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
    marginVertical: 20,
    height: 61,
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
    marginHorizontal: 15,
    textAlign: 'left',
    color: '#8f8f8f'
  },
  contactButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#A100FF',
    marginTop: 22,
    marginBottom: 50,
  },
  textButton: {
    color: '#A100FF',
    fontSize: 18,
    marginRight: 18,
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  details: {
    marginVertical: 6,
    color: '#8f8f8f'
  }
})