//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

// create a component
const Dashboard = () => {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 12000},
    {quarter: 3, earnings: 18000},
  ];

  const {taskStatus} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView style={styles.container}>
        <SectionTitle title={'Project Summary'} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: 1,
          }}>
          {taskStatus.map(item => (
            <TasksStatusCard key={item.id} item={item} />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
        <View>
          <VictoryChart width={350} theme={VictoryTheme.clean}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </View>
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
