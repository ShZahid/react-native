import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens1/LoginScreen';
import WelcomeScreen from './Screens1/WelcomeScreen';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;