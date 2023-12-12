import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../assets/Colors';
import { Card } from '../components/cardComponent';
import FooterCard from '../components/footerCardComponent';
import CardsSwipe from 'react-native-cards-swipe';

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

    if (!isLoading) {
      return (
        <View style={styles.container}>
              <CardsSwipe
                animDuration={400}
                cards={data}
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
          <FooterCard />
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
});
