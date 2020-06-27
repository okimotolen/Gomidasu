import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import Bottombar from '../components/Bottombar';

class GomiSettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <Bottombar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  gomilist: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default GomiSettingScreen;
