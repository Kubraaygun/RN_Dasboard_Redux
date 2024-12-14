//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ThemeColors} from '../../theme/colors';

// create a component
const Input = props => {
  const {title, value, onChangeText, placeholder} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} onChangeText={onChangeText} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: ThemeColors.black,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    backgroundColor: ThemeColors.gray,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: ThemeColors.input,
  },
});

//make this component available to the app
export default Input;
