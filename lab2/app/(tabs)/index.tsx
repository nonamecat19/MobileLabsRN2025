import {Heading, HeadingSearchIcon, ScreenLayout, StoreGallery, Tabs, TabsItemText} from "@/components";
import {storeGalleryMock} from "@/mocks";

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
