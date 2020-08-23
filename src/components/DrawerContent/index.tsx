import React from 'react'
import { Text } from 'react-native'
import {
    DrawerContentComponentProps,
    DrawerContentOptions
} from '@react-navigation/drawer'

import {
    ContainerView,
    ContentDrawerContentScrollView,
    FooterView
} from './styles'

const DrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
    return (
        //#region JSX

        <ContainerView>
            <ContentDrawerContentScrollView {...props} >
                <Text>
                    Content
                </Text>
            </ContentDrawerContentScrollView>
            <FooterView>
                <Text>
                    Footer
                </Text>
            </FooterView>
        </ContainerView>

        //#endregion
    )
}

export default DrawerContent
