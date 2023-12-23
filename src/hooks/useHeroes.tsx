import axios from "axios"
import { useEffect, useState } from "react"
import { getHeroesByPages } from "../helpers/getHeroes"
import { Hero } from "../types/hero"

export default function useHeroes() {
    const [heroes,setHeroes]=useState([] as Hero[])
    const [isLoading,setIsLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)

    const onMoreItem=()=>{
        setCurrentPage((oldValue)=>oldValue+1)
    }
  
    useEffect(()=>{
        setIsLoading(true)
        getHeroesByPages().then(heroesComics=>{
            const heroes:Hero[]=heroesComics.map(({id,name,image,biography})=>({
                    id,
                    name,
                    image_url:image.url,
                    publisher: biography.publisher
            } as Hero));
            setHeroes((prevHeroes)=>[...prevHeroes,...heroes])
            setIsLoading(false)
        })
    },[currentPage])

    return{
        heroes,
        isLoading,
        onMoreItem
    }
}
