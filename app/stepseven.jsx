import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons'


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepSeven = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        console.log("Button clicked!")
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 5: Take 6 Photos of the Container</ThemedText>
                <ThemedButton style = {{height: "300", justifyContent: "center"}} onPress = {handleSubmit}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>
                        <Ionicons 
                        name = {'camera'} 
                        size = {50}
                        color = {"#f2f2f2"} />
                    </Text>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Take Photo of the Right Side</Text>
                </ThemedButton>


                <Spacer height = {20}/>

                <ThemedButton onPress = {handleSubmit}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Next</Text>
                </ThemedButton>

                <Spacer height = {100}/>
                <Link href="/stepsix">NEXT</Link>

            </ThemedView>
            
        </TouchableWithoutFeedback>

    )
}

export default StepSeven

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