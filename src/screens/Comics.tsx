import { View,Text } from "react-native";
import CardsHeroes from "../components/CardsHeroes";
import useHerosComics from "../hooks/useHerosComics";

export default function Comics() {
  const {heroes}=useHerosComics()
  return (
    <View>
        <Text>Comics</Text>
        <CardsHeroes heroes={heroes} />
    </View>
  )
}
