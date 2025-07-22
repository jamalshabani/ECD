import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar value = "auto"/>
            <Stack screenOptions = {{
                headerStyle: { backgroundColor: theme.navBackground},
                headerTintColor: theme.title
                }}>
                <Stack.Screen name = "index"      options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepzero"   options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepone"    options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "steptwo"    options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepthree"  options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepfour"   options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepfive"   options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepsix"    options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepseven"  options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepeight"  options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepnine"   options = {{ headerShown: false, gestureEnabled: false}}></Stack.Screen>
                <Stack.Screen name = "stepten"    options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "stepeleven" options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
                <Stack.Screen name = "steptwelve" options = {{ headerShown: false, gestureEnabled: false }}></Stack.Screen>
            </Stack>
        </>
    )
}

export default RootLayout