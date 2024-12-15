// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {ADDTASK, DASHBOARD, TASKS, UPDATETASK} from '../utils/routes';
import {Pressable, Text, View} from 'react-native';
import {ThemeColors} from '../theme/colors';
import {Notification, TaskSquare} from 'iconsax-react-native';
import AddTask from '../screens/tasks/addTask';
import UpdateTask from '../screens/tasks/updateTask';
import {ApplicationProvider} from '@ui-kitten/components';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApplicationProvider {...{theme}}>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerTitleStyle: {
            fontSize: 22,
          },
          headerBackTitle: 'Back',
          headerTintColor: ThemeColors.black,
          headerShadowVisible: false,
        })}>
        <Stack.Screen
          options={({route, navigation}) => ({
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <Pressable>
                  <Notification size="32" color={ThemeColors.black} />
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate(TASKS)}
                  style={{marginLeft: 15}}>
                  <TaskSquare size="30" color={ThemeColors.black} />
                </Pressable>
              </View>
            ),
          })}
          name={DASHBOARD}
          component={Dashboard}
        />
        <Stack.Screen name={TASKS} component={Tasks} />
        <Stack.Screen name={ADDTASK} component={AddTask} />
        <Stack.Screen name={UPDATETASK} component={UpdateTask} />
      </Stack.Navigator>
    </ApplicationProvider>
  );
}
export default App;
