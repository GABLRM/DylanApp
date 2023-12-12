import React, { useState } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native"
import { colors } from "../assets/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHeart, faUser, faComment } from "@fortawesome/free-regular-svg-icons"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"

export const NavbarComponent = ({ state, navigation }: BottomTabBarProps) => {
    const screens = state.routes
    const [focusedIndex, setFocusedIndex] = useState<number | 0>(0);

    const navigate = (index: number, routeName: string) => {
        setFocusedIndex(index);
        navigation.navigate(routeName);
    };

    const getTabIcon = (name: string, isFocused: boolean) => {
        switch (name) {
            case "Matches":
                return <FontAwesomeIcon icon={faHeart} size={25} style={{ color: isFocused ? colors.blue : colors.white }} />
            case "Notifications":
                return <FontAwesomeIcon icon={faComment} size={25} style={{ color: isFocused ? colors.blue : colors.white }} />
            case "Profile":
                return <FontAwesomeIcon icon={faUser} size={25} style={{ color: isFocused ? colors.blue : colors.white }} />
            default:
                return null;
        }
    }

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.navbarInnerContainer}>
                {screens.map((route, index) => (
                    <TouchableOpacity style={styles.navbarButton} onPress={() => navigate(index, route.name)}>
                        {getTabIcon(route.name, index === focusedIndex)}
                        <Text style={styles.navbarText}>{route.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: colors.backgroundLight,
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
    navbarText: {
        color: colors.white,
        fontSize: 15,
    }
})

export default NavbarComponent;