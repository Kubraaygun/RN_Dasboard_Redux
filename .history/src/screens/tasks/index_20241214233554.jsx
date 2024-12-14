//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatAcionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';
import {ADDTASK} from '../../utils/routes';

// create a component
const Tasks = ({navigation}) => {
  const {tasks} = useSelector(state => state?.tasks);
  const [task, setTask] = useState([]);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Henuz bir is olusturulmadi
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatAcionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Tasks;
