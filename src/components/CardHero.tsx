import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Hero } from "../types/hero";
import { Dispatch, SetStateAction, useState } from "react";
import {CardOption} from "./CardOption";

type Props={
    hero:Hero,
    focusedID:string
}

export function CardHero(props:Props) {
    const {hero,focusedID}=props
    const [open, setOpen] = useState(false)
  return (
    <Pressable
        onPressIn={()=>setOpen(true)}
        style={{alignItems:'center'}}
    >
        <View style={styles.card}>
            <Text style={styles.text}>{hero.name}</Text>
            <Image source={{uri:hero.image_url}} height={250} width={250}  />
            <Text style={styles.text}>{hero.publisher}</Text>
        </View>
       {focusedID===hero.id && <CardOption open={open} hero={hero} />}
    </Pressable>
  )
}

const styles=StyleSheet.create({
    card:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width:300,
        height:350,
        borderColor: '#000',
        padding: 15,
        marginVertical: 10
    },
    text:{
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
        fontFamily: 'HeyComic'
    }
})
