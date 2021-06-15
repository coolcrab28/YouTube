import { StyleSheet, Text, View, Button } from "react-native";
import { Header } from "./components/Header";
import React from "react";

export function Home({ navigation }) {
  return (
    <View>
      <Header />
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Yo")} title="click" />
    </View>
  );
}

const styles = StyleSheet.create({});
