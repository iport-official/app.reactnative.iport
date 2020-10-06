import React, { useState } from 'react';
import { Modal, View, ViewProps } from 'react-native';

import {
    InfoContainer,
    InfoEndLine,
    ModalContainer,
    ModalContent,
    ProfileInfoContainer,
    ProfileInfoHeader,
    ProfileName,
    ProfilePhoto,
    ProfilePhotoBackground,
    ProfilePhotoContainer,
    ProfileStatus,
    StatusText
} from './styles';

import ImagePicker from '../../atoms/ImagePicker';
import EditIcon from '../../atoms/EditIcon';
import TextField from '../../atoms/TextField';

interface ProfileInfoProps extends ViewProps {
    profileImage?: string | any;
    name?: string;
    status?: string;
    isCurrent?: boolean;
    onNameChange?(name: string): void;
    onStatusChange?(status: string): void;
    onImageChange?(image: string): void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    onNameChange,
    onStatusChange,
    onImageChange,
    profileImage,
    name,
    status,
    isCurrent = false
}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');

    return (
        <ProfileInfoContainer>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} >
                <ModalContainer
                    onPress={() => setModalVisible(false)}
                    activeOpacity={1} />
                <ModalContent>
                    { modalType === 'name'
                        ? <TextField
                            placeholder='Name'
                            textValue={name}
                            onTextChange={(name: string) => {if(onNameChange) onNameChange(name)}} />
                        : <TextField
                            placeholder='Status'
                            textValue={status}
                            onTextChange={(status: string) => {if(onStatusChange) onStatusChange(status)}} /> }
                </ModalContent>
            </Modal>
            <ProfileInfoHeader>
                <View
                    style={{
                        width: '100%',
                        height: 20,
                        backgroundColor: '#46266c',
                        position: 'absolute',
                        bottom: 0
                    }} />
            </ProfileInfoHeader>
            <ProfilePhotoContainer>
                <ProfilePhotoBackground />
                { !isCurrent ? <ProfilePhoto source={{ uri: profileImage }} />
                    : <ImagePicker
                        size={180}
                        onPick={(image: string) => { if(onImageChange) onImageChange(image); }}
                        imageProp={profileImage}
                        /> }
            </ProfilePhotoContainer>
            <InfoContainer>
                { !isCurrent ? <ProfileName>{ name || 'Name' }</ProfileName>
                    : <View style={{ flexDirection: 'row' }}>
                        <ProfileName style={{ marginRight: 5 }}>{ name || 'Name' }</ProfileName>
                        <EditIcon
                            size={30}
                            iconSize={20}
                            onPress={() => { setModalType('name'); setModalVisible(true); }} />
                    </View> }
                <ProfileStatus>
                    <StatusText>{ status || 'Status' }</StatusText>
                    { isCurrent ?
                        <EditIcon
                            size={30}
                            iconSize={20}
                            style={{
                                backgroundColor: '#46266c',
                                position: 'absolute',
                                bottom: -10,
                                right: -10
                            }}
                            onPress={() => { setModalType('status'); setModalVisible(true); }} /> :
                        <View /> }
                </ProfileStatus>
            </InfoContainer>
            <InfoEndLine />
        </ProfileInfoContainer>
    )
}

export default ProfileInfo;
