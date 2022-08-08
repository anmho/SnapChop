import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
import RecipeScreen from "../screens/RecipeScreen";

const Stack = createStackNavigator();

export default function RecipesStack({ navigation }) {
  let screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="RecipesHomeScreen">
      <Stack.Screen
        name="RecipesHomeScreen"
        component={RecipesHomeScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />
      <Stack.Screen
        name="RecipeCategoryScreen"
        component={RecipeCategoryScreen}
        options={{ ...screenOptions }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{ ...screenOptions }}
      />
    </Stack.Navigator>
  );
}
