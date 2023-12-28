import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Hero } from "../types/hero";
import { Animated } from "react-native";
import { useCardOption } from "../hooks/useCardOption";

type Props={
    open:boolean,
    hero: Hero
}
export function CardOption(props:Props) {
      const {open, hero} =props
      const {options,fadeAnim} = useCardOption({open,hero})
     
    return open && (
                      <Animated.View style={[styles.cardOptions,{opacity:fadeAnim}]}>
                              {Object.keys(options).map(option=>
                                (<TouchableHighlight 
                                    style={{width:'80%'}} 
                                    underlayColor={'#c0c0c0'} 
                                    activeOpacity={0.8} key={option}
                                    onPress={options[option]}>
                                  <Text style={styles.cardOptionText}>{option}</Text>
                                </TouchableHighlight>)
                              )}
                      </Animated.View>
                    )
  }
  const styles=StyleSheet.create({
      cardOptions:{
          justifyContent: 'center',
          alignItems: 'center',
          width:300,
          height: 350,
          backgroundColor: '#000',
          paddingVertical: 15,
          position: 'absolute',
          top:12
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
