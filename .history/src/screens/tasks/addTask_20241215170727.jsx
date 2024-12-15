//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/taskAction';
import {statusTypes} from '../../utils/constant';
import {RadioGroup} from '@ui-kitten/components';

// create a component
const AddTask = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date,
    };

    dispatch(addNewTask(task));
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
      <RadioGroup onChange={index => setFieldValue('category', index)}>
        <Radio status="success">Software</Radio>
        <Radio status="success">Design</Radio>
        <Radio status="success">Operations</Radio>
      </RadioGroup>
      <Button onPress={() => saveTask()} title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
