import { Text, View } from "react-native";
import { useState } from "react";
import InputBox from "./common/InputBox";
export default function AddRutin() {
  const [inputs, setInputs] = useState({
    squart: 0,
    deadLift: 0,
    benchPress: 0,
    militaryPress: 0,
  });
  const { squart, deadLift, benchPress, militaryPress } = inputs;
  const list = ["스쿼트", "데드리프트", "벤치프레스", "밀리터리 프레스"];

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <View>
        <Text>루틴 추가</Text>
      </View>
      <View>
        <Text>1RM 입력</Text>
      </View>
      <View>
        <View>
          {list.map((name) => (
            <InputBox name={name} onChange={onChange} />
          ))}
        </View>
      </View>
    </>
  );
}
