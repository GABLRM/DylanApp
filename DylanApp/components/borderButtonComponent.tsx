import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string
}
const BorderButtonComponent = (props: Props) => {
    return (
        <>
            <LinearGradient
                colors={['#4A90E2', '#28A544']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </View>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        marginBottom: 10,
        height: 45,
        width: 300,
        borderRadius: 15, // <-- Outer Border Radius
    },
    innerContainer: {
        borderRadius: 12, // <-- Inner Border Radius
        flex: 1,
        margin: 3, // <-- Border Width
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#000',
        backgroundColor: 'transparent',
    },
});

export default BorderButtonComponent;