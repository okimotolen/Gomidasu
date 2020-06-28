import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingItem extends React.Component {
  render() {
    return (
      <View style={styles.settingItem}>
        <Text style={styles.settingItemTitle}>
          { this.props.children }
        </Text>
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
});

export default SettingItem;
