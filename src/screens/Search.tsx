import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

type SearchHeroRouteParams={
  heroType:String
}
type SearchHeroRouteProp = RouteProp<ParamListBase, "search"> & {
  params: SearchHeroRouteParams;
};

export function Search() {
  const {params}=useRoute<SearchHeroRouteProp>()
  return (
    <View>
        <Text>{params.heroType}</Text>
    </View>
  )
}
