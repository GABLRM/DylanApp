import React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { Notification } from "../components/notificationsComponent"
import { colors } from '../assets/Colors';

export const NotificationScreen = () => {
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
            closeButton={true}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });