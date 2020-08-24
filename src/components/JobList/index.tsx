import React from 'react'

import {
    ContainerView,
    TitleText,
    ContainerScrollView
} from './styles'

import Job, { JobProps } from '../Job'

export interface JobsProps {
    title: string
    jobs: JobProps[]
}

const JobList: React.FC<JobsProps> = ({ title, jobs }) => {
    function handleJobsArray(job: JobProps, index: number, array: JobProps[]) {
        return (
            <Job
                style={{ marginLeft: index === 0 ? 0 : 10 }}
                key={index} // must add key property cause it is using with map method
                imageSource={job.imageSource}
                title={job.title}
                description={job.description}
                publishingDate={job.publishingDate}
            />
        )
    }

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <ContainerScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {jobs.map(handleJobsArray)}
            </ContainerScrollView>
        </ContainerView>

        //#endregion
    )
}

export default JobList
