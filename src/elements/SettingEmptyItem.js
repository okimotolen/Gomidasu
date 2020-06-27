import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingItem extends React.Component {
  render() {
    return (
      <View style={styles.settingItem}>
        <Text />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingItem: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default SettingItem;
