import Navigation from './src/navigation/Navigation';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font"
import { SearchProvider } from './src/contexts/searchContext/SearchProvider';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
                      'HeyComic':require('./assets/fonts/HeyComic.ttf'),
                      'HiroMisaki':require('./assets/fonts/HIROMISAKE.ttf'),
                      'KOMIKAX':require('./assets/fonts/KOMIKAX.ttf')
                        });

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <SearchProvider>
            <Navigation />
        </SearchProvider>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})