//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';

// create a component
const AddTask = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>AddTask</Text>
      <Button title="Kaydet" />
    </View>
  );
};

export default AddTask;
