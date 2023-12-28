import { useEffect, useState } from "react"
import { Hero } from "../types/hero"
import { getHeroesShonenMixed } from "../helpers/getHeroesShonen"

export default function useHeroesShonen() {
    const [heroes,setHeroes]= useState([] as Hero[])
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getHeroesShonenMixed().then(heroesShonen=>{
            const heroes=heroesShonen.map(({data})=>({
                id:data.mal_id.toString(),
                name:data.name,
                image_url:data.images.jpg.image_url,
                publisher:data.name_kanji,
                description:data.about
            } as Hero));
            setHeroes((prevHeroes)=>[...prevHeroes,...heroes])
            setIsLoading(false)
        })
    },[])
  return{
        heroes,
        isLoading
  }
}
