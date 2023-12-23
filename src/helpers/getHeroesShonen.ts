import shonenApi from "../api/shonenApi";
import { HeroShonen, HeroShonenSearch } from "../types/heroShonen";

const pages:number=6;

export const getHeroesShonenMixed=async():Promise<HeroShonen[]>=>{
    const arrHeroes=Array.from(Array(pages));
    const shonensResponse=await Promise.all(arrHeroes.map(_=>shonenApi.get<HeroShonen>('/random/characters')))
    const heroes:HeroShonen[]=shonensResponse.map(response=>response.data)
    return heroes;
}

export const getSearchHeroesShonen=async(name:string):Promise<HeroShonenSearch>=>{
  const heroeResponse=await shonenApi.get<HeroShonenSearch>(`/characters?q=${name}`)
  return heroeResponse.data;
}