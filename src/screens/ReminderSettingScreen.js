import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import Appbar from '../components/Appbar';
import Bottombar from '../components/Bottombar';
import SettingItem from '../elements/SettingItem';
import SettingCheckedItem from '../elements/SettingCheckedItem';

class ReminderSettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar>通知設定</Appbar>
        <View style={styles.SettingItem}>
          <TouchableHighlight onPress={() => {}} style={{ width: '100%' }}>
            <SettingCheckedItem>燃えるごみ</SettingCheckedItem>
          </TouchableHighlight>
          <SettingCheckedItem>容器包装プラスチック</SettingCheckedItem>
          <SettingItem>缶・金属類</SettingItem>
          <SettingItem>ビン類</SettingItem>
          <SettingItem>埋め立てごみ</SettingItem>
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

export default ReminderSettingScreen;
