import React from 'react'
import {
    ImageSourcePropType,
    ViewStyle,
    StyleProp,
} from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';

import HeartIcon from './Heart';

import {
    PostContainerView,
    PostImage,
    ProfileView,
    ProfileImage,
    ProfileSimpleView,
    NameText,
    PublishingDateText,
    PostContentView,
    TextsView,
    TitleText,
    DescriptionText,
    FooterView,
    CoinsView,
    CoinsText
} from './styles'

export interface PostItemProps {
    id: string
    isMain?: boolean
    // style?: StyleProp<ViewStyle>
    imageSource: ImageSourcePropType
    profileImageSource: ImageSourcePropType
    profile: string
    publishingDate: string
    title: string
    description?: string
    coinsAmount: number
    onRescale?(value: boolean): void
}

import { colors } from '../../styles'

const PostItem: React.FC<PostItemProps> = (props) => {

    const {
        imageSource,
        profileImageSource,
        profile,
        publishingDate,
        title,
        description,
        coinsAmount
    } = props

    return (
        //#region JSX

        <PostContainerView
            {...props}
        >
            <PostImage
                {...props}
                source={imageSource}
            />
            <PostContentView>
                <ProfileView>
                    <ProfileImage source={profileImageSource} />
                    <ProfileSimpleView>
                        <NameText>{profile}</NameText>
                        <PublishingDateText>{publishingDate}</PublishingDateText>
                    </ProfileSimpleView>
                </ProfileView>
                <TextsView>
                    <TitleText>{title}</TitleText>
                    {description && (
                        <DescriptionText>{description}</DescriptionText>
                    )}
                </TextsView>
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
            </PostContentView>
        </PostContainerView>

        //#endregion
    )
}

export default PostItem
