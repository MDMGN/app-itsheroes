import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Hero } from "../types/hero";
import { useState } from "react";
import {CardOption} from "./CardOption";

type Props={
    hero:Hero
}

export function CardHero(props:Props) {
    const [open,setOpen]=useState(false)
    const {hero}=props
  return (
    <Pressable
        onPressIn={()=> setOpen(true)}
        onPressOut={()=>{
            setTimeout(()=>{
                setOpen(false)
            },1200)
        }}
    >
        <View style={styles.card}>
            <Text style={styles.text}>{hero.name}</Text>
            <Image source={{uri:hero.image_url}} height={250} width={250}  />
            <Text style={styles.text}>{hero.publisher}</Text>
        </View>
        <CardOption open={open} hero={hero} />
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
        marginHorizontal: 50,
        marginVertical: 10
    },
    text:{
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
        fontFamily: 'HeyComic'
    }
})
