import {Text} from 'react-native';
import {Image} from 'expo-image';
import {ContentLayout, MenuContainer, MenuItem, PrimaryText, ScreenLayout} from "@/components";
import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export default function ProfileScreen() {
    return (
        <ScreenLayout>

            <InfoContainer>
                <Avatar source={require("../../assets/images/user-icon/rust-chat.png")} />
                <InfoText>
                    Firstname Lastname
                </InfoText>
                <InfoText>
                    Group
                </InfoText>
            </InfoContainer>
            <ContentLayout>
                <MenuContainer>
                    <MenuItem text="Settings"/>
                    <MenuItem text="Logout"/>
                </MenuContainer>
            </ContentLayout>
        </ScreenLayout>
    );
}

const InfoContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 230px;
    gap: 5px;
`

const InfoText = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 18px;
    font-weight: 400;
`

const Avatar = styled(Image)`
    width: 120px;
    height: 120px;
`