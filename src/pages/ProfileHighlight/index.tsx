/* eslint-disable react/display-name */
import Slider from '@react-native-community/slider';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { AntDesign, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { getItemAsync } from 'expo-secure-store';

import { UserWithArrayProxy } from '../../store/ducks/common/user-with-array-proxy';
import { AchievementProxy, ExperienceProxy, ProjectProxy, SkillProxy, UserProxy } from '../../store/ducks/user/types';

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

import api from '../../services/api';
import uuid from 'uuid-random';

type DefaultProfileHighlightProps = StackScreenProps<
    ProfileStackParamsList,
    'ProfileHighlight'
>

export type ContentProxy = AchievementProxy | ExperienceProxy | ProjectProxy;

export default function({ navigation, route }: DefaultProfileHighlightProps): JSX.Element {

    const [topBarTitle, setTopBarTitle] = useState('');
    const highlight: string = route.params.highlight;
    const isEditMode: boolean = route.params.isEditMode;
    const isCurrent: boolean = route.params.isCurrent;
    const userId: string = route.params.userId || '';

    const [modalVisible, setModalVisible] = useState(false);

    const [achievementsList, setAchievementsList] = useState<AchievementProxy[]>([]);
    const [experiencesList, setExperiencesList] = useState<ExperienceProxy[]>([]);
    const [projectsList, setProjectsList] = useState<ProjectProxy[]>([]);
    const [skillsList, setSkillsList] = useState<SkillProxy[]>([]);

    async function getHighlightContent() {
        try {
            const token = await getItemAsync('access_token');
            await api.get<
                UserWithArrayProxy<
                    UserProxy,
                    AchievementProxy | ExperienceProxy | ProjectProxy | SkillProxy
                >>(
                `users/${userId}/${highlight === 'skills' ? 'competences' : highlight}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(response => {
                console.log(response.data.arrayProxy.array);
                if(highlight === 'skills') {
                    setSkillsList([...response.data.arrayProxy.array.map(e => (e as SkillProxy))]);
                } else if(highlight === 'projects') {
                    setProjectsList([...response.data.arrayProxy.array.map(e => (e as ProjectProxy))]);
                } else if(highlight === 'experiences') {
                    setExperiencesList([...response.data.arrayProxy.array.map(e => (e as ExperienceProxy))]);
                } else {
                    setAchievementsList([...response.data.arrayProxy.array.map(e => (e as AchievementProxy))]);
                }
            });
        } catch(error) {
            alert(error);
        }
    }

    async function saveContent(pc: ContentProxy) {
        try {
            const token = await getItemAsync('access_token');
            await api.post(
                `users/${userId}/${highlight}`,
                {
                    ...pc,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(() => {
                getHighlightContent();
            })
        } catch(error) {
            alert(error);
        }
    }

    async function saveSkill(sc: SkillProxy) {
        try {
            const token = await getItemAsync('access_token');
            await api.post(
                `users/${userId}/competences`,
                {
                    ...sc
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(() => {
                getHighlightContent();
            })
        } catch(error) {
            alert(error);
        }
    }

    async function updateContent(pc: ContentProxy) {
        try {
            const token = await getItemAsync('access_token');
            await api.patch(
                `users/${userId}/${highlight}/${pc.id}`,
                {
                    ...pc
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(() => {
                getHighlightContent();
            })
        } catch(error) {
            alert(error);
        }
    }

    async function updateSkill(sc: SkillProxy) {
        try {
            const token = await getItemAsync('access_token');
            await api.patch(
                `users/${userId}/competences/${sc.id}`,
                {
                    ...sc
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(() => {
                getHighlightContent();
            })
        } catch(error) {
            alert(error);
        }
    }

    const initialPageContent: ExperienceProxy | ProjectProxy = {
        id: '',
        image: '',
        title: '',
        startDate: new Date().toISOString().substr(0, 7),
        endDate: new Date().toISOString().substr(0, 7),
        description: ''
    }

    const initialAchievementContent: AchievementProxy = {
        id: '',
        image: '',
        title: '',
        endDate: new Date().toISOString().substr(0, 7),
        description: ''
    }

    const initialSkillContent: SkillProxy = {
        id: '',
        label: '',
        level: 0
    }

    const [experienceContent, setExperienceContent] = useState<ExperienceProxy>(initialPageContent);
    const [projectContent, setProjectContent] = useState<ProjectProxy>(initialPageContent);
    const [achievementContent, setAchievementContent] = useState<AchievementProxy>(initialAchievementContent);
    const [skillContent, setSkillContent] = useState<SkillProxy>(initialSkillContent);
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

        getHighlightContent();

        return () => {
            setAchievementsList([]);
            setExperiencesList([]);
            setProjectsList([]);
            setSkillsList([]);
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

    const editPressed = (inContent: ContentProxy): void => {
        const content = {
            id: inContent.id,
            image: inContent.image,
            title: inContent.title,
            endDate: inContent.endDate,
            description: inContent.description
        }
        if(highlight === 'achievements') {
            setAchievementContent({...content});
        } else if(highlight === 'experiences') {
            setExperienceContent({...content, startDate: (inContent as {startDate: string}).startDate});
        } else {
            setProjectContent({...content, startDate: (inContent as {startDate: string}).startDate});
        }
        setModalVisible(true);
        setIsAdd(false);
    }

    const skillEditPressed = (inSkill: SkillProxy): void => {
        setSkillContent({
            id: inSkill.id,
            label: inSkill.label,
            level: inSkill.level
        });
        setIsAdd(false);
        setModalVisible(true);
    }

    const sortSkills = (): SkillProxy[] => {
        const skills = [...skillsList];
        skills.sort((s1, s2) => s1.level < s2.level ? 1 : -1)
        return skills;
    }

    const sortContent = (): ContentProxy[] => {
        const content = [];
        if(highlight === 'achievements') {
            content.push(...achievementsList);
            content.sort((c1, c2) => {
                if(c1.endDate === null && c2.endDate === null) return 1;
                if(c2.endDate === null) return -1;
                if(c1.endDate === null) return -1;
                if(c1.endDate === c2.endDate) return 1;
                return c1.endDate < c2.endDate ? 1 : -1;
            });
        } else {
            highlight === 'projects' ? content.push(...projectsList) : content.push(...experiencesList);
            content.sort((c1, c2) => {
                if(c1.endDate === null && c2.endDate === null) return c1.startDate < c2.startDate ? 1 : -1;
                if(c2.endDate === null) return -1;
                if(c1.endDate === null) return -1;
                if(c1.endDate !== null && c2.endDate !== null) {
                    if(c1.endDate === c2.endDate) return c1.startDate < c2.startDate ? 1 : -1;
                    return c1.endDate < c2.endDate ? 1 : -1;
                }
                return c1.endDate < c2.endDate ? 1 : -1;
            });
        }
        return content;
    }

    const handleConfirm = (): void => {
        const pc = highlight === 'projects' ? projectContent : (highlight === 'experiences' ? experienceContent : achievementContent);
        if(!(pc.title.length > 0 && pc.description.length > 0)) {
            alert('Preencha os campos corretamente!');
        } else {
            const contentCopy = highlight === 'projects' ? [...projectsList] : (highlight === 'experiences' ? [...experiencesList] : achievementsList);
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
                    pc.id = uuid();
                    saveContent(pc);
                    setModalVisible(false);
                }
            } else {
                updateContent(pc);
                setModalVisible(false);
            }
        }
    }

    const handleSkillConfirm = (): void => {
        const sc = {...skillContent};
        if(!(sc.label.length > 0 && sc.level <= 100 && sc.level >= 0)) {
            alert('Insira o nome da competência!');
        } else {
            const skillsCopy = [...skillsList];
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
                    sc.id = uuid();
                    saveSkill(sc);
                    setModalVisible(false);
                }
            } else {
                updateSkill(sc);
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
                                    imageProp={highlight === 'projects'
                                        ?  `data:image/gif;base64,${projectContent.image}`
                                        : (highlight === 'experiences'
                                            ? `data:image/gif;base64,${experienceContent.image}`
                                            : `data:image/gif;base64,${achievementContent.image}`)}
                                    aspect={[16, 9]}
                                    onPick={(image: string) => {
                                        if(highlight === 'projects') {
                                            setProjectContent({ ...projectContent, image });
                                        } else if(highlight === 'experiences') {
                                            setExperienceContent({ ...experienceContent, image });
                                        } else {
                                            setAchievementContent({ ...achievementContent, image });
                                        }
                                    }} />
                                <TextField
                                    placeholder='Título'
                                    textValue={highlight === 'projects'
                                        ?  projectContent.title
                                        : (highlight === 'experiences' ? experienceContent.title : achievementContent.title)}
                                    onTextChange={(title: string) => {
                                        if(highlight === 'projects') {
                                            setProjectContent({ ...projectContent, title });
                                        } else if(highlight === 'experiences') {
                                            setExperienceContent({ ...experienceContent, title });
                                        } else {
                                            setAchievementContent({ ...achievementContent, title });
                                        }
                                    }} />
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}>
                                    { highlight !== 'achievements'
                                        ? <TextField
                                            fieldWidth='50%'
                                            placeholder='Início'
                                            textValue={highlight === 'projects'
                                                ?  projectContent.startDate
                                                : experienceContent.startDate}
                                            onTextChange={(startDate: string) => {
                                                if(highlight === 'projects') {
                                                    setProjectContent({ ...projectContent, startDate });
                                                } else {
                                                    setExperienceContent({ ...experienceContent, startDate });
                                                }
                                            }} />
                                        : <></> }
                                    <TextField
                                        fieldWidth={ highlight === 'achievements' ? '100%' : '50%'}
                                        placeholder='Término'
                                        textValue={highlight === 'projects'
                                            ?  projectContent.endDate
                                            : (highlight === 'experiences' ? experienceContent.endDate : achievementContent.endDate)}
                                        onTextChange={(endDate: string) => {
                                            if(highlight === 'projects') {
                                                setProjectContent({ ...projectContent, endDate });
                                            } else if(highlight === 'experiences') {
                                                setExperienceContent({ ...experienceContent, endDate });
                                            } else {
                                                setAchievementContent({ ...achievementContent, endDate });
                                            }
                                        }} />
                                </View>
                                <TextField
                                    placeholder='Descrição'
                                    textValue={highlight === 'projects'
                                        ?  projectContent.description
                                        : (highlight === 'experiences' ? experienceContent.description : achievementContent.description)}
                                    onTextChange={(description: string) => {
                                        if(highlight === 'projects') {
                                            setProjectContent({ ...projectContent, description });
                                        } else if(highlight === 'experiences') {
                                            setExperienceContent({ ...experienceContent, description });
                                        } else {
                                            setAchievementContent({ ...achievementContent, description });
                                        }
                                    }} />
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
                                editPressed={(c: ContentProxy) => editPressed(c)}
                                isEditMode={isEditMode}
                                isCurrent={isCurrent}
                                content={sortContent()}
                                contentType={highlight} />
                            : <ProfileSkillsContent
                                editPressed={(skill: SkillProxy) => skillEditPressed(skill)}
                                isEditMode={isEditMode}
                                isCurrent={isCurrent}
                                content={sortSkills()} /> }
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
                                setExperienceContent(initialPageContent);
                                setProjectContent(initialPageContent);
                                setAchievementContent(initialAchievementContent);
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
