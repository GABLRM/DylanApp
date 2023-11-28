import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { colors } from '../../assets/Colors';

type Props = {
    image: any;
    title: string;
    description: string;
  };

export const OnboardingItem = (props: Props) => {
    const { width } = useWindowDimensions();

    return (

        <View style={[styles.container, { width }]}>
            <Image source={ props.image } style={[styles.image, {width, resizeMode: 'contain'}]} />
        
            <View >
                <Text style={styles.title}>{ props.title }</Text>
                <Text style={styles.description}>{ props.description }</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: '700',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        color: colors.white,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: colors.light,
        textAlign: 'center',
    },
})