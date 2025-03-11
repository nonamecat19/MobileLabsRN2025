import {Text} from 'react-native';
import {Heading, HeadingSearchIcon, ScreenLayout} from "@/components";

export default function HomeScreen() {
    return (
        <ScreenLayout>
            <Heading
                title="Store"
                icon={<HeadingSearchIcon/>}
            />
            <Text>Store</Text>
        </ScreenLayout>
    );
}
