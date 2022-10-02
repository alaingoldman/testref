import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  StatusBar
} from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'}/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home.tsx' }}
        />
        <Stack.Screen
          name="PageOne"
          component={PageOne}
          options={{ title: 'PageOne.tsx' }}
        />
        <Stack.Screen
          name="PageTwo"
          component={PageTwo}
          options={{ title: 'PageTwo.tsx' }}
        />
        <Stack.Screen
          name="PageThree"
          component={PageThree}
          options={{ title: 'PageThree.tsx' }}
        />
        {/* screens here.. */}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
