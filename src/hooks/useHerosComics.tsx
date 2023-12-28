import { useEffect, useState } from "react"
import { getHeroesComicsByPages } from "../helpers/getHeroesComics"
import { Hero } from "../types/hero"

export default function useHerosComics() {
    const [heroes, setHeroes] = useState([] as Hero[])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getHeroesComicsByPages().then(heroesComics=>{
            const heroes:Hero[]=heroesComics.map(({id,name,image,appearance,powerstats,biography,work,connections})=>({
                id,
                name,
                image_url:image.url,
                publisher: biography.publisher,
                description: `
                Fullname: ${biography["full-name"] ? biography["full-name"] : name}\nHeight: ${appearance.height[0]} (${appearance.height[1]})\nWeight: ${appearance.weight[0]} (${appearance.weight[1]})\nEye Color: ${appearance["eye-color"]}\nHair Color: ${appearance["hair-color"]}\nGender: ${appearance.gender}\nRace ${appearance.race}\n\nPower Stats:\nIntenlligence: ${powerstats.intelligence}\nStrength: ${powerstats.strength}\nSpeed: ${powerstats.speed}\nCombat: ${powerstats.combat}\nPower: ${powerstats.power}\nDurability: ${powerstats.durability}\n\nAliases:\n ${biography.aliases.map(el=>`\t- ${el}.\n`)}\n\n${work.occupation}. ${work.base}.\n${connections["group-affiliation"]}. ${connections.relatives}`
            } as Hero));
            setHeroes((prevHeroes)=>[...prevHeroes,...heroes]);
            setIsLoading(false)
        })
    },[])
  return {
        heroes,
        isLoading
  }
}
