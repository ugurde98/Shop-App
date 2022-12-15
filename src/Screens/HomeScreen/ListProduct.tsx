import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Products } from "../../Services/ProductsApi";
import ListProductComponent from "../../Components/ProductComponents/ListProductComponent";

const ListProduct = () => {
  const [data, setData] = useState([]);
  const Datax = async () => {
    const product = await Products();
    setData(product);
  };
  useEffect(() => {
    Datax();
  }, []);
  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <ListProductComponent item={item} />}
      estimatedItemSize={200}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListProduct;
