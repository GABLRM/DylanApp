import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, ViewToken } from 'react-native'
import { OnboardingItem } from './OnboardingItem';
import { onboardingSlides } from './OnboardingSlides';
import { OnboardingBottom } from './OnboardingBottom';
import { colors } from '../../assets/Colors';

export const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < onboardingSlides.length - 1) {
            (slidesRef as any).current.scrollToIndex({ index: currentIndex + 1 })
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={onboardingSlides}
                    renderItem={({ item }) => <OnboardingItem title={item.title} description={item.description} image={item.image} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    viewabilityConfig={viewConfig}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={slidesRef}
                />
            </View>
            <OnboardingBottom currentIndex={currentIndex} scrollX={scrollX} scrollTo={scrollTo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 40,
        alignItems: "center",
        backgroundColor: colors.background,
    }
})