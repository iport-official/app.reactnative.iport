import React from 'react'

import {
    ContainerView,
    TitleText,
    ContainerScrollView
} from './styles'

import PostItem, { JobProps } from '../Post'

const JobList = () => {
    function handleJobsArray(job: JobProps, index: number, array: JobProps[]) {
        return (
            <PostItem />
        )
    }

    return (
        //#region JSX

        <ContainerView>
            <TitleText>Título</TitleText>
            <ContainerScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <PostItem />
                <PostItem />
            </ContainerScrollView>
        </ContainerView>

        //#endregion
    )
}

export default JobList
