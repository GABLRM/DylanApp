import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../assets/Colors';
import { Card } from '../components/cardComponent';
import FooterCard from '../components/footerCardComponent';
import CardsSwipe from 'react-native-cards-swipe';


//change data cards={data} with api request
export const TinderCardScreen = () => {
  return (
    <View style={styles.container}>
          <CardsSwipe
            animDuration={400}
            //cards={data}
            renderCard={(card) => (
              <Card
                key={card.name}
                name={card.name}
                source={card.source}
                sexe={card.sexe}
                race={card.race}
                age={card.age}
              />
            )}
          />
      <FooterCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
