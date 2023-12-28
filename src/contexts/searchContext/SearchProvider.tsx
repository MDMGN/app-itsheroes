import React, { ReactNode, useState } from "react";
import { SearchContext } from "./SearchContext";


type SearchProviderProps={
    children:ReactNode;
}
export const SearchProvider:React.FC<SearchProviderProps>=({children})=>{
    const [search,setSearch]=useState('')
  return (
    <SearchContext.Provider value={{search,setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}