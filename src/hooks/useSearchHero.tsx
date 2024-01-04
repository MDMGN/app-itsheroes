import { useContext, useEffect, useState } from "react"
import { Hero } from "../types/hero"
import searchOptions from "../helpers/searchOptions"
import { UserContext } from "../contexts/userContext/UserContext"

export default function useSearchHero(heroType:string) {
    const {search} = useContext(UserContext)
    const [heroes,setHeroes]=useState([] as Hero[])
    const [error,setError]=useState(true)
    const [isLoading,setIsloading]=useState(false)
    
    useEffect(()=>{
            setError(false)
            setIsloading(true)
            searchOptions[heroType](search)
                          .then(heroes=>{
                            setHeroes(heroes)
                            setIsloading(false)
                          })
                          .catch(_=>setError(true))
    },[search])

  return {
      heroes,
      error,
      isLoading,
      search
  }
}
