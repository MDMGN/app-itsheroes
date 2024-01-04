import { View } from "react-native";
import useHeroes from "../hooks/useHeroes";
import {CardsHeroes} from "../components";

export function Heroes() {
  const {heroes,isLoading,onMoreItem} =useHeroes()
  return (
    <View>
        <CardsHeroes heroes={heroes} onMoreitem={onMoreItem} isLoading={isLoading} />
    </View>
  )
}