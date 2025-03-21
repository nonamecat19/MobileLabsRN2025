import {ContentLayout, Heading, MenuContainer, MenuItem, ScreenLayout, Switch, Totp} from "@/components";
import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export default function SafetyScreen() {
    return (
        <ScreenLayout nestedScrollEnabled={true}>
            <GapContainer>

                <Heading title="Safety"/>
                <ContentLayout>
                    <Switch options={["Guard", "Confirmations"]}/>
                </ContentLayout>

                <Totp/>

                <ContentLayout>
                    <GapContainer>
                        <Text1>
                            You’ll enter your code each time you enter your password to sign in to your Steam account.
                        </Text1>

                        <Text2>
                            Tip: If you don't share your PC, you can select "Remember my password" when you sign in to
                            the
                            PC client to enter your password and authenticator code less often.
                        </Text2>

                        <MenuContainer>
                            <MenuItem text="Remove Authenticator"/>
                            <MenuItem text="My Recovery Code"/>
                            <MenuItem text="Help"/>
                        </MenuContainer>
                    </GapContainer>
                </ContentLayout>
            </GapContainer>
        </ScreenLayout>
    )
}

const Text1 = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    line-height: 24px;
`

const Text2 = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.info};
    line-height: 24px;
`

const GapContainer = styled.View`
    gap: 20px
`