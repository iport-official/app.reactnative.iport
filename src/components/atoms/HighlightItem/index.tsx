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
    icon(): any
}

const HighlightItem: React.FC<HightlightItemProps> = ({
    title = 'Title',
    titleColor = '#46266c',
    icon
}) => {
    return (
        <HighlightItemContainer>
            <HighlightTitleContainer>
                <HighlightTitle style={{ color: titleColor }}>{ title }</HighlightTitle>
            </HighlightTitleContainer>
            <HighlightContentContainer>
                { icon() }
            </HighlightContentContainer>
        </HighlightItemContainer>
    )
}

export default HighlightItem;
