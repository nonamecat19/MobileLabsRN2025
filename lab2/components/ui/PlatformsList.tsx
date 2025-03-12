import {PlatformType} from "@/constants";
import {AntDesign, FontAwesome6} from "@expo/vector-icons";
import styled from "styled-components/native";
import {Text} from "react-native";
import {Fragment} from "react";

interface PlatformsListProps {
    platforms: PlatformType[];
    withText?: boolean;
    size?: number;
    color?: string;
}

const platformsNameMap = {
    [PlatformType.WINDOWS]: "Windows",
    [PlatformType.MACOS]: "Mac",
    [PlatformType.LINUX]: "Linux",
}

export function PlatformsList({platforms, withText, size = 20, color = "#000000"}: PlatformsListProps) {
    const platformsMap = {
        [PlatformType.WINDOWS]: <AntDesign name="windows" size={size} color={color}/>,
        [PlatformType.MACOS]: <AntDesign name="apple1" size={size} color={color}/>,
        [PlatformType.LINUX]: <FontAwesome6 name="linux" size={size} color={color}/>
    }

    return (
        <Container>
            <Container>
                {
                    platforms.map(
                        platform =>
                            <Fragment key={platform}>
                                {platformsMap[platform]}
                            </Fragment>
                    )
                }
            </Container>
            {withText &&
                <PlatformsText
                    size={size}
                    color={color}
                >
                    {
                        platforms
                            .map((platform) => platformsNameMap[platform])
                            .join(", ")
                    }
                </PlatformsText>
            }
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px
`

type PlatformsTextProps = Pick<PlatformsListProps, "size" | "color">

const PlatformsText = styled(Text)`
    font-size: ${(props: PlatformsTextProps) => props.size}px;
    color: ${(props: PlatformsTextProps) => props.color};
`