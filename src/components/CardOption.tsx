import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Hero } from "../types/hero";
import { StackNavigationProp } from "@react-navigation/stack";

  type Props={
    open:boolean,
    hero: Hero
  }
  type RootStackParamList = {
    "details-hero": { hero: Hero };
    // Add other screen definitions as needed
  };
  type DetailsHeroScreenNavigationProp = StackNavigationProp<RootStackParamList, "details-hero">;
  

  export function CardOption(props:Props) {  
      const {navigate}=useNavigation<DetailsHeroScreenNavigationProp>()
      const {open, hero} =props

     const options:Record<string,()=>void>={
      detalles:()=> navigate("details-hero",{hero}),
      favoritos:()=>{},
      guardar:()=>{}
  }

    return open && (
                      <View style={styles.cardOptions}>
                              {Object.keys(options).map(option=>
                                (<Pressable key={option} onPress={options[option]}>
                                  <Text style={styles.cardOptionText}>{option}</Text>
                                </Pressable>)
                              )}
                      </View>
                    )
  }
  const styles=StyleSheet.create({
      cardOptions:{
          justifyContent: 'center',
          width:300,
          height: 350,
          backgroundColor: '#000',
          opacity: .8,
          paddingVertical: 15,
          marginHorizontal: 50,
          marginVertical: 10,
          position: 'absolute',
      },
      cardOptionText:{
          color:'#fff',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 18,
          marginVertical: 7
      }
  })
