import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Hero } from "../types/hero";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext/UserContext";
import { typeAction } from "../reducers/HeroesReducers";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props={
    hero:Hero
}
type RootStackParamList = {
    "details-hero": { hero: Hero }
};
type DetailsHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "details-hero">;
export function MyHeroItem({hero}:Props) {
    const {dispatchHeroes}= useContext(UserContext)
    const {navigate}=useNavigation<DetailsHeroScreenNavigationProp>()
  return (
    <View>
        <View style={styles.container}>
        <Image source={{uri:hero.image_url}}  style={styles.image} />
        <View  style={styles.description}>
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.text}>  {hero.name}</Text>
                <Text style={styles.text}>Publisher:</Text>
                <Text style={styles.text}>  {hero.publisher}</Text>
        </View>
    </View>
    <AntDesign
        name="delete"
        style={{
            position: 'absolute',
            right: 5,
            top: 20,
        }}
        size={18}
        onPress={()=>{
            Alert.alert('Eliminar Heroe','Deseas eliminar al heroe?',
            [{
                text: ' Cancelar',
                style: 'cancel'
            },{
                text: 'Aceptar',
                style: 'default',
                onPress:()=>dispatchHeroes({
                        payload:hero.id,
                        type: typeAction.HERO_REMOVE
                })
            }])
        }}
    />
    <MaterialIcons name="preview" size={22} color="black" 
            style={{
                position: 'absolute',
                right: 25,
                top: 18,
            }}
            onPress={()=> navigate('details-hero',{hero})}
    />
    </View>
    
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: 150,
        borderWidth: 2,
        marginVertical: 10,
        elevation: 2,
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowColor: '#000',
        shadowOpacity: .2,
        alignItems: 'center',
        padding: 5
    },
    image:{
        width: 100,
        height: 120
    },
    description:{
        alignSelf: 'center',
        margin: '10%'
    },
    text:{
        fontFamily: 'HeyComic'
    }
})
