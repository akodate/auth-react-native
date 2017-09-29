import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPkspixXQwoRs6AlZonPJuRAMezgpX0gc',
      authDomain: 'auth-d1dfb.firebaseapp.com',
      databaseURL: 'https://auth-d1dfb.firebaseio.com',
      projectId: 'auth-d1dfb',
      storageBucket: '',
      messagingSenderId: '705419080916'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
