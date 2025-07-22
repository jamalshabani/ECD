import { Pressable, StyleSheet } from 'react-native'

function ThemedButton({ style, ...props }) {

    return (
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
            {...props}
        />
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#000000",
        padding: 18,
        borderRadius: 6,
        marginVertical: 0,
        width: "90%"
    },
    pressed: {
        opacity: 0.8
    },
})

export default ThemedButton