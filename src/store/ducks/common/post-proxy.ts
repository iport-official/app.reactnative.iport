import { UserProxy } from '../user/types';

export interface PostProxy {
    id: string
    image: string
    title: string
    description: string
    category: string
    contact: string
    recommendations: number
    likes: number
    salary: number
    role: string
    local: string
    requirements: string
    experienceLevel: string
    jobDescription: string
    createAt: Date
    updateAt: Date
    user: UserProxy
}
