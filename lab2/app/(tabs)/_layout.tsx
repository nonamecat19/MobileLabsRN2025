import {Tabs} from 'expo-router';
import {Platform} from 'react-native';
import {Image} from 'expo-image';
import {Feather, FontAwesome5, Ionicons} from "@expo/vector-icons";
import {useTheme} from "@/hooks";

export default function TabLayout() {
    const {theme} = useTheme();

    const ICON_SIZE = 28

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {
                        backgroundColor: theme.backgroundAccent,
                        borderTopWidth: 10,
                        borderColor: theme.backgroundAccent,
                        height: 60,
                        paddingHorizontal: 10,
                    },
                }),
                tabBarActiveTintColor: theme.uiPrimary,
                tabBarInactiveTintColor: theme.uiSecondary,
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <Ionicons name="bag-outline" size={ICON_SIZE} color={color}/>
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome5 name="user" size={ICON_SIZE} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <Feather name="message-circle" size={ICON_SIZE} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="safety"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <Feather name="shield" size={ICON_SIZE} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '',
                    tabBarIcon: () =>
                        <Image
                            source={require('../../assets/images/user-icon/rust.png')}
                            style={{width: 24, height: 24, borderRadius: 20}}
                        />
                }}
            />
        </Tabs>
    );
}
