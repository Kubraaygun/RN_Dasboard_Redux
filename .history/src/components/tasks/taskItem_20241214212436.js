//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';

// create a component
const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: ThemeColors.gray,
    marginVertical: 5,
    padding: 10,
    backgroundColor: ThemeColors.white,
  },
});

//make this component available to the app
export default TaskItem;
