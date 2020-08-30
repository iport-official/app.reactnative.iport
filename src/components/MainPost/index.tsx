import React from 'react'

import {
    ContainerView,
    MainPostImage,
    FilterView,
    ContentView,
    MainPostTextsView,
    TitleText,
    DescriptionText,
    ProfileView,
    ProfileImage,
    ProfileDescriptionView,
    NameText,
    PublishingDateText,
    SideBarView
} from './styles'

import photo from '../../assets/image04.jpg'
import profileImageSource from '../../assets/henrique.jpg'

export default function MainPost() {
    return (
        //#region JSX

        <ContainerView>
            <MainPostImage source={photo} />
            <FilterView />
            <ContentView>
                <ProfileView>
                    <ProfileImage source={profileImageSource} />
                    <ProfileDescriptionView>
                        <NameText>Henrique César</NameText>
                        <PublishingDateText>5 minutes ago</PublishingDateText>
                    </ProfileDescriptionView>
                </ProfileView>
                <MainPostTextsView>
                    <TitleText>Henrique César esta recrutando no vale do silício</TitleText>
                    <DescriptionText>Para todos os vidrados em tecnologia, venho a vocês, convida-los a conhecer minha nova criação</DescriptionText>
                </MainPostTextsView>
            </ContentView>
            <SideBarView />
        </ContainerView>

        //#endregion
    )
}
