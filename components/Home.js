import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>HELLLLLOOOO WORLDDD</Text>
      <Button title="Press me" onPress={() => alert("I am an alert")} />
    </View>
  );
};

export default Home;
