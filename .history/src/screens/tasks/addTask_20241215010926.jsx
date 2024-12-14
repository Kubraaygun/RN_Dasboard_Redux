//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

// create a component
const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const saveTask = () => {
    const form = {
      title: title,
      status: status,
      date: date,
    };
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Input
        onChangeText={value => setTitle(value)}
        value={title}
        placeholder="Please set title"
        title="Task Title"
      />
      <Input
        onChangeText={value => setDate(value)}
        value={date}
        placeholder="Please set date"
        title="Task Date"
      />
      <Input
        onChangeText={value => setStatus(value)}
        value={status}
        placeholder="Please set status"
        title="Task Status"
      />
      <Button
        onPress={() => console.log('basildi')}
        title="Kaydet"
        status="success"
      />
    </View>
  );
};

export default AddTask;