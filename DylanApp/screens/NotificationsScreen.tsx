import React from 'react';
import { StyleSheet, View } from "react-native"
import MatchComponent from "../components/MatchComponent"
import { colors } from '../assets/Colors';
import { MenuNotificationsScreen } from '../components/menuNotifications';

export const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <MenuNotificationsScreen/>
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