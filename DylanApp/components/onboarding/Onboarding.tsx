import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, ViewToken } from 'react-native'

import { OnboardingItem } from './OnboardingItem';
import { Paginator } from './Paginator';
import { onboardingSlides } from './OnboardingSlides';
import { NextButton } from './NextButton';

export const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems}: { viewableItems: ViewToken[] } ) => {
        if (viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < onboardingSlides.length - 1) {
            (slidesRef as any).current.scrollToIndex({index: currentIndex + 1})
        } else {
            console.log("last item")
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex : 3 }}>
                <FlatList
                    data={onboardingSlides}
                    renderItem={({ item }) => <OnboardingItem title={ item.title } description={ item.description } image={item.image} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false} 
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset : { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    viewabilityConfig={viewConfig}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={slidesRef}
                />
            </View>
            <NextButton percentage={(currentIndex + 1) * (100 / onboardingSlides.length)} scrollTo={ scrollTo } />
            <Paginator items={onboardingSlides} scrollX={scrollX} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 40,
        alignItems: "center"
    }
})