import React from 'react';
import { View, ViewProps } from 'react-native';

import {
    ContentContainer,
    ContentDate,
    ContentDateContainer,
    ContentDescription,
    ContentHorizontalLine,
    ContentImage,
    ContentTitle,
    ContentTitleContainer,
    ContentVerticalLine,
    HighlightContent,
    HighlightContentContainer
} from './styles';

interface HighlightContent extends ViewProps {
    content: any[];
    contentType: string;
}

const ProfileHighlightContent: React.FC<HighlightContent> = ({
    content,
    contentType = '',
    ...rest
}) => {

    let i = 0;

    return (
        <HighlightContentContainer { ...rest } >
            <HighlightContent>
                { content.map(c => {
                    return (
                        <ContentContainer
                            key={c.id}
                            style={{ marginTop: i === 0 ? 80 : 0 }} >
                            { c.image ?
                                <ContentImage
                                    style={{ marginTop: i === 0 ? 0 : 5 }}
                                    source={{ uri: `data:image/gif;base64,${c.image}` }} />
                                : <></> }
                            <ContentTitleContainer>
                                <ContentDateContainer>
                                    { contentType != 'achievements' ? <ContentDate>{ c.startDate }</ContentDate> : <></> }
                                    <ContentDate>{ c.endDate ? c.endDate : 'Em andamento' }</ContentDate>
                                </ContentDateContainer>
                                <ContentVerticalLine />
                                <ContentTitle>{ c.title }</ContentTitle>
                            </ContentTitleContainer>
                            <ContentDescription>{ c.description }</ContentDescription>
                            { ++i - 1 !== content.length - 1 ?  <ContentHorizontalLine /> : <></> }
                        </ContentContainer>
                    )
                }) }
            </HighlightContent>
        </HighlightContentContainer>
    )
}

export default ProfileHighlightContent;
