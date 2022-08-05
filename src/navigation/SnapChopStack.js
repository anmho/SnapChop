import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import RecipesScreen from "../screens/RecipesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import CookingScreen from "../screens/CookingScreen";
import SnackFactsStack from "../screens/SnackFactsStack";
import RecipesStack from "./RecipesStack";
import SnackFacts from "../screens/SnackFacts";
import SnapChopScreen from "../screens/SnapChopScreen";
import TutorialsStack from "../screens/TutorialsStack";
const Stack = createStackNavigator();

export default function SnapChopStack({ navigation }) {
  let screenOptions = {
    tabBarShowLabel: false,
  };
  return (
    <Stack.Navigator initialRouteName="SnapChopScreen">
      <Stack.Screen
        name="SnapChopScreen"
        component={SnapChopScreen}
        options={{ title: "Snap Chop", ...screenOptions }}
      />
      <Stack.Screen
        name="RecipesStack"
        component={RecipesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TutorialsStack"
        component={TutorialsStack}
        title={"Cookin' with Chefs"}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SnackFactsStack"
        component={SnackFactsStack}
        title={"Snack Facts"}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
