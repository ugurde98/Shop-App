import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryComponent = ({ item }: any) => {
  const { height, width } = Dimensions.get("window");
  const navigation:any =useNavigation()


  var items = Array("#e63946","#457b9d","#1d3557","#252525")
  var palette = items[Math.floor(Math.random()*items.length)];

  return (
    <TouchableOpacity
      style={{
        width: width * 0.96,
        height: height * 0.2,
        margin: width * 0.02,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:palette
      }}
      onPress={()=> navigation.navigate("ListCategoryScreen",{item:item})}

    >
      <Text style={{color:'white', fontSize:20,fontWeight:'600'}}>{item} </Text>
    </TouchableOpacity>
  );
};

export default CategoryComponent;
