export interface CommunityNewsItem {
    title: string
    description: string
    likes: number
    comments: number
    nickname: string
    date: Date
    tags: string[]
    photo: unknown
}

export const communityNewsMock = [
    {
        title: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
        description: "Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
        likes: 324,
        comments: 12,
        nickname: "Eurogamer",
        date: new Date(),
        tags: ["NEWS"],
        photo: require("../assets/images/banners/kingdom-come.jpeg")
    },
    {
        title: "Coral Castle Museum",
        description: "Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
        likes: 220,
        comments: 25,
        nickname: "Eurogamer",
        date: new Date(),
        tags: [],
        photo: require("../assets/images/banners/coral.png")
    }
]