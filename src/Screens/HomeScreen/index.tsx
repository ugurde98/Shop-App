import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ListProduct from "./ListProduct";
import ListBanner from "./ListBanner";
import { LogBox } from "react-native";
import ListCategory from "./ListCategory";

const HomeScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["FlashList's rendered size is not usable"]);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ListBanner />
      <ListCategory/>
      <ListProduct />
    </ScrollView>
  );
};

export default HomeScreen;
