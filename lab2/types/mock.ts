import {PlatformType, UserStatus} from "@/constants";

interface BaseGameItem {
    title: string
    image: unknown
    price: number
    discount?: number
}

export interface GalleryItem extends BaseGameItem {
    description: string
    platforms: PlatformType[]
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