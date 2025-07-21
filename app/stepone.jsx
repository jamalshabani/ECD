import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";

const StepOne = () => {

    const navigation = useNavigation();
    const [truckRegistrationNumber, setTruckRegistrationNumber] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const filemakerAPI = "https://www4.kanzidata.com/fmi/data/v1/databases/ECD/layouts/TrigSegmentLayout/_find";
    const payload = {
        "query" : [
            {"TruckNumber": truckRegistrationNumber.replaceAll(' ',''), "Received": "No"}
        ]
    }

    const exitTripSegement = () => {
        navigation.navigate('index');
    }

    const checkTruckRegistration = async () => {
        if (truckRegistrationNumber == ""){
            setErrorMessage("Please enter truck registration number!")
        } else {
            try {
                const response = await axios.post(filemakerAPI, payload);
                if (response.data.messages[0].code == "401"){
                    setErrorMessage("That Trip Segment does not exist")
                } else {
                    setErrorMessage("")
                    
                    let TripSegment = response.data.response.data[0].fieldData;
                    TripSegment.ID = response.data.response.data[0].recordId;
                    navigation.navigate('steptwo', { stepTwoData: TripSegment });
                }
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
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 1: Enter Truck Registration Number</ThemedText>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = "Enter truck registration number"
                    keyboardType = "default"
                    value = {truckRegistrationNumber}
                    onChangeText = {setTruckRegistrationNumber}/>


                <ThemedButton onPress = {checkTruckRegistration}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Next</Text>
                </ThemedButton>
                <Spacer />
                {errorMessage ?
                    <ThemedButton onPress = {exitTripSegement}>
                        <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Exit</Text>
                    </ThemedButton> : null}

            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default StepOne

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