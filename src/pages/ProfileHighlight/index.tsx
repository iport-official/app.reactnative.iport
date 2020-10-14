import Slider from '@react-native-community/slider';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { AntDesign, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { ProfileStackParamsList } from '../../navigations/ProfileStack';

import {
    ContainerKeyboardAvoidView,
    ContainerSafeAreaView,
    ModalButtonsContainer,
    ModalContainer,
    ModalContent,
    ModalContentItem,
    ProfileHighlightContainer,
    SkillLevelValue
} from './styles';

import RoundButton from '../../components/atoms/Buttons/RoundButton';
import ImagePicker from '../../components/atoms/Inputs/ImagePicker';
import TextField from '../../components/atoms/Inputs/TextField';
import ProfileHighlightContent from '../../components/molecules/ProfileHighlightContent';
import ProfileSkillsContent from '../../components/molecules/ProfileSkillsContent';
import ProfileTopBar from '../../components/molecules/ProfileTopBar';

type DefaultProfileHighlightProps = StackScreenProps<
    ProfileStackParamsList,
    'ProfileHighlight'
>

export interface ContentProps {
    id: number;
    image: string | null | undefined;
    title: string;
    startDate: string;
    endDate: string | null;
    description: string;
}

export interface SkillProps {
    id: number;
    label: string;
    level: number;
}

export default function({ navigation, route }: DefaultProfileHighlightProps): JSX.Element {

    const [topBarTitle, setTopBarTitle] = useState('');
    const highlight: string = route.params.highlight;
    const isEditMode: boolean = route.params.isEditMode;
    const isCurrent: boolean = route.params.isCurrent;

    const [modalVisible, setModalVisible] = useState(false);

    const initialPageContent: ContentProps = {
        id: 0,
        image: '',
        title: '',
        startDate: '',
        endDate: '',
        description: ''
    }

    const initialSkillContent: SkillProps = {
        id: 0,
        label: '',
        level: 0
    }

    const [pageContent, setPageContent] = useState(initialPageContent);
    const [skillContent, setSkillContent] = useState(initialSkillContent);
    const [isAdd, setIsAdd] = useState(false);

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
        return <AntDesign name="plus" size={30} color="white" />
    }

    const checkIcon = (): JSX.Element => {
        return <Feather name="check" size={30} color="white" />
    }

    const closeIcon = (): JSX.Element => {
        return <AntDesign name="close" size={30} color="white" />
    }

    const editPressed = (inContent: ContentProps): void => {
        setPageContent({
            id: inContent.id,
            image: inContent.image,
            title: inContent.title,
            startDate: inContent.startDate,
            endDate: inContent.endDate,
            description: inContent.description
        });
        setModalVisible(true);
        setIsAdd(false);
    }

    const skillEditPressed = (inSkill: SkillProps): void => {
        setSkillContent({
            id: inSkill.id,
            label: inSkill.label,
            level: inSkill.level
        });
        setModalVisible(true);
    }

    const handleConfirm = (): void => {
        const pc = pageContent;
        if(!(pc.title.length > 0 && pc.description.length > 0)) {
            alert('Preencha os campos corretamente!');
        } else {
            const contentCopy = [...content];
            let found = false;
            contentCopy.sort((c1, c2) => c1.id < c2.id ? -1 : 1);
            if(isAdd) {
                for(let i = 0; i < contentCopy.length; i++) {
                    if(contentCopy[i].title.toLowerCase() === pc.title.toLowerCase()) {
                        alert('Não foi possível completar a operação! Outr'
                            + highlight === 'projects' ? 'o projeto' : (highlight === 'skills' ? 'a competência' : 'a experiência')
                            + ' possui este nome');
                        found = true;
                        break;
                    }
                }
                if(found === false) {
                    pc.id = contentCopy[contentCopy.length - 1].id;
                    content.push(pc);
                    setModalVisible(false);
                }
            } else {
                for(let i = 0; i < content.length; i++) {
                    if(content[i].id === pc.id) {
                        content[i].image = pc.image;
                        content[i].title = pc.title;
                        content[i].description = pc.description;
                        content[i].endDate = pc.endDate !== null && pc.endDate.length > 0 ? pc.endDate : null;
                        content[i].startDate = highlight !== 'achievements' ? pc.startDate : '';
                    }
                }
                setModalVisible(false);
            }
        }
    }

    const handleSkillConfirm = (): void => {
        const sc = {...skillContent};
        if(!(sc.label.length > 0 && sc.level <= 100 && sc.level >= 0)) {
            alert('Insira o nome da competência!');
        } else {
            const skillsCopy = [...skills];
            let found = false;
            skillsCopy.sort((s1, s2) => s1.id < s2.id ? -1 : 1);
            if(isAdd) {
                for(let i = 0; i < skillsCopy.length; i++) {
                    if(skillsCopy[i].label.toLowerCase().trim() === sc.label.toLowerCase().trim()) {
                        alert('Não foi possível completar a operação! Outra competência existente possui este nome!');
                        found = true;
                        break;
                    }
                }
                if(found === false) {
                    sc.id = skillsCopy[skillsCopy.length - 1].id + 1;
                    skills.push(sc);
                    setModalVisible(false);
                }
            } else {
                for(let i = 0; i < skillsCopy.length; i++) {
                    if(skillsCopy[i].id === sc.id) {
                        skillsCopy[i].label = sc.label;
                        skillsCopy[i].level = sc.level;
                    }
                }
                setModalVisible(false);
            }
        }
    }

    const levelLabel = (level: number): string => {
        if(level <= 15) {
            return 'Iniciante';
        } else if(level > 15 && level <= 30) {
            return 'Conhecedor';
        } else if(level > 30 && level <= 60) {
            return 'Intermediário';
        } else if(level > 60 && level <= 80) {
            return 'Avançado';
        } else if(level > 80 && level <= 90) {
            return 'Experiente';
        }
        return 'Expert';
    }

    const content: ContentProps[] = [
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

    const skills: SkillProps[] = [
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
                                    style={{ height: 120, width: '90%', borderRadius: 10 }}
                                    imageProp={pageContent.image}
                                    aspect={[16, 9]}
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
                                            textValue={pageContent.startDate}
                                            onTextChange={(startDate: string) => setPageContent({ ...pageContent, startDate })} />
                                        : <></> }
                                    <TextField
                                        fieldWidth={ highlight === 'achievements' ? '100%' : '50%'}
                                        placeholder='Término'
                                        textValue={pageContent.endDate}
                                        onTextChange={(endDate: string) => setPageContent({ ...pageContent, endDate })} />
                                </View>
                                <TextField
                                    placeholder='Descrição'
                                    textValue={pageContent.description}
                                    onTextChange={(description: string) => setPageContent({ ...pageContent, description })} />
                            </ModalContentItem>
                            <ModalButtonsContainer>
                                <RoundButton
                                    icon={closeIcon}
                                    bgColor='#f08'
                                    onPress={() => setModalVisible(false)} />
                                <RoundButton
                                    icon={checkIcon}
                                    onPress={() => handleConfirm()} />
                            </ModalButtonsContainer>
                        </ModalContent>
                        : <ModalContent style={{ top: '27%' }}>
                            <ModalContentItem
                                contentContainerStyle={{
                                    alignItems: 'center'
                                }}>
                                <TextField
                                    placeholder='Competência'
                                    textValue={skillContent.label}
                                    onTextChange={(label: string) => setSkillContent({ ...skillContent, label })} />
                                <SkillLevelValue style={{ marginTop: 20 }}>{ skillContent.level }</SkillLevelValue>
                                <SkillLevelValue>{ levelLabel(skillContent.level) }</SkillLevelValue>
                                <Slider
                                    style={{ width: '90%', height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor='#46266c'
                                    maximumTrackTintColor='#bbb'
                                    value={skillContent.level}
                                    onValueChange={(level: number) => {
                                        setSkillContent({ ...skillContent, level: Math.floor(level) });
                                    }} />
                                <ModalButtonsContainer>
                                    <RoundButton
                                        icon={closeIcon}
                                        bgColor='#f08'
                                        onPress={() => setModalVisible(false)} />
                                    <RoundButton
                                        icon={checkIcon}
                                        onPress={() => handleSkillConfirm()} />
                                </ModalButtonsContainer>
                            </ModalContentItem>
                        </ModalContent>
                    }
                </Modal>
                <ProfileHighlightContainer>
                    <View
                        style={{ flex: 1, width: '100%' }}>
                        { highlight !== 'skills'
                            ? <ProfileHighlightContent
                                editPressed={(c: ContentProps) => editPressed(c)}
                                isEditMode={isEditMode}
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
                                editPressed={(skill: SkillProps) => skillEditPressed(skill)}
                                isEditMode={isEditMode}
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
                                setSkillContent(initialSkillContent);
                                setModalVisible(true);
                                setIsAdd(true);
                            }} />
                        : <></> }
                </ProfileHighlightContainer>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>
    )
}
