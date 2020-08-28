import React from 'react';

import Menu from '../Menu';
import coinPhoto from '../../assets/PortCoins.png';

import {
    ContainerHeaderView,
    ContainerPortCoins,
    PortCoinsCounter,
    PortCoinsSymbol
} from './styles';

interface MainHeader {
    onPress?(): void
}

const MainHeader: React.FC<MainHeader> = ({ onPress }) => {
    return (
        //#region JSX

        <ContainerHeaderView>
            <Menu onPress={onPress} />
            <ContainerPortCoins>
                <PortCoinsCounter>1300</PortCoinsCounter>
                <PortCoinsSymbol source={coinPhoto}></PortCoinsSymbol>
            </ContainerPortCoins>
        </ContainerHeaderView>

        //#endregion
    )
}

export default MainHeader
