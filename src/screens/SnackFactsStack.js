import { createStackNavigator } from "@react-navigation/stack";
import SnackFactsHomeScreen from "./SnackFactsHomeScreen";
import SnackFactsScreen from "./SnackFactsScreen";

const Stack = new createStackNavigator();
export default function SnackFactsStack({ navigation }) {
  const screenOptions = { headerShown: false };
  
  return (
    <Stack.Navigator initialRouteName="SnackFactsHomeScreen">
      <Stack.Screen
        name="SnackFactsHomeScreen"
        component={SnackFactsHomeScreen}
        options={{ title: "Snack Facts", ...screenOptions }}
      />
      <Stack.Screen
        name="SnackFactsScreen"
        component={SnackFactsScreen}
        options={{ title: "Snack Facts", ...screenOptions }}
      />
    </Stack.Navigator>
  );
}
