import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbNI_szhwHB1SsFyscI42q2LnTKxMAdnk',
      authDomain: 'auth-2b11d.firebaseapp.com',
      databaseURL: 'https://auth-2b11d.firebaseio.com',
      projectId: 'auth-2b11d',
      storageBucket: 'auth-2b11d.appspot.com',
      messagingSenderId: '249683959055'
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Authentication" />
        <LoginForm />
      </SafeAreaView>
    );
  }
}
