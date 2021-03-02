import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="ShopList" component={ShopList} />
        <Screen
          name="ShopDetail"
          component={ShopDetail}
          options={({ route }) => {
            const { shop } = route.params;
            return {
              title: shop.name,
            };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
