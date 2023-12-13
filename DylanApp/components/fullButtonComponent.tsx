import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string
    navigate: string
}


const FullButtonComponent = (props: Props,) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(props.navigate)}>
                <LinearGradient
                    start={{ x: 0.1, y: 0.7 }} end={{ x: 1.2, y: 0.5 }}
                    locations={[0.1, 0.9]}
                    colors={['#4A90E2', '#28A544']} style={styles.button}>
                    <Text style={styles.textButton}>{props.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 55,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "600",
    }

})

export default FullButtonComponent;