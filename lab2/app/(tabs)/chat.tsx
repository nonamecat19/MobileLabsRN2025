import {Chat, ContentLayout, Heading, HeadingSearchIcon, ScreenLayout, Switch} from "@/components";
import {chatOpenChatsMock} from "@/mocks";

export default function ChatScreen() {
    return (
        <ScreenLayout nestedScrollEnabled={true}>
            <Heading
                title="Chat"
                icon={<HeadingSearchIcon/>}
            />
            <ContentLayout>
                <Switch options={["Open chats", "My friends"]}/>
                <Chat data={chatOpenChatsMock}/>
            </ContentLayout>
        </ScreenLayout>
    );
}
