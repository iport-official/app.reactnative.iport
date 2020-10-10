import React, { useEffect } from 'react';
import { View, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

interface ProfileSkillsProps extends ViewProps {
    content: any[]
}

const ProfileSkillsContent: React.FC<ProfileSkillsProps> = ({
    content,
    ...rest
}) => {

    let i: number = 0;
    let levelLabel: string = '';

    const getLevelColor = (level: number): string => {
        let color: string = '';
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
                                marginBottom: i++ === content.length - 1 ? 30 : 0
                            }} >
                            <SkillContainer>
                                <SkillTitleContainer>
                                    <SkillTitle>{ c.label }</SkillTitle>
                                </SkillTitleContainer>
                                <SkillVerticalLine />
                                <SkillLevelContainer>
                                    <SkillLevelLabel
                                        style={{ color: getLevelColor(c.level) }}>{ levelLabel }</SkillLevelLabel>
                                    <SkillLevelBarContainer>
                                        <SkillLevelBar
                                            style={{
                                                width: c.level + '%',
                                                backgroundColor: getLevelColor(c.level)
                                            }} />
                                    </SkillLevelBarContainer>
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
