//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView style={styles.container}>
        <SectionTitle title={'Project Summary'} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          {taskStatus.map(item => (
            <TasksStatusCard key={item.id} item={item} />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Dashboard;
