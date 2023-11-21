import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Onboarding } from './components/onboarding/Onboarding';
import { colors } from './assets/Colors';

export default function App() {
  return (
    <View style={styles.body}>
      <Onboarding />
    </View>
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