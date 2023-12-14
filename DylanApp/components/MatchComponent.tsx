import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import FullButtonComponent from "./fullButtonComponent";
import BorderButtonComponent from "./borderButtonComponent";
import { colors } from "../assets/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "@react-navigation/native";

const MatchComponent = () => {
    const route = useRoute();
    const { matchedDog } = route.params;
    const { profileDog } = route.params
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
                                source={{ uri: profileDog.image }} />
                            <View style={styles.innerImageContainer}>
                                <FontAwesomeIcon icon={faPaw} size={30} style={styles.paw} />
                            </View>
                            <Image style={styles.imageDeux} source={{ uri: matchedDog.image }} />
                        </View>
                        <FullButtonComponent title="Send A Message" navigate="Notifications" />
                        <View style={styles.margin}></View>
                        <BorderButtonComponent title="Keep Swipping" navigate="Matches" />
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
    innerInnerContainer: {
        backgroundColor: colors.background,
        height: 400,
        width: 300
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 35,
        marginBottom: 5,
    },
    subTitle: {
        color: colors.light,
        textAlign: "center",
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
        borderColor: colors.background,
    },
    innerImageContainer: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        width: 50,
        height: 50,
        zIndex: 100,
        borderRadius: 50,
        backgroundColor: colors.background,
    },
    paw: {
        position: 'absolute',
        top: 10,
        zIndex: 100,
        color: colors.white,
    },
    margin: {
        margin: 15,
    },
});

export default MatchComponent;