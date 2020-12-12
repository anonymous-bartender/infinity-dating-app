import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/Screens/Landing';
import Profile from './components/Screens/Profile';
import Settings from './components/Screens/Settings';
import Home from './components/Screens/Home';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <Landing />
    </SafeAreaView>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <Profile />
    </SafeAreaView>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <Settings />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ title: 'Welcome'}}
          // options={{ title: 'Welcome',headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
