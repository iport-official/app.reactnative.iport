import React from 'react'

import photo from '../../assets/image04.jpg'
import {
    ContainerView,
    PostImage
} from './styles'

export default function MainPost() {
    return (
        //#region JSX

        <ContainerView>
            <PostImage source={photo} />
        </ContainerView>

        //#endregion
    )
}
