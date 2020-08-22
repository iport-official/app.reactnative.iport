import React from 'react'
import { Text } from 'react-native'
import Job from './Job'

import { ContainerScrollView } from './styles'

import enterpriseImage from '../../assets/millenium-falcon.jpg'

export default function Jobs() {
    return (
        <ContainerScrollView>
            <Job
                imageSource={enterpriseImage}
                title="Milleniu Falcon"
                description="The fastest spaceship of the galaxy"
                publishingDate="yesterday"
            />
        </ContainerScrollView>
    )
}
