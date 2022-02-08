import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LNB from "./component/LNB";
import FNB from "./component/FNB";

export default function App() {
  return (
    <View style={styles.container}>
      <LNB />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <FNB />
    </View>
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
