import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Message = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

const Notification = ({ message, visible, onClose }: Message) => {
  if (!visible) {
    return null;
  }
  return (
    <View
      style={[
        styleNotification.notification,
        visible ? styleNotification.visible : null,
      ]}
    >
      <Image
        source={require("../assets/favicon.png")}
        style={{ width: 50, height: 50 }}
      />
      <Text style={styleNotification.textNotification}>{message}</Text>
      <Text style={{ color: "white" }} onPress={onClose}>
        {"x"}
      </Text>
    </View>
  );
};

const styleNotification = StyleSheet.create({
  notification: {
    display: "none",
    backgroundColor: "#353E4A",
    padding: 20,
    borderRadius: 4,
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: "row",
    gap: 10,
  },
  visible: {
    display: "flex",
    color: "#ffffff",
  },
  textNotification: {
    color: "#ffffff",
    top: 15,
  },
});

export default Notification;
