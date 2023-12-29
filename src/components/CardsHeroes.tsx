import { FlatList } from "react-native";
import { Hero } from "../types/hero";
import { CardHero } from "./CardHero";
import { Loader } from "./Loader";
import useCardsHeroes from "../hooks/useCardsHeroes";

type Props={
    heroes:Hero[],
    onMoreitem?:()=> void,
    isLoading:boolean
}
export function CardsHeroes(props:Props) {
  const {heroes,isLoading,onMoreitem}=props
  const {focusedID,viewabilityConfigCallbackPairs}=useCardsHeroes()

  return (
    <FlatList
        data={heroes}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={(data)=>(
          <CardHero 
            hero={data.item}
            focusedID={focusedID}
          />
        )}
        style={{marginBottom: 20}}
        ListFooterComponent={<Loader isLoading={isLoading} />}
        onEndReached={onMoreitem}
        onEndReachedThreshold={0}
        /* viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={{itemVisiblePercentThreshold:20}} */
    />
  )
}
