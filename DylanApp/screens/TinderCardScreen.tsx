import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../assets/Colors';
import { Card } from '../components/cardComponent';
import CardsSwipe from 'react-native-cards-swipe';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

type Dog = {
  id: string;
  name: string;
  age_number: string
  sex_label: string
  races_label: string
  description: string
  image: string;
};

//change data cards={data} with api request
export const TinderCardScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Dog[]>([]);

  const navigation = useNavigation()

  const getDogs = async () => {
    try {
      const response = await fetch('https://www.la-spa.fr/app/wp-json/spa/v1/animals/search/?api=1&species=chien&paged=1&seed=789229258975902');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  const onSwipedRight = () => {
    setTimeout(() => {
      navigation.navigate('Match')
    }, 500);
  }

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <CardsSwipe
          ref={swiper => { this.swiper = swiper }}
          animDuration={400}
          cards={data}
          onSwipedRight={onSwipedRight}
          renderCard={(card) => (
            <Card
              key={card.name}
              name={card.name}
              source={card.image}
              sexe={card.sex_label}
              race={card.races_label}
              age={card.age_number}
            />
          )}
        />
        <View style={styles.footerContainer}>
          <View>
            <LinearGradient
              colors={['#4A90E2', '#28A544']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}>
              <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => { this.swiper.swipeLeft() }}>
                  <FontAwesomeIcon icon={faXmark} size={40} color={colors.blue} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
          <View>
            <LinearGradient
              colors={['#4A90E2', '#28A544']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}>
              <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => { this.swiper.swipeRight() }}>
                  <FontAwesomeIcon icon={faHeart} size={35} color={colors.blue} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  footerContainer: {
    position: "absolute",
    bottom: 100,
    width: 240,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    marginBottom: 10,
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  innerContainer: {
    borderRadius: 39,
    flex: 1,
    margin: 3,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: "center",
  },
});
