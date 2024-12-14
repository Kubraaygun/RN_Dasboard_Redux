//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';

// create a component
const FloatAcionButton = () => {
  return (
    <View style={styles.container}>
      <Text>FloatAcionButton</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.green,
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 20,
  },
});

//make this component available to the app
export default FloatAcionButton;
