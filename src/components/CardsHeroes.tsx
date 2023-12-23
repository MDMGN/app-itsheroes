import { FlatList, StyleSheet } from "react-native";
import { Hero } from "../types/hero";
import { CardHero } from "./CardHero";
import { Loader } from "./Loader";

type Props={
    heroes:Hero[],
    onMoreitem?:()=> void,
    isLoading:boolean
}
export function CardsHeroes(props:Props) {
    const {heroes,isLoading,onMoreitem}=props
  return (
    <FlatList
        data={heroes}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={(data)=>(
          <CardHero 
            hero={data.item} 
          />
        )}
        style={styles.cards}
        ListFooterComponent={<Loader isLoading={isLoading} />}
        onEndReached={onMoreitem}
        onEndReachedThreshold={0}
    />
  )
}

const styles=StyleSheet.create({
  cards:{
      marginBottom: 20
  }
})
