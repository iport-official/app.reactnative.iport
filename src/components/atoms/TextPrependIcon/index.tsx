import React from 'react';
import { TextProps } from 'react-native';

import {
    TextComponent,
    TextIconContainer
} from './styles';

interface TextPrependIconProps extends TextProps {
    text: string
    icon(): any
}

const TextPrependIcon: React.FC<TextPrependIconProps> = ({
    icon,
    text,
    ...rest
}) => {
    return (
        <TextIconContainer>
            { icon() }
            <TextComponent { ...rest }>{ text }</TextComponent>
        </TextIconContainer>
    )
}

export default TextPrependIcon;
