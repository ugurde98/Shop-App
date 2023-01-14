import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../Services/ProductsApi";
import { Rating } from "react-native-ratings";

const ProductDetailsScreen = ({ route }: any) => {
  let item: any = route.params.itemId;
  const { height, width } = Dimensions.get("window");
  const [data, setData]: any = useState([]);
  console.log("data: ", data);
  const Datax = async () => {
    const product = await Product({ item });
    setData(product);
  };
  useEffect(() => {
    Datax();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <ScrollView>
        {data && (
          <>
            <Image
              source={{ uri: data.image }}
              style={{ width: width, height: height * 0.5 }}
              resizeMode="contain"
            />

            <View style={{ width: width * 0.96, margin: width * 0.02 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {data.title}{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    backgroundColor: "orange",
                    margin: width * 0.02,
                    padding: width * 0.02,
                    borderRadius: 5,
                    width: width * 0.35,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                  >
                    {data.category}
                  </Text>
                </View>
                <Rating
                  type="star"
                  ratingCount={5}
                  imageSize={30}
                  startingValue={data.rating?.rate}
                  readonly={true}
                  style={{ borderRadius: 5 }}
                />
              </View>

              <Text>{data.description} </Text>
            </View>
          </>
        )}
      </ScrollView>

      {data && (
        <View
          style={{
            width: width,
            borderTopWidth: 0.5,
            height: height * 0.075,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: width * 0.02,
            borderColor:'#c1c1c1'
          }}
        >
          <View>
            <Text style={{  fontSize: 24, fontWeight: "700" }}>{data.price} $ </Text>
          </View>
          <TouchableOpacity    style={{
                    backgroundColor: "orange",
                    borderRadius: 5,
                    justifyContent: "center",
                    padding:width*0.02
                  }}  >
            <Text  style={{ color: "white", fontSize: 24, fontWeight: "700" }} >Add Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
