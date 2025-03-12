import styled from "styled-components/native";
import {Text} from "react-native";
import {EvilIcons} from "@expo/vector-icons";
import {useTheme} from "@/hooks";
import {ReactNode} from "react";
import {Image} from "expo-image";
import {StyledThemeProps} from "@/types";
import {ContentLayout} from "./ContentLayout";

interface HeadingProps {
    title: string;
    icon?: ReactNode;
}

export function Heading({title, icon}: HeadingProps) {
    return (
        <ContentLayout>
            <HeadingWrapper>
                <HeadingContent>
                    <SteamIcon source={require('../../assets/images/ui/steam.png')} />
                    <HeadingTitle>{title}</HeadingTitle>
                </HeadingContent>
                {icon}
            </HeadingWrapper>
        </ContentLayout>
    )
}

export function HeadingSearchIcon() {
    const {theme} = useTheme();
    return (
        <EvilIcons name="search" size={30} color={theme.uiSecondary}/>
    )
}

const SteamIcon = styled(Image)`
    height: 30px;
    width: 30px;
`

const HeadingContent = styled.View`
    flex-direction: row;
    align-items: center;
    color: aliceblue;
    gap: 10px
`

const HeadingTitle = styled(Text)`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 20px;
`

const HeadingWrapper = styled.View`
    height: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`