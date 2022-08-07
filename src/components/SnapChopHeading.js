import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SnapChopHeading({
  navigation,
  title = "Snap Chop",
  action = (navigation) => navigation.goBack(),
}) {
  return (
    <Box
      flexDir={"row"}
      justifyContent="space-between"
      alignItems={"center"}
      my={5}
      px={4}
    >
      <TouchableOpacity onPress={() => action(navigation)}>
        <Box
          bg={"#FFE300"}
          h={10}
          w={10}
          borderRadius={12}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Box>
      </TouchableOpacity>
      <Text fontSize={"2xl"} fontWeight="bold" fontFamily={"Graphik-Medium"}>
        {title}
      </Text>
      <Box h={10} w={10} borderRadius={12} />
    </Box>
  );
}
