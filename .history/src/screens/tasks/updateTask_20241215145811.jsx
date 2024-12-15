//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask, updateTask} from '../../store/actions/taskAction';

// create a component
const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [id, setId] = useState(0);
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date,
    };
    setId(id + 1);
    dispatch(updateTask(task));
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
      <Button onPress={() => saveTask()} title="Güncelle" status="warning" />
    </View>
  );
};

export default UpdateTask;
