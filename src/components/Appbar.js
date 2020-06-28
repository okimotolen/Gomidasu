import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>
            { this.props.children }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#3D66AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    paddingTop: 35,
    color: '#fff',
    fontSize: 24,
  },
});

export default Appbar;
