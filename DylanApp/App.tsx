import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import MatchComponent from './components/MatchComponent';
import { colors } from "./assets/Colors"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Onboarding } from './components/onboarding/Onboarding';
import React from 'react';

const Match = () => {
  return (
    <View style={styles.body}>
      <Onboarding />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lilita-One': require('./assets/fonts/LilitaOne-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Onboarding" component={() => null} /> */}
        <Stack.Screen name="Match" component={Match} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
