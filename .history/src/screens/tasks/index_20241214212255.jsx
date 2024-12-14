//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatAcionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';

// create a component
const Tasks = () => {
  const {tasks} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Henuz bir is olusturulmadi
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem />}
      />
      <FloatAcionButton />
    </View>
  );
};

export default Tasks;
