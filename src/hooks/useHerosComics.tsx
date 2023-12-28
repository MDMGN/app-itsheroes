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
                description: `Fullname: ${biography["full-name"] ? biography["full-name"] : 'N/A'}\nHeight: ${appearance.height[1]} (${appearance.height[0]})\nWeight: ${appearance.weight[1]} (${appearance.weight[0]})\nEye Color: ${appearance["eye-color"] !== 'null' ? appearance["eye-color"] : 'N/A'}\nHair Color: ${appearance["hair-color"] !== 'null' ? appearance["hair-color"] : 'N/A'}\nGender: ${appearance.gender !== 'null' ? appearance.gender : 'N/A'}\nRace: ${appearance.race !== 'null' ? appearance.race : 'N/A'}\n\nPower Stats:\n\tIntelligence: ${powerstats.intelligence !== 'null' ? powerstats.intelligence : 'N/A'}\n\tStrength: ${powerstats.strength !== 'null' ? powerstats.strength : 'N/A'}\n\tSpeed: ${powerstats.speed !== 'null' ? powerstats.speed : 'N/A'}\n\tCombat: ${powerstats.combat !== 'null' ? powerstats.combat : 'N/A'}\n\tPower: ${powerstats.power !== 'null' ? powerstats.power : 'N/A'}\n\tDurability: ${powerstats.durability !== 'null' ? powerstats.durability : 'N/A'}\n\nAliases:\n${biography.aliases.map(el => `\t\t- ${el}`).join('\n')}\n\nOccupation: ${work.occupation !== 'null' ? work.occupation : 'N/A'}\nBase: ${work.base !== 'null' ? work.base : 'N/A'}\nGroup Affiliation: ${connections["group-affiliation"] !== 'null' ? connections["group-affiliation"] : 'N/A'}\nRelatives: ${connections.relatives !== 'null' ? connections.relatives : 'N/A'}`,
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
