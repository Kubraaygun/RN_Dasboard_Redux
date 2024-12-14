//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
  container: {},
});

//make this component available to the app
export default TaskItem;
