import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export function SearchInput() {
  const [search, setSearch] = useState<string>()
  return (
    <TextInput 
          style={styles.inputSearch} 
          placeholder='Buscar heroe' 
          placeholderTextColor={'#000'}
          onChangeText={setSearch}
    />
  )
}
const styles=StyleSheet.create({
  inputSearch:{
      width: '100%',
      height: '70%',
      backgroundColor: '#dddddd',
      opacity:.8,
      marginRight:20,
      paddingHorizontal: 10,
      borderRadius: 10
  }
})
