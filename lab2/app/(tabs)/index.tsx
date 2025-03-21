import {ContentLayout, Heading, HeadingSearchIcon, ScreenLayout, StoreGallery, Tabs, TabsItemText, GameList} from "@/components";
import {storeGalleryMock, storeRecommendationsMock} from "@/mocks";

export default function HomeScreen() {
    return (
        <ScreenLayout>
            <Heading
                title="Store"
                icon={<HeadingSearchIcon/>}
            />
            <StoreGallery data={storeGalleryMock}/>
            <ContentLayout>
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
            </ContentLayout>
            <ContentLayout>
                <GameList data={storeRecommendationsMock}/>
            </ContentLayout>
        </ScreenLayout>
    );
}
