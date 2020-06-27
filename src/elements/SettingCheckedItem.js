import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingItem extends React.Component {
  render() {
    return (
      <View style={styles.settingItem}>
        <View>
          <Text style={styles.settingItemTitle}>お知らせ</Text>
        </View>
        <View style={styles.checkMark}>
          <Text>✔︎</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingItem: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    paddingLeft: 20,
    justifyContent: 'center',
    marginTop: -1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  settingItemTitle: {
    fontSize: 18,
  },
  checkMark: {
    position: 'absolute',
    fontSize: 18,
    right: 15,
  },
});

export default SettingItem;
