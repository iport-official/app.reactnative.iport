/* eslint-disable react/display-name */
import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';

import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import { UserProxy } from '../../store/ducks/user/types';

import { DrawerParamsList } from '../../navigations/MainDrawer';

import {
    CompanyNameText,
    CompanyPhoto,
    CompanyPhotoPlaceholder,
    ContainerKeyboardAvoidingView,
    ContainerSafeAreaView,
    DescriptionContainer,
    DescriptionContent,
    DescriptionContentContainer,
    DescriptionTitleText,
    DescriptionTitleView,
    HeaderTopContainer,
    InfoContainer,
    PostDescriptionContainer,
    PostDetailsContainer,
    PostDetailsHeader,
    PostRole,
    SalaryLevelContainer,
    SalaryLevelIconContainer,
    SalaryLevelShape,
    SalaryLevelText
} from './styles';

import RoundButton from '../../components/atoms/Buttons/RoundButton';
import TextPrependIcon from '../../components/atoms/Texts/TextPrependIcon';
import MainHeader from '../../components/molecules/MainHeader';

type DetailsProps = {
    id: string
    title: string
    salary: number
    role: string
    requirements: string
    experienceLevel: string
    jobDescription: string
}

type DefaultPostDetailsProps = DrawerScreenProps<
    DrawerParamsList,
    'PostDetails'
>

export default function ({ navigation, route }: DefaultPostDetailsProps): JSX.Element {

    const user = route.params.postDetails && route.params.postDetails.user ? {...route.params.postDetails.user} : {} as UserProxy;
    const details = route.params.postDetails && route.params.postDetails.details ? {...route.params.postDetails.details} : {}  as DetailsProps;

    return (
        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidingView>
                <MainHeader onPress={() => navigation.openDrawer()} />
                <PostDetailsContainer>
                    <PostDetailsHeader>
                        <HeaderTopContainer>
                            { user && user.profileImage
                                ? <CompanyPhoto
                                    source={{ uri: `data:image/gif;base64,${user.profileImage}` }}
                                    size={100} />
                                : <CompanyPhotoPlaceholder
                                    size={100}>
                                    <Ionicons name="ios-business" size={74} color="#8155E2" />
                                </CompanyPhotoPlaceholder> }
                            <PostRole>{ details.role }</PostRole>
                        </HeaderTopContainer>
                        <CompanyNameText>{ user.username }</CompanyNameText>
                        <InfoContainer>
                            <TextPrependIcon
                                width={25}
                                text={user.email}
                                icon={() => <MaterialCommunityIcons name="email" size={24} color="#46266c" />} />
                            <TextPrependIcon
                                width={25}
                                text={'(11) 984635587'}
                                icon={() => <MaterialCommunityIcons name="phone" size={24} color="#46266c" />} />
                            <TextPrependIcon
                                width={25}
                                text={user.city + ' - ' + user.state}
                                icon={() => <FontAwesome name="map-marker" size={24} color="#46266c" />} />
                        </InfoContainer>
                        <SalaryLevelContainer>
                            <SalaryLevelShape>
                                <SalaryLevelIconContainer style={{ elevation: 7 }}>
                                    <FontAwesome name="dollar" size={24} color="white" />
                                </SalaryLevelIconContainer>
                                <SalaryLevelText>{ details.salary ? parseFloat(details.salary.toString()).toFixed(2).replace('.', ',') : 'Ausente' }</SalaryLevelText>
                            </SalaryLevelShape>
                            <SalaryLevelShape>
                                <SalaryLevelIconContainer style={{ elevation: 7 }}>
                                    <FontAwesome name="user" size={24} color="white" />
                                </SalaryLevelIconContainer>
                                <SalaryLevelText>{ details.experienceLevel }</SalaryLevelText>
                            </SalaryLevelShape>
                        </SalaryLevelContainer>
                    </PostDetailsHeader>
                    <LinearGradient
                        colors={[ '#ccc', 'transparent' ]}
                        style={{ width: '100%', height: 5}} />
                    <PostDescriptionContainer>
                        <DescriptionContainer>
                            <DescriptionTitleView>
                                <DescriptionTitleText>Requisitos</DescriptionTitleText>
                            </DescriptionTitleView>
                            <LinearGradient
                                colors={[ '#222', '#303030', '#303030', '#303030' ]}
                                style={{ width: 200, height: 15, zIndex: 5, top: -20, alignSelf: 'flex-start'}} />
                            <DescriptionContentContainer>
                                <DescriptionContent>{ details.requirements || 'Não informado.' }</DescriptionContent>
                            </DescriptionContentContainer>
                        </DescriptionContainer>
                        <DescriptionContainer>
                            <DescriptionTitleView style={{ alignSelf: 'flex-end' }}>
                                <DescriptionTitleText>Descrição da Vaga</DescriptionTitleText>
                            </DescriptionTitleView>
                            <LinearGradient
                                colors={[ '#222', '#303030', '#303030', '#303030' ]}
                                style={{ width: 200, height: 15, zIndex: 5, top: -20, alignSelf: 'flex-end'}} />
                            <DescriptionContentContainer>
                                <DescriptionContent>{ details.jobDescription || 'Não informado.' }</DescriptionContent>
                            </DescriptionContentContainer>
                        </DescriptionContainer>
                    </PostDescriptionContainer>
                </PostDetailsContainer>
                <RoundButton
                    icon={() => <MaterialCommunityIcons name="briefcase-check" size={30} color="white" />}
                    bgColor='#612e96'
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10
                    }}
                    onPress={() => {
                        alert('Applied!');
                    }} />
            </ContainerKeyboardAvoidingView>
        </ContainerSafeAreaView>
    )
}
