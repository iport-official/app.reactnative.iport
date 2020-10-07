import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {
    ContainerKeyboardAvoidView,
    ContainerSafeAreaView,
    ProfileHighlightContainer
} from './styles';

import { ProfileStackParamsList } from '../../navigations/ProfileStack';
import ProfileTopBar from '../../components/molecules/ProfileTopBar';

type DefaultProfileHighlightProps = StackScreenProps<
    ProfileStackParamsList,
    'ProfileHighlight'
>

export default function({ navigation, route }: DefaultProfileHighlightProps) {

    const [topBarTitle, setTopBarTitle] = useState('');
    const highlight = route.params.highlight;

    useEffect(() => {
        if(highlight === 'projects') {
            setTopBarTitle('Projetos');
        } else if(highlight === 'experiences') {
            setTopBarTitle('Experiências');
        } else if(highlight === 'skills') {
            setTopBarTitle('Competências');
        } else {
            setTopBarTitle('Conquistas');
        }
    }, []);

    const highlightIconColor = '#fff';
    const highlightIconSizeMCI = 44;
    const highlightIconSizeFA = 38;

    const topBarIcon = () => {
        if(highlight === 'projects') {
            return <MaterialCommunityIcons name="clipboard-text" size={highlightIconSizeMCI} color={highlightIconColor} />
        } else if(highlight === 'experiences') {
            return <MaterialCommunityIcons name="briefcase-account" size={highlightIconSizeMCI} color={highlightIconColor} />
        } else if(highlight === 'skills') {
            return <FontAwesome name="gears" size={highlightIconSizeFA} color={highlightIconColor} />
        } else {
            return <FontAwesome5 name="medal" size={highlightIconSizeFA} color={highlightIconColor} />
        }
    }

    return (
        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <ProfileHighlightContainer>
                    <ProfileTopBar
                        topBarTitle={topBarTitle}
                        onArrowPress={() => navigation.goBack()}
                        topBarIcon={topBarIcon} />
                    <Text>{ highlight }</Text>
                </ProfileHighlightContainer>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>
    )
}
