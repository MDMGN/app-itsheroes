import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font"
import UserProvider from './src/contexts/userContext/UserProvider';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
                      'HeyComic':require('./assets/fonts/HeyComic.ttf'),
                      'HiroMisaki':require('./assets/fonts/HIROMISAKE.ttf'),
                      'KOMIKAX':require('./assets/fonts/KOMIKAX.ttf')
                        });

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <UserProvider>
            <Navigation />
        </UserProvider>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})