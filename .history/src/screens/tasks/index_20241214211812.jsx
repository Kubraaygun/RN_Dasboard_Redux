//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatAcionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';

// create a component
const Tasks = () => {
  const {tasks} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList data={tasks} renderItem={item => <Text>{item.title}</Text>} />
      <FloatAcionButton />
    </View>
  );
};

export default Tasks;
