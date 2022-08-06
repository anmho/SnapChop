import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import CookingScreen from "../screens/CookingScreen";
import SnackFactsStack from "../screens/SnackFactsStack";
import RecipesStack from "./RecipesStack";
import SnackFactsScreen from "../screens/SnackFactsScreen";
import SnapChopHomeScreen from "../screens/SnapChopScreen";
import TutorialsStack from "../screens/TutorialsStack";
const Stack = createStackNavigator();

export default function SnapChopStack({ navigation, route }) {
  let screenOptions = {
    tabBarShowLabel: false,
    headerShown: true,
  };
  console.log(route.params);
  return (
    <Stack.Navigator
      initialRouteName={
        route.params && route.params.screen
          ? route.params.screen
          : "SnapChopScreen"
      }
    >
      <Stack.Screen
        name="SnapChopScreen"
        component={SnapChopHomeScreen}
        options={{ title: "Snap Chop", ...screenOptions }}
      />
      <Stack.Screen
        name="RecipesStack"
        component={RecipesStack}
        title={"Our Own Recipes"}
        options={{ title: "Recipes", ...screenOptions }}
      />
      <Stack.Screen
        name="TutorialsStack"
        component={TutorialsStack}
        options={{ title: "Cookin' with Chefs", ...screenOptions }}
      />
      <Stack.Screen
        name="SnackFactsStack"
        component={SnackFactsStack}
        options={{ title: "Snap Chop", ...screenOptions }}
      />
    </Stack.Navigator>
  );
}
