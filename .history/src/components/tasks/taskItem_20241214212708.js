//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {More} from 'iconsax-react-native';

// create a component
const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.title}</Text>
      </View>
      <View>
        <More size="25" color={ThemeColors.black} variant="outline" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: ThemeColors.gray,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});

//make this component available to the app
export default TaskItem;
