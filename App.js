import React from 'react';
import { StyleSheet, View } from 'react-native';

import GomiList from './src/components/GomiList';
import Appbar from './src/components/Appbar';
import Bottombar from './src/components/Bottombar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Appbar />
        <GomiList />
        <Bottombar />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
});
