import React, { useState } from 'react';
import { Modal, View, ViewProps } from 'react-native';

import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {
    HighlightItemsContainer,
    ModalContainer,
    ModalContent,
    ProfileHighlightsContainer,
    ProfilePersonalInfoContainer
} from './styles';

import EditIcon from '../../atoms/Buttons/EditIcon';
import TextField from '../../atoms/Inputs/TextField';
import TextPrependIcon from '../../atoms/Texts/TextPrependIcon';
import HighlightItem from '../../atoms/Views/HighlightItem';
// import InputField from '../../molecules/InputField';

interface ProfileHighlightsProps extends ViewProps {
    role?: string;
    spotlight?: string;
    local?: string;
    email?: string;
    isEditMode?: boolean;
    onRoleChange?(role: string): void;
    onSpotlightChange?(spotlight: string): void;
    onEmailChange?(email: string): void;
    onLocalChange?(local: string): void;
    onHighlightPress?(highlight: string): void;
}

const ProfileHighlights: React.FC<ProfileHighlightsProps> = ({
    onRoleChange,
    onSpotlightChange,
    onEmailChange,
    onLocalChange,
    onHighlightPress,
    role = 'Role',
    spotlight = 'Spotlight',
    local = 'Local',
    email = 'E-mail',
    isEditMode = false
}: ProfileHighlightsProps) => {

    const textColor = '#222222';
    const iconColor = textColor + '80';
    const highlightTitleColor = textColor;
    const highlightIconColor = '#fff';

    const highlightIconSizeMCI = 110;
    const highlightIconSizeFA = 80;

    const roleIcon = () => {
        return <FontAwesome name="briefcase" size={22} color={iconColor} />
    }

    const spotlightIcon = () => {
        return <FontAwesome name="star" size={22} color={iconColor} />
    }

    const emailIcon = () => {
        return <MaterialCommunityIcons name="email" size={22} color={iconColor} />
    }

    const localIcon = () => {
        return <FontAwesome name="map-marker" size={22} color={iconColor} />
    }

    const projectsIcon = () => {
        return <MaterialCommunityIcons name="clipboard-text" size={highlightIconSizeMCI} color={highlightIconColor} />
    }

    const experiencesIcon = () => {
        return <MaterialCommunityIcons name="briefcase-account" size={highlightIconSizeMCI} color={highlightIconColor} />
    }

    const skillsIcon = () => {
        return <FontAwesome name="gears" size={highlightIconSizeFA} color={highlightIconColor} />
    }

    const achievementsIcon = () => {
        return <FontAwesome5 name="medal" size={highlightIconSizeFA} color={highlightIconColor} />
    }

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ProfileHighlightsContainer>
            <ProfilePersonalInfoContainer
                style={{
                    backgroundColor: isEditMode ? '#0002' : '#0000',
                    paddingTop: isEditMode ? 15 : 0
                }}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} >
                    <ModalContainer
                        onPress={() => setModalVisible(false)}
                        activeOpacity={1} />
                    <ModalContent>
                        <TextField
                            placeholder='Cargo'
                            textValue={role}
                            onTextChange={(role: string) => { if(onRoleChange) onRoleChange(role); }} />
                        <TextField
                            placeholder='Destaque'
                            textValue={spotlight}
                            onTextChange={(spotlight: string) => { if(onSpotlightChange) onSpotlightChange(spotlight); }} />
                        <TextField
                            placeholder='E-mail Principal'
                            textValue={email}
                            keyboard='email-address'
                            length={50}
                            onTextChange={(email: string) => { if(onEmailChange) onEmailChange(email); }} />
                        <TextField
                            placeholder='Cidade - Estado'
                            textValue={local}
                            onTextChange={(local: string) => { if(onLocalChange) onLocalChange(local); }} />
                    </ModalContent>
                </Modal>
                <TextPrependIcon
                    style={{ color: textColor }}
                    icon={roleIcon}
                    text={role} />
                <TextPrependIcon
                    style={{ color: textColor }}
                    icon={spotlightIcon}
                    text={spotlight} />
                <TextPrependIcon
                    style={{ color: textColor }}
                    icon={emailIcon}
                    text={email} />
                <TextPrependIcon
                    style={{ color: textColor }}
                    icon={localIcon}
                    text={local} />
                { isEditMode
                    ? <EditIcon
                        size={30}
                        iconSize={20}
                        style={{
                            backgroundColor: '#46266c',
                            position: 'absolute',
                            top: -15,
                            left: '45%'
                        }}
                        onPress={() => setModalVisible(true)} />
                    : <View /> }
            </ProfilePersonalInfoContainer>
            <HighlightItemsContainer>
                <HighlightItem
                    title='Projetos'
                    titleColor={highlightTitleColor}
                    icon={projectsIcon}
                    onPress={() => { if(onHighlightPress) onHighlightPress('projects') }} />
                <HighlightItem
                    title='Experiências'
                    titleColor={highlightTitleColor}
                    icon={experiencesIcon}
                    onPress={() => { if(onHighlightPress) onHighlightPress('experiences') }} />
                <HighlightItem
                    title='Competências'
                    titleColor={highlightTitleColor}
                    icon={skillsIcon}
                    onPress={() => { if(onHighlightPress) onHighlightPress('skills') }} />
                <HighlightItem
                    title='Conquistas'
                    titleColor={highlightTitleColor}
                    icon={achievementsIcon}
                    onPress={() => { if(onHighlightPress) onHighlightPress('achievements') }} />
            </HighlightItemsContainer>
        </ProfileHighlightsContainer>
    )
}

export default ProfileHighlights;
