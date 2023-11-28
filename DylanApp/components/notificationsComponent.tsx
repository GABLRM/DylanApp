import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image } from "react-native";

type Message = {
  message: string;
  visible: boolean;
  onClose: () => void;
  closeButton: boolean;
};

const Notification = ({ message, visible, onClose, closeButton }: Message) => {
  if (!visible) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#4A90E2", "#28A544"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styleNotification.linearGradient}
    >
      <View
        style={[
          styleNotification.notification,
          visible ? styleNotification.visible : null,
        ]}
      >
        <Image
          source={require("../assets/heart.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styleNotification.textNotification}>{message}</Text>
        {message && (
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "100",
              paddingVertical: "auto",
              marginTop: -8,
            }}
            onPress={onClose}
          >
            {"x"}
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styleNotification = StyleSheet.create({
  notification: {
    display: "none",
    backgroundColor: "#353E4A",
    padding: 10,
    borderRadius: 4,
    borderColor: "red",
    flexDirection: "row",
    gap: 5,
  },
  visible: {
    display: "flex",
    color: "#ffffff",
  },
  textNotification: {
    color: "#ffffff",
    top: 15,
  },
  linearGradient: {
    display: "flex",
    padding: 2.5,
    borderRadius: 5,
  },
});

export default Notification;
