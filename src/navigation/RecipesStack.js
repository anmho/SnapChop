import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import RecipesScreen from "../screens/RecipesScreen";
import RecipeScreen from "../screens/RecipeScreen";

// import BreakfastBowls from "../screens/BreakfastBowls";
// import VeganLife from "../screens/VeganLife";
// import SnappyMeal from "../screens/SnappyMeal";
// import BakedGood from "../screens/BakedGoods";
// import RecipeScreen from "../screens/RecipeScreen";
// import BowlsCategory from "../screens/BowlsCategory";
const Stack = createStackNavigator();

export default function RecipesStack({ navigation }) {
  let screenOptions = {
    tabBarShowLabel: false,
  };
  return (
    <Stack.Navigator initialRouteName="RecipesScreen">
      <Stack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{ screenOptions }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{ screenOptions }}
      />
    </Stack.Navigator>
  );
}
