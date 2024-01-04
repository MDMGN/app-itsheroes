import { useContext } from 'react'
import { Text } from 'react-native'
import { UserContext } from '../contexts/userContext/UserContext'
import { MyHeroItem } from '../components/MyHeroItem'
import { ScrollView } from 'react-native-gesture-handler'

export function MyHeroes() {
  const {heroes} = useContext(UserContext)
 return heroes.length !== 0 
  ? 
    (
      <ScrollView style={{marginHorizontal: '15%'}}>
          {
            heroes.map(hero=> <MyHeroItem hero={hero} key={hero.id + Math.random().toString(8)} />)
          }
      </ScrollView>
    )
  :
      <Text>Mis heroes</Text>
}
