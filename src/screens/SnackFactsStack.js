import { createStackNavigator } from "@react-navigation/stack";
import SnackFactsScreen from "./SnackFactsScreen";

const Stack = new createStackNavigator();
export default function SnackFactsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SnackFactsScreen">
      <Stack.Screen
        name="SnackFactsScreen"
        title={"Snack Facts"}
        component={SnackFactsScreen}
      />
    </Stack.Navigator>
  );
}
