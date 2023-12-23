import Navigation from './src/navigation/Navigation';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <Navigation />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})