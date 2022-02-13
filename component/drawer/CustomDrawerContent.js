import PropTypes from "prop-types";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  let temp = [1, 2, 3];
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
        {temp.map((a) => {
          return (
            <DrawerItem
              label="Rutin"
              onPress={() => props.navigation.navigate("Rutin")}
            />
          );
        })}
      </DrawerContentScrollView>
    </>
  );
}
