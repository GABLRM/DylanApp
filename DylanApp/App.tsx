import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Onboarding } from './components/onboarding/Onboarding';
import { colors } from './assets/Colors';
import Notification from "./components/notificationsComponent";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleShowNotification = () => {
    setNotificationMessage("Ceci est un message de notification !");
  };

  const handleCloseNotification = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Onboarding />
      <Text>coucou</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleShowNotification}>
        <Notification
          message={notificationMessage}
          visible={visible}
          onClose={handleCloseNotification}
          closeButton={true}
        />
      </TouchableOpacity>
    </View>
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