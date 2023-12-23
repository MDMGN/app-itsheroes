import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Heroes,Shonen,Comics } from "../screens"

const Tab=createBottomTabNavigator()


export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={BottomTabOptions}>
            <Tab.Screen name="heroes"  component={Heroes}/>
            <Tab.Screen name="shonen"  component={Shonen}/>
            <Tab.Screen name="comics"  component={Comics}/>
    </Tab.Navigator>
  )
}

const BottomTabOptions:BottomTabNavigationOptions={
  tabBarLabelStyle:{
    textTransform:"capitalize"
  },
  headerStyle:{
    backgroundColor: '#dfdfdf',
  },
  headerTitleAlign:'center',
  headerTitleStyle:{
    textTransform:'capitalize',
    fontWeight:'bold',
    fontSize:25
  },
}