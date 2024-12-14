//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const TasksStatusCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <Text>{item.status}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 5,
    width: '45%',
    height: 170,
    borderRadius: 8,
  },
});

//make this component available to the app
export default TasksStatusCard;
