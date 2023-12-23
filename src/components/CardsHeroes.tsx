import { FlatList, StyleSheet } from "react-native";
import { Hero } from "../types/hero";
import CardHero from "./CardHero";

type Props={
    heroes:Hero[]
}
export default function CardsHeroes(props:Props) {
    const {heroes}=props
  return (
    <FlatList
        data={heroes}
        keyExtractor={(item)=>item.id}
        renderItem={(data)=>(
          <CardHero 
            hero={data.item} 
          />
        )}
        style={styles.cards}
    />
  )
}

const styles=StyleSheet.create({
  cards:{
      marginBottom: 20
  }
})
