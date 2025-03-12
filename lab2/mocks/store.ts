import {GalleryItem, StoreRecommendationItem} from "@/types";
import {PlatformType} from "@/constants";

export const storeGalleryMock: GalleryItem[] = [
    {
        title: "Dead by Daylight",
        description: "Recommended by your friend, Player",
        price: 18,
        discount: 70,
        image: require('../assets/images/banners/dbd.png'),
        platforms: [PlatformType.WINDOWS]
    },
    {
        title: "Battlefield Hardline",
        description: "Recommended by your friend, Player",
        price: 30,
        discount: 15,
        image: require('../assets/images/banners/battlefield-hardline.png'),
        platforms: [PlatformType.WINDOWS, PlatformType.MACOS]
    }
]

export const storeRecommendationsMock: StoreRecommendationItem[] = [
    {
        title: "Grand Theft Auto V",
        image: require('../assets/images/banners/gta.png'),
        price: 20,
        discount: 50,
        platforms: [PlatformType.WINDOWS]
    },
    {
        title: "Battlefield 4",
        image: require('../assets/images/banners/battlefield-4.png'),
        price: 35,
        platforms: [PlatformType.WINDOWS]
    },
    {
        title: "Factorio",
        image: require('../assets/images/banners/factorio.png'),
        price: 7,
        platforms: [PlatformType.WINDOWS, PlatformType.MACOS]
    },
    {
        title: "Horizon Zero Dawn",
        image: require('../assets/images/banners/horizon.png'),
        price: 38,
        platforms: [PlatformType.WINDOWS]
    },
    {
        title: "Kingdom Come",
        image: require('../assets/images/banners/kingdom-come.jpeg'),
        price: 52,
        discount: 25,
        platforms: [PlatformType.WINDOWS, PlatformType.LINUX]
    },
    {
        title: "Dead by Daylight",
        image: require('../assets/images/banners/dbd.png'),
        price: 20,
        platforms: [PlatformType.WINDOWS, PlatformType.LINUX]
    },
    {
        title: "Coral",
        image: require('../assets/images/banners/coral.png'),
        price: 15,
        platforms: [PlatformType.WINDOWS]
    },
]