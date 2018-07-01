/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Vehicle from './Vehicle.js';
// import MapMain from './MapMain.js';

type Props = {};
class App extends Component<Props> {
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
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});

export default App;
