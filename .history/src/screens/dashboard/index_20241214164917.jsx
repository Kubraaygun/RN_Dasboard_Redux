//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// create a component
const Dashboard = () => {
  const {testMessage} = useSelector(state => state?.tasks);
  return (
    <ScrollView style={styles.container}>
      <Text>{testMessage}</Text>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Dashboard;
