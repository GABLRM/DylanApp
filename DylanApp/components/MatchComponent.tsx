import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import FullButtonComponent from "./fullButtonComponent";
import BorderButtonComponent from "./borderButtonComponent";
import { colors } from "../assets/Colors"
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MatchComponent = () => {
    


    return (
        <View style={styles.globalContainer}>
            <Image
                style={styles.backgroundImage}
                source={require("../assets/images/matchGif.gif")} />
            <LinearGradient
                colors={['#4A90E2', '#28A544']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}>
                <View style={styles.innerContainer}>
                    <View style={styles.innerInnerContainer}>
                        <Text style={styles.title}>It's a Match!</Text>
                        <Text style={styles.subTitle}>Amazing, you have a new friend</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.imageUn}
                                source={require('../assets/images/dodge.png')} />
                            <Image
                                style={styles.imageDeux}
                                source={require('../assets/images/dodge_glasses.png')} />
                        </View>
                        <FullButtonComponent title="Send A Message" />
                        <View style={styles.margin}></View>
                        <BorderButtonComponent title="Keep Swipping" />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    globalContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    linearGradient: {
        marginBottom: 10,
        height: 450,
        width: 350,
        borderRadius: 15
    },
    innerContainer: {
        borderRadius: 12,
        flex: 1,
        margin: 3, // <-- Border Width
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#000',
        backgroundColor: colors.background
    },
    innerInnerContainer: {
        backgroundColor: colors.background,
        height: 400,
        width: 300
    },
    title: {
        textAlign: "center",
        fontFamily: "Lilita-One",
        color: "#fff",
        fontSize: 35,
        marginBottom: 5,
    },
    subTitle: {
        color: colors.light,
        textAlign: "center",
        fontFamily: "Lilita-One",
        marginBottom: 50,
    },
    imageContainer: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,

    },
    imageUn: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageDeux: {
        marginLeft: -20,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.background
    },
    margin: {
        margin: 15,
    },
});

export default MatchComponent;