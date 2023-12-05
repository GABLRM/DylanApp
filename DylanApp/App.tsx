import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Onboarding } from './components/onboarding/Onboarding';
import { colors } from './assets/Colors';
import Notification from "./components/notificationsComponent";
import MatchComponent from './components/MatchComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTab from './navigation/HomeBottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeBottomTab} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
