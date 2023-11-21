import React from 'react';
import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { ItemsSlidesType } from './OnboardingSlides';
import { colors } from '../../assets/Colors';

type Data = {
    items: Array<ItemsSlidesType>;
    scrollX: Animated.Value;
  };

export const Paginator = ( data  : Data) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{flexDirection: 'row', height: 64}}>
            {data.items.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const dotWidth = data.scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                })

                const dotOpacity = data.scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                })

                return <Animated.View style={[styles.dot, {width: dotWidth, opacity : dotOpacity}]} key={index.toString()} />
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.light,
        marginHorizontal: 8,
    }
})