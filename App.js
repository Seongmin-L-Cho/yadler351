import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CustomDrawerContent from "./component/drawer/CustomDrawerContent";
import AddRutin from "./component/AddRutin";
import Tutorial from "./component/Tutorial";
import Rutin from "./component/Rutin";
import FNB from "./component/FNB";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function App() {
  const [roundStack, setRoundStack] = useState([1]);
  useEffect(async () => {
    try {
      const round = await AsyncStorage.getItem("@roundStack");
      if (round) {
        setRoundStack(JSON.parse(round));
      }
    } catch (e) {
      console.log(e);
      Alert.alert("AsyncStorage 실패");
    }
  }, []);

  const temp = [1, 2];
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="AddRutin" component={AddRutin} />
          <Drawer.Screen name="Tutorial" component={Tutorial} />
        </Drawer.Navigator>

        <FNB />
      </NavigationContainer>
    </>
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
