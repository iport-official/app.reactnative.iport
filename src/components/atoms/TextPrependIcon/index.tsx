import React from 'react';
import { View, TextProps } from 'react-native';

import {
    TextComponent,
    TextIconContainer
} from './styles';

interface TextPrependIconProps extends TextProps {
    text: string
    icon(): JSX.Element
}

const TextPrependIcon: React.FC<TextPrependIconProps> = ({
    icon,
    text,
    ...rest
}: TextPrependIconProps) => {
    return (
        <TextIconContainer>
            <View style={{ width: 40, alignItems: 'center' }}>{ icon() }</View>
            <TextComponent { ...rest }>{ text }</TextComponent>
        </TextIconContainer>
    )
}

export default TextPrependIcon;
