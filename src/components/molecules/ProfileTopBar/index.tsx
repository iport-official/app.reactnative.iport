import React from 'react';
import { View, ViewProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
    ArrowIconContainer,
    ProfileTopBarContainer,
    TopBarIcon,
    TopBarTitle,
    VerticalLine
} from './styles';

interface ProfileTopBarProps extends ViewProps {
    topBarTitle?: string;
    onArrowPress?(): void;
    topBarIcon?(): JSX.Element;
}

const ProfileTopBar: React.FC<ProfileTopBarProps> = ({
    onArrowPress,
    topBarIcon,
    topBarTitle = 'Title'
}: ProfileTopBarProps) => {
    return (
        <ProfileTopBarContainer>
            <ArrowIconContainer
                activeOpacity={0.8}
                onPress={() => { if(onArrowPress) onArrowPress() }}>
                <Feather name="arrow-left" size={34} color="white" />
            </ArrowIconContainer>
            <VerticalLine />
            <TopBarTitle>{ topBarTitle }</TopBarTitle>
            { topBarIcon ? <TopBarIcon>{ topBarIcon() }</TopBarIcon> : <View /> }
        </ProfileTopBarContainer>
    )
}

export default ProfileTopBar;
