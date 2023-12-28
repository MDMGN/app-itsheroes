import { FlatList, StyleSheet, ViewToken, ViewabilityConfigCallbackPair } from "react-native";
import { Hero } from "../types/hero";
import { CardHero } from "./CardHero";
import { Loader } from "./Loader";
import { useRef, useState } from "react";

type Props={
    heroes:Hero[],
    onMoreitem?:()=> void,
    isLoading:boolean
}
export function CardsHeroes(props:Props) {
    const {heroes,isLoading,onMoreitem}=props
    const [focusedID,setFocusedID]=useState('')
    const onViewableItemsChanged = ({  viewableItems}:{viewableItems: ViewToken[]}) => {
      if(viewableItems.length > 0){
        setFocusedID(viewableItems[0].key ||'')
      }
    };
    const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPair[]>(
      [
        {
          onViewableItemsChanged,
          viewabilityConfig: { itemVisiblePercentThreshold: 50 },
        },
      ]
    );

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
        style={styles.cards}
        ListFooterComponent={<Loader isLoading={isLoading} />}
        onEndReached={onMoreitem}
        onEndReachedThreshold={0}
        viewabilityConfig={{itemVisiblePercentThreshold:50}}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
    />
  )
}

const styles=StyleSheet.create({
  cards:{
      marginBottom: 20
  }
})
