import { View,Text } from "react-native";
import useHeroesShonen from "../hooks/useHeroesShonen";
import CardsHeroes from "../components/CardsHeroes";

export default function Shonen() {
  const {heroes}=useHeroesShonen()
  return (
    <View>
        <Text>Shonen</Text>
        <CardsHeroes heroes={heroes} />
    </View>
  )
}
