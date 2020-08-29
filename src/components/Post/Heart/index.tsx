import React, { useState } from 'react'
import {
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface HeartIconsProps extends TouchableWithoutFeedbackProps {
    size: number
    color: string
    onActive?(value: boolean): void
}

const HeartIcon: React.FC<HeartIconsProps> = ({ onActive, size, color, onPress, ...rest }) => {
    const [active, setActive] = useState(false)

    function handleOnPress() {
        setActive(!active)
        if (onActive)
            onActive(active)
    }

    return (
        //#region JSX

        <TouchableWithoutFeedback
            onPress={handleOnPress}
            {...rest}
        >
            <Entypo
                name={active ? 'heart' : 'heart-outlined'}
                size={size}
                color={color}
            />
        </TouchableWithoutFeedback>

        //#endregion
    )
}

export default HeartIcon
