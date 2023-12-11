import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Onboarding } from "./components/onboarding/Onboarding";
import { colors } from "./assets/Colors";
import Notification from "./components/notificationsComponent";
import MatchComponent from "./components/MatchComponent";
import { MenuNotificationsScreen } from "./components/menuNotifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

const Match = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MatchComponent />
    </View>
  );
};


const NotificationScreen = () => {
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
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lilita-One": require("./assets/fonts/LilitaOne-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuNotification" component={MenuNotificationsScreen}/>
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },  
});
