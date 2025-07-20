import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepThree = () => {

    const [containerNumber, setContainerNumber] = useState("")

    const checkTruckRegistration = async () => {
        console.log("Button clicked!")
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 3: Enter the Container Number</ThemedText>
                
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = "Enter the container number"
                    keyboardType = "default"
                    value = {containerNumber}
                    onChangeText = {setContainerNumber}/>


                <ThemedButton onPress = {checkTruckRegistration}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Next</Text>
                </ThemedButton>

                <Spacer height = {100}/>
                <Link href="/stepfour">NEXT</Link>

            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default StepThree

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
    }
})