import { StatusBar } from "expo-status-bar";
import { Header } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
// import ShopItem from "./components/ShopItem";
import ShopList from "./components/ShopList";
import store from "./store";
import ShopDetail from "./components/ShopDetail";
import Navigator from "./components/Navigation";
import Home from "./components/Home";

export default function App() {
  return (
    <Provider store={store}>
      {/* <ShopDetail /> */}

      <Navigator />
    </Provider>
  );
}
