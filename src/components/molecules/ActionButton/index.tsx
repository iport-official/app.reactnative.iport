import React, { useContext, useRef } from 'react';
import { Animated } from 'react-native';

import { ActionButtonContainer } from './styles';

import RoundButton from '../../atoms/RoundButton';

import ActionButtonContext from '../../../contexts/actionButton';


interface ActionButtonProps {
    color?: string;
    activeColor?: string;
    icon(): any;
    onPress?(): any;
    children: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    color = '#46266c',
    activeColor = '#c3b5d0',
    icon,
    onPress,
    children
}) => {

    const animatedPop = useRef(new Animated.Value(0)).current;
    const { isActive } = useContext(ActionButtonContext);

    const handleButtonPress = () => {
        if(onPress) onPress();
        if(!isActive) {
            animateActionButton();
        }
    }

    const animateActionButton = () => {
        Animated.sequence([
            Animated.timing(animatedPop, {
                toValue: -10,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(animatedPop, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
    }

    return (
        <ActionButtonContainer>
            { children }
            <RoundButton
                transform={animatedPop}
                bgColor={isActive ? activeColor : color}
                icon={icon}
                onPress={() => handleButtonPress()} />
        </ActionButtonContainer>
    )
}

export default ActionButton;
