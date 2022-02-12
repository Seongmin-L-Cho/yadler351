import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Week from "./component/Week";
import AddRutin from "./component/AddRutin";
import Tutorial from "./component/Tutorial";
import FNB from "./component/FNB";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function App() {
  const roundStack = JSON.parse(AsyncStorage.getItem("@roundStack"));

  // if (!roundStack) {
  //   roundStack= [1]
  //   AsyncStorage.setItem("@roundStack", JSON.stringify(roundStack));

  // }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="front" initialRouteName="Week">
        <Drawer.Screen name="루틴추가" component={AddRutin} />
        <Drawer.Screen name="튜토리얼" component={Tutorial} />
        {roundStack?.map((round) => {
          <Drawer.Screen
            name={`${round}Week`}
            children={({ navigation }) => <Week round={round} />}
          />;
        })}
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
