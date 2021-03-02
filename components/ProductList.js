import React from "react";
import { useSelector } from "react-redux";
import { Spinner, List } from "native-base";

import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  if (loading) return <Spinner />;
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return <List>{productList}</List>;
};

export default ProductList;
