import { HeroComic } from "../types/heroComic";
import heroesApi from "../api/heroesApi";

const pages:number=6;
let currentPages:number=1;
let currentHeroes:number=pages;

const getHeroes=()=>{
    const hrArr:number[]=Array.from(Array(732));
    return hrArr.map((_:number,index:number)=>index+1);
  }

const getHeoresOptionByPages=()=>{
    const arrSelectedHeroes=getHeroes().slice(currentPages-1,currentHeroes);
    currentPages+=pages;
    currentHeroes+=pages;
    return arrSelectedHeroes;
  }

const getHeroesOptionMixedByPages=()=>{
    const arrSelectedHeroes=getHeroes()
                                .sort(()=> Math.random()-0.5)
                                  .slice(0,pages);
    return arrSelectedHeroes;
  }

export const  getHeroesByPages= async():Promise<HeroComic[]>=>{
    const selectedHeroes:number[]=getHeoresOptionByPages();

    const heroesResponse =await Promise.all(
      selectedHeroes.map(id=>heroesApi.get<HeroComic>(`/${id}`))
    );
    const heroes:HeroComic[]=heroesResponse.map(response=>response.data)
    return heroes;
  }

 export const getHeroesByID=async (id:number):Promise<HeroComic>=>{
      const response=await heroesApi.get<HeroComic>(`/${id}`);
      return response.data;
  }
  
 export  const getHeroesPublisherByID=async(id:number):Promise<HeroComic>=>{
    const response=await heroesApi.get<HeroComic>(`/${id}/biography/publisher`);
      return response.data;
  }

 export const getSearchHeroByName=async(name:string):Promise<HeroComic>=>{
    const response= await heroesApi.get<HeroComic>(`/search/${name}`);
    return response.data;
  }