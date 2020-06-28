import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

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
          <SettingItem>お知らせ</SettingItem>
          <SettingEmptyItem />
          <SettingEmptyItem />
          <TouchableHighlight onPress={() => {}}>
            <SettingItem>通知音の設定</SettingItem>
          </TouchableHighlight>
          <SettingItem>通知するごみの設定</SettingItem>
          <SettingEmptyItem />
          <SettingEmptyItem />
          <SettingItem>家族や友だちに教える</SettingItem>
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
