import React from 'react'

import Menu from '../Menu'

import { ContainerHeaderView } from './styles'

interface MainHeader {
    onPress?(): void
}

const MainHeader: React.FC<MainHeader> = ({ onPress }) => {
    return (
        //#region JSX

        <ContainerHeaderView>
            <Menu onPress={onPress} />
        </ContainerHeaderView>

        //#endregion
    )
}

export default MainHeader
