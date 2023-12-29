import { FlatList, ScrollView, Text } from "react-native";
import useSearchHero from "../hooks/useSearchHero";
import { Loader } from "./Loader";
import { SearchHeroItem } from "./SearchHeroItem";

type Props={
    heroType: string
}

export function SearchHeroesContainer({heroType}:Props) {
    const {heroes,error,isLoading, search}= useSearchHero(heroType)
    if(search==='') return null

    return  error ? 
                    <Text>No hay resultados</Text>
                  : 
                  <FlatList
                    data={heroes}
                    keyExtractor={data=>data.id}
                    renderItem={(data)=><SearchHeroItem hero={data.item} />}
                    ListFooterComponent={<Loader isLoading={isLoading} />}
                  />
}
