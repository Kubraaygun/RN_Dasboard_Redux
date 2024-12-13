// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    Dashboard: Dashboard,
    Tasks: Tasks,
  },
});

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator;