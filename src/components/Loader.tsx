import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


type Props={
  isLoading:boolean
}

export function Loader(props:Props) {
  const {isLoading}=props
    return isLoading ?  (
                  <View style={styles.loader}>
                    <ActivityIndicator size={"large"} color={"#aaa"} />
                  </View>
                  )
              : null
}

const styles=StyleSheet.create({
    loader:{
        marginVertical: 16,
        alignItems:"center"
    }
})