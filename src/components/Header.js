import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function Header({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 24, margin: "auto" }}>Header</Text>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    display: "flex",
    // position: "fixed",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
