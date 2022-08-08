import { createStackNavigator } from "@react-navigation/stack";
import { Text, Box } from "native-base";
import { View, ScrollView, TouchableOpacity } from "react-native";
import StatBar from "../components/StatBar";
import TutorialsHomeScreen from "./TutorialsHomeScreen";
import TutorialScreen from "./TutorialScreen";

const Stack = createStackNavigator();
export default function TutorialsStack({ navigation }) {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="TutorialsScreen">
      <Stack.Screen
        name="TutorialsScreen"
        component={TutorialsHomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="TutorialScreen"
        component={TutorialScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
}
