import { View } from "react-native";
import { Box, Image, ScrollView } from "native-base";
import SnackFacts from "../../assets/img/SnackFacts.png";
import { TouchableOpacity, SafeAreaView } from "react-native";

export default function SnackFactsHomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        // justifyContent: "center",
        backgroundColor: "white",
        // alignItems: "center",
      }}
    >
      <SafeAreaView display="block">
        <TouchableOpacity
          onPress={() => navigation.navigate("SnackFactsScreen")}
        >
          <Image
            // bg={"red.500"}
            source={SnackFacts}
            resizeMode={"contain"}
            style={{ flex: 1, height: 710 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
