import { Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function InputBox({ onChange, value, name }) {
  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        name={name}
        onChange={onChange}
        keyboardType="numeric"
        multiline={false}
      />
    </View>
  );
}
