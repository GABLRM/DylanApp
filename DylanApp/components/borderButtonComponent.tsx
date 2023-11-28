import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../assets/Colors'

type Props = {
    title: string
}
const BorderButtonComponent = (props: Props) => {
    return (
        <View>
            <LinearGradient
                colors={['#4A90E2', '#28A544']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}>
                <View style={styles.innerContainer}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        marginBottom: 10,
        height: 60,
        width: 300,
        borderRadius: 15, // <-- Outer Border Radius
    },
    innerContainer: {
        borderRadius: 12, // <-- Inner Border Radius
        flex: 1,
        margin: 3, // <-- Border Width
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
});

export default BorderButtonComponent;