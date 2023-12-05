import React from 'react';
import { StyleSheet, View } from "react-native"
import { colors } from '../assets/Colors';
import { ProfileComponent } from '../components/profileComponent';

export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileComponent />
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