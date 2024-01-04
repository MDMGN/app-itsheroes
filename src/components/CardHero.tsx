import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Hero } from "../types/hero";
import { useContext, useEffect, useState } from "react";
import {CardOption} from "./CardOption";
import { UserContext } from "../contexts/userContext/UserContext";
import { MaterialIcons } from '@expo/vector-icons';

type Props={
    hero:Hero,
    focusedID:string,
}

export function CardHero(props:Props) {
    const {hero,focusedID}=props
    const {heroes}= useContext(UserContext)
    const [open,setOpen]=useState(false)
    const [isMyhero,setIsMyhero]=useState(false)
    
    useEffect(()=>{
            setIsMyhero(heroes.some(myHero=>myHero.id===hero.id))
    },[heroes])

  return (
    <Pressable
        onPressIn={()=>setOpen(true)}
        onPressOut={()=>{
            setTimeout(()=>{
                setOpen(false)
            },1200)
        }}
        style={{alignItems:'center'}}
    >
        <View style={styles.card}>
            <Text style={styles.text}>{hero.name}</Text>
            <Image source={{uri:hero.image_url}} height={250} width={250}  />
            <Text style={styles.text}>{hero.publisher}</Text>
        </View>
       {(!isMyhero) && <CardOption open={open} hero={hero} />}
       {isMyhero && <MaterialIcons name={"favorite"} size={34} color={"black"} style={{position:'absolute'}} />}
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
