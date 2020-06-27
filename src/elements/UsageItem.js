import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class UsageItem extends React.Component {
  render() {
    return (
      <View style={styles.usageItem}>
        <Text style={styles.usageItemTitle}>
          { this.props.children }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usageItem: {
    width: '100%',
    height: 140,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  usageItemTitle: {
    fontSize: 18,
  },
});

export default UsageItem;
