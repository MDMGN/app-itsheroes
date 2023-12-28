import { useContext } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SearchContext } from '../contexts/searchContext/SearchContext'

export function SearchInput() {
  const {search,setSearch} = useContext(SearchContext)
  return (
    <View style={styles.container}>
      <TextInput 
          style={styles.inputSearch} 
          placeholder='Buscar heroe' 
          placeholderTextColor={'#000'}
          value={search}
          onChangeText={(text)=> {
              setSearch(text)
          }}
    />
    <TouchableOpacity 
        style={styles.close} 
        activeOpacity={.5} 
        onPress={()=>setSearch('')}>
      <Text style={styles.closeMark}>x</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    width: '100%',
    height: '70%',
    marginRight:20,
  },
  inputSearch:{
    width:'100%',
    height:'100%',
    backgroundColor: '#dddddd',
    opacity:.8,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  close:{
    position: 'absolute',
    right: 8,
  },
  closeMark:{
    fontSize: 15,
    textTransform:'uppercase',
    lineHeight: 35
  }
})
