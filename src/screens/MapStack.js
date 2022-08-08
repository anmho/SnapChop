import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import StatBar from "../components/StatBar";

import * as Location from "expo-location";

import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { Box, Image as NativeBaseImage } from "native-base";

const Stack = createStackNavigator();

const stores = [
  {
    name: "Albertson's",
    description: "Accepts SNAP/EBT",
    coordinate: { latitude: 34.015802, longitude: -118.339572 },
  },
  {
    name: "Ralphs",
    description: "Accepts SNAP/EBT",
    coordinate: { latitude: 33.99064, longitude: -118.32742 },
  },
  {
    name: "Food 4 Less",
    description: "Accepts SNAP/EBT",
    coordinate: { latitude: 33.999832, longitude: -118.324356 },
  },
];

const gardens = [
  {
    name: "Good Earth",
    description: "Community Garden",
    // coordinate: { latitude: 34.023373, longitude: -118.355505 },
    coordinate: { latitude: 34.027883, longitude: -118.36813 },
    marker: require("../../assets/img/GoodEarthCG.png"),
  },
  {
    name: "Crenshaw",
    description: "Community Garden",
    coordinate: { latitude: 34.046151, longitude: -118.328042 },
    marker: require("../../assets/img/CrenshawCG.png"),
  },
  {
    name: "Vermont Gardens",
    description: "Community Garden",
    coordinate: { latitude: 34.00068, longitude: -118.30262 },
    marker: require("../../assets/img/VermontCG.png"),
  },
];

const other = [
  { coordinates: { latitude: 0, longitude: 0 } },
  { coordinates: { latitude: 0, longitude: 0 } },
  { coordinates: { latitude: 0, longitude: 0 } },
];
const friends = [
  {
    name: "Trung",
    coordinate: { latitude: 33.940855, longitude: -118.303434 },
    marker: require("../../assets/img/Trung.png"),
  },
  {
    name: "Jacob",
    coordinate: { latitude: 33.915703, longitude: -118.353119 },
    marker: require("../../assets/img/Jacob.png"),
  },
  {
    name: "Andy",
    coordinate: { latitude: 33.970792, longitude: -118.366537 },
    marker: require("../../assets/img/Andy.png"),
  },
  {
    name: "Isabel",
    coordinate: { latitude: 34.006946, longitude: -118.318401 },
    marker: require("../../assets/img/Isabel.png"),
  },
  {
    name: "Lois",
    coordinate: { latitude: 34.026603, longitude: -118.351395 },
    marker: require("../../assets/img/Lois.png"),
  },
];

export function MapScreen({ navigation }) {
  const [location, setLocation] = useState({
    coords: {
      latitude: 34.008671,
      longitude: -118.323603,
    },
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // let location = await Location.getCurrentPositionAsync({});
      setLocation({
        coords: { latitude: 34.008671, longitude: -118.323603 },
      });

      setCurrentRegion({
        // latitude: location.coords.latitude,
        latitude: 34.008671,
        longitude: -118.323603,
        // longitude: location.coords.longitude,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
      });
    })();
  }, []);

  let text = "Waiting...";
  text = JSON.stringify(location);

  return (
    <>
      <StatBar screen="map" navigation={navigation} />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={currentRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {console.log(location)}

          {stores.map((store) => (
            <MapMarker
              coords={store.coordinate}
              title={store.name}
              description={store.description}
            />
          ))}

          {gardens.map((garden) => (
            <MapMarker
              coords={garden.coordinate}
              title={garden.name}
              description={garden.description}
              marker={
                <Box
                  // bg="red.500"
                  aspectRatio={3 / 1}
                  height={10}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <NativeBaseImage
                    source={garden.marker}
                    resizeMode={"contain"}
                  />
                </Box>
              }
            />
          ))}

          {friends.map((friend) => (
            <MapMarker
              coords={friend.coordinate}
              title={friend.name}
              marker={
                <Box
                  aspectRatio={1 / 1}
                  height={20}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <NativeBaseImage
                    source={friend.marker}
                    resizeMode={"contain"}
                  />
                </Box>
              }
            />
          ))}
        </MapView>

        {/* Markers */}
        <View style={styles.locationContainer}>
          <TouchableOpacity
            style={styles.userLocation}
            onPress={() => {
              console.log("Go to user location!");
              const { latitude, longitude } = location.coords;
              setCurrentRegion({ ...currentRegion, latitude, longitude });
            }}
          >
            <Ionicons name="ios-navigate" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.bitmojiContainer}>
          <View style={styles.myBitmoji}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>My Bitmoji</Text>
            </View>
          </View>
          <View style={styles.places}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/PlacesMap.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>Places</Text>
            </View>
          </View>
          <View style={styles.myFriends}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/FriendsMap.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>Friends</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function MapMarker({
  coords,
  title,
  label,
  description,
  marker = (
    <Box
      height={10}
      aspectRatio={1 / 1}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <NativeBaseImage
        resizeMode={"contain"}
        source={require("../../assets/img/SnapChopIconLocator.png")}
        alt="Marker"
      />
    </Box>
  ),
}) {
  return (
    <Marker
      title={title}
      description={description}
      centerOffset={[0, -20]}
      coordinate={coords}
    >
      {marker}
    </Marker>
  );
}

export default function MapStack({ navigation }) {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    // headerLeft: () => <StatBar screen="map" navigation={navigation} />,
  };
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen name="Map" component={MapScreen} options={screenOptions} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    height: 30,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  bitmojiContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myBitmoji: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  bitmojiImage: {
    width: 50,
    height: 50,
  },
  bitmojiTextContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
  },
  bitmojiText: {
    fontSize: 10,
    fontWeight: "700",
  },
  places: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  myFriends: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
