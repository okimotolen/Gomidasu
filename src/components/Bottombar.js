import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Bottombar extends React.Component {
  render() {
    return (
      <View style={styles.bottombar}>
        <View style={styles.bottombarLeft}>
          <Text style={styles.bottombarTitle}>ホーム</Text>
        </View>
        <View style={styles.bottombarCenter}>
          <Text style={styles.bottombarTitle}>使い方</Text>
        </View>
        <View style={styles.bottombarRight}>
          <Text style={styles.bottombarTitle}>設定</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottombar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottombarLeft: {
    position: 'absolute',
    left: 45,
  },
  bottombarCenter: {
    position: 'absolute',
  },
  bottombarRight: {
    position: 'absolute',
    right: 45,
  },
});

export default Bottombar;
