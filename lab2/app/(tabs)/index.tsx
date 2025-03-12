import {Heading, HeadingSearchIcon, ScreenLayout, StoreGallery} from "@/components";
import {storeGalleryMock} from "@/mocks";
import {Tabs, TabsItemText} from "@/components/Tabs";

export default function HomeScreen() {
    return (
        <ScreenLayout>
            <Heading
                title="Store"
                icon={<HeadingSearchIcon/>}
            />
            <StoreGallery data={storeGalleryMock}/>
            <Tabs>
                <TabsItemText active>
                    Top Sellers
                </TabsItemText>
                <TabsItemText>
                    Free to play
                </TabsItemText>
                <TabsItemText>
                    Early access
                </TabsItemText>
                <TabsItemText>
                    Action
                </TabsItemText>
            </Tabs>
        </ScreenLayout>
    );
}
