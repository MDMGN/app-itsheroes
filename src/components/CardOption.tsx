import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Hero } from "../types/hero";
import { StackNavigationProp } from "@react-navigation/stack";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

  type Props={
    open:boolean,
    hero: Hero
  }
  type RootStackParamList = {
    "details-hero": { hero: Hero }
  };
  type DetailsHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "details-hero">;
  

  export function CardOption(props:Props) {  
      const {navigate}=useNavigation<DetailsHeroScreenNavigationProp>()
      const  fadeAnim=useRef(new Animated.Value(0)).current
      const {open, hero} =props

     const options:Record<string,()=>void>={
      detalles:()=> navigate("details-hero",{hero}),
      favoritos:()=>{},
      guardar:()=>{}
    }

    const fadeIn=()=>{
      Animated.timing(fadeAnim, {
        toValue: .8,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }

    const fadeOut=()=>{
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    useEffect(()=>{
      fadeIn()
    },[open])

    useEffect(()=>{
      return ()=>{
        fadeOut
      }
    },[])

    return open && (
                      <Animated.View style={[styles.cardOptions,{opacity:fadeAnim}]}>
                              {Object.keys(options).map(option=>
                                (<Pressable key={option} onPress={options[option]}>
                                  <Text style={styles.cardOptionText}>{option}</Text>
                                </Pressable>)
                              )}
                      </Animated.View>
                    )
  }
  const styles=StyleSheet.create({
      cardOptions:{
          justifyContent: 'center',
          width:300,
          height: 350,
          backgroundColor: '#000',
          paddingVertical: 15,
          marginHorizontal: 50,
          marginVertical: 10,
          position: 'absolute',
      },
      cardOptionText:{
          color:'#fff',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 18,
          marginVertical: 7
      }
  })
