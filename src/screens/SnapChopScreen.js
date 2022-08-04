import React from "react";
// import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Box,
  Heading,
  Center,
  HStack,
  VStack,
  ScrollView,
  Image,
} from "native-base";
import Chef from "../../assets/img/chef.png";
import MainImg from "../../assets/img/img_4.png";
import FactsImg from "../../assets/img/img_02.png";
import RecipesImg from "../../assets/img/img_05.png";

// export default function SnapChopScreen({ navigation }) {
//   return (
//     <View backgroundColor={"gray.800"}>
//       <Center>
//         <Text
//           fontSize={35}
//           fontWeight={"bold"}
//           fontFamily={"Graphik-Medium"}
//           color={"white"}
//         >
//           Welcome
//         </Text>
//         <Text
//           fontSize={35}
//           fontWeight={"bold"}
//           fontFamil={"Graphik-Medium"}
//           color={"white"}
//         >
//           Snap Chopper
//         </Text>
//         <Image source={MainImg} alt={"img"} size="2xl" />
//       </Center>
//       <Text
//         fontSize={25}
//         fontWeight={"bold"}
//         fontFamily={"Graphik-Medium"}
//         ml={6}
//         color={"white"}
//       >
//         Let's get ...
//       </Text>
//       <View ml={16} mt={3}>
//         <HStack mb={2}>
//           <TouchableOpacity onPress={() => navigation.navigate("Cooking")}>
//             <Box bg={"white"} borderRadius={30} mr="5">
//               <Image source={RecipesImg} alt={"img"} size="xs" />
//             </Box>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Cooking")}>
//             <Box>
//               <Text
//                 fontSize={20}
//                 fontWeight={"bold"}
//                 fontFamily={"Graphik-Medium"}
//                 color={"white"}
//               >
//                 Cookin's with Chefs
//               </Text>
//             </Box>
//           </TouchableOpacity>
//         </HStack>

//         <HStack mb={2}>
//           <Box bg={"white"} borderRadius={30} mr="5">
//             <Image source={Chef} alt={"img"} size="xs" />
//           </Box>
//           <TouchableOpacity onPress={() => navigation.navigate("Recipes")}>
//             <Box>
//               <Text
//                 fontSize={20}
//                 fontWeight={"bold"}
//                 fontFamily={"Graphik-Medium"}
//                 color={"white"}
//               >
//                 Our Own Recipes
//               </Text>
//             </Box>
//           </TouchableOpacity>
//         </HStack>

//         <HStack mb={2}>
//           <Box bg={"white"} borderRadius={30} mr="5">
//             <Image source={FactsImg} alt={"img"} size="xs" />
//           </Box>
//           <TouchableOpacity onPress={() => navigation.navigate("Snack")}>
//             <Box>
//               <Text
//                 fontSize={20}
//                 fontWeight={"bold"}
//                 fontFamily={"Graphik-Medium"}
//                 color={"white"}
//               >
//                 Snack Facts
//               </Text>
//             </Box>
//           </TouchableOpacity>
//         </HStack>
//       </View>
//     </View>
//   );
// }

export default function SnapChopScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        Hello, Jacob
      </Text>
      <ScreenButton
        navigation={navigation}
        screenName={"TutorialsStack"}
        title={"Cookin' with Chefs"}
      />
      <ScreenButton
        navigation={navigation}
        screenName={"Recipes"}
        title={"Recipes"}
      />
      <ScreenButton
        navigation={navigation}
        screenName={"SnackFacts"}
        title={"Snack Facts"}
      />
    </ScrollView>
  );
}

function ScreenButton({ navigation, screenName, title }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Box
        my={2}
        width={"100%"}
        p={4}
        height={40}
        bg={"white"}
        borderRadius={12}
        shadow={2}
      >
        <Text fontSize={"xl"}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
}

{
  /* <Box bg="red.500" height={100}></Box>; */
}
{
  /* <Box bg="red.500" height={100}></Box>; */
}
