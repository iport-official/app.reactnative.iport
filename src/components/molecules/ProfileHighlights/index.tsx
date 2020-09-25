import React from 'react';
import { ViewProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    HighlightItemsContainer,
    ProfileHighlightsContainer,
    ProfilePersonalInfoContainer
} from './styles';

import { colors } from '../../../styles';

import HighlightItem from '../../atoms/HighlightItem';
import TextPrependIcon from '../../atoms/TextPrependIcon';

interface ProfileHighlightsProps extends ViewProps {
    role?: string;
    spotlight?: string;
    local?: string;
    email?: string;
}

const ProfileHighlights: React.FC<ProfileHighlightsProps> = ({
    role = 'Role',
    spotlight = 'Spotlight',
    local = 'Local',
    email = 'E-mail'
}) => {

    const textColor = '#222222';
    const iconColor = textColor + '80';
    const highlightTitleColor = textColor;
    const highlightIconColor = '#fff';

    const highlightIconSizeMCI = 82;
    const highlightIconSizeFA = 60;

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

    const certificatesIcon = () => {
        return <MaterialCommunityIcons name="certificate" size={highlightIconSizeMCI} color={highlightIconColor} />
    }

    const achievementsIcon = () => {
        return <FontAwesome5 name="medal" size={highlightIconSizeFA} color={highlightIconColor} />
    }

    const contactsIcon = () => {
        return <MaterialCommunityIcons name="phone" size={highlightIconSizeMCI} color={highlightIconColor} />
    }

    return (
        <ProfileHighlightsContainer>
            <ProfilePersonalInfoContainer>
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
            </ProfilePersonalInfoContainer>
            <HighlightItemsContainer>
                <HighlightItem
                    title='Projetos'
                    titleColor={highlightTitleColor}
                    icon={projectsIcon} />
                <HighlightItem
                    title='Experiências'
                    titleColor={highlightTitleColor}
                    icon={experiencesIcon} />
                <HighlightItem
                    title='Competências'
                    titleColor={highlightTitleColor}
                    icon={skillsIcon} />
                <HighlightItem
                    title='Certificados'
                    titleColor={highlightTitleColor}
                    icon={certificatesIcon} />
                <HighlightItem
                    title='Conquistas'
                    titleColor={highlightTitleColor}
                    icon={achievementsIcon} />
                <HighlightItem
                    title='Contatos'
                    titleColor={highlightTitleColor}
                    icon={contactsIcon} />
            </HighlightItemsContainer>
        </ProfileHighlightsContainer>
    )
}

export default ProfileHighlights;
