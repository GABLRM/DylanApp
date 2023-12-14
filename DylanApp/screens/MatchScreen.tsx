import React from 'react';
import { StyleSheet, View } from "react-native"
import MatchComponent from "../components/MatchComponent"
import { colors } from '../assets/Colors';

export const MatchScreen = () => {
    return (
        <View style={styles.container}>
            <MatchComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});