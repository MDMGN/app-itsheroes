import {FontAwesome} from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    "search": {heroType:string}
  };

type SearchHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "search">;
type SearchScreenRouteProp = RouteProp<RootStackParamList, "search">;


export  function SearchHeader() {
    const {name:heroType}=useRoute()
    const {navigate}=useNavigation<SearchHeroScreenNavigationProp>();
  return (
            <FontAwesome
                    name='search' 
                    size={24} 
                    color={'black'}
                    style={{marginRight:20}}
                    onPress={()=>navigate('search',{heroType})}
            />
        )
}
