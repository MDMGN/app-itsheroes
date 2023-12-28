import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Hero } from "../types/hero";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props={
  hero:Hero
}

type RootStackParamList = {
  "details-hero": { hero: Hero }
};
type DetailsHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "details-hero">;

export function SearchHeroItem(props:Props) {
  const {navigate}=useNavigation<DetailsHeroScreenNavigationProp>()
  const {hero}=props
  return (
    <TouchableHighlight 
          underlayColor={'#c0c0c0'}
          activeOpacity={.8}
          style={{width:'80%', marginHorizontal:50, borderRadius: 5}}
          onPress={()=>navigate('details-hero',{hero})}>
      <View style={styles.container}>
        <Image style={styles.image} width={50} height={50} source={{ uri: hero.image_url }} />
        <Text style={styles.text}>{hero.name}</Text>
      </View>
    </TouchableHighlight>
  )
}
const styles=StyleSheet.create({
  container:{
      flexDirection: 'row',
      width: '100%',
      marginBottom: 10,
      gap:20
  },
  image:{
    borderRadius: 20
  },
  text:{
      fontWeight: 'bold',
      color: '#000'
  }
})
