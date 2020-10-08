import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {
    ContainerKeyboardAvoidView,
    ContainerSafeAreaView,
    ProfileHighlightContainer
} from './styles';

import { ProfileStackParamsList } from '../../navigations/ProfileStack';
import ProfileTopBar from '../../components/molecules/ProfileTopBar';
import ProfileHighlightContent from '../../components/molecules/ProfileHighlightContent';

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

    const content = [
        {
            id: 1,
            image: '',
            title: 'iPort',
            startDate: '2020-08',
            endDate: '2021-08',
            description: 'iPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.',
        },
        {
            id: 2,
            image: '',
            title: 'iPort Web',
            startDate: '2020-08',
            endDate: '2022-08',
            description: 'iPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.',
        },
        {
            id: 3,
            image: '',
            title: 'iPort Desktop',
            startDate: '2021-08',
            endDate: null,
            description: 'iPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.\niPort foi um aplicativo desenvolvido por uma equipe pequena e amadora da Faculdade de Engenharia de Sorocaba (FACENS), hoje possuindo mais de 200.000 downloads, estando em #3 na PlayStore.',
        }
    ]

    return (
        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <ProfileHighlightContainer>
                    <View
                        style={{ flex: 1, width: '100%' }}>
                        <ProfileHighlightContent
                            content={content.sort((c1, c2) => {
                                if(c1.endDate === null && c2.endDate === null) return c1.startDate < c2.startDate ? 1 : -1;
                                if(c2.endDate === null) return -1;
                                if(c1.endDate === null) return -1;
                                if(c1.endDate !== null && c2.endDate !== null) {
                                    if(c1.endDate === c2.endDate) return c1.startDate < c2.startDate ? 1 : -1;
                                    return c1.endDate < c2.endDate ? 1 : -1;
                                }
                                return c1.endDate < c2.endDate ? 1 : -1;
                            })} />
                    </View>
                    <ProfileTopBar
                        topBarTitle={topBarTitle}
                        onArrowPress={() => navigation.goBack()}
                        topBarIcon={topBarIcon} />
                </ProfileHighlightContainer>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>
    )
}
