import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

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

import { colors } from '../../../styles';

import HeartIcon from '../../atoms/Heart';

import { PostProxy } from '../../../store/ducks/common/post-proxy';

export interface PostItemProps extends PostProxy {
    width?: string
    height?: string
    showDescription: boolean
}

const PostItem: React.FC<PostItemProps> = ({
    image,
    title,
    description,
    recomendation,
    createAt,
    user,
    showDescription,
    width = '300px',
    height = '210px'
}) => {

    return (
        //#region JSX

        <PostContainerView
            style={{
                shadowOffset: { width: 0, height: 3 },
                shadowColor: '#000',
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7
            }}
            width={width}
            height={height}
        >
            <PostShadow />
            <PostImage
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
                <TextsView>
                    <TitleText>{title}</TitleText>
                    {showDescription && (
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
