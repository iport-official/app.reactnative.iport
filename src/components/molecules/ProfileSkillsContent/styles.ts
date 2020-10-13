// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

import styled from 'styled-components/native';


export const SkillsContentContainer = styled.View`
    flex: 1;
`

export const SkillsContent = styled.ScrollView`
    flex: 1;
`

export const ContentContainer = styled.View`
    margin: 0 20px;
`

export const SkillContainer = styled.View`
    flex-direction: row;
    height: 40px;

    align-items: center;
`

export const SkillTitleContainer = styled.View`
    height: 100%;
    width: 40%;

    justify-content: center;
    align-items: center;
`

export const SkillTitle = styled.Text`
    color: ${colors.strongPurple};
    font-size: 18px;
    font-family: Roboto_700Bold;
`

export const SkillVerticalLine = styled.View`
    height: 80%;
    width: 1px;
    margin: 0 10px;

    background-color: #90909088;
`

export const SkillLevelContainer = styled.View`
    height: 100%;
    width: 53%;

    align-items: center;
    justify-content: center;
`

export const SkillLevelLabel = styled.Text`
    font-family: Roboto_700Bold;
    font-size: 12px;
`

export const SkillLevelBarContainer = styled.View`
    position: relative;
    height: 12px;

    overflow: hidden;
    border-radius: 10px;
    background: #c4c4c488;
`

export const SkillLevelBar = styled.View`
    height: 100%;
    border-radius: 10px;
`

export const WarningTextContainer = styled.View`
    justify-content: center;
    align-items: center;

    height: 600px;
    width: 100%;
    padding: 0 10%;
`

export const WarningText = styled.Text`
    color: #0008;

    font-size: 18px;
    text-align: center;
`
