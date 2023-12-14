import React from "react"
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native"
import { colors } from "../assets/Colors"

type Props = {
    name: string
    age: string
    sexe: string
    race: string
    description: string
    imageLink: string
}

export const ProfileComponent = (props: Props) => {
    return (
        <View style={styles.globalContainer}>
            <Image style={styles.profilePicture} source={{ uri: props.imageLink, }} />
            <View style={styles.profileDetailsContainer}>
                <View style={styles.profileDetails}>
                    <View style={styles.profileMain}>
                        <Text style={styles.profileName}>{props.name.replaceAll(" réservée", "").replaceAll(" réservé", "")}</Text>
                        <Text style={styles.detailsDescription}>{props.age}, {props.sexe}</Text>
                        <Text style={styles.detailsDescription}>Race : {props.race}</Text>
                    </View>
                    <Text style={styles.detailsTitle}>About Me</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.detailsAboutMe}>{props.description.replaceAll("<br />", "")}</Text>
                    </ScrollView>
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
        paddingBottom: 100,
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