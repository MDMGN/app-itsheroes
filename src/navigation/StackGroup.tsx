import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack"
import { DetailsHero } from "../components"
import BottomTab from "./BottomTap"

const Stack=createStackNavigator()
export default function StackGroup() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomTap" component={BottomTab} options={{ headerShown:false}}/>
        <Stack.Screen name="details-hero" component={DetailsHero} options={{headerStyle:{backgroundColor:'#ddd'}}} />
    </Stack.Navigator>
  )
}
