import { Text, View } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Rutin() {
  // const roundStack = await AsyncStorage.getItem("@roundStack");

  // console.log(roundStack);
  // const [values, setValues] = useState({
  //   squart: getItem("@squart"),
  //   deadLift: getItem("@deadLift"),
  //   benchPress: getItem("@benchPress"),
  //   militaryPress: getItem("@militaryPress"),
  // });
  const { squart, deadLift, benchPress, militaryPress } = values;

  const list = ["스쿼트", "데드리프트", "벤치프레스", "밀리터리 프레스"];

  return <View></View>;
}
