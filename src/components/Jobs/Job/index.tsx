import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
    ContainerView,
    EnterpriseImage,
    TextsView,
    TitleText,
    DescriptionText,
    PublishingDateText
} from './styles'

interface JobProps {
    imageSource: ImageSourcePropType
    title: string
    description: string
    publishingDate: string
}

const Job: React.FC<JobProps> = ({ imageSource, title, description, publishingDate }) => {
    return (
        <ContainerView>
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
