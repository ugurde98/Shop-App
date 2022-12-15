import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

const ProductRatingComponent = ({ rating }: any) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        justifyContent: "flex-start",
        //borderWidth: 1,
        width: width * 0.19,
        margin:2,
        borderRadius:5
        
      }}
    >
      {/* <Text>ProductRatingComponent</Text> */}
      <Rating
        //ratingBackgroundColor="blue"
        //tintColor="white"
        type="star"
        //ratingColor="orange"
        ratingCount={5}
        imageSize={14}
        startingValue={rating.rate}
        readonly={true}
        
        style={{ borderRadius:5 }}
      />
    </View>
  );
};

export default ProductRatingComponent;
