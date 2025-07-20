import { View, useColorScheme} from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    if (!safe) {
        return (
            <View style={[{ backgroundColor: theme.background }, style]}
                {...props}
            />
        )
    }

    const insert = useSafeAreaInsets()

    return (
        <View style={[{ backgroundColor: theme.background, paddingTop: insert.top, paddingBottom: insert.bottom }, style]}
            {...props}
        />
    )
}

export default ThemedView