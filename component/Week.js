import { Text, View } from "react-native";
import { useState } from "react";
import { getItem } from "@react-native-async-storage/async-storage";

export default function Week() {
  const [values, setValues] = useState({
    squart: getItem("@squart"),
    deadLift: getItem("@deadLift"),
    benchPress: getItem("@benchPress"),
    militaryPress: getItem("@militaryPress"),
  });
  const { squart, deadLift, benchPress, militaryPress } = values;

  const list = ["스쿼트", "데드리프트", "벤치프레스", "밀리터리 프레스"];

  // const handleRmData = async () => {
  //   try {
  //     const value = await getMultiple(
  //       "@squart",
  //       "@deadList",
  //       "@benchPress",
  //       "@militaryPress"
  //     );
  //     if (value !== null) {
  //       console.log(value["@squart"]);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  return <View>text</View>;
}
