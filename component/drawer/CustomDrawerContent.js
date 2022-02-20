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
  // https://stackoverflow.com/questions/60313089/setting-state-along-with-asyncstorage-in-useeffect-hook-causes-infinite-loop
  // useEffect(() => {
  //   async function getRoundStack() {
  //     try {
  //       const round = await AsyncStorage.getItem("@roundStack");
  //       console.log("엥??");
  //       console.log(round);
  //       if (round !== null) {
  //         setRoundStack(JSON.parse(round));
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       Alert.alert("AsyncStorage 실패");
  //     }
  //   }

  //   const temp = getRoundStack();
    // .then((data) => {
    //   console.log("dfdfdfdfdfdf");

    //   console.log(data);
    // })
    // .then((value) => {
    //   console.log(value);
    //   if (value) {
    //     // props.setRoundStack(JSON.parse(value));

    //     setRoundStack(JSON.parse(value));
    //   }
    // });

    console.log(temp);
    let temp2;
    temp.then((value) => value).then((value2) => (temp2 = value2));
    console.log("ddfdfdrawefdfdr");
    console.log("dfdfdf", temp2);
  });

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
