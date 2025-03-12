import {
    ContentLayout,
    Heading,
    HeadingSearchIcon,
    ScreenLayout,
    Tabs,
    TabsItemText,
    TabsItemWrapper,
    SecondaryText
} from "@/components";
import {AntDesign} from "@expo/vector-icons";
import {useTheme} from "@/hooks";

export default function CommunityScreen() {
    const {theme} = useTheme()

    return (
        <ScreenLayout>
            <Heading
                title="Community"
                icon={<HeadingSearchIcon/>}
            />
            <ContentLayout>
                <SecondaryText>
                    Community and official content for all games and software
                </SecondaryText>

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
        </ScreenLayout>
    );
}

