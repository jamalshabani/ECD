import {CameraView, useCameraPermissions} from "expo-camera";
import { useRef, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View} from "react-native";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation, useRoute } from '@react-navigation/native';

import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import Spacer from "../components/Spacer";

const StepFive = () => {

    const navigation = useNavigation();

    const route = useRoute();
    const { stepFiveData } = route.params;

    const [permission, requestPermission] = useCameraPermissions();
    const ref = useRef(null);
    const [uri, setUri] = useState(null);
    const [mode, setMode] = useState("picture");
    const [facing, setFacing] = useState("back");
    const [recording, setRecording] = useState(false);

    if (!permission) {
        return null;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to use the camera
                </Text>
                <Button onPress = {requestPermission} title="Grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        const options = {quality: 0.1, exif: false, base64: true };
        const photo = await ref.current?.takePictureAsync(options);
        setUri(photo?.uri);

        stepFiveData.PhotoOne = photo.base64
    };

    const goToStepSix = async () => {
        navigation.navigate('stepsix', { stepSixData: stepFiveData });
    }

    const recordVideo = async () => {
        if (recording) {
            setRecording(false);
            ref.current?.stopRecording();
            return;
        }
        setRecording(true);
        const video = await ref.current?.recordAsync();
    };

    const toggleMode = () => {
        setMode((prev) => (prev === "picture" ? "picture" : "picture"));
    };

    const toggleFacing = () => {
        setFacing((prev) => (prev === "back" ? "front" : "back"));
    };

    const renderPicture = () => {
        return (
            <View>
                <ThemedText style = {{fontWeight: "bold", fontSize: 18, marginBottom: 20, textAlign: "center"}} title = {true}>Step 5: Photo 1/6 - Right Side</ThemedText>
                <Image
                    source={{ uri }}
                    style={{ width: "90%", aspectRatio: 1 }}
                />
                <Spacer height = {10}/>
                <Spacer height = {10}/>
                <ThemedButton onPress = { goToStepSix } style={{width:"90% !important"}}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Next</Text>
                </ThemedButton>
            </View>
        );
    };

    const renderCamera = () => {
        return (
            <>
            <CameraView
                style = {styles.camera}
                ref = {ref}
                mode = {mode}
                facing = {facing}
                mute = {false}
                responsiveOrientationWhenOrientationLocked
            ></CameraView>
                <ThemedText style = {styles.title} title = {true}>Step 5: Take 6 Photos of the Container(Photo 1 - Right Side)</ThemedText>
                <View style={styles.shutterContainer}>
                    <Pressable onPress={toggleMode}>
                        {mode === "picture" ? (
                            <AntDesign name="picture" size={32} color="white" />
                        ) : (
                            <Feather name="video" size={32} color="white" />
                        )}
                    </Pressable>
                    <Pressable onPress={mode === "picture" ? takePicture : recordVideo}>
                        {({ pressed }) => (
                            <View
                                style={[
                                    styles.shutterBtn,
                                    {
                                        opacity: pressed ? 0.5 : 1,
                                    },
                                ]}
                            >
                                <View
                                    style={[
                                        styles.shutterBtnInner,
                                        {
                                            backgroundColor: mode === "picture" ? "white" : "red",
                                        },
                                    ]}
                                />
                            </View>
                        )}
                    </Pressable>
                    <Pressable onPress={toggleFacing}>
                        <FontAwesome6 name="rotate-left" size={32} color="white" />
                    </Pressable>
                </View>
            </>
        );
    };

    return (
        <View style={styles.container}>
            {uri ? renderPicture() : renderCamera()}
        </View>
    );
}

export default StepFive

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    camera: {
        flex: 1,
        width: "100%",
    },
    shutterContainer: {
        position: "absolute",
        bottom: 44,
        left: 0,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    title: {
        position: "absolute",
        top: 80,
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    shutterBtn: {
        backgroundColor: "transparent",
        borderWidth: 5,
        borderColor: "white",
        width: 85,
        height: 85,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
    },
    shutterBtnInner: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
});