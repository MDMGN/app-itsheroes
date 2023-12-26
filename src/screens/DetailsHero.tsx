import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
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
    <View>
        <Text>Details Hero</Text>
    </View>
  )
}
