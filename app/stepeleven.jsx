import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepEleven = () => {

    const navigation = useNavigation();
    const [dockNumber, setDockNumber] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const route = useRoute();
    const { stepElevenData } = route.params;

    const filemakerAPI = "https://www4.kanzidata.com/fmi/data/v1/databases/ECD/layouts/TrigSegmentLayout/records/" + stepElevenData.ID;

    const receiveTripSegment = async () => {
        var currentdate = new Date(); 
        var gateTimeStamp = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + "@"  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

        if (dockNumber === ""){
            setErrorMessage("Please enter the dock number!")
        } else {
            setErrorMessage("")
            stepElevenData.Dock = dockNumber;
            stepElevenData.GateInTimeStamp = gateTimeStamp;
            stepElevenData.Received = "Yes"

            const payload = {
                "fieldData" : {
                    "TruckPhoto": stepElevenData.TruckPhoto,
                    "ContainerPhoto": stepElevenData.ContainerPhoto,
                    "PhotoOne": stepElevenData.PhotoOne,
                    "PhotoTwo": stepElevenData.PhotoTwo,
                    "PhotoThree": stepElevenData.PhotoThree,
                    "PhotoFour": stepElevenData.PhotoFour,
                    "PhotoFive": stepElevenData.PhotoFive,
                    "PhotoSix": stepElevenData.PhotoSix,
                    "Dock": dockNumber,
                    "Received": "Yes",
                    "GateInTimeStamp": gateTimeStamp
                }
            }

            try {
                await axios.patch(filemakerAPI, payload);
                // console.log(response)
                navigation.navigate('steptwelve');
            } catch (error) {
                if (error.response) {
                    console.error('API Error:', error.response.data.messages);
                } else if (error.request) {
                    console.error('Network Error: No response received', error.request);
                } else {
                    console.error('Error:', error.message);
                }
            }
        }
        // ADd time stap from Javascript
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 6: Assign Dock Number to Container</ThemedText>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = "Assign dock number"
                    keyboardType = "default"
                    value = {dockNumber}
                    onChangeText = {setDockNumber}/>
                    


                <ThemedButton onPress = {receiveTripSegment}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Submit</Text>
                </ThemedButton>

                <Spacer height = {100}/>

            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default StepEleven

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
        fontSize: 18,
    },
    errorText: { color: 'red', marginBottom: 10 }
})