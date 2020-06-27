import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import Bottombar from '../components/Bottombar';
import SettingItem from '../elements/SettingItem';
import SettingEmptyItem from '../elements/SettingEmptyItem';

class GomiSettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.settingItem}>
          <SettingItem />
          <SettingEmptyItem />
          <SettingEmptyItem />
          <SettingItem />
          <SettingItem />
          <SettingEmptyItem />
          <SettingEmptyItem />
          <SettingItem />
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
  settingItem: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default GomiSettingScreen;
