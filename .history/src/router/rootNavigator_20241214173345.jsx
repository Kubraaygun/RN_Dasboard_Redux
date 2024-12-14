// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {DASHBOARD, TASKS} from '../utils/routes';
import {Pressable, Text, View} from 'react-native';
import {ThemeColors} from '../theme/colors';
import {Notification} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitleStyle: {
          fontSize: 22,
        },
        headerShadowVisible: false,
        headerRight: () => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable>
              <Notification size="32" color={ThemeColors.black} />
            </Pressable>
            <Pressable style={{marginLeft: 5}}>
              <Notification size="32" color={ThemeColors.black} />
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
