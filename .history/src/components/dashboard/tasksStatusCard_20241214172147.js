//import liraries
import {MoreCircle} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

// create a component
const TasksStatusCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.value}>{item.value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size="32" color="#FF8A65" variant="Bold" />
        </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    width: '45%',
    height: 170,
    borderRadius: 8,
    flexDirection: 'row',
  },
  value: {
    fontSize: 30,
  },

  status: {},
});

//make this component available to the app
export default TasksStatusCard;
