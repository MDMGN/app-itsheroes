import { getSearchHeroByName } from "../helpers/getHeroes"
import { getSearchHeroesShonen } from "../helpers/getHeroesShonen"
import { getSearchHeroComicsByName } from "../helpers/getHeroesComics"
import { Hero } from "../types/hero"

const searchOptions:Record<string,(name:string)=>Promise<Hero[]>>={
    heroes: (name:string)=>getSearchHeroByName(name)
                              .then(res=>res.response=="success" ? res.results : Promise.reject())
                              .then(res=>res.map(({id,name,image,appearance,powerstats,biography,work,connections})=>(
                                {
                                  id,
                                  name,
                                  description: `Fullname: ${biography["full-name"] ? biography["full-name"] : 'N/A'}\nHeight: ${appearance.height[1]} (${appearance.height[0]})\nWeight: ${appearance.weight[1]} (${appearance.weight[0]})\nEye Color: ${appearance["eye-color"] !== 'null' ? appearance["eye-color"] : 'N/A'}\nHair Color: ${appearance["hair-color"] !== 'null' ? appearance["hair-color"] : 'N/A'}\nGender: ${appearance.gender !== 'null' ? appearance.gender : 'N/A'}\nRace: ${appearance.race !== 'null' ? appearance.race : 'N/A'}\n\nPower Stats:\n\tIntelligence: ${powerstats.intelligence !== 'null' ? powerstats.intelligence : 'N/A'}\n\tStrength: ${powerstats.strength !== 'null' ? powerstats.strength : 'N/A'}\n\tSpeed: ${powerstats.speed !== 'null' ? powerstats.speed : 'N/A'}\n\tCombat: ${powerstats.combat !== 'null' ? powerstats.combat : 'N/A'}\n\tPower: ${powerstats.power !== 'null' ? powerstats.power : 'N/A'}\n\tDurability: ${powerstats.durability !== 'null' ? powerstats.durability : 'N/A'}\n\nAliases:\n${biography.aliases.map(el => `\t\t- ${el}`).join('\n')}\n\nOccupation: ${work.occupation !== 'null' ? work.occupation : 'N/A'}\nBase: ${work.base !== 'null' ? work.base : 'N/A'}\nGroup Affiliation: ${connections["group-affiliation"] !== 'null' ? connections["group-affiliation"] : 'N/A'}\nRelatives: ${connections.relatives !== 'null' ? connections.relatives : 'N/A'}`,
                                  image_url: image.url,
                                  publisher: biography.publisher
                                } as Hero
                              ))),
    shonen: (name:string)=>getSearchHeroesShonen(name)
                              .then(res=>res.data)
                              .then(res=>res.map(({mal_id,name,images,about,name_kanji})=>(
                                {
                                  id:mal_id.toString(),
                                  name,
                                  description:about,
                                  image_url:images.webp.image_url,
                                  publisher:name_kanji
                                } as Hero
                            ))),
    comics: (name:string)=>getSearchHeroComicsByName(name)
                              .then(res=>res.response=="success" ? res.results : Promise.reject())
                              .then(res=>res.map(({id,name,image,appearance,powerstats,biography,work,connections})=>(
                                {
                                  id,
                                  name,
                                  description: `Fullname: ${biography["full-name"] ? biography["full-name"] : 'N/A'}\nHeight: ${appearance.height[1]} (${appearance.height[0]})\nWeight: ${appearance.weight[1]} (${appearance.weight[0]})\nEye Color: ${appearance["eye-color"] !== 'null' ? appearance["eye-color"] : 'N/A'}\nHair Color: ${appearance["hair-color"] !== 'null' ? appearance["hair-color"] : 'N/A'}\nGender: ${appearance.gender !== 'null' ? appearance.gender : 'N/A'}\nRace: ${appearance.race !== 'null' ? appearance.race : 'N/A'}\n\nPower Stats:\n\tIntelligence: ${powerstats.intelligence !== 'null' ? powerstats.intelligence : 'N/A'}\n\tStrength: ${powerstats.strength !== 'null' ? powerstats.strength : 'N/A'}\n\tSpeed: ${powerstats.speed !== 'null' ? powerstats.speed : 'N/A'}\n\tCombat: ${powerstats.combat !== 'null' ? powerstats.combat : 'N/A'}\n\tPower: ${powerstats.power !== 'null' ? powerstats.power : 'N/A'}\n\tDurability: ${powerstats.durability !== 'null' ? powerstats.durability : 'N/A'}\n\nAliases:\n${biography.aliases.map(el => `\t\t- ${el}`).join('\n')}\n\nOccupation: ${work.occupation !== 'null' ? work.occupation : 'N/A'}\nBase: ${work.base !== 'null' ? work.base : 'N/A'}\nGroup Affiliation: ${connections["group-affiliation"] !== 'null' ? connections["group-affiliation"] : 'N/A'}\nRelatives: ${connections.relatives !== 'null' ? connections.relatives : 'N/A'}`,
                                  image_url: image.url,
                                  publisher: biography.publisher
                                } as Hero
                              )))
}

export default searchOptions