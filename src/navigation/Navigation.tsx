import { NavigationContainer } from "@react-navigation/native";
import StackGroup from "./StackGroup";
import DrawerGroup from "./DrawerGroup";

export default function Navigation() {
  return (
    <NavigationContainer>
        <DrawerGroup />
    </NavigationContainer>
  )
}
