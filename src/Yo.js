import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "./components/Header";

export function Yo({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={{ marginTop: "30px" }}>This is Yo</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
