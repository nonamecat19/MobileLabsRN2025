import {
    ContentLayout,
    Heading,
    HeadingSearchIcon,
    ScreenLayout,
    DescriptionText,
    Tabs,
    TabsItemText,
    TabsItemWrapper
} from "@/components";
import {AntDesign} from "@expo/vector-icons";
import {useTheme} from "@/hooks";
import {News} from "@/components/News";
import {communityNewsMock} from "@/mocks";

export default function CommunityScreen() {
    const {theme} = useTheme()

    return (
        <ScreenLayout nestedScrollEnabled={true}>
            <Heading
                title="Community"
                icon={<HeadingSearchIcon/>}
            />
            <ContentLayout>
                <DescriptionText>
                    Community and official content for all games and software
                </DescriptionText>

                <Tabs>
                    <TabsItemWrapper>
                        <AntDesign name="search1" size={19} color={theme.uiSecondary}/>
                    </TabsItemWrapper>
                    <TabsItemText active>
                        All
                    </TabsItemText>
                    <TabsItemText>
                        Screenshots
                    </TabsItemText>
                    <TabsItemText>
                        Workshop
                    </TabsItemText>
                    <TabsItemText>
                        Groups
                    </TabsItemText>
                </Tabs>
            </ContentLayout>
            <News data={communityNewsMock}/>
        </ScreenLayout>
    );
}

