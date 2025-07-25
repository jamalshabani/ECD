
import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = ({style, props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image style = {[style]} source = {logo} {...props}/>
    )
}

export default ThemedLogo
