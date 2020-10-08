import React from 'react';
import { ViewProps } from 'react-native';

import {
    HighlightContentContainer,
    HighlightItemContainer,
    HighlightTitle,
    HighlightTitleContainer
} from './styles';

interface HightlightItemProps extends ViewProps {
    title?: string;
    titleColor?: string;
    icon(): any;
    onPress?(): void;
}

const HighlightItem: React.FC<HightlightItemProps> = ({
    icon,
    onPress,
    title = 'Title',
    titleColor = '#46266c'
}) => {
    return (
        <HighlightItemContainer>
            <HighlightTitleContainer>
                <HighlightTitle style={{ color: titleColor }}>{ title }</HighlightTitle>
            </HighlightTitleContainer>
            <HighlightContentContainer
                activeOpacity={0.9}
                onPress={() => { if(onPress) onPress() }}>
                { icon() }
            </HighlightContentContainer>
        </HighlightItemContainer>
    )
}

export default HighlightItem;
