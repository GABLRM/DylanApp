import React, { useEffect, useRef } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Svg, { G, Circle } from 'react-native-svg';
import { colors } from '../../assets/Colors';
import { LinearGradient } from 'expo-linear-gradient';

type Data = {
    percentage: number;
    scrollTo: any;
};

export const NextButton = (data: Data) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animation(data.percentage);
    }, [data.percentage]);

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                const strokeDashoffset = circumference - (circumference * value.value) / 100;4

                if (progressRef?.current) {
                    (progressRef.current as any).setNativeProps({
                        strokeDashoffset
                    })
                }
            },
        );
    }, [data.percentage]);

    return (
        <View style={styles.container}>
            {/* <Svg width={size} height={size}>
                <G rotation={-90} origin={center}>
                    <Circle
                        fill={colors.background}
                        ref={progressRef}
                        stroke="#353E4A" 
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        fill={colors.background}
                        stroke="#E6E7E8" 
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg> */}
            <TouchableOpacity onPress={data.scrollTo} activeOpacity={0.6}>
                <LinearGradient 
                start={{ x: 0.1, y: 0.7 }} end={{ x: 1.2, y: 0.5 }}
                locations={[0.1, 0.9]}
                colors={['#4A90E2', '#28A544']} style={styles.button}>
                    <AntDesign name="arrowright" size={32} color="#fff" />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 100,
        padding: 20,
    }
})