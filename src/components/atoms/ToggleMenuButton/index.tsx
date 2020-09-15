import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ToggleMenuButtonProps {
    onPress?(): void
}

const ToggleMenuButton: React.FC<ToggleMenuButtonProps> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Ionicons
                name="ios-menu"
                size={24}
                color="#fff"
            />
        </TouchableWithoutFeedback>
    )
}

export default ToggleMenuButton
