import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import Repositories from './components/Repositories';
import Note from './components/Notes';
import Web from './components/WebView'
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile Details" component={ProfileDetails} />
        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="Note" component={Note} /> 
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WEB" component={Web} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}