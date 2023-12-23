import { View,Text } from "react-native";
import useHerosComics from "../hooks/useHerosComics";
import { CardsHeroes } from "../components";

export function Comics() {
  const {heroes,isLoading}=useHerosComics()
  return (
    <View>
        <Text>Comics</Text>
        <CardsHeroes heroes={heroes} isLoading={isLoading} />
    </View>
  )
}
