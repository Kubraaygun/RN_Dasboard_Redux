//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, More} from 'iconsax-react-native';

// create a component
const TaskItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={{minHeight: 40}}>
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 100,
            }}>
            <Text style={{color: ThemeColors.white, fontWeight: '500'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar1 size="20" color={ThemeColors.black} variant="outline" />
          <Text style={styles.date}>{item.date}</Text>
        </View>
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
  date: {
    fontSize: 16,
  },
});

//make this component available to the app
export default TaskItem;
