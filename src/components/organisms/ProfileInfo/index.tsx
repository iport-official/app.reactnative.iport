import React, { useState } from 'react';
import { Modal, View, ViewProps } from 'react-native';

import { Entypo } from '@expo/vector-icons';

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
    ProfilePhotoEmpty,
    ProfileStatus,
    StatusText
} from './styles';

import EditIcon from '../../atoms/Buttons/EditIcon';
import ImagePicker from '../../atoms/Inputs/ImagePicker';
import TextField from '../../atoms/Inputs/TextField';

interface ProfileInfoProps extends ViewProps {
    profileImage?: string | null | undefined;
    name?: string;
    status?: string;
    isEditMode?: boolean;
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
    isEditMode = false
}: ProfileInfoProps): JSX.Element => {

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
                { !isEditMode
                    ? ( profileImage && profileImage.length > 0
                        ? <ProfilePhoto source={{ uri: `data:image/gif;base64,${profileImage}` }} />
                        : <ProfilePhotoEmpty>
                            <Entypo name="user" size={180} color="white" />
                        </ProfilePhotoEmpty>
                    )
                    : ( profileImage && profileImage.length > 0
                        ? <ImagePicker
                            imageProp={`data:image/gif;base64,${profileImage}`}
                            onPick={(image: string) => { if(onImageChange) onImageChange(image); }}
                            style={{ height: 180, width: 180, borderRadius: 500 }}
                            />
                        : <>
                            <ProfilePhotoEmpty style={{ position: 'absolute', zIndex: 1 }}>
                                <Entypo name="user" size={180} color="white" />
                            </ProfilePhotoEmpty>
                            <ImagePicker
                                onPick={(image: string) => { if(onImageChange) onImageChange(image); }}
                                style={{ height: 180, width: 180, borderRadius: 500, zIndex: 2 }}
                                />
                        </> )
                    }
            </ProfilePhotoContainer>
            <InfoContainer>
                { !isEditMode
                    ? <ProfileName>{ name || 'Name' }</ProfileName>
                    : <View style={{ flexDirection: 'row' }}>
                        <ProfileName style={{ marginRight: 5 }}>{ name || 'Name' }</ProfileName>
                        <EditIcon
                            size={30}
                            iconSize={20}
                            onPress={() => { setModalType('name'); setModalVisible(true); }} />
                    </View> }
                <ProfileStatus>
                    <StatusText hasStatus={status && status.length > 0 ? true : false}>{ status || 'Sem Status...' }</StatusText>
                    { isEditMode ?
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
