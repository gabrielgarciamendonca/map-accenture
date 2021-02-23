import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import PinInsert from '../../src/images/Pin.png';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function handlePageDetail() {
    navigation.navigate('accenture');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: +48.8584,
          longitude: +2.2945,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
          <Marker
            style={styles.marker}
            icon={PinInsert}
            coordinate={{
              latitude: +48.8584,
              longitude: +2.2945,
            }}
          >
            <Callout
              tooltip={true}
              onPress={handlePageDetail}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Cá estou</Text>
              </View>
            </Callout>
          </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto qualquer</Text>
        <RectButton style={styles.findButton}>
            <Feather name='search' size={20} color={"#000"}/>
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 200,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#A100FF',
    textAlign: 'center',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#8fa7b3',
  },
  findButton: {
    height: 56,
    width: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A100FF',
  },
  marker: {
    width: 20,
    height: 20,
  }
});