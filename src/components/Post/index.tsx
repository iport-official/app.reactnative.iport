import React from 'react'
import {
    ImageSourcePropType,
    ViewStyle,
    StyleProp,
} from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';

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

export interface PostItemProps {
    id: string
    style?: StyleProp<ViewStyle>
    imageSource: ImageSourcePropType
    profileImageSource: ImageSourcePropType
    profile: string
    publishingDate: string
    title: string
    coinsAmount: number
    onRescale?(value: boolean): void
}

import { colors } from '../../styles'
import HeartIcon from './Heart';

const PostItem: React.FC<PostItemProps> = ({
    style,
    imageSource,
    profileImageSource,
    profile,
    publishingDate,
    title,
    coinsAmount
}) => {
    return (
        //#region JSX

        <PostContainerView>
            <PostImage source={imageSource} />
            <TextsView>
                <ProfileView>
                    <ProfileImage source={profileImageSource} />
                    <ProfileSimpleView>
                        <NameText>{profile}</NameText>
                        <PublishingDateText>{publishingDate}</PublishingDateText>
                    </ProfileSimpleView>
                </ProfileView>
                <TitleText>{title}</TitleText>
                <FooterView>
                    <CoinsView>
                        <FontAwesome5
                            name="coins"
                            size={24}
                            color={colors.darkGray}
                        />
                        <CoinsText>{coinsAmount}</CoinsText>
                    </CoinsView>
                    <HeartIcon
                        size={27}
                        color="red"
                    />
                    <FontAwesome5
                        name="share"
                        size={24}
                        color={colors.darkGray}
                    />
                </FooterView>
            </TextsView>
        </PostContainerView>

        //#endregion
    )
}

export default PostItem
