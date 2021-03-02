import React from "react";
import { useSelector } from "react-redux";
import { Image } from "react-native";
import { Card, CardItem, Text, Body, View, Spinner } from "native-base";

import ProductList from "../ProductList";

const ShopDetail = ({ navigation, route }) => {
  const loading = useSelector((state) => state.shops.loading);
  const { shop } = route.params;
  const allProducts = useSelector((state) => state.products.products);
  if (loading) return <Spinner />;

  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  return (
    <View>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Text>{shop.name}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: `https://reactnative.dev/img/tiny_logo.png` }}
              style={{ height: 200, width: 355 }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Text>Products</Text>
        </CardItem>
        <ProductList products={products} />
      </Card>
    </View>
  );
};

export default ShopDetail;
