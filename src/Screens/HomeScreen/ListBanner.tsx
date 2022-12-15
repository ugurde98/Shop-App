import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";

const ListBanner = () => {
  const DATA = [
    {
      id: 3,
      alternateText: "Black Friday Offers",
      imageUrl:
        "https://img.freepik.com/free-psd/horizontal-banner-winter-sale_23-2148729455.jpg?w=1380&t=st=1663328876~exp=1663329476~hmac=37c3665c7af77c542469b9274826fd5fc891c70b130dc1c003df82848e89ed70",
    },
    {
      id: 4,
      imageUrl:
        "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=740&t=st=1671105961~exp=1671106561~hmac=2e8ad1ddef13df1cdc7442c54aa2e8ee70f791afb3937fb85e293b0abc480166",

      alternateText: "Black Friday Offers",
    },
  ];
  const { height, width } = Dimensions.get("window");

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={DATA}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: width * 0.96,
              margin: width * 0.02,
              height: height * 0.4,
            }}
            resizeMode="cover"
          />
        )}
        horizontal
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListBanner;
