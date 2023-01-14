import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryListComponent = ({ tag, fontS }: any) => {
  console.log("tag: ", tag);
  const navigation:any=useNavigation()
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "orange",
        margin: 5,
        padding: 5,
        borderRadius: 5,
      }}
      onPress={()=> navigation.navigate("ListCategoryScreen",{item:tag})}
    >
      <Text style={{ color: "white", fontSize: fontS, fontWeight: "700" }}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryListComponent;
