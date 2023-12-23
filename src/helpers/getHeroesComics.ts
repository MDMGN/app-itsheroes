import { HeroComic } from "../types/heroComic";
import heroesApi from "../api/heroesApi";
import { AxiosResponse } from "axios";

const pages:number=6;

const getHeroes=()=>{
    const hrArr:number[]=Array.from(Array(732));
    return hrArr.map((_:number,index:number)=>index+1);
  }

 const getHeroeOptionMixed=()=>{
    const arrSelectedHeroes=getHeroes()
                                .sort(()=> Math.random()-0.5)
                                  .slice(0);
    return arrSelectedHeroes[0];
  }

const getHeroeMixedComics = async (): Promise<AxiosResponse<HeroComic, any>[]> => {
    let isHeroComics = true;
    let heroesPromises = [] as Promise<AxiosResponse<HeroComic, any>>[];
    
    async function fetchHeroComic() {
        const id = getHeroeOptionMixed();
        const res = await heroesApi.get<HeroComic>(`/${id}`);
        const publisher = res.data.biography.publisher;
        if (['Marvel Comics', 'DC Comics','Deadpool','Spider-Carnage','At-man'].includes(publisher)) isHeroComics = true;
        if (isHeroComics) heroesPromises.push(heroesApi.get<HeroComic>(`/${id}`));
        isHeroComics = false;
    }

    while (heroesPromises.length < pages) {
        await fetchHeroComic();
    }
    return Promise.all(heroesPromises);
};

export const  getHeroesComicsByPages= async():Promise<HeroComic[]>=>{
    const heroesResponse =await getHeroeMixedComics();
    const heroes:HeroComic[]=heroesResponse.map(response=>response.data)
    return heroes;
  }

 export const getSearchHeroComicsByName=async(name:string):Promise<HeroComic>=>{
    const response= await heroesApi.get<HeroComic>(`/search/${name}`);
    return response.data;
  }