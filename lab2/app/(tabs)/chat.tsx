import {Text} from 'react-native';
import {ContentLayout, Heading, HeadingSearchIcon, ScreenLayout} from "@/components";
import {Switch} from "@/components/ui/Switch";

export default function ChatScreen() {
    return (
        <ScreenLayout nestedScrollEnabled={true}>
            <Heading
                title="Chat"
                icon={<HeadingSearchIcon/>}
            />
            <ContentLayout>
                <Switch options={["Open chats", "My friends"]}/>
            </ContentLayout>
        </ScreenLayout>
    );
}
