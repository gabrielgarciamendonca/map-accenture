import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Container } from './styles';

import { IAllUnits } from '../interfaces';

export default function AsyncStorageComponent(){
  const [ hasStorage, setHasStorage ] = useState<IAllUnits>();
  const getData = async () => {
    try {
      const storageValue = await AsyncStorage.getItem('@accentureUnit');
      return storageValue !== null ? JSON.parse(storageValue): null;

    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getData().then(
      result => setHasStorage(result)
    );
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.container}>{ hasStorage?.name }</Text>
      <Text style={styles.container}>{ hasStorage?.country }</Text>
      <Text style={styles.container}>{ hasStorage?.state }</Text>
      <Text style={styles.container}>{ hasStorage?.city }</Text>
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