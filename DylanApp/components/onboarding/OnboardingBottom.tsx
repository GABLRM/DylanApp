import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
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
                <NextButton percentage={(data.currentIndex + 1) * (100 / onboardingSlides.length)} scrollTo={data.scrollTo} />
                <Paginator items={onboardingSlides} scrollX={data.scrollX} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <FullButtonComponent title="Register" navigate='Home' />
                <BorderButtonComponent title="Login" navigate='Home' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})