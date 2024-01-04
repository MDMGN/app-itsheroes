import {FontAwesome} from '@expo/vector-icons'
import { useNavigation, useRoute} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

type RootStackParamList = {
    "search": {heroType:string}
  };

type SearchHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "search">;


export  function SearchHeader() {
    const {name:heroType}=useRoute()
    const {navigate}=useNavigation<SearchHeroScreenNavigationProp>();
  return (
          <TouchableOpacity
              onPress={()=>navigate('search',{heroType})}
          >
            <FontAwesome
                    name='search' 
                    size={24} 
                    color={'black'}
                    style={{marginRight:20}}
            />
          </TouchableOpacity>
        )
}
