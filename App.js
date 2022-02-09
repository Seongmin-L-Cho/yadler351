import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Week from "./component/Week";
import AddRutin from "./component/AddRutin";
import Tutorial from "./component/Tutorial";
import FNB from "./component/FNB";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="front" initialRouteName="Week">
        <Drawer.Screen name="Week" component={Week} />
        <Drawer.Screen name="AddRutin" component={AddRutin} />
        <Drawer.Screen name="Tutorial" component={Tutorial} />
      </Drawer.Navigator>
      <FNB />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
