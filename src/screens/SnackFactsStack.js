import { createStackNavigator } from "@react-navigation/stack";
import SnackFactsScreen from "./SnackFactsScreen";
import SnackFacts from "./SnackFacts";

const Stack = new createStackNavigator();
export default function SnackFactsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SnackFactsScreen">
      <Stack.Screen
        name="SnackFactsScreen"
        title={"Snack Facts"}
        component={SnackFactsScreen}
      />
      <Stack.Screen
        name="SnackFacts"
        title={"Snack Facts"}
        component={SnackFacts}
      />
    </Stack.Navigator>
  );
}
