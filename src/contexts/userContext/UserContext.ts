import { Dispatch, SetStateAction, createContext } from "react";
import { Hero } from "../../types/hero";
import { ActionHero } from "../../reducers/HeroesReducers";

type UserContextProps={
    heroes: Hero[],
    dispatchHeroes: Dispatch<ActionHero>,
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

export const UserContext=createContext({} as UserContextProps)