import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Message = {
    petName: string;
}

const MenuNotifications = ({petName}: Message) => {
  return (
    <LinearGradient
      colors={["#4A90E2", "#28A544"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styleMenu.linearGradient}
    >
      <View style={styleMenu.boxNotification}>
        <Image
          source={require("../assets/chien.png")}
          style={styleMenu.image}
        />
        <View style={styleMenu.boxText}>
          <Text style={styleMenu.textNotification}>
            Your dog, {petName}, has a new match!
          </Text>
          <View style={styleMenu.littleButton}>
            <Text style={styleMenu.littleButtonText}>Send a message!</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styleMenu = StyleSheet.create({
  linearGradient: {
    display: "flex",
    padding: 2.5,
    borderRadius: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  boxNotification: {
    borderRadius: 4,
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: "#353E4A",
    paddingVertical: "auto",
  },
  boxText: {
    gap: 5,
    marginVertical: 10,
  },
  textNotification: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "100",
    paddingVertical: "auto",
    marginTop: -8,
  },
  littleButton: {
    flex: 0,
    backgroundColor: "#3190DA",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 0.5,
    padding: 5,
    marginTop: 7,
    marginRight: "auto",
  },
  littleButtonText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "300",
    paddingVertical: "auto",
    paddingHorizontal: 10,
    flex: 0,
  },
});

export default MenuNotifications;
