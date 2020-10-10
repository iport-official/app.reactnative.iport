import React from 'react';
import { ViewProps } from 'react-native';

import {
    SkillsContent,
    SkillsContentContainer,
    ContentContainer,
    SkillContainer,
    SkillLevelBar,
    SkillLevelBarContainer,
    SkillLevelContainer,
    SkillLevelLabel,
    SkillTitle,
    SkillTitleContainer,
    SkillVerticalLine
} from './styles';

import { SkillProps } from '../../../pages/ProfileHighlight';
import EditIcon from '../../atoms/EditIcon';

interface ProfileSkillsProps extends ViewProps {
    content: SkillProps[];
    isCurrent: boolean;
    editPressed?(skill: SkillProps): void;
}

const ProfileSkillsContent: React.FC<ProfileSkillsProps> = ({
    editPressed,
    content,
    isCurrent = false,
    ...rest
}: ProfileSkillsProps) => {

    let i = 0;
    let levelLabel = '';

    const getLevelColor = (level: number): string => {
        let color = '';
        if(level <= 15) {
            color = '#ff9ec1';
            levelLabel = 'Iniciante';
        } else if(level > 15 && level <= 30) {
            color = '#f795ff';
            levelLabel = 'Conhecedor';
        } else if(level > 30 && level <= 45) {
            color = '#bd6ada';
            levelLabel = 'Intermediário';
        } else if(level > 45 && level <= 60) {
            color = '#9f74d2';
            levelLabel = 'Intermediário';
        } else if(level > 60 && level <= 80) {
            color = '#874fdb';
            levelLabel = 'Avançado';
        } else if(level > 80 && level <= 90) {
            color = '#5c2a98';
            levelLabel = 'Experiente';
        } else {
            color = '#46266c';
            levelLabel = 'Expert';
        }
        return color;
    }

    return (
        <SkillsContentContainer { ...rest } >
            <SkillsContent>
                { content.map(c => {
                    return (
                        <ContentContainer
                            key={c.id}
                            style={{
                                marginTop: i === 0 ? 80 : 10,
                                marginBottom: i++ === content.length - 1 ? 70 : 0
                            }} >
                            <SkillContainer>
                                <SkillTitleContainer>
                                    <SkillTitle>{ c.label }</SkillTitle>
                                </SkillTitleContainer>
                                <SkillVerticalLine />
                                <SkillLevelContainer>
                                    <SkillLevelLabel
                                        style={{
                                            color: getLevelColor(c.level),
                                            transform: [{ translateX: isCurrent ? -15 : 0}]
                                        }}>{ levelLabel }</SkillLevelLabel>
                                    <SkillLevelBarContainer
                                        style={{
                                            width: isCurrent ? '85%' : '100%',
                                            transform: [{ translateX: isCurrent ? -15 : 0}]
                                        }} >
                                        <SkillLevelBar
                                            style={{
                                                width: c.level + '%',
                                                backgroundColor: getLevelColor(c.level)
                                            }} />
                                    </SkillLevelBarContainer>
                                    { isCurrent
                                        ? <EditIcon
                                            size={30}
                                            iconSize={20}
                                            style={{
                                                backgroundColor: '#46266c',
                                                position: 'absolute',
                                                right: -10,
                                                top: '12.5%'
                                            }}
                                            onPress={() => { if(editPressed) editPressed(c) }} />
                                        : <></> }
                                </SkillLevelContainer>
                            </SkillContainer>
                        </ContentContainer>
                    );
                }) }
            </SkillsContent>
        </SkillsContentContainer>
    )
}

export default ProfileSkillsContent;
