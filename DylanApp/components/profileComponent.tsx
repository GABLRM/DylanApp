import React from "react"
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { colors } from "../assets/Colors"

export const ProfileComponent = () => {
    return (
        <View style={styles.globalContainer}>
            <Image style={styles.profilePicture} source={require("../assets/images/dodge_glasses.png")} />
            <View style={styles.profileDetailsContainer}>
                <View style={styles.profileDetails}>
                    <View style={styles.profileMain}>
                        <Text style={styles.profileName}>Dog.name</Text>
                        <Text style={styles.detailsDescription}>Dog.age yo, Dog.sexe, Dog.Race</Text>
                    </View>
                    <Text style={styles.detailsTitle}>About Me</Text>
                    <Text style={styles.detailsAboutMe}>Dog.description</Text>
                </View>
            </View>
        </View>
    )
}

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
    profilePicture: {
        marginTop: 60,
        borderRadius: 20,
        width: 300,
        height: 300,
    },
    profileName: {
        marginTop: 10,
        color: colors.white,
        fontSize: 40,
        fontWeight: "800",
    },
    profileDescription: {
        textAlign: "center",
        marginTop: 5,
        color: colors.white,
        fontSize: 20,
        fontWeight: "200",
    },
    profileDetailsContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: "column",
        width: Dimensions.get("window").width,
    },
    profileDetails: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 40,
        height: "100%",
    },
    profileMain: {
        marginBottom: 25
    },
    detailsTitle: {
        fontSize: 25,
        color: colors.white,
        fontWeight: "600",
    },
    detailsDescription: {
        fontSize: 20,
        marginBottom: 20,
        color: colors.white,
    },
    detailsAboutMe: {
        color: colors.white,
        fontWeight: "300",
        fontSize: 20,
    },
})