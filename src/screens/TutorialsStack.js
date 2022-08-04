import { createStackNavigator } from "@react-navigation/stack";
import { Text, Box } from "native-base";
import { View, ScrollView, TouchableOpacity } from "react-native";
import StatBar from "../components/StatBar";
import TutorialsScreen from "./TutorialsScreen";
import TutorialScreen from "./TutorialScreen";

const Stack = createStackNavigator();
export default function TutorialsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="TutorialsScreen">
      <Stack.Screen
        name="TutorialsScreen"
        component={TutorialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TutorialScreen"
        component={TutorialScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
