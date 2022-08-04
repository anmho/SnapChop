import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import RecipesScreen from "../screens/RecipesScreen";
import BreakfastBowls from "../screens/BreakfastBowls";
import VeganLife from "../screens/VeganLife";
import SnappyMeal from "../screens/SnappyMeal";
import BakedGood from "../screens/BakedGoods";
import PotatoBowl from "../screens/PotatoBowl";
import BowlsCategory from "../screens/BowlsCategory";
const Stack = createStackNavigator();

export default function RecipesStack() {
  let screenOptions = {
    tabBarShowLabel: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{ screenOptions }}
      />
      <Stack.Screen name="BreakfastBowls" component={BreakfastBowls} />
      <Stack.Screen name="Vegan Life" component={VeganLife} />
      <Stack.Screen name="Snappy Meal" component={SnappyMeal} />
      <Stack.Screen name="BakedGoods" component={BakedGood} />
      <Stack.Screen name="PotatoBowl" component={PotatoBowl} />
    </Stack.Navigator>
  );
}
