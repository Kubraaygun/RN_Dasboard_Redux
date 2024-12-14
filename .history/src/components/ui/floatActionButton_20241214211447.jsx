//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatAcionButton = () => {
  return (
    <View style={styles.container}>
      <Add size={40} color={ThemeColors.white} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.green,
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

//make this component available to the app
export default FloatAcionButton;
