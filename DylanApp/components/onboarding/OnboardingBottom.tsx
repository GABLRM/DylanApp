import React, { useEffect, useRef } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Svg, { G, Circle } from 'react-native-svg';
import { colors } from '../../assets/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { NextButton } from './NextButton';
import { Paginator } from './Paginator';
import { onboardingSlides } from './OnboardingSlides';
import BorderButtonComponent from '../borderButtonComponent';
import FullButtonComponent from '../fullButtonComponent';

type Data = {
    currentIndex: number;
    scrollX: Animated.Value;
    scrollTo: any;
};

export const OnboardingBottom = (data: Data) => {

    if (data.currentIndex !== onboardingSlides.length - 1) {
        return (
            <View style={styles.container} >
                <NextButton percentage={(data.currentIndex + 1) * (100 / onboardingSlides.length)} scrollTo={ data.scrollTo } />
                <Paginator items={onboardingSlides} scrollX={data.scrollX} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <FullButtonComponent title="Register" />
                <BorderButtonComponent title="Login" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})