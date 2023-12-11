import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../assets/Colors";

type Message = {
    petName: string;
    pathPetPic: any;
}

// !!TODO: Fix this with the realpetname with the API
// const setPetName = (petName: string) => {
//   return petName;
// }
// const setPathPetPic = (pathPetPic: string) => {
//   return pathPetPic;
// }

const textReturn = "<    Back";

const petData = [
  { petName: "Dylaqfgshtdjykufthdsdfqsqferzgsetydrftukn1", pathPetPic: require("../assets/chien.png") },
  { petName: "Dylan2", pathPetPic: require("../assets/chien.png") },
  { petName: "Dylan3", pathPetPic: require("../assets/chien.png") },
];


export const MenuNotificationsScreen = (navigation: any) => {
  return (
    <View style={styleMenu.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Card') } style={styleMenu.textBack}>
        <Text style={styleMenu.textColor}>{textReturn}</Text>
      </TouchableOpacity>
      <View style={styleMenu.containerNotifications}>
        {petData.map((item, index) => (
          <View key={index} style={{width: "100%"}}>
            <MenuNotifications
              key={index}
              petName={item.petName}
              pathPetPic={item.pathPetPic}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export const MenuNotifications = ({petName, pathPetPic}: Message) => {
  const alertPress = () => {
    alert("Your pet can get a new friend!");
  }
  
  return (
    <LinearGradient
      colors={["#4A90E2", "#28A544"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styleMenu.linearGradient}
    >
      <View style={styleMenu.boxNotification}>
        <Image
          source={pathPetPic}
          style={styleMenu.image}
        />
        <View style={styleMenu.boxText}>
          <Text style={styleMenu.textNotification}>
            Your dog, <Text style={{fontWeight: "400"}}>{petName}</Text>, has a new match!
          </Text>
          <View style={styleMenu.littleButton}>
            <Text style={styleMenu.littleButtonText} onPress={alertPress}>Send a message!</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styleMenu = StyleSheet.create({
  linearGradient: {
    display: "flex",
    padding: 1,
    borderRadius: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  boxNotification: {
    borderRadius: 15,
    flexDirection: "row",
    gap: 10,
    padding: 15,
    backgroundColor: "#353E4A",
    paddingVertical: "auto",
  },
  boxText: {
    gap: 5,
    marginVertical: 10,
    width: "70%",
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
  textBack: {
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
  textColor: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  containerNotifications: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    gap: 11,
    marginTop: 100,
    width: "87%",
  },
});

export default MenuNotifications;
