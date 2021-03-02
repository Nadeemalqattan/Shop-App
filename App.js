import { StatusBar } from "expo-status-bar";
import { Header } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
// import ShopItem from "./components/ShopItem";
import ShopList from "./components/ShopList";
import store from "./store";
import ShopDetail from "./components/ShopDetail";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Header />
        <ShopDetail />
        {/* <Home /> */}
        {/* <Text>Open up App.js to start working on your a App!</Text> */}
        {/* <ShopList /> */}
        {/* <ProductList /> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
