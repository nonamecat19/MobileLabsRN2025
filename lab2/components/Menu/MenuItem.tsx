import styled from "styled-components/native";
import {PrimaryText} from "@/components";
import {TouchableOpacity} from "react-native";
import {StyledThemeProps} from "@/types";
import {Entypo} from "@expo/vector-icons";
import {useTheme} from "@/hooks";

interface MenuItemProps {
    text: string;
}

export function MenuItem({text}: MenuItemProps) {
    const {theme} = useTheme()

    return (
        <TouchableOpacity>
            <Container>
                <Title>{text}</Title>
                <Entypo name="chevron-right" size={20} color={theme.uiSecondary} />
            </Container>
        </TouchableOpacity>
    )
}

const Title = styled.Text`
    color: ${({ theme }: StyledThemeProps) => theme.textPrimary};
    font-weight: 400;
    font-size: 18px;
`

const Container = styled.View`
    flex-direction: row;
    background: ${({ theme }: StyledThemeProps) => theme.backgroundForegroundLight};
    height: 60px;
    align-items: center;
    padding-horizontal: 20px;
    justify-content: space-between;
`