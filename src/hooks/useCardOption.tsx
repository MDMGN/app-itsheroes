import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Hero } from "../types/hero";
import { useEffect, useRef } from "react";
import { Alert, Animated, Easing} from "react-native";


type Props={
    open: boolean,
    hero: Hero
}

type RootStackParamList = {
    "details-hero": { hero: Hero }
  };
type DetailsHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "details-hero">;
  

export function useCardOption({open,hero}:Props) {
    const {navigate}=useNavigation<DetailsHeroScreenNavigationProp>()
    const  fadeAnim=useRef(new Animated.Value(1)).current
    const options:Record<string,()=>void>={
        detalles:()=> navigate("details-hero",{hero}),
        favoritos:()=>{},
        guardar:()=>{
          Alert.alert('Guardar Heroe','Deseas guardar al heroe?',[
          {
            style:'cancel',
            text:'Cancelar'
          },
          {
            style:'default',
            text:'Aceptar',
            onPress:()=>{
              
            }
          }
          ])
        }
      }
  
      const fadeInOut=()=>{
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            easing: Easing.inOut(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.spring(fadeAnim, {
            toValue: .8,
            friction: 100,
            tension: 10,
            useNativeDriver: true,
          })
        ]).start()
      }
  
      useEffect(()=>{
        fadeInOut()
      },[open])
  
  return {
        options,
        fadeAnim
  }
}
