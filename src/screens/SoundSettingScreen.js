import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import Bottombar from '../components/Bottombar';
import SettingItem from '../elements/SettingItem';
import SettingCheckedItem from '../elements/SettingCheckedItem';

class SoundSettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.SettingItem}>
          <SettingItem />
          <SettingItem />
          <SettingCheckedItem />
          <SettingItem />
          <SettingItem />
          <SettingItem />
          <SettingItem />
        </View>
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
  SettingItem: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default SoundSettingScreen;
