import React, { useEffect, useState } from 'react';
import { Onboarding } from './components/onboarding/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTab from './navigation/HomeBottomTab';
import { MenuNotificationsScreen } from './components/menuNotifications';
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MatchScreen } from './screens/MatchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeBottomTab} />
          <Stack.Screen name="Match" component={MatchScreen} />
          {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}