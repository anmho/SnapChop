import { View } from "react-native";
import { Box, Image } from "native-base";
import SnackFacts from "../../assets/img/SnackFacts.png";
import { TouchableOpacity, ScrollView } from "react-native";

export default function SnackFactsScreen({ navigation }) {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <Image source={SnackFacts} width={"100%"} height={"100%"} />
      <TouchableOpacity
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
        }}
        onPress={() => navigation.navigate("SnackFactScreen")}
      ></TouchableOpacity>
    </Box>
  );
}
