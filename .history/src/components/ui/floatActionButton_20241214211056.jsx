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
  },
});

//make this component available to the app
export default FloatAcionButton;
