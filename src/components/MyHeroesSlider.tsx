import { StyleSheet, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { MyHeroItem } from "./MyHeroItem";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext/UserContext";

export  function MyHeroesSlider() {
    const {heroes}=useContext(UserContext)
  return (
    <View style={styles.container}>
        <ScrollView
        horizontal={true}
        contentContainerStyle={styles.flatListContainer}
    >
        {
            heroes.map(hero=><MyHeroItem hero={hero} key={hero.id}/>)
        }
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatListContainer: {
      paddingHorizontal: 16, // Espaciado horizontal para los elementos en la FlatList
    },
    item: {
      width: 150, // Ancho de cada elemento en la FlatList
      height: 100, // Altura de cada elemento en la FlatList
      backgroundColor: '#e0e0e0',
      marginHorizontal: 8, // Margen horizontal entre los elementos
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
