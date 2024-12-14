//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatAcionButton from '../../components/ui/floatActionButton';

// create a component
const Tasks = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Tasks</Text>
      <FloatAcionButton />
    </View>
  );
};

export default Tasks;
