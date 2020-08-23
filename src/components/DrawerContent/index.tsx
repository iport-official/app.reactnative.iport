import React from 'react'
import { Text, View } from 'react-native'
import {
    DrawerItem,
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions
} from '@react-navigation/drawer'

import { ContainerView } from './styles'

const DrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
    return (
        //#region JSX

        <ContainerView>
            <DrawerContentScrollView {...props} >
                <Text>
                    Content
                </Text>
            </DrawerContentScrollView>
            <View>
                <Text>
                    Footer
                </Text>
            </View>
        </ContainerView>

        //#endregion
    )
}

export default DrawerContent
