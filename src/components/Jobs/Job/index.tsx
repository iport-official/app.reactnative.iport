import React from 'react'
import {
    View,
    Image,
    Text,
    ImageSourcePropType
} from 'react-native'

import {
    ContainerView,
    EnterpriseImage,
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
            <TitleText>{title}</TitleText>
            <DescriptionText>{description}</DescriptionText>
            <PublishingDateText>{publishingDate}</PublishingDateText>
        </ContainerView>
    )
}

export default Job
