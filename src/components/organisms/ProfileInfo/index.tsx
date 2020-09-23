import React from 'react';
import { View, ViewProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import {
    InfoContainer,
    InfoContainerFirst,
    InfoContainerSecond,
    ProfileInfoContainer,
    ProfileInfoHeader,
    ProfileName,
    ProfilePhoto,
    ProfileStatus,
    StatusText
} from './styles';

import { colors } from '../../../styles';

import TextPrependIcon from '../../atoms/TextPrependIcon';
import HeartIcon from '../../atoms/Heart';

interface ProfileInfoProps extends ViewProps {
    profileImage?: string | any;
    name?: string;
    role?: string;
    spotlight?: string;
    status?: string;
    local?: string;
    recomendations?: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    profileImage,
    name,
    role,
    spotlight,
    status,
    local,
    recomendations
}) => {
    const roleIcon = () => {
        return <FontAwesome name="briefcase" size={20} color={colors.strongPurple} />
    }

    const spotlightIcon = () => {
        return <FontAwesome name="star" size={20} color={colors.strongPurple} />
    }

    const mapMarkerIcon = () => {
        return <FontAwesome name="map-marker" size={20} color={colors.strongPurple} />
    }

    const recomendationsIcon = () => {
        return (
            <HeartIcon
                size={120}
                color="#ff003d"
                right={85}
            />
        )
    }

    return (
        <ProfileInfoContainer>
            <ProfileInfoHeader>
                <ProfilePhoto source={{ uri: profileImage }} />
                <View style={{
                    width: '59%',
                    justifyContent: 'flex-end',
                    margin: 10
                    }} >
                    <ProfileName>{ name || 'Name' }</ProfileName>
                </View>
            </ProfileInfoHeader>
            <InfoContainer>
                <InfoContainerFirst>
                    <TextPrependIcon
                        icon={mapMarkerIcon}
                        text={local || 'Local'}
                        style={{ color: colors.strongPurple }} />
                    <TextPrependIcon
                        icon={recomendationsIcon}
                        text={recomendations?.toString() || '0'}
                        style={{ color: '#ff003d', marginLeft: 25, fontSize: 15 }} />
                </InfoContainerFirst>
                <InfoContainerSecond>
                    <TextPrependIcon
                        icon={roleIcon}
                        text={role || 'Role'}
                        style={{ color: colors.strongPurple }} />
                    <TextPrependIcon
                        icon={spotlightIcon}
                        text={spotlight || 'Spotlight'}
                        style={{ color: colors.strongPurple, marginLeft: 6.2 }} />
                    <ProfileStatus>
                        <StatusText>{ status || 'Status' }</StatusText>
                    </ProfileStatus>
                </InfoContainerSecond>
            </InfoContainer>
            <LinearGradient
                colors={[ 'rgba(0,0,0,0.4)', 'transparent' ]}
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -5,
                    height: 5,
                    width: '100%'
                }} />
        </ProfileInfoContainer>
    )
}

export default ProfileInfo;
