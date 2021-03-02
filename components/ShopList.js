import React from "react";
import { useSelector } from "react-redux";
import { Spinner, List } from "native-base";

import ShopItem from "./ShopItem";

const ShopList = () => {
  const shops = useSelector((state) => state.shops.shops);
  const loading = useSelector((state) => state.shops.loading);

  if (loading) return <Spinner />;
  const shopList = shops.map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return <List>{shopList}</List>;
};

export default ShopList;
