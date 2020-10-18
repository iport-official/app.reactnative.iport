import React from 'react';
import { View, TextProps } from 'react-native';

import {
    TextComponent,
    TextIconContainer
} from './styles';

interface TextPrependIconProps extends TextProps {
    text: string;
    icon(): JSX.Element;
    width?: number;
}

const TextPrependIcon: React.FC<TextPrependIconProps> = ({
    icon,
    text,
    width = 40,
    ...rest
}: TextPrependIconProps) => {
    return (
        <TextIconContainer>
            <View style={{ width, alignItems: 'center' }}>{ icon() }</View>
            <TextComponent { ...rest }>{ text }</TextComponent>
        </TextIconContainer>
    )
}

export default TextPrependIcon;
