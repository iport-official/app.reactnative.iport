import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import styled from 'styled-components/native';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const ContainerKeyboardAvoidingView = styled(KeyboardAvoidingView)`
    flex: 1;
`

export const PostDetailsContainer = styled.ScrollView`
    background-color: #fff;
`

export const PostDetailsHeader = styled.View`
    height: 300px;
    background-color: #fff;
`

export const HeaderTopContainer = styled.View`
    flex-direction: row;

    height: 60px;
    width: 100%;

    background-color: #46266c;
`

export const CompanyPhoto = styled.Image`
    height: ${(props: {size: number}) => props.size}px;
    width: ${(props: {size: number}) => props.size}px;

    border-color: #8155E2;
    border-width: 2px;
    border-radius: ${(props: {size: number}) => props.size / 7}px;

    margin-top: 10px;
    margin-left: 20px;
`

export const CompanyPhotoPlaceholder = styled.View`
    justify-content: center;
    align-items: center;
    height: ${(props: {size: number}) => props.size}px;
    width: ${(props: {size: number}) => props.size}px;

    border-color: #8155E2;
    border-width: 2px;
    border-radius: ${(props: {size: number}) => props.size / 7}px;
    background-color: #fff;

    margin-top: 10px;
    margin-left: 20px;
`

export const PostRole = styled.Text`
    align-self: flex-end;
    max-height: 50px;
    width: 210px;
    margin-left: 10px;
    margin-bottom: 5px;

    font-family: Roboto_700Bold;
    font-size: 20px;
    color: #fff;
`

export const CompanyNameText = styled.Text`
    width: 210px;
    height: 40px;
    margin-top: 5px;
    margin-left: 130px;

    font-family: Roboto_700Bold;
    font-size: 16px;
    color: #46266c;
`

export const InfoContainer = styled.View`
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;
`

export const SalaryLevelContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    position: absolute;

    margin-top: 10px;
    bottom: 15px;
`

export const SalaryLevelShape = styled.View`
    flex-direction: row;
    height: 35px;
    width: 150px;

    border-radius: 40px;
    background-color: #511e86;
`

export const SalaryLevelIconContainer = styled.View`
    position: absolute;
    left: 0px;
    top: -7.5px;

    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 200px;
    background-color: #612e96;
`

export const SalaryLevelText = styled.Text`
    text-align: center;
    width: 90px;
    margin-left: 50px;
    padding: 7.5px 5px;

    font-family: Roboto_700Bold;
    font-size: 15px;
    color: #fff;
`

export const PostDescriptionContainer = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
`

export const DescriptionContainer = styled.View`
    width: 85%;
    align-items: center;
`

export const DescriptionTitleView = styled.View`
    align-self: flex-start;
    height: 60px;
    width: 200px;

    background-color: #612e96;
    border-radius: 10px;
`

export const DescriptionTitleText = styled.Text`
    width: 100%;
    margin-top: 5px;

    text-align: center;
    font-family: Roboto_700Bold;
    font-size: 20px;
    color: #fff;
`

export const DescriptionContentContainer = styled.Text`
    top: -35px;
    min-height: 40px;
    width: 100%;
    padding: 10px 15px;
    text-align: justify;

    border-radius: 15px;
    background-color: #303030;
`

export const DescriptionContent = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 16px;
    color: #fff;
`
