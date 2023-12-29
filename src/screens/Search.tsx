import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import {SearchHeroesContainer} from '../components/';

type SearchHeroRouteParams={
  heroType:string
}
type SearchHeroRouteProp = RouteProp<ParamListBase, "search"> & {
  params: SearchHeroRouteParams;
};

export function Search() {
  const {params}=useRoute<SearchHeroRouteProp>()
  return (
    <View style={{backgroundColor:'#fff',flex:1, paddingHorizontal:20}}>
        <SearchHeroesContainer heroType={params.heroType} />
    </View>
  )
}
