import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { DrawerParamsList } from '../MainDrawer'
import Jobs from '../../components/JobList'
import ProfilePhoto from '../../components/ProfilePhoto'
import Menu from '../../components/Menu';

import photo from '../../assets/foto_example.png'
import enterpriseImage from '../../assets/millenium-falcon.jpg'

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    HeaderView,
    JobsScrollView,
    FooterView
} from './styles'

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        <ContainerSafeAreaView>
            <StatusBar style="light" />
            <ContainerKeyboardAvoidView>
                <HeaderView>
                    <Menu onPress={() => { navigation.openDrawer() }} />
                    <ProfilePhoto
                        size={50}
                        source={photo}
                    />
                </HeaderView>

                <JobsScrollView>
                    <Jobs
                        title="Hot Jobs"
                        jobs={[
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            },
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            },
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            },
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            }
                        ]}
                    />
                    <Jobs
                        title="Hot Jobs"
                        jobs={[
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            }
                        ]}
                    />
                    <Jobs
                        title="Hot Jobs"
                        jobs={[
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            },
                            {
                                imageSource: enterpriseImage,
                                title: "Millenium Falcon",
                                description: "The fastest spaceship in the galaxy",
                                publishingDate: "2 years ago"
                            }
                        ]}
                    />
                </JobsScrollView>

                <FooterView>

                </FooterView>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>
    )
}
