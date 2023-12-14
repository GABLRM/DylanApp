import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from "react-native"
import { colors } from '../assets/Colors';
import { ProfileComponent } from '../components/profileComponent';

type Dog = {
    id: string;
    name: string;
    age_number: string
    sex_label: string
    races_label: string
    description: string
    image: string;
  };

export const ProfileScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Dog>();
  
    const getDogs = async () => {
      try {
        const response = await fetch('https://www.la-spa.fr/app/wp-json/spa/v1/animals/search/?api=1&species=chien&paged=1&seed=789229258975902');
        const json = await response.json();
        setData(json.results[0]);
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
                <ProfileComponent name={data?.name || ""} age={data?.age_number || ""} sexe={data?.sex_label || ""} race={data?.races_label || ""} description={data?.description || "Aucune description."} imageLink={data?.image || ""} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});