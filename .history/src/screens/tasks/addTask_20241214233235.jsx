//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const AddTask = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>AddTask</Text>
    </View>
  );
};

//make this component available to the app
export default AddTask;
