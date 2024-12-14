//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Tasks = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Tasks</Text>
    </View>
  );
};

export default Tasks;
