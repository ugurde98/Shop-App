import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Categories } from "../../Services/CategoriesApi";
import CategoryTagComponent from "../../Components/ProductComponents/CategoryTagComponent";

const ListCategory = () => {
  const [data, setData] = useState([]);
  console.log("data: ", data);
  const Datax = async () => {
    const category = await Categories();
    setData(category);
  };
  useEffect(() => {
    Datax();
  }, []);
  return (
    <View style={{ flex: 1,marginVertical:10}}>
   { data &&   <FlashList
        data={data}
        renderItem={({ item }) => <CategoryTagComponent tag={item} textSize={10} marginV={2} />}
        estimatedItemSize={200}
        horizontal
        showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      />}
    </View>
  );
};

export default ListCategory;
