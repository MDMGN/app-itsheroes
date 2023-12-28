import { createContext, SetStateAction, Dispatch } from "react";


type SearchContextProps={
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
};

export const SearchContext=createContext({} as SearchContextProps)