// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Tasks" component={Tasks} />
    </Stack.Navigator>
  );
}
export default App;
