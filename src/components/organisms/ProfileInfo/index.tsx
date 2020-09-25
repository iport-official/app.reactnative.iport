import React from 'react';
import { View, ViewProps } from 'react-native';

import {
    InfoContainer,
    InfoEndLine,
    ProfileInfoContainer,
    ProfileInfoHeader,
    ProfileName,
    ProfilePhoto,
    ProfilePhotoBackground,
    ProfileStatus,
    StatusText
} from './styles';

interface ProfileInfoProps extends ViewProps {
    profileImage?: string | any;
    name?: string;
    status?: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    profileImage,
    name,
    status
}) => {

    return (
        <ProfileInfoContainer>
            <ProfileInfoHeader>
                <View
                    style={{
                        width: '100%',
                        height: 20,
                        backgroundColor: '#46266c',
                        position: 'absolute',
                        bottom: 0
                    }}
                />
                <ProfilePhotoBackground />
                <ProfilePhoto source={{ uri: profileImage }} />
            </ProfileInfoHeader>
            <InfoContainer>
                <ProfileName>{ name || 'Name' }</ProfileName>
                <ProfileStatus>
                    <StatusText>{ status || 'Status' }</StatusText>
                </ProfileStatus>
            </InfoContainer>
            <InfoEndLine />
        </ProfileInfoContainer>
    )
}

export default ProfileInfo;
