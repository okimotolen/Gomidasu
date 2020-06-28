import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import GomiList from '../elements/GomiList';
import Bottombar from '../components/Bottombar';

class GomiHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar>ホーム</Appbar>
        <View style={styles.gomilist}>
          <GomiList />
          <GomiList color="blue" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  gomilist: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default GomiHomeScreen;
