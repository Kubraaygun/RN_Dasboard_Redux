//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

// create a component
const AddTask = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>AddTask</Text>
      <Input />
      <Button title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
