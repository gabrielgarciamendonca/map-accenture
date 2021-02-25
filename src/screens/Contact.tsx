import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

// import { Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { contactSend } from '../services';
import LogoAccenture from '../images/Accenture.png';
import send from '../animations/send.json';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ text, setText ] = useState('');
  const [ isSendMessage, setIsSendMessage ] = useState(false);
  function sendAccentureMessage() {
    const postData = {
      name,
      email,
      phone,
      text,
    };
    contactSend.post(``, postData).then(
      response => {
        setIsSendMessage(true);
        setName('');
        setEmail('');
        setPhone('');
        setText('');
      }
    );
  }

  function handleOpenStorage() {
    navigation.navigate('storage');
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {isSendMessage ? 
          <>
            <Text style={styles.sendText}>Sua mensagem</Text>
            <Text style={styles.sendText}>foi enviada</Text>
            {/* <LottieView source={send}/> */}
          </>
          
           : <>
              <Image style={styles.logoAccenture} source={LogoAccenture}/>
              <Text style={styles.title}> Formulário de contato </Text>
              <View>
                <Text style={styles.labelForm}>Seu nome: </Text>
                <TextInput 
                  multiline
                  value={name}
                  style={styles.inputForm}
                  onChangeText={ text => setName(text) }></TextInput>
                <Text style={styles.labelForm}>Seu Telefone: </Text>
                <TextInput 
                  multiline
                  value={phone}
                  style={styles.inputForm}
                  onChangeText={ text => setPhone(text) }></TextInput>
                <Text style={styles.labelForm}>Seu email: </Text>
                <TextInput 
                  multiline
                  value={email}
                  style={styles.inputForm}
                  onChangeText={ text => setEmail(text) }></TextInput>
                <Text style={styles.labelForm}>Deixe sua mensagem: </Text>
                <TextInput 
                  multiline
                  value={text}
                  style={styles.inputFormMultiline}
                  onChangeText={ text => setText(text) }></TextInput>
                <RectButton style={styles.sendButton} onPress={sendAccentureMessage}>
                  <Text style={styles.textSendButton}>Enviar mensagem</Text>
                  <Feather name="send" size={20} color="#A100FF"/>
                </RectButton>

                <RectButton style={styles.sendButton} onPress={handleOpenStorage}>
                  <Text style={styles.textSendButton}>Abrir storage</Text>
                  <Feather name="database" size={20} color="#A100FF"/>
                </RectButton>
              </View>
          </>}
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: Dimensions.get('window').width,
  },
  animationContent: {
    width: 400,
    height: 400,
  },
  labelForm: {
    marginTop: 22,
  },
  inputForm: {
    paddingHorizontal: 20,
    height: 50,
    width: Dimensions.get('window').width - 60,
    borderColor: '#b9b7b7',
    borderWidth:  1,
    borderRadius: 12,
    marginVertical: 5,
  },
  inputFormMultiline:{
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 120,
    width: Dimensions.get('window').width - 60,
    borderColor: '#b9b7b7',
    borderWidth:  1,
    borderRadius: 12,
    marginVertical: 5,
  },
  logoAccenture: {
    marginVertical: 10,
    width: 200,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    height: 30
  },
  textSendButton: {
    color: "#A100FF",
    fontSize: 20,
    marginLeft: 6,
  },
  title: {
    fontSize: 18,
    marginVertical: 30,
    color: '#A100FF',
  },
  sendText: {
    color: '#A100FF',
    fontSize: 24,
    marginBottom: 12
  }
})
