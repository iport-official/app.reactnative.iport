import React from 'react'
import {
    ImageSourcePropType,
    ViewStyle,
    StyleProp,
    Text
} from 'react-native'

import {
    PostContainerView,
    PostImage,
    ProfileView,
    ProfileImage,
    ProfileSimpleView,
    NameText,
    PublishingDateText,
    TextsView,
    TitleText,
    FooterView,
    CoinsView,
    CoinsText
} from './styles'

export interface JobProps {
    style?: StyleProp<ViewStyle>
    imageSource: ImageSourcePropType
    title: string
    description: string
    publishingDate: string
}

import photo from '../../assets/eifel_tower.jpg'
import profilePhoto from '../../assets/foto_example.png'
import { FontAwesome5 } from '@expo/vector-icons';

import { colors } from '../../styles'

const PostItem = () => {
    return (
        <PostContainerView>
            <PostImage source={photo} />
            <TextsView>
                <ProfileView>
                    <ProfileImage source={profilePhoto} />
                    <ProfileSimpleView>
                        <NameText>Scarlett Johansson</NameText>
                        <PublishingDateText>4 Years ago</PublishingDateText>
                    </ProfileSimpleView>
                </ProfileView>
                <TitleText>Viajem para Paris com tudo pago</TitleText>
                <FooterView>
                    <CoinsView>
                        <FontAwesome5
                            name="coins"
                            size={24}
                            color={colors.darkGray}
                        />
                        <CoinsText>1300</CoinsText>
                    </CoinsView>
                    <FontAwesome5
                        name="share"
                        size={24}
                        color={colors.darkGray}
                    />
                </FooterView>
            </TextsView>
        </PostContainerView>
    )
}

export default PostItem
