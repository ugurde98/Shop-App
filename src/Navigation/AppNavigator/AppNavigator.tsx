import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import Shop from "../../assets/Shop";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } 
          // else if (route.name === "Cart") {
          //   iconName = focused ? "cart-sharp" : "cart-outline";
          // } else if (route.name === "Categories") {
          //   iconName = focused ? "list-sharp" : "list-outline";
          // } else if (route.name === "User") {
          //   iconName = focused ? "man-sharp" : "man-outline";
          // }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#d3300e",
        tabBarInactiveTintColor: "gray",
        
        headerTitle: () => <Shop width={107.5} height={18.5} fill={"white"} />,
        headerStyle: {
          backgroundColor: '#d3300e',
        },
      })
      }
    >
      <Tab.Screen component={HomeStackNavigator} name="Home" />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
