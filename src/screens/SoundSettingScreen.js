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
        <Appbar>通知音</Appbar>
        <View style={styles.SettingItem}>
          <SettingItem>レーダー</SettingItem>
          <SettingItem>アップリフト</SettingItem>
          <SettingItem>オープニング</SettingItem>
          <SettingCheckedItem>きらめき</SettingCheckedItem>
          <SettingItem>サーキット</SettingItem>
          <SettingItem>さざ波</SettingItem>
          <SettingItem>サミット</SettingItem>
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
  SettingItem: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default SoundSettingScreen;
