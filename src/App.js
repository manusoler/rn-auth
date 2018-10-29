import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbNI_szhwHB1SsFyscI42q2LnTKxMAdnk',
      authDomain: 'auth-2b11d.firebaseapp.com',
      databaseURL: 'https://auth-2b11d.firebaseio.com',
      projectId: 'auth-2b11d',
      storageBucket: 'auth-2b11d.appspot.com',
      messagingSenderId: '249683959055'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Logged in
        this.setState({ loggedIn: true });
      } else {
        // Logged out
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 40 }}>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Authentication" />
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}
