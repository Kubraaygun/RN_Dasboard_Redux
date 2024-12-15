//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/taskAction';
import RNPickerSelect from 'react-native-picker-select';
const statusOptions = [
  {label: 'Pending', value: 'pending'},
  {label: 'In Progress', value: 'in_progress'},
  {label: 'Completed', value: 'completed'},
  {label: 'On Hold', value: 'on_hold'},
];

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
    setId(id + 1);
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

      <RNPickerSelect
        onChangeText={value => setStatus(value)}
        items={statusOptions}
        placeholder={{label: 'Please set status', value: null}}
        value={status}
        title="Task Status"
      />
      <Button onPress={() => saveTask()} title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
