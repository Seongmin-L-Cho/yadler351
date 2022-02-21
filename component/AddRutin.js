import { Text, View, Alert, Button } from "react-native";
import { useState } from "react";
import InputBox from "./common/InputBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { add } from "./redux/store";

function AddRutin({ navigation, addRoundStack }) {
  const [inputs, setInputs] = useState({
    squart: 0,
    deadLift: 0,
    benchPress: 0,
    militaryPress: 0,
  });

  // const { squart, deadLift, benchPress, militaryPress } = inputs;
  const list = ["스쿼트", "데드리프트", "벤치프레스", "밀리터리 프레스"];

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      name: value,
    });
  };

  const getAsyncItem = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoundStack = async () => {
    const round = await getAsyncItem("@roundStack");
    let roundStack;
    console.log("round");
    console.log(round);
    if (round) {
      roundStack = JSON.parse(round);
      let newRound = roundStack[roundStack.length - 1] + 1;
      roundStack.push(newRound);
    } else {
      roundStack = [1];
    }

    return roundStack;
  };

  const handleSubmit = async () => {
    const roundStack = await handleRoundStack();
    const newRound = roundStack[roundStack.length - 1];
    const rmSet = {
      round: newRound,
      squart: inputs.squart,
      deadList: inputs.deadList,
      benchPress: inputs.benchPress,
      militaryPress: inputs.militaryPress,
    };

    const roundStackPair = ["@roundStack", JSON.stringify(roundStack)];
    const rutinPair = [`@${newRound}rutin`, JSON.stringify(rmSet)];

    try {
      await AsyncStorage.multiSet([roundStackPair, rutinPair]);
    } catch (e) {
      console.log(e);
      Alert.alert("루틴 생성에 실패했습니다");
    }
    addRoundStack(newRound);
    navigation.jumpTo("Rutin");
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
          {list?.map((name) => (
            <InputBox name={name} onChange={onChange} key={name} />
          ))}
        </View>
      </View>
      <View>
        <Button
          onPress={() => handleSubmit()}
          title="루틴 생성"
          color="#841584"
        />
      </View>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addRoundStack: (text) => dispatch(add(text)),
  };
}

function mapStateToProps(state) {
  return { roundStack: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRutin);
