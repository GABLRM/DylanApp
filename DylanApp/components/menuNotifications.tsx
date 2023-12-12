import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../assets/Colors";
import { ScrollView } from "react-native";

type Message = {
  petName: string;
  pathPetPic: string;
};

type Dog = {
  id: string;
  name: string;
  age_number: string;
  sex_label: string;
  races_label: string;
  description: string;
  image: string;
};

const textReturn = "<    Back";

export const MenuNotificationsScreen = (navigation: any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Dog[]>();

  const getDogs = async () => {
    try {
      const response = await fetch(
        "https://www.la-spa.fr/app/wp-json/spa/v1/animals/search/?api=1&species=chien&paged=1&seed=789229258975902"
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      getDogs();
    }
  }, []);

  if (!isLoading) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View style={styleMenu.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Card")}
            style={styleMenu.textBack}
          >
            <Text style={styleMenu.textColor}>{textReturn}</Text>
          </TouchableOpacity>
          <View style={styleMenu.containerNotifications}>
            {data?.map((dog, index) => (
              <View key={index} style={{ width: "100%" }}>
                <MenuNotifications
                  key={index}
                  petName={dog.name}
                  pathPetPic={dog.image}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
};

export const MenuNotifications = ({ petName, pathPetPic }: Message) => {
  const alertPress = () => {
    alert("Your pet can get a new friend!");
  };

  return (
    <LinearGradient
      colors={["#4A90E2", "#28A544"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styleMenu.linearGradient}
    >
      <View style={styleMenu.boxNotification}>
        <Image source={{ uri: pathPetPic }} style={styleMenu.image} />
        <View style={styleMenu.boxText}>
          <Text style={styleMenu.textNotification}>
            <Text style={{ fontWeight: "400" }}>{petName}</Text>, want to be
            your dog's friend!
          </Text>
          <View style={styleMenu.littleButton}>
            <Text style={styleMenu.littleButtonText} onPress={alertPress}>
              Send a message!
            </Text>
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
