import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  Image,
} from "react-native";
import { Spinner } from "native-base";
import * as Progress from "react-native-progress";
// import { ActivityIndicator } from "react-native";

import { useEffect, useRef, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import * as ImagePicker from "expo-image-picker";

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";
import ScanResults from "../components/ScanResults";
import StatBar from "../components/StatBar";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import RecipesHomeScreen from "../screens/RecipesHomeScreen";
import SnapChopScreen from "./SnapChopScreen";
import RecipeScreen from "../screens/RecipeScreen";
import TutorialsHomeScreen from "./TutorialsHomeScreen";
import SnackFactsHomeScreen from "./SnackFactsHomeScreen";
import SnapChopStack from "../navigation/SnapChopStack";

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const scanResultsRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [scanIndicatorPos, setScanIndicatorPos] = useState([-100, -100]);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    scanResultsRef.current.present();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  function flipCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  function switchFlash() {
    setType(type === FlashMode.off ? FlashMode.on : FlashMode.off);
  }

  async function checkGallery() {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  async function takePhoto() {
    console.log("Just took photo!");
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }

  function savePhoto() {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  }

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </>
    );
  }

  console.log(scanIndicatorPos);
  return (
    <>
      <StatBar screen="Camera" navigation={navigation} />
      {/* <Camera style={styles.camera} type={type} ref={cameraRef} /> */}

      <View style={{ height: "100%", width: "100%" }}>
        <ScanIndicator x={scanIndicatorPos[0]} y={scanIndicatorPos[1]} />
        <Image
          style={{
            ...styles.camera,
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
          source={require("../../assets/img/Onion.png")}
        />
      </View>

      <Pressable
        style={styles.scanButton}
        onTouchStart={(e) =>
          setScanIndicatorPos([
            e.nativeEvent.locationX,
            e.nativeEvent.locationY,
          ])
        }
        onTouchMove={(e) => {
          setScanIndicatorPos([
            e.nativeEvent.locationX,
            e.nativeEvent.locationY,
          ]);
        }}
        onTouchEnd={(e) => {
          setScanIndicatorPos([-100, -100]);
        }}
        onLongPress={handlePresentModalPress}
      />
      <CameraOptions flipCamera={flipCamera} />
      <CameraActions checkGallery={checkGallery} takePhoto={takePhoto} />
      <ScanResults scanResultsRef={scanResultsRef} navigation={navigation} />
    </>
  );
}

function ScanIndicator({ x, y }) {
  x = x - 25;
  y = y - 25;
  return (
    <View
      style={{
        borderRadius: "100%",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: 50,
        height: 50,
        // backgroundColor: "red",
        position: "absolute",
        left: x,
        top: y,
      }}
    />
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    height: "80%",
    width: "100%",
  },

  scanButton: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    // backgroundColor: "gray",
    color: "black",
  },
});
