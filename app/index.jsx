import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { Link } from 'expo-router'
import axios from 'axios';
import Base64 from 'react-native-base64';
import { useNavigation } from '@react-navigation/native';


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const Home = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const encodedCredentials = Base64.encode(`${username}:${password}`);

    const headers = {
        'Authorization': `Basic ${encodedCredentials}`,
    };

    const filemakerAPI = "https://www4.kanzidata.com/fmi/data/vLatest/databases/ECD/sessions";

    const payload = {}

    const handleSubmit = async () => {
        if (username == ""){
            setErrorMessage("Please enter your username!")
        } else if ((password == "")) {
            setErrorMessage("Please enter your password!")
        } else {
            try {
                const response = await axios.post(filemakerAPI, payload, { headers });
                setErrorMessage("")
                const token = response.data.response.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                navigation.navigate('stepzero');
                console.log("Connected to FileMaker API");
                
            } catch (error) {
                if (error.response) {
                    setErrorMessage("That account does not exist!")
                    //console.error('API Error:', error.response.status, error.response.data);
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
                <ThemedText style = {styles.title} title = {true}>Login to Your ECD Account</ThemedText>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = 'Username'
                    keyboardType = "default"
                    onChangeText = {setUsername}
                    value = {username} />

                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = 'Password'
                    secureTextEntry
                    onChangeText = {setPassword}
                    value = {password} />

                <ThemedButton onPress = {handleSubmit}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Login</Text>
                </ThemedButton>
                

                <Spacer/>
                <Spacer/>
                <Spacer/>


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
    },
    errorText: { color: 'red', marginBottom: 10 }
})