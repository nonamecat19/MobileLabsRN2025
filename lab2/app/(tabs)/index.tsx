import {Heading, HeadingSearchIcon, ScreenLayout, StoreGallery} from "@/components";
import {storeGalleryMock} from "@/mocks";

export default function HomeScreen() {
    return (
        <ScreenLayout>
            <Heading
                title="Store"
                icon={<HeadingSearchIcon/>}
            />
            <StoreGallery data={storeGalleryMock}/>
        </ScreenLayout>
    );
}
