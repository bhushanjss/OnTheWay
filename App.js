/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Vehicle from './Vehicle.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            On The Highway
          </Text>  
        </View>              
        <Vehicle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7',
    marginTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#00A',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});
