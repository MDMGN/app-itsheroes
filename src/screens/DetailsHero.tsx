import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, Image, ScrollView, StyleSheet } from "react-native";
import { Hero } from "../types/hero";

type DetailsHeroRouteParams={
    hero:Hero
}
type DetailsHeroRouteProp = RouteProp<ParamListBase, "details-hero"> & {
    params: DetailsHeroRouteParams;
  };
export function DetailsHero() {
    const {params:{hero}} = useRoute<DetailsHeroRouteProp>()
    const navigation=useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: hero.name
        })
    },[])

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{hero.name} {`(${hero.publisher})`}</Text>
        <Image width={350} height={350} source={{uri:hero.image_url}} />
        <Text style={styles.description}>{hero.description}</Text>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
      marginVertical: 10,
      paddingHorizontal: 50
  },
  title:{
      marginBottom: 10,
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 22
  },
  description:{
    marginTop: 10,
    fontFamily: 'HeyComic'
  }
})
