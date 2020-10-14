import React from 'react';
import Svg, { Ellipse, Circle, Path } from 'react-native-svg';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { PostProxy } from '../../../store/ducks/common/post-proxy';
import { UpdatePostPayload } from '../../../store/highlightPostTemp';

import { colors } from '../../../styles';
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
    CoinsText,
    ActionsButton,
    ActionsContainer
} from './styles'

import { timeSince } from '../../../utils';
import HeartIcon from '../../atoms/Buttons/Heart';

export interface PostItemProps extends PostProxy {
    width?: string
    height?: string
    showDescription?: boolean
    isCurrent?: boolean
    marginTop?: number
    editPressed?(id: string, {
        image,
        title,
        description,
        category,
        salary,
        role,
        local,
        requirements,
        experienceLevel,
        jobDescription
    }: UpdatePostPayload): void
    deletePressed?(postId: string): void
}

const PostItem: React.FC<PostItemProps> = ({
    editPressed,
    deletePressed,
    id,
    image,
    title,
    description,
    category,
    salary,
    role,
    local,
    requirements,
    experienceLevel,
    jobDescription,
    recommendations,
    createAt,
    user,
    showDescription = false,
    width = '300px',
    height = '210px',
    isCurrent = false,
    marginTop = 0
}: PostItemProps): JSX.Element => {

    return (
        //#region JSX

        <PostContainerView
            style={{
                shadowOffset: { width: 0, height: 3 },
                shadowColor: '#000',
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
                marginTop
            }}
            width={width}
            height={height}
            isMain={showDescription}
        >
            <PostShadow />
            <PostImage
                source={{ uri: `data:image/gif;base64,${image}` }}
            />
            <PostContentView>
                <ProfileView>
                    <ProfileImage
                        source={{ uri: `data:image/gif;base64,${user ? user.profileImage : ''}` }}
                    />
                    <ProfileSimpleView>
                        <NameText>{user ? user.username : ''}</NameText>
                        <PublishingDateText>{timeSince(createAt)}</PublishingDateText>
                    </ProfileSimpleView>
                </ProfileView>
                <TextsView isMain={showDescription}>
                    <TitleText>{title}</TitleText>
                    {showDescription && (
                        <DescriptionText>{description}</DescriptionText>
                    )}
                </TextsView>
                <FooterView>
                    <CoinsView>
                        <Svg width="35" height="35" viewBox="0 0 361 238" fill="none">
                            <Ellipse cx="225.476" cy="140.049" rx="126.523" ry="44.0626" fill="#612E96" stroke="white" strokeWidth="10"/>
                            <Ellipse cx="225.476" cy="111.093" rx="126.523" ry="44.0626" fill="#612E96" stroke="white" strokeWidth="10"/>
                            <Ellipse cx="225.476" cy="79.6202" rx="126.523" ry="44.0626" fill="#612E96" stroke="white" strokeWidth="10"/>
                            <Ellipse cx="225.476" cy="51.9227" rx="126.523" ry="44.0626" fill="white" stroke="white" strokeWidth="10"/>
                            <Circle cx="117.697" cy="120.325" r="114.965" fill="white" stroke="#612E96" strokeWidth="5"/>
                            <Path d="M163.538 102.456C163.538 108.312 162.194 113.688 159.506 118.584C156.818 123.384 152.69 127.272 147.122 130.248C141.554 133.224 134.642 134.712 126.386 134.712H111.122V171H86.4983V69.912H126.386C134.45 69.912 141.266 71.304 146.834 74.088C152.402 76.872 156.578 80.712 159.362 85.608C162.146 90.504 163.538 96.12 163.538 102.456ZM124.514 115.128C129.218 115.128 132.722 114.024 135.026 111.816C137.33 109.608 138.482 106.488 138.482 102.456C138.482 98.424 137.33 95.304 135.026 93.096C132.722 90.888 129.218 89.784 124.514 89.784H111.122V115.128H124.514Z" fill="#612E96"/>
                        </Svg>
                        <CoinsText>{recommendations}</CoinsText>
                    </CoinsView>
                    { !isCurrent
                        ? <>
                            <HeartIcon
                                size={120}
                                color="red"
                            />
                            <FontAwesome5
                                name="share"
                                size={24}
                                color={colors.darkGray}
                            />
                        </>
                        : <ActionsContainer>
                            <ActionsButton
                                activeOpacity={0.7}
                                onPress={() => {
                                    if(editPressed) {
                                        editPressed(id, {
                                            image,
                                            title,
                                            description,
                                            category,
                                            salary,
                                            role,
                                            local,
                                            requirements,
                                            experienceLevel,
                                            jobDescription,
                                        })
                                    }
                                }}>
                                <MaterialCommunityIcons name="pencil" size={24} color="#fb9218" />
                            </ActionsButton>
                            <ActionsButton
                                activeOpacity={0.7}
                                onPress={() => { if(deletePressed) deletePressed(id) }}>
                                <MaterialCommunityIcons name="delete" size={24} color="#cc2f2f" />
                            </ActionsButton>
                        </ActionsContainer>
                    }
                </FooterView>
            </PostContentView>
        </PostContainerView>

        //#endregion
    )
}

export default PostItem;
