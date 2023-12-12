import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../assets/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons"
import { LinearGradient } from "expo-linear-gradient"

const FooterCard = () => {
    return (
        <View style={styles.footerContainer}>
            <View>
                <LinearGradient
                    colors={['#4A90E2', '#28A544']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.linearGradient}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faXmark} size={40} color={colors.blue} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View>
                <LinearGradient
                    colors={['#4A90E2', '#28A544']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.linearGradient}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faHeart} size={35} color={colors.blue} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 100,
        width: 240,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    linearGradient: {
        marginBottom: 10,
        height: 60,
        width: 60,
        borderRadius: 40,
    },
    innerContainer: {
        borderRadius: 39,
        flex: 1,
        margin: 3,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: "center",
    },

})

export default FooterCard;