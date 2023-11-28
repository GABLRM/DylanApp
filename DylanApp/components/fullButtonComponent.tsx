import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string
}
const FullButtonComponent = (props: Props) => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0.1, y: 0.7 }} end={{ x: 1.2, y: 0.5 }}
                locations={[0.1, 0.9]}
                colors={['#4A90E2', '#28A544']} style={styles.button}>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.textButton}>{props.title}</Text>
                </TouchableOpacity>
            </LinearGradient>
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