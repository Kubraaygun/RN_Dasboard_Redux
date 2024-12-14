//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryChart, VictoryTheme} from 'victory-native';

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
            justifyContent: 'center',
            padding: 1,
          }}>
          {taskStatus.map(item => (
            <TasksStatusCard key={item.id} item={item} />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <VictoryPie
            padAngle={1}
            width={380}
            height={360}
            data={[
              {x: 'In Review', y: 30},
              {x: 'In Progress', y: 35},
              {x: 'Complated', y: 25},
              {x: 'On Hold', y: 10},
            ]}
            theme={VictoryTheme.clean}
          />
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
