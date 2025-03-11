import {GalleryItem} from "@/types";

export const storeGalleryMock: GalleryItem[] = [
    {
        title: "Dead by Daylight",
        description: "Recommended by your friend, Player",
        price: 18,
        discount: 70,
        image: require('../assets/images/banners/dbd.png'),
    },
    {
        title: "Battlefield Hardline",
        description: "Recommended by your friend, Player",
        price: 30,
        discount: 15,
        image: require('../assets/images/banners/battlefield-hardline.png'),
    }
]

export const storeCategoriesMock: string[] = [
    "Top Sellers",
    "Free to play",
    "Early Access",
    "Action"
]