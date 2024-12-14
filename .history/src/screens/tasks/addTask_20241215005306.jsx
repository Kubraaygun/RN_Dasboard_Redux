//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

// create a component
const AddTask = () => {
  const [title, setTitle] = useState('Merhaba');
  return (
    <View style={defaultScreenStyle.container}>
      <Input value={title} placeholder="Please set title" title="Task Title" />
      <Input placeholder="Please set date" title="Task Date" />
      <Input placeholder="Please set status" title="Task Status" />
      <Button
        onPress={() => console.log('basildi')}
        title="Kaydet"
        status="success"
      />
    </View>
  );
};

export default AddTask;
