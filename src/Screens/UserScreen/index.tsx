import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import LoginButton from "../../Components/LoginButton";

import { useAuth0, Auth0Provider } from "react-native-auth0";
import LogoutButton from "../../Components/LogoutButton";
const { height, width } = Dimensions.get("window");

const Profile = () => {
  const { user, error } = useAuth0();
  console.log("user: ", user);

  return (
    <>
      {user && (
        <View style={styles.profile}>
          <Text style={styles.textStyle2}>{user.nickname} </Text>
          <Text style={styles.textStyle2}>{user.name} </Text>
          <Text style={styles.textStyle2}>{user.email} </Text>
        </View>
      )}
      {!user && <Text>Not logged in</Text>}
      {error && <Text>{error.message}</Text>}
    </>
  );
};

const UserScreen = () => {
  const { user, error } = useAuth0();
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <View style={styles.container2}>
          <Text>Not logged in</Text>
          <LoginButton />
        </View>
      )}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    top: "300%",
  },
  button: {
    height: height * 0.05,
    width: width * 0.96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  profile: {
    width: width * 0.96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006ee6bb",
    borderRadius: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  textStyle2: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    opacity: 0.8,
  },
});
