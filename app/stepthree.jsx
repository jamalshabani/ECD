import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepThree = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { stepThreeData } = route.params;

    const [containerNumber, setContainerNumber] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const goToStepFour = () => {
        if (containerNumber === "") {
            setErrorMessage("Please enter the container number!")
        } else {
            if (containerNumber === stepThreeData.ContainerNumber){
                setErrorMessage("")
                navigation.navigate('stepfour', { stepFourData: stepThreeData });
            } else {
                setErrorMessage("That container number is not correct!")
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Step 3: Enter the Container Number</ThemedText>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <ThemedTextInput 
                    style = {{ width: "90%", marginBottom: 10}} 
                    placeholder = "Enter the container number"
                    keyboardType = "default"
                    value = {containerNumber}
                    onChangeText = {setContainerNumber}/>


                <ThemedButton onPress = {goToStepFour}>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Next</Text>
                </ThemedButton>

                <Spacer height = {100}/>

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
    },
    errorText: { color: 'red', marginBottom: 10 }
})