import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import RecipesScreen from "../screens/RecipesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import CookingScreen from "../screens/CookingScreen";
import SnackFactsStack from "../screens/SnackFacts";
import RecipesStack from "./RecipesStack";
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
      <Stack.Screen name="CookingStack" component={CookingScreen} />
      <Stack.Screen
        name="Recipes"
        component={RecipesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TutorialsStack"
        component={TutorialsStack}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Snack" component={SnackFacts} /> */}
    </Stack.Navigator>
  );
}
