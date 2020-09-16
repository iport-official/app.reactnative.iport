import { UserProxy } from "../user/types";

export interface PostProxy {
    id: string
    image: string
    title: string
    description?: string
    category: string
    recomendation: number
    contact: string
    salary: number
    post: string
    local: string
    requirements: string
    experienceLevel: string
    vacancyDescription: string
    createAt: Date
    user: UserProxy
}
