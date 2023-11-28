import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
      <Text>coucou</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleShowNotification}>
        <Notification
          message={notificationMessage}
          visible={visible}
          onClose={handleCloseNotification}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
