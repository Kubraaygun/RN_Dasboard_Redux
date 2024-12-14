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
      <Input placeholder="Please set title" title="Task Title" />
      <Input placeholder="Please set date" title="Task Date" />
      <Input placeholder="Please set status" title="Task Status" />
      <Button title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
