import React from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import RecipeScreen from "../screens/RecipeScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
// import SnackFactsStack from "../screens/SnackFactsStack";
import RecipesStack from "./RecipesStack";

import SnackFactsHomeScreen from "../screens/SnackFactsHomeScreen";
import SnackFactsScreen from "../screens/SnackFactsScreen";
import SnapChopHomeScreen from "../screens/SnapChopScreen";
import TutorialsStack from "../screens/TutorialsStack";
import TutorialsHomeScreen from "../screens/TutorialsHomeScreen";
import { Text, Box, Image } from "native-base";
import SnapChopIcon from "../../assets/img/SnapChopIcon.png";

import StatBar from "../components/StatBar";
import TutorialScreen from "../screens/TutorialScreen";
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Box
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Box height={"100%"} aspectRatio={1 / 1} p={1}>
        <Image
          source={SnapChopIcon}
          height={"100%"}
          aspectRatio={1 / 1}
          resizeMode={"contain"}
        />
      </Box>

      <Text fontWeight={"bold"} fontSize={20} fontFamily={"Graphik-Medium"}>
        Snap Chop
      </Text>
    </Box>
  );
}

function HeaderRight() {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"flex-end"}
      flexDir={"row"}
      pr={2}
    >
      <Image
        source={require("../../assets/snapchat/AddFriendIcon.png")}
        resizeMode={"contain"}
        height={10}
        mr={2}
        width={10}
        alt={"Add Friends"}
      />

      <Image
        source={require("../../assets/snapchat/OptionsIcon.png")}
        resizeMode={"contain"}
        height={10}
        width={10}
        alt={"Options"}
      />
    </Box>
  );
}

export default function SnapChopStack({ navigation, route }) {
  let screenOptions = {
    tabBarShowLabel: false,
    headerShown: true,
    headerTitle: (props) => <LogoTitle {...props} />,
    headerLeft: () => <StatBar navigation={navigation} />,
    headerRight: () => <HeaderRight />,
    initial: false,
  };

  return (
    <Stack.Navigator
    // initialRouteName={
    //   route.params && route.params.screen
    //     ? route.params.screen
    //     : "SnapChopScreen"
    // }
    // initialRouteName="SnapChopScreen"
    >
      {/* Snap Chop Home Screen */}
      <Stack.Screen
        name="SnapChopScreen"
        component={SnapChopHomeScreen}
        options={{ title: "Snap Chop", ...screenOptions }}
      />

      <Stack.Screen
        name="RecipesStack"
        component={RecipesStack}
        options={{ title: "Recipes", ...screenOptions }}
      />

      {/* Recipes */}
      <Stack.Screen
        name="RecipesHomeScreen"
        component={RecipesHomeScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />
      <Stack.Screen
        name="RecipeCategoryScreen"
        component={RecipeCategoryScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />

      {/* Tutorials */}
      <Stack.Screen
        name="TutorialsStack"
        component={TutorialsStack}
        options={{ title: "Cookin' with Chefs", ...screenOptions }}
      />
      <Stack.Screen
        name="TutorialsHomeScreen"
        component={TutorialsHomeScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />
      <Stack.Screen
        name="TutorialScreen"
        component={TutorialScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />

      {/* Snack Facts */}
      <Stack.Screen
        name="SnackFactsHomeScreen"
        component={SnackFactsHomeScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />

      <Stack.Screen
        name="SnackFactsScreen"
        component={SnackFactsScreen}
        options={{ title: "Recipes", ...screenOptions }}
      />
      {/* <Stack.Screen
        name="SnackFactsStack"
        component={SnackFactsStack}
        options={{ title: "Snap Chop", ...screenOptions }}
      /> */}
    </Stack.Navigator>
  );
}
