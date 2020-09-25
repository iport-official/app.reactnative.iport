import React from 'react';
import { ViewProps } from 'react-native';

import { ButtonContainer } from './styles';

import MoreButton from '../MoreButton';

interface RoundButtonProps extends ViewProps {
    bgColor?: string;
    icon(): any;
    onPress?(): any;
}

const RoundButton: React.FC<RoundButtonProps> = ({
    bgColor = '#46266c',
    icon,
    onPress
}) => {

    return (
        <ButtonContainer
            style={{ backgroundColor: bgColor }}
            onTouchStart={() => { if(onPress) onPress() }} >
            <MoreButton />
        </ButtonContainer>
    )
}

export default RoundButton;
