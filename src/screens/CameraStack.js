import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  Image,
} from "react-native";

import { useEffect, useRef, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import * as ImagePicker from "expo-image-picker";

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";
import ScanResults from "../components/ScanResults";
import StatBar from "../components/StatBar";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import SnapChopScreen from "./SnapChopScreen";
import RecipeScreen from "../screens/RecipeScreen";
import TutorialsHomeScreen from "./TutorialsHomeScreen";
import SnackFactsHomeScreen from "./SnackFactsHomeScreen";
import SnapChopStack from "../navigation/SnapChopStack";
import CameraScreen from "../screens/CameraScreen";

const Stack = createStackNavigator();
export default function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SnapChopStack"
        component={SnapChopStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

