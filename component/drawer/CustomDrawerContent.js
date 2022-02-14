import PropTypes from "prop-types";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  const [roundStack, setRoundStack] = useState([]);
  useEffect(() => {
    async function getRoundStack() {
      try {
        const round = await AsyncStorage.getItem("@roundStack");
        if (round !== null) {
          return round;
        }
      } catch (e) {
        console.log(e);
        Alert.alert("AsyncStorage 실패");
      }
    }

    getRoundStack()
      .then((data) => {
        data;
      })
      .then((value) => {
        if (value) {
          setRoundStack(JSON.parse(value));
        }
      });

    console.log("drawer");
    console.log(roundStack);
  }, [roundStack]);

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="AddRutin"
          onPress={() => props.navigation.navigate("AddRutin")}
        />
        <DrawerItem
          label="Tutorial"
          onPress={() => props.navigation.navigate("Tutorial")}
        />
        {roundStack?.map((round) => {
          return (
            <DrawerItem
              label={`${round}Rutin`}
              onPress={() => props.navigation.navigate("Rutin", { round })}
            />
          );
        })}
      </DrawerContentScrollView>
    </>
  );
}
