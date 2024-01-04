import { useContext } from 'react'
import { Text } from 'react-native'
import { UserContext } from '../contexts/userContext/UserContext'
import { MyHeroItem } from '../components/'
import { FlatList } from 'react-native-gesture-handler'

export function MyHeroes() {
  const {heroes} = useContext(UserContext)
 return heroes.length !== 0 
  ? 
    (
      <FlatList style={{marginHorizontal: '15%'}}
        data={heroes}
        keyExtractor={hero=>hero.id}
        renderItem={({item})=><MyHeroItem hero={item} />}
      />
    )
  :
      <Text>Mis heroes</Text>
}
