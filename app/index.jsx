import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const Home = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        console.log("Button clicked!")
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Login to Your ECD Account</ThemedText>
                
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = 'Email'
                    keyboardType = "email-address"
                    onChangeText = {setEmail}
                    value = {email} />

                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = 'Password'
                    secureTextEntry
                    onChangeText = {setPassword}
                    value = {password} />

                <ThemedButton onPress = {handleSubmit}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Login</Text>
                </ThemedButton>


            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default Home

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