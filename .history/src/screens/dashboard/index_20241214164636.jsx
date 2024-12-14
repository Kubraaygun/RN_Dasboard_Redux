//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

// create a component
const Dashboard = () => {
  return (
    const {testMessage} = useSelector(state=>state?tasks)
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Dashboard;
