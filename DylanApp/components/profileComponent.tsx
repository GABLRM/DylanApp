import React from "react"
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { colors } from "../assets/Colors"

export const ProfileComponent = () => {
    return (
        <View style={styles.globalContainer}>
            <View style={styles.profileContainer}>
                <Image style={styles.profilePicture} source={require("../assets/images/dodge_glasses.png")} />
                <Text style={styles.profileName}>Dog.name</Text>
                <Text style={styles.profileDescription}>Dog.description</Text>
            </View>
            <View style={styles.profileDetailsContainer}>
                <View style={styles.profileDetails}>
                    <View style={styles.profileDetailsLeft}>
                        <Text style={styles.detailsTitle}>Sexe :</Text>
                        <Text style={styles.detailsDescription}>Dog.sexe</Text>
                    </View>
                    <View style={styles.profileDetailsRight}>
                        <Text style={styles.detailsTitle}>Race :</Text>
                        <Text style={styles.detailsDescription}>Dog.race</Text>
                    </View>
                </View>
                <View style={styles.profileDetails}>
                    <View style={styles.profileDetailsLeft}>
                        <Text style={styles.detailsTitle}>Age :</Text>
                        <Text style={styles.detailsDescription}>Dog.age</Text>
                    </View>
                    <View style={styles.profileDetailsRight}>
                        <Text style={styles.detailsTitle}>Categorie :</Text>
                        <Text style={styles.detailsDescription}>Dog.categorie</Text>
                    </View>
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
    profileContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    profilePicture: {
        borderRadius: 100,
        width: 200,
        height: 200,
    },
    profileName: {
        marginTop: 10,
        color: colors.white,
        fontSize: 40,
        fontWeight: "800",
    },
    profileDescription: {
        textAlign: "center",
        marginTop: 20,
        color: colors.white,
        fontSize: 20,
        fontWeight: "200",
    },
    profileDetailsContainer: {
        flex: 1,
        flexDirection: "column",
        width: Dimensions.get("window").width,
    },
    profileDetails: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 40,
        height: "100%",
        justifyContent: "space-between"
    },
    profileDetailsLeft: {
        flexDirection: "column",
        alignSelf: "flex-start",
    },
    detailsTitle: {
        fontSize: 35,
        color: colors.white,
        fontWeight: "600",
    },
    detailsDescription: {
        fontSize: 25,
        fontWeight: "300",
        color: colors.white,
    },
    profileDetailsRight : {
        flexDirection: "column",
    }
})