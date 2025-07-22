import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';


import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";


const StepZero = () => {

    const navigation = useNavigation();

    const goToStepOne = () => {
        navigation.navigate('stepone');
    };

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <ThemedView style = {styles.container}>
                <Spacer/>
                <ThemedText style = {styles.title} title = {true}>Welcome to Your ECD Account</ThemedText>

                <ThemedButton onPress = { goToStepOne }>
                    <Text style = {{ color: "#f2f2f2", fontWeight: "bold", textAlign: "center"}}>Receive Trip Segment</Text>
                </ThemedButton>

            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default StepZero

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