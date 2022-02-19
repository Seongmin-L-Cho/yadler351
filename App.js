import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawerContent from "./component/drawer/CustomDrawerContent";
import AddRutin from "./component/AddRutin";
import Tutorial from "./component/Tutorial";
import Rutin from "./component/Rutin";
import FNB from "./component/FNB";
import { Provider } from "react-redux";
import store from "./component/redux/store";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="AddRutin" component={AddRutin} />
          <Drawer.Screen name="Tutorial" component={Tutorial} />
          <Drawer.Screen name="Rutin" component={Rutin} />
        </Drawer.Navigator>

        <FNB />
      </NavigationContainer>
    </Provider>
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
