//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';

// create a component
const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);
  return (
    <ScrollView style={styles.container}>
      <SectionTitle title={'Project Summary'} />
      <View>
        {taskStatus.map((item, index) => (
          <TasksStatusCard key={index} key={item.id} />
        ))}
      </View>
      <SectionTitle title={'Project Statistics'} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Dashboard;
