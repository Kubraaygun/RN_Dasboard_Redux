//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Input = () => {
  return (
    <View style={styles.container}>
      <Text>Input</Text>
      <TextInput placeholder="Title" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Input;
