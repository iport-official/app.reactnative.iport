import Slider from '@react-native-community/slider';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileStackParamsList } from '../../navigations/ProfileStack';

import {
    ContainerKeyboardAvoidView,
    ContainerSafeAreaView,
    ModalContainer,
    ModalContent,
    ModalContentItem,
    ProfileHighlightContainer,
    SkillLevelValue
} from './styles';

import FormButton from '../../components/atoms/FormButton';
import ImagePicker from '../../components/atoms/ImagePicker';
import RoundButton from '../../components/atoms/RoundButton';
import TextField from '../../components/atoms/TextField';
import ProfileHighlightContent from '../../components/molecules/ProfileHighlightContent';
import ProfileSkillsContent from '../../components/molecules/ProfileSkillsContent';
import ProfileTopBar from '../../components/molecules/ProfileTopBar';

type DefaultProfileHighlightProps = StackScreenProps<
    ProfileStackParamsList,
    'ProfileHighlight'
>

interface ContentProps {
    id: number;
    image: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface SkillProps {
    id: number;
    label: string;
    level: number;
}

export default function({ navigation, route }: DefaultProfileHighlightProps): JSX.Element {

    const [topBarTitle, setTopBarTitle] = useState('');
    const highlight: string = route.params.highlight;
    const isCurrent: boolean = route.params.isCurrent;

    const [modalVisible, setModalVisible] = useState(false);

    const initialPageContent = {
        id: 0,
        image: '',
        title: '',
        start: '',
        end: '',
        description: ''
    }

    const initialSkillContent = {
        id: 0,
        label: '',
        level: 0
    }

    const [pageContent, setPageContent] = useState(initialPageContent);
    const [skillContent, setSkillContent] = useState(initialSkillContent);

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

    const topBarIcon = (): JSX.Element => {
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

    const plusIcon = (): JSX.Element => {
        return <AntDesign name="plus" size={20} color="white" />
    }

    const editPressed = (inContent: ContentProps): void => {
        setPageContent({
            id: inContent.id,
            image: inContent.image,
            title: inContent.title,
            start: inContent.startDate,
            end: inContent.endDate,
            description: inContent.description
        });
        setModalVisible(true);
    }

    const skillEditPressed = (inSkill: SkillProps): void => {
        setSkillContent({
            id: inSkill.id,
            label: inSkill.label,
            level: inSkill.level
        });
        setModalVisible(true);
    }

    const disableConfirm = (): boolean => {
        const pc = pageContent;
        return !(pc.title.length > 0
            && pc.description.length > 0);
    }

    const disableSkillConfirm = (): boolean => {
        const sc = skillContent;
        return !(sc.label.length > 0 && sc.level <= 100 && sc.level >= 0);
    }

    const handleConfirm = (): void => {
        const pc = pageContent;
        alert('yeah');
        for(let i = 0; i < content.length; i++) {
            if(content[i].id === pc.id) {
                content[i].image = pc.image;
                content[i].title = pc.title;
                content[i].description = pc.description;
                content[i].endDate = pc.end.length > 0 ? pc.end : null;
                content[i].startDate = highlight !== 'achievements' ? pc.start : '';
            }
        }
        setModalVisible(false);
    }

    function handleSkillConfirm(): void {
        const sc = skillContent;
        alert('skill');
        for(let i = 0; i < skills.length; i++) {
            if(skills[i].id === sc.id) {
                skills[i].label = sc.label;
                skills[i].level = sc.level;
            }
        }
        setModalVisible(false);
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

    const skills = [
        {
            id: 1,
            label: 'VueJS',
            level: 85
        },
        {
            id: 2,
            label: 'Java',
            level: 70
        },
        {
            id: 3,
            label: 'React Native',
            level: 70
        },
        {
            id: 4,
            label: 'C',
            level: 60
        },
        {
            id: 5,
            label: 'CSS',
            level: 60
        },
        {
            id: 6,
            label: 'HTML',
            level: 60
        },
        {
            id: 7,
            label: 'React',
            level: 55
        },
        {
            id: 8,
            label: 'Git',
            level: 45
        },
        {
            id: 9,
            label: 'Angular',
            level: 20
        },
        {
            id: 10,
            label: 'C#',
            level: 10
        },
        {
            id: 11,
            label: 'C++',
            level: 20
        },
        {
            id: 12,
            label: 'JavaScript',
            level: 70
        }
    ]

    return (
        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} >
                    <ModalContainer
                        onPress={() => setModalVisible(false)}
                        activeOpacity={1} />
                    { highlight !== 'skills'
                        ? <ModalContent>
                            <ModalContentItem
                                contentContainerStyle={{
                                    alignItems: 'center'
                                }}>
                                <ImagePicker
                                    imageProp={pageContent.image}
                                    onPick={(image: string) => setPageContent({ ...pageContent, image })} />
                                <TextField
                                    placeholder='Título'
                                    textValue={pageContent.title}
                                    onTextChange={(title: string) => setPageContent({ ...pageContent, title })} />
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}>
                                    { highlight !== 'achievements'
                                        ? <TextField
                                            fieldWidth='50%'
                                            placeholder='Início'
                                            textValue={pageContent.start}
                                            onTextChange={(start: string) => setPageContent({ ...pageContent, start })} />
                                        : <></> }
                                    <TextField
                                        fieldWidth={ highlight === 'achievements' ? '100%' : '50%'}
                                        placeholder='Término'
                                        textValue={pageContent.end}
                                        onTextChange={(end: string) => setPageContent({ ...pageContent, end })} />
                                </View>
                                <TextField
                                    placeholder='Descrição'
                                    textValue={pageContent.description}
                                    onTextChange={(description: string) => setPageContent({ ...pageContent, description })} />
                            </ModalContentItem>
                            <FormButton
                                label='Confirmar'
                                color='#46266c'
                                disableColor='#46266c88'
                                ripple='#8155E2'
                                disable={disableConfirm()}
                                onPress={handleConfirm} />
                        </ModalContent>
                        : <ModalContent>
                            <ModalContentItem
                                contentContainerStyle={{
                                    alignItems: 'center'
                                }}>
                                <TextField
                                    placeholder='Competência'
                                    textValue={skillContent.label}
                                    onTextChange={(label: string) => setSkillContent({ ...skillContent, label })} />
                                <Slider
                                    style={{ width: '90%', height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor='#90909088'
                                    maximumTrackTintColor='#46266c'
                                    onValueChange={(level: number) => {
                                        setSkillContent({ ...skillContent, level: Math.floor(level) });
                                    }} />
                                <SkillLevelValue>{ skillContent.level }</SkillLevelValue>
                            </ModalContentItem>
                            <FormButton
                                label='Confirmar'
                                color='#46266c'
                                disableColor='#46266c88'
                                ripple='#8155E2'
                                disable={disableSkillConfirm()}
                                onPress={handleSkillConfirm} />
                        </ModalContent>
                    }
                </Modal>
                <ProfileHighlightContainer>
                    <View
                        style={{ flex: 1, width: '100%' }}>
                        { highlight !== 'skills'
                            ? <ProfileHighlightContent
                                editPressed={(c) => editPressed(c)}
                                isCurrent={isCurrent}
                                content={content.sort((c1, c2) => {
                                    if(c1.endDate === null && c2.endDate === null) return c1.startDate < c2.startDate ? 1 : -1;
                                    if(c2.endDate === null) return -1;
                                    if(c1.endDate === null) return -1;
                                    if(c1.endDate !== null && c2.endDate !== null) {
                                        if(c1.endDate === c2.endDate) return c1.startDate < c2.startDate ? 1 : -1;
                                        return c1.endDate < c2.endDate ? 1 : -1;
                                    }
                                    return c1.endDate < c2.endDate ? 1 : -1;
                                })}
                                contentType={highlight} />
                            : <ProfileSkillsContent
                                editPressed={(skill) => skillEditPressed(skill)}
                                isCurrent={isCurrent}
                                content={skills.sort((s1, s2) => s1.level < s2.level ? 1 : -1)} /> }
                    </View>
                    <ProfileTopBar
                        topBarTitle={topBarTitle}
                        onArrowPress={() => navigation.goBack()}
                        topBarIcon={topBarIcon} />
                    { isCurrent
                        ? <RoundButton
                            icon={plusIcon}
                            style={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10
                            }}
                            onPress={() => {
                                setPageContent(initialPageContent);
                                setModalVisible(true);
                                setSkillContent(initialSkillContent);
                            }} />
                        : <></> }
                </ProfileHighlightContainer>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>
    )
}
