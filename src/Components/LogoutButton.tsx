import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth0, Auth0Provider } from "react-native-auth0";

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession({ customScheme: "shop" });
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />;
};
export default LogoutButton;

const styles = StyleSheet.create({});
