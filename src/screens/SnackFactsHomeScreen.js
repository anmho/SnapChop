import { View } from "react-native";
import { Box, Image, ScrollView } from "native-base";
import SnackFacts from "../../assets/img/SnackFacts.png";
import { TouchableOpacity, SafeAreaView } from "react-native";
import SnapChopHeading from "../components/SnapChopHeading";

export default function SnackFactsHomeScreen({ navigation }) {
  return (
    <ScrollView
      bg="white"
      contentContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <SnapChopHeading navigation={navigation} title={"Snack Facts"} />
      <TouchableOpacity onPress={() => navigation.navigate("SnackFactsScreen")}>
        <Image
          source={SnackFacts}
          resizeMode={"contain"}
          style={{ flex: 1, height: 710 }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
