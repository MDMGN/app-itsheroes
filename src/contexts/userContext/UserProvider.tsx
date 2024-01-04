import { ReactNode, useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { HeroesReducers, typeAction } from "../../reducers/HeroesReducers";
import { HEROES_KEY_STORAGE } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Hero } from "../../types/hero";

type Props={
    children: ReactNode
}

export default function UserProvider({children}:Props) {
    const [search,setSearch]=useState('')
    const [heroes, dispatchHeroes] = useReducer<typeof HeroesReducers>(HeroesReducers,[])

    useEffect(()=>{
      const initial=async ():Promise<Hero[]>=>{
        const getHeroString=await AsyncStorage.getItem(HEROES_KEY_STORAGE)
        return JSON.parse(getHeroString || '') ?? []
      }
        initial().then(res=>{
          dispatchHeroes({
            payload:res,
            type:typeAction.HERO_INITIAL
          })
        }).catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        const updateHeroes=async()=>{
          await AsyncStorage.setItem(HEROES_KEY_STORAGE,JSON.stringify(heroes))
        }
        updateHeroes()
    },[heroes])

  return (
    <UserContext.Provider value={{heroes,dispatchHeroes,search,setSearch}}>
        {children}
    </UserContext.Provider>
  )
}
