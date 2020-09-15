import React from 'react';

import ToggleMenuButton from '../../atoms/ToggleMenuButton';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    ContainerHeaderView,
    ContainerPortCoins,
    PortCoinsCounter
} from './styles';

interface MainHeader {
    onPress?(): void
}

const MainHeader: React.FC<MainHeader> = ({ onPress }) => {
    return (
        //#region JSX

        <ContainerHeaderView>
            <ToggleMenuButton onPress={onPress} />
            <ContainerPortCoins>
                <PortCoinsCounter>1300</PortCoinsCounter>
                <FontAwesome5
                    name="coins"
                    size={24}
                    color='#fff'
                />
            </ContainerPortCoins>
        </ContainerHeaderView>

        //#endregion
    )
}

export default MainHeader
