import {PlatformType, UserStatus} from "@/constants";

interface BaseGameItem {
    title: string
    image: unknown
    price: number
    discount?: number
    platforms: PlatformType[]
}

export interface GalleryItem extends BaseGameItem {
    description: string
}

export interface StoreRecommendationItem extends BaseGameItem {
}

export interface OpenChatItem {
    nickname: string
    message: string
    lastMessageMine: boolean
    date: Date
    avatar: unknown,
    status: UserStatus
}

export interface CommunityNewsItem {
    title: string
    description: string
    likes: number
    comments: number
    nickname: string
    date: Date
    tags: string[]
    photo: unknown
    userPhoto: unknown
}