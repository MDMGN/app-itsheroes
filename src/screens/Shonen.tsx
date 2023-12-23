import { View,Text } from "react-native";
import useHeroesShonen from "../hooks/useHeroesShonen";
import {CardsHeroes} from "../components";

export function Shonen() {
  const {heroes, isLoading}=useHeroesShonen()
  return (
    <View>
        <Text>Shonen</Text>
        <CardsHeroes heroes={heroes} isLoading={isLoading} />
    </View>
  )
}
