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
                                  description: `Fullname: ${biography["full-name"] ? biography["full-name"] : name}\nHeight: ${appearance.height[0]} (${appearance.height[1]})\nWeight: ${appearance.weight[0]} (${appearance.weight[1]})\nEye Color: ${appearance["eye-color"]}\nHair Color: ${appearance["hair-color"]}\nGender: ${appearance.gender}\nRace ${appearance.race}\n\nPower Stats:\nIntenlligence: ${powerstats.intelligence}\nStrength: ${powerstats.strength}\nSpeed: ${powerstats.speed}\nCombat: ${powerstats.combat}\nPower: ${powerstats.power}\nDurability: ${powerstats.durability}\n\nAliases:\n ${biography.aliases.map(el=>`\t- ${el}.\n`)}\n\n${work.occupation}. ${work.base}.\n${connections["group-affiliation"]}. ${connections.relatives}`,
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
                                  description: `
                                  Fullname: ${biography["full-name"] ? biography["full-name"] : name}\nHeight: ${appearance.height[0]} (${appearance.height[1]})\nWeight: ${appearance.weight[0]} (${appearance.weight[1]})\nEye Color: ${appearance["eye-color"]}\nHair Color: ${appearance["hair-color"]}\nGender: ${appearance.gender}\nRace ${appearance.race}\n\nPower Stats:\nIntenlligence: ${powerstats.intelligence}\nStrength: ${powerstats.strength}\nSpeed: ${powerstats.speed}\nCombat: ${powerstats.combat}\nPower: ${powerstats.power}\nDurability: ${powerstats.durability}\n\nAliases:\n ${biography.aliases.map(el=>`\t- ${el}.\n`)}\n\n${work.occupation}. ${work.base}.\n${connections["group-affiliation"]}. ${connections.relatives}`,
                                  image_url: image.url,
                                  publisher: biography.publisher
                                } as Hero
                              )))
}

export default searchOptions