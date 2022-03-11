import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Hello from './components/Hello';

import { layout } from '../styles';
const layoutStyles = StyleSheet.create(layout);

export default class App extends Component {
  render() {
    return (
      <View style={layoutStyles.container}>
        <Hello appName="to the Amido React Native boilerplate" />
      </View>
    );
  }
}
