// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {DASHBOARD, TASKS} from '../utils/routes';
import {Pressable, Text, View} from 'react-native';
import {ThemeColors} from '../theme/colors';
import {Notification, TaskSquare} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitleStyle: {
          fontSize: 22,
        },
        headerBackTitle: 'Back',
        headerShadowVisible: false,
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
      })}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={TASKS} component={Tasks} />
    </Stack.Navigator>
  );
}
export default App;
