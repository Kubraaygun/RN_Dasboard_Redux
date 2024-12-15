//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, More} from 'iconsax-react-native';
import {setColor} from '../../utils/function';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/taskAction';

// create a component
const TaskItem = ({item}) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert(
      'Uyari',
      'Kayit Silinecek Emin misiniz ?',

      [
        {
          text: 'Emin misiniz?',
          onPress: () => dispatch(deleteTask(item.id)),
        },
        {
          text: 'Vazgec?',
          onPress: () => console.log('Cancel'),
          style: 'cancel',
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              borderRadius: 100,
            }}>
            <Text style={{color: ThemeColors.white, fontWeight: '500'}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar1 size="20" color={ThemeColors.black} variant="Outline" />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={deleteTask}>
        <More size="25" color={ThemeColors.black} variant="Outline" />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: ThemeColors.black,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 140,
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
