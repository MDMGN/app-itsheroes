import { useRef, useState } from "react";
import { ViewToken, ViewabilityConfigCallbackPair } from "react-native";

type ViewableItems={viewableItems: ViewToken[]}

export default function useCardsHeroes() {
    const [focusedID,setFocusedID]=useState('')

    const onViewableItemsChanged = ({  viewableItems}:ViewableItems) => {
      if(viewableItems.length > 0){
        if(viewableItems[0].key!==focusedID){
          setFocusedID(_=>viewableItems[0].key)
        }
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
  return {
        focusedID,
        viewabilityConfigCallbackPairs
  }
}
