import axios from "axios"
import { useEffect, useState } from "react"
import { getHeroesByPages } from "../helpers/getHeroes"
import { Hero } from "../types/hero"

export default function useHeroes() {
    const [heroes,setHeroes]=useState([] as Hero[])
  
    useEffect(()=>{
        getHeroesByPages().then(heroesComics=>{
            const heroes:Hero[]=heroesComics.map(({id,name,image,biography})=>({
                    id,
                    name,
                    image_url:image.url,
                    publisher: biography.publisher
            } as Hero));
            setHeroes(heroes)
        })
    },[])

    return{
        heroes,
    }
}
