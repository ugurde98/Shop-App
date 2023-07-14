import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CartService } from "../../Services/CartService";
import { useAuth0 } from "react-native-auth0";

const { height, width } = Dimensions.get("window");
const CartScreen = () => {
  const [products, setProducts]: any = useState(null);
  const { user, error } = useAuth0();



  const getCart = async () => {
    const data = await CartService();
    setProducts(data.products);
  };
  useEffect(() => {
    getCart();
  }, []);

 if (user) {
  return (
    <View style={{flex:1}} > 
      {products   && (
        <>
        <FlatList
          data={products}
          renderItem={({ item }) => <RenderCart item={item}  />}
          />
        
          </>
      )}
     <Text style={{position:'absolute',right:10,bottom:0,marginBottom:10,fontSize:20,fontWeight:"600"}} > Price:20.98</Text>
    </View>
  );
  
 } else {
  return(
    <View style={styles.container}>
      <Text style={styles.textPlease}>Please Login for View Cart</Text>
    </View>
  )
  
 }
};

const RenderCart = ({ item }: any) => {

  const [product, setProduct]: any = useState(null);
  


  const itemGet = () => {
    var requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://fakestoreapi.com/products/" + item.productId, requestOptions)
      .then((response) => response.json())
      .then((result) => setProduct(result))
      .catch((error) => console.log("error", error));
  };



  useEffect(() => {
    itemGet();
 
    
  }, []);
  if (product) {
 
    return (
      <View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            margin: width * 0.02,
            borderRadius: 15,
            flexDirection: "row",
            backgroundColor: "white",
            width: width * 0.96,
            height: height * 0.137,
          }}
        >
          <View
            style={{
              width: width * 0.2,
              height: width * 0.2,
              marginHorizontal: width * 0.02,
            }}
          >
            <Image
              style={{ width: width * 0.2, height: width * 0.2 }}
              source={{
                uri: product.image,
              }}
              resizeMode="contain"
            />
          </View>

          <View style={{ width: 200 }}>
            <Text numberOfLines={2}>{product.title}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>
              {item.quantity}x{product.price}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default CartScreen;

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },textPlease:{
    fontSize:24,
    color:"#d1d1d1"
  }
});
