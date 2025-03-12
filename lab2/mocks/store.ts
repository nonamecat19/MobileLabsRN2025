import {GalleryItem} from "@/types";
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
