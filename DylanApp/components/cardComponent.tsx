import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../assets/Colors";


type Props = {
    name: string;
    source: string;
    sexe: string;
    race: string;
    age: string;
}

const { height, width } = Dimensions.get("screen")

export const Card = (props: Props) => {
    return (
        <View style={styles.card}>
            <Image source={{uri:  props.source,}} style={styles.image} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,.9)']}
                style={styles.linearGradient}
            >
                <View style={styles.userContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.details}>{props.age}, {props.race}</Text>
                    <Text style={styles.details}>{props.sexe}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        top: 70,
    },
    image: {
        height: height * 0.65,
        width: width * 0.9,
        borderRadius: 20,
        backgroundColor: colors.backgroundLight,
    },
    linearGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    userContainer: {
        position: "absolute",
        bottom: 24,
        left: 24,
        width: width * 0.8
    },
    name: {
        fontSize: 50,
        color: colors.white,
        fontWeight: "700",
    },
    details: {
        fontSize: 24,
        color: colors.white,
        fontWeight: "400"
    },
})

export default Card;
