import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import MainNavigator from './src/router/rootNavigator';
import store from './src/store';
import Background from './src/components/ui/background';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Background>
          <MainNavigator />
        </Background>
      </NavigationContainer>
    </Provider>
  );
}