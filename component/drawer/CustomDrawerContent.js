import PropTypes from "prop-types";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { add } from "../redux/store";
import { Alert, StyleSheet, Text, View } from "react-native";

function CustomDrawerContent(props) {
  const [roundStack, setRoundStack] = useState();
  useEffect(() => {
    async function getRoundStack() {
      try {
        const round = await AsyncStorage.getItem("@roundStack");
        if (round !== null) {
          setRoundStack(JSON.parse(round));
        }
      } catch (e) {
        console.log(e);
        Alert.alert("AsyncStorage 실패");
      }
    }

    console.log("dfdf");
    getRoundStack();
  }, []);

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
        {props.roundStack?.map((round) => {
          return (
            <DrawerItem
              label={`${round}Rutin`}
              onPress={() => props.navigation.navigate("Rutin", { round })}
              key={round}
            />
          );
        })}
      </DrawerContentScrollView>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setRoundStack: (text) => dispatch(set(text)),
  };
}

function mapStateToProps(state) {
  return { roundStack: state };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContent);
