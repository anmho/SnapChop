import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native-web";
import { Text, Box } from "native-base";
import { View, ScrollView, TouchableOpacity } from "react-native";
import StatBar from "../components/StatBar";

const Stack = createStackNavigator();
export default function TutorialsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Tutorials">
      <Stack.Screen
        name="Tutorials"
        component={TutorialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tutorial"
        component={TutorialScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function TutorialsScreen({ navigation }) {
  return (
    <>
      <StatBar navigation={navigation} screen={"Tutorials"} />

      <ScrollView style={{ padding: 20, paddingTop: 90 }}>
        <Section title={"How to Dice"} />
        <Section title={"How to Dice"} />
        <Section title={"How to Dice"} />
      </ScrollView>
    </>
  );
}

function Section({ title, items }) {
  return (
    <Box>
      <Text ml={5} fontSize="2xl" fontWeight={"semibold"}>
        {title}
      </Text>
      <ScrollView horizontal={true} style={{ margin: 10 }}>
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </ScrollView>
    </Box>
  );
}

function SectionItem({ image, title, videoUrl }) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        borderRadius={8}
        height={150}
        aspectRatio={3 / 4}
        bg={"gray.500"}
        shadow={2}
        mx={2}
      ></Box>
    </TouchableOpacity>
  );
}

export function TutorialScreen({ navigation }) {
  return <Box bg={"red.500"} height={"1000"} width={"100%"}></Box>;
}

const styles = StyleSheet.create({});
