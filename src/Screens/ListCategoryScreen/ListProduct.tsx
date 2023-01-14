import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Products } from "../../Services/ProductsApi";
import ListProductComponent from "../../Components/ProductComponents/ListProductComponent";
import { CategoryProducts } from "../../Services/CategoriesApi";

const ListProduct = ({item}:any) => {
  const [data, setData] = useState([]);
  console.log('data: ', data);
  const Datax = async () => {
    const product = await CategoryProducts({item});
    setData(product);
  };
  useEffect(() => {
    Datax();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListProductComponent item={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListProduct;
