import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import CategoryTagComponent from "./CategoryTagComponent";
import ProductRatingComponent from "./ProductRatingComponent";
import { useNavigation } from "@react-navigation/native";

const ListProductComponent = ({ item }: any) => {
  console.log("item: ", item);
  const { height, width } = Dimensions.get("window");
  const navigation:any=useNavigation()
  return (
    <TouchableOpacity
      style={{
        width: width * 0.46,
        height: height * 0.38,
        margin: width * 0.02,
        backgroundColor: "white",
      }}
      onPress={()=> navigation.navigate('ProductDetailsScreen',{itemId:item.id})}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={{
          width: width * 0.46,
          height: height * 0.26,
        }}
        resizeMode="contain"
      >
        <View
          style={{
            height: height * 0.26,
            justifyContent: "space-between",
          }}
        >
          <CategoryTagComponent tag={item.category} textSize={10} ok={true} />
        </View>
      </ImageBackground>
      <View>
        <ProductRatingComponent rating={item.rating} />
        <Text numberOfLines={2} style={{ marginHorizontal: 5 }}>
          {item.title}
        </Text>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            marginTop: 3,
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              backgroundColor: "orange",
              padding: 2,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
              {item.price} $
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListProductComponent;
