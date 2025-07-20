import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepEleven = () => {

    const [containerNumber, setContainerNumber] = useState("")

    const checkTruckRegistration = async () => {
        console.log("Button clicked!")
        // ADd time stap from Javascript
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 6: Assign Dock Number to Container</ThemedText>
                
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = "Assign dock number"
                    keyboardType = "default"
                    value = {containerNumber}
                    onChangeText = {setContainerNumber}/>
                    


                <ThemedButton onPress = {checkTruckRegistration}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Submit</Text>
                </ThemedButton>

                <Spacer height = {100}/>
                <Link href="/stepone">NEXT</Link>

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
    }
})