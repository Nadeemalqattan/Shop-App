import React from "react";

import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
} from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <View>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
          </Left>
          <Body>
            <Text>{shop.name}</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigation.navigate("ShopDetail", { shop })}
            >
              <Text>Details</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    </View>
  );
};

export default ShopItem;
