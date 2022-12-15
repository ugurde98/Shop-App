import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Categories } from "../../Services/CategoriesApi";
import CategoryTagComponent from "../../Components/ProductComponents/CategoryTagComponent";
import CategoryListComponent from "../../Components/CategoryListComponent";

const ListCategory = () => {
  const [data, setData] = useState([]);
  const Datax = async () => {
    const category = await Categories();
    setData(category);
  };
  useEffect(() => {
    Datax();
  }, []);
  return (
    <View>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <CategoryListComponent tag={item} fontS={16} />
        )}
        estimatedItemSize={200}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListCategory;
