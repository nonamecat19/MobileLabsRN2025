import {OpenChatItem} from "@/types";
import {UserStatus} from "@/constants";

export const chatOpenChatsMock: OpenChatItem[] = [
    {
        nickname: "Mark Dyson",
        message: "I'm already starting to play",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/smile.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "Mark Dyson",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/smile.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "Player123",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/rust-chat.png'),
        status: UserStatus.AWAY
    },
    {
        nickname: "Player123",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/rust-chat.png'),
        status: UserStatus.AWAY
    },
    {
        nickname: "Player",
        message: "Hello!",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/unknown.png'),
        status: UserStatus.OFFLINE
    },
    {
        nickname: "Player",
        message: "Hello!",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/unknown.png'),
        status: UserStatus.OFFLINE
    },
    {
        nickname: "💎ϟ∑χρŗêssσϟ#=_-#",
        message: "I'm already starting to play",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/skeleton.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "💎ϟ∑χρŗêssσϟ#=_-#",
        message: "I'm already starting to play",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/skeleton.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "Mark Dyson",
        message: "I'm already starting to play",
        date: new Date(),
        lastMessageMine: false,
        avatar: require('../assets/images/user-icon/smile.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "Mark Dyson",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/smile.png'),
        status: UserStatus.ONLINE
    },
    {
        nickname: "Player123",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/rust-chat.png'),
        status: UserStatus.AWAY
    },
    {
        nickname: "Player123",
        message: "Ok",
        date: new Date(),
        lastMessageMine: true,
        avatar: require('../assets/images/user-icon/rust-chat.png'),
        status: UserStatus.AWAY
    },
]