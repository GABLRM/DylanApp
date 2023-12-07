import React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native"
import { colors } from "../assets/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHeart, faUser, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import HomeBottomTab from "../navigation/HomeBottomTab"

const getTabIcon = (name: string) => {
    switch (name) {
        case "Matches":
            return <FontAwesomeIcon icon={faHeart} size={25} style={styles.navbarIcon} />
        case "Notifications":
            return <FontAwesomeIcon icon={faComment} size={25} style={styles.navbarIcon} />
        case "Profile":
            return <FontAwesomeIcon icon={faUser} size={25} style={styles.navbarIcon} />
        default:
            return null;
    }
}

export const NavbarComponent = ({
    state, navigation
}: BottomTabBarProps) => {
    const screens = state.routes

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.navbarInnerContainer}>
                {screens.map((route) => (
                    <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.navigate(route.name)}>
                        {getTabIcon(route.name)}
                        <Text style={styles.navbarText}>{route.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    globalContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    navbarContainer: {
        backgroundColor: colors.background,
        position: 'absolute',
        display: 'flex',
        width: Dimensions.get("window").width,
        bottom: 0,
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    navbarInnerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    },
    navbarButton: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"

    },
    navbarIcon: {
        color: colors.white,
        marginBottom: 5,
    },
    navbarText: {
        color: colors.white,
        fontSize: 15,
    }
})

export default NavbarComponent;