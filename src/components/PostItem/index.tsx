import React, { useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import HeartIcon from './Heart';

import {
    PostContainerView,
    PostImage,
    PostShadow,
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

import { PostProxy } from '../../services/Post/post.proxy';

import { colors } from '../../styles'

export interface PostItemProps extends PostProxy {
    isMain?: boolean
}

const PostItem: React.FC<PostItemProps> = ({
    isMain,
    image,
    title,
    description,
    recomendation,
    createAt,
    user
}) => {

    return (
        //#region JSX

        <PostContainerView
            isMain={isMain}
            style={{
                shadowOffset: { width: 0, height: 3 },
                shadowColor: '#000',
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7
            }}
        >
            <PostShadow isMain={isMain} />
            <PostImage
                isMain={isMain}
                source={{ uri: `data:image/gif;base64,${image}` }}
            />
            <PostContentView>
                <ProfileView>
                    <ProfileImage
                        source={{ uri: `data:image/gif;base64,${user.profileImage}` }}
                    />
                    <ProfileSimpleView>
                        <NameText>{user.username}</NameText>
                        <PublishingDateText>{createAt}</PublishingDateText>
                    </ProfileSimpleView>
                </ProfileView>
                <TextsView isMain={isMain} >
                    <TitleText isMain={isMain} >{title}</TitleText>
                    {description && isMain && (
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
                        <CoinsText>{recomendation}</CoinsText>
                    </CoinsView>
                    <HeartIcon
                        size={120}
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
