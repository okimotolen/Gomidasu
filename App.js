import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>ホーム</Text>
          </View>
        </View>

        <View style={styles.gomiList}>
          <View style={styles.gomiListItem1}>
            <View style={styles.gomiListType1}>
              <Text style={styles.gomiListTitle}>燃えるごみ</Text>
            </View>
            <View style={styles.gomiDay1}>
              <Text style={styles.gomiDayTitle}>火</Text>
            </View>
            <View style={styles.gomiDate}>
              <Text style={styles.gomiDateTitle}>次の収集日</Text>
              <Text style={styles.gomiDateTitle}>6/23</Text>
            </View>
          </View>
          <View>
            <Text> </Text>
            <Text> </Text>
          </View>
          <View style={styles.gomiListItem2}>
            <View style={styles.gomiListType2}>
              <Text style={styles.gomiListTitle}>燃えるごみ</Text>
            </View>
            <View style={styles.gomiDay2}>
              <Text style={styles.gomiDayTitle}>火</Text>
            </View>
            <View style={styles.gomiDate}>
              <Text style={styles.gomiDateTitle}>次の収集日</Text>
              <Text style={styles.gomiDateTitle}>6/23</Text>
            </View>
          </View>
        </View>

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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 30,
    backgroundColor: '#3D66AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 24,
  },
  gomiList: {
    flex: 1,
    top: 50,
    width: '80%',
  },
  gomiListItem1: {
    top: 0,
    left: 0,
    right: 0,
    borderColor: '#FF1C1C',
    height: 140,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  gomiListItem2: {
    top: 0,
    left: 0,
    right: 0,
    borderColor: '#1546DD',
    height: 140,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  gomiListType1: {
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FF1C1C',
    height: 50,
    borderColor: '#FF1C1C',
    borderTopWidth: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiListType2: {
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#1546DD',
    height: 50,
    borderColor: '#1546DD',
    borderTopWidth: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiListTitle: {
    color: '#fff',
    fontSize: 22,
  },
  gomiDay1: {
    position: 'absolute',
    padding: 5,
    top: 68,
    left: 70,
    height: 56,
    width: 56,
    backgroundColor: '#FF1C1C',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiDay2: {
    position: 'absolute',
    padding: 5,
    top: 68,
    left: 70,
    height: 56,
    width: 56,
    backgroundColor: '#1546DD',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiDayTitle: {
    color: '#fff',
    fontSize: 18,
  },
  gomiDate: {
    position: 'absolute',
    paddingLeft: 18,
    top: 70,
    right: 30,
    height: 55,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gomiDateTitle: {
    fontSize: 18,
  },
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
