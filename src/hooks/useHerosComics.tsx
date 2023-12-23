import { useEffect, useState } from "react"
import { getHeroesComicsByPages } from "../helpers/getHeroesComics"
import { Hero } from "../types/hero"

export default function useHerosComics() {
    const [heroes, setHeroes] = useState([] as Hero[])
    useEffect(()=>{
        getHeroesComicsByPages().then(heroesComics=>{
            const heroes=heroesComics.map(({id,name,image,biography})=>({
                    id,
                    image_url:image.url,
                    name,
                    publisher:biography.publisher
            } as Hero));
            setHeroes(heroes);
        })
    },[])
  return {
        heroes
  }
}
