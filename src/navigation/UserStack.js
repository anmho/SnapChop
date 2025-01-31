import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { HeaderBackButton } from "@react-navigation/stack";

// Screens
import MapStack from "../screens/MapStack";
import CameraStack from "../screens/CameraStack";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileStack from "../screens/ProfileScreen";
import Test from "../screens/Test";
// Stacks
import ChatStack from "./ChatStack";
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import SnapChopStack from "./SnapChopStack";
import TutorialsStack from "../screens/TutorialsStack";
import RecipeScreen from "../screens/RecipeScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
import StatBar from "../components/StatBar";
const Tab = createBottomTabNavigator();

export default function UserStack() {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <StatBar />
      // <Button
      //   onPress={() => {
      //     signOut(auth)
      //       .then(() => {
      //         // Sign-out successful.
      //         user = null;
      //       })
      //       .catch((error) => {
      //         // An error happened.
      //         // should we do something with that error??
      //       });
      //   }}
      //   title="Log Out"
      // />
    ),
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
        initialRouteName="CameraStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "MapStack") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "ChatStack") {
              iconName = "ios-chatbox-outline";
              iconColor = focused ? "#2b83b3" : "grey";
            } else if (route.name === "CameraStack") {
              iconName = focused
                ? "ios-scan-circle-outline"
                : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "StoriesStack") {
              iconName = "ios-people-outline";
              iconColor = focused ? "purple" : "grey";
            } else if (route.name === "SpotlightStack") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            } else if (route.name === "MiniStack") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        <Tab.Screen
          name="MapStack"
          component={MapStack}
          options={{
            headerShown: false,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{ tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{ ...screenOptions, headerShown: false }}
        />
        <Tab.Screen
          name="StoriesStack"
          component={StoriesScreen}
          options={{ ...screenOptions, headerShown: false }}
        />
        <Tab.Screen
          name="SpotlightStack"
          component={SpotlightScreen}
          options={{ ...screenOptions, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
