import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import Bottombar from '../components/Bottombar';
import UsageItem from '../elements/UsageItem';

class GomiUsageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar>使い方</Appbar>
        <View style={styles.UsageItem}>
          <UsageItem>カレンダーから今月のごみ出し日を確認することができます。</UsageItem>
          <UsageItem>ごみの種類ごとに、通知の設定ができます。</UsageItem>
          <UsageItem>リマインダー機能で繰り返し通知を設定することも可能です！</UsageItem>
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
  UsageItem: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: 130,
  },
});

export default GomiUsageScreen;
