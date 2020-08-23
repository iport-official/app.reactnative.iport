import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface MenuProps {
    onPress?(): void
}

const Menu: React.FC<MenuProps> = ({ onPress }) => {
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

export default Menu
