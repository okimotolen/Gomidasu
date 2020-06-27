import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class GomiList extends React.Component {
  render() {

const {style, color} = this.props;

    let bgColor = '#FF1C1C';
    let bdColor = '#FF1C1C';

    if (color === 'blue') {
      bgColor = '#1546DD';
      bdColor = '#1546DD';
    }

    return (
      <View style={styles.gomiList}>
        <View style={[styles.gomiListItem, style,
          { borderColor: bdColor }]}
        >
          { this.props.children }
          <View style={[styles.gomiListType, style,
            { backgroundColor: bgColor, borderColor: bdColor }]}
          >
            { this.props.children }
            <Text style={styles.gomiListTitle}>燃えないごみ</Text>
          </View>
          <View style={[styles.gomiDay, style,
            { backgroundColor: bgColor }]}
          >
            { this.props.children }
            <Text style={styles.gomiDayTitle}>火</Text>
          </View>
          <View style={styles.gomiDate}>
            <Text style={styles.gomiDateTitle}>次の収集日</Text>
            <Text style={styles.gomiDateTitle}>6/23</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gomiList: {
    width: '80%',
    marginBottom: 30,
  },
  gomiListItem: {
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
  gomiListType: {
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
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
  gomiListTitle: {
    color: '#fff',
    fontSize: 22,
  },
  gomiDay: {
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
});

export default GomiList;
