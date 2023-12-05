import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Onboarding } from "./components/onboarding/Onboarding";
import { colors } from "./assets/Colors";
import Notification from "./components/notificationsComponent";
import MatchComponent from "./components/MatchComponent";
import MenuNotifications from "./components/menuNotifications";
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

// !!TODO: Fix this with the realpetname with the API
// const setPetName = (petName: string) => {
//   return petName;
// }
// const setPathPetPic = (pathPetPic: string) => {
//   return pathPetPic;
// }

const petData = [
  {petName: "Dylan", pathPetPic: require("./assets/chien.png"),},
  {petName: "Dylan2", pathPetPic: require("./assets/chien.png"),},
  {petName: "Dylan3", pathPetPic: require("./assets/chien.png"),},

];

const MenuNotificationsScreen = () => {
  return (
    // !! TODO: add back button + add padding between notifications 
    <View style={styles.container}>
      {petData.map((item, index) => (
        <MenuNotifications
          key={index}
          petName={item.petName}
          pathPetPic={item.pathPetPic}
        />
      ))}
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
        <Stack.Screen
          name="MenuNotification"
          component={MenuNotificationsScreen}
        />
        <Stack.Screen name="Notification" component={NotificationScreen} />
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
