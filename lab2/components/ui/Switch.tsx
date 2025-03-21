import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";
import {useState} from "react";
import {TouchableOpacity} from "react-native";

interface SwitchProps {
    options: [string, string]
}

export function Switch({options}: SwitchProps) {
    const [first, second] = options
    const [isFirstSelected, setIsFirstSelected] = useState<boolean>(true)

    return (
        <Container>
            <Item selected={isFirstSelected} onPress={() => setIsFirstSelected(true)}>
                <ItemText selected={isFirstSelected}>
                    {first}
                </ItemText>
            </Item>
            <Item selected={!isFirstSelected} onPress={() => setIsFirstSelected(false)}>
                <ItemText selected={!isFirstSelected}>
                    {second}
                </ItemText>
            </Item>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    height: 32px;
    background: ${({theme}: StyledThemeProps) => theme.backgroundForeground};
    border-radius: 8px;
    flex-direction: row;
    padding: 2px;
`

interface ItemsProps {
    selected: boolean
}

const Item = styled(TouchableOpacity)<ItemsProps>`
    background: ${({theme, selected}: StyledThemeProps & ItemsProps) => selected
            ? theme.background
            : theme.backgroundForeground
    };
    width: 50%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

const ItemText = styled.Text<ItemsProps>`
    color: ${({theme, selected}: StyledThemeProps & ItemsProps) => selected
            ? theme.textPrimary
            : theme.textSecondary
    };
`