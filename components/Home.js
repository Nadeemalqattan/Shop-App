import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  Container,
  Content,
  Body,
  Right,
  Header,
  Title,
} from "native-base";

const Home = () => {
  return (
    <View>
      <Header style={{ flex: 0 }}>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Text>HELLLLLOOOO WORLDDD</Text>
      <Button title="Press me" onPress={() => alert("I am an alert")} />
    </View>
  );
};

export default Home;
