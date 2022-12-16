import { View, Text, Image, Dimensions, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Banner } from "../../Services/TrendyolBannerApi";

const ListBanner = () => {
  const [data, setData] = useState([]);
  console.log("data: ", data);
  const Datax = async () => {
    let product = await Banner();
    product = product.result.homePageModel.components;
    setData(product);
  };
  useEffect(() => {
    Datax();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <BannerShowImage item={item} />}
        horizontal
        //estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const BannerShowImage = ({ item }: any) => {
  console.log("item: ", item);
  const { height, width } = Dimensions.get("window");

  return (

      <Image
        source={{ uri: item.smallImagePath }}
        style={{
          width: width * 0.96,
          margin: width * 0.02,
          height: height * 0.3,
        }}
        resizeMode="stretch"
      />
    
  );
};

export default ListBanner;
