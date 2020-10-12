import React, { useContext, useRef } from 'react';
import { Animated } from 'react-native';

import { ActionButtonContainer } from './styles';

import ActionButtonContext from '../../../contexts/actionButton';
import RoundButton from '../../atoms/Buttons/RoundButton';

interface ActionButtonProps {
    color?: string;
    activeColor?: string;
    icon(): JSX.Element;
    onPress?(): void;
    children: JSX.Element;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    color = '#46266c',
    activeColor = '#c3b5d0',
    icon,
    onPress,
    children
}: ActionButtonProps) => {

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
