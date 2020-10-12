
import React, { useEffect } from 'react'
import Svg, { Ellipse, Circle, Path } from 'react-native-svg';

import { FontAwesome5 } from '@expo/vector-icons';

import { PostProxy } from '../../../store/ducks/common/post-proxy';
import { UserProxy } from '../../../store/ducks/user/types';

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
    CoinsText
} from './styles'

import HeartIcon from '../../atoms/Buttons/Heart';

export interface PostItemProps extends PostProxy {
    width?: string
    height?: string
    showDescription?: boolean
    user?: UserProxy
}

const PostItem: React.FC<PostItemProps> = ({
    image,
    title,
    description,
    recomendations,
    createAt,
    user,
    showDescription = false,
    width = '300px',
    height = '210px'
}: PostItemProps) => {

    useEffect(() => {
        console.log(user ? user.accountType : '');
    }, []);

    const timeSince = (time: any) => {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date) time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        const time_formats = [
            [60, 'seconds', 1], // 60
            [120, '1 minute ago', '1 minute from now'], // 60*2
            [3600, 'minutes', 60], // 60*60, 60
            [7200, '1 hour ago', '1 hour from now'], // 60*60*2
            [86400, 'hours', 3600], // 60*60*24, 60*60
            [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
            [604800, 'days', 86400], // 60*60*24*7, 60*60*24
            [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
            [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
            [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
            [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
            [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
            [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        ];
        let seconds = (+new Date() - time) / 1000,
            token = 'ago',
            list_choice = 1;

        if (seconds == 0) {
            return 'Just now'
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        let i = 0,
            format;
        while (format == time_formats[i++]) {
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        }
        return time;
    }

    useEffect(() => {
        console.log(user);
    }, []);

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
                        <CoinsText>{recomendations}</CoinsText>
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
