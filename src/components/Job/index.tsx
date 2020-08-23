import React from 'react'
import { ImageSourcePropType, ViewStyle, StyleProp } from 'react-native'

import {
    ContainerView,
    EnterpriseImage,
    TextsView,
    TitleText,
    DescriptionText,
    PublishingDateText
} from './styles'

export interface JobProps {
    style?: StyleProp<ViewStyle>
    imageSource: ImageSourcePropType
    title: string
    description: string
    publishingDate: string
}

const Job: React.FC<JobProps> = ({ style, imageSource, title, description, publishingDate }) => {
    return (
        <ContainerView style={style}>
            <EnterpriseImage source={imageSource} />
            <TextsView>
                <TitleText>{title}</TitleText>
                <DescriptionText>{description}</DescriptionText>
                <PublishingDateText>{publishingDate}</PublishingDateText>
            </TextsView>
        </ContainerView>
    )
}

export default Job
