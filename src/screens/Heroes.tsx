import { View,Text } from "react-native";
import useHeroes from "../hooks/useHeroes";
import CardsHeroes from "../components/CardsHeroes";

export default function Heroes() {
  const {heroes} =useHeroes()
  return (
    <View>
        <Text>Heroes</Text>
        <CardsHeroes heroes={heroes} />
    </View>
  )
}