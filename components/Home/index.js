import { Button, Text, View } from "native-base";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>HELLLLLLLLOOOOOO</Text>
      <Button onPress={() => navigation.navigate("ShopList")}>
        <Text>Press here</Text>
      </Button>
    </View>
  );
};
export default Home;
