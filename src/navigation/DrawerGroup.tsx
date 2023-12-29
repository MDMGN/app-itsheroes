import { createDrawerNavigator } from "@react-navigation/drawer"
import { MyHeroes } from "../screens"
import StackGroup from "./StackGroup"


const Drawer=createDrawerNavigator()
export default function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Inicio' component={StackGroup} options={{headerShown:false}}/>
      <Drawer.Screen name="Mis Heroes" component={MyHeroes} />
    </Drawer.Navigator>
  )
}
