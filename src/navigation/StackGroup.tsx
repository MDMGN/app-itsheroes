import { createStackNavigator } from "@react-navigation/stack"
import { SearchInput } from "../components"
import BottomTab from "./BottomTap"
import { Search, DetailsHero } from "../screens"

const Stack=createStackNavigator()
export default function StackGroup() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomTap" component={BottomTab} options={{ headerShown:false}}/>
        <Stack.Screen name="details-hero" component={DetailsHero} options={{headerStyle:{backgroundColor:'#ddd'}}} />
        <Stack.Screen name="search" component={Search} options={{headerTitle:'',headerRight:()=>(<SearchInput />),}} />
    </Stack.Navigator>
  )
}
