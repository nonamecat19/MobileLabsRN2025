import styled from "styled-components/native";
import {Image} from "expo-image";
import {StyledThemeProps} from "@/types";

export function Totp() {
    return (
       <Container>
           <Banner source={require("../../assets/images/banners/totp.png")}/>
           <Content>
               <Description>
                   Logged in as player
               </Description>
               <Code>N5KCV</Code>
                <ProgressBar>
                    <ProgressIndicator/>
                </ProgressBar>
           </Content>
       </Container>
    )
}

const Description = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textSecondary};
`

const ProgressIndicator = styled.View`
    background: ${({theme}: StyledThemeProps) => theme.info};
    height: 6px;
    width: 110px;
    border-radius: 3px;
`

const ProgressBar = styled.View`
    height: 6px;
    width: 150px;
    background: ${({theme}: StyledThemeProps) => theme.backgroundAccent};
    border-radius: 3px;
`

const Content = styled.View`
    gap: 10px;
    align-items: center;
`

const Banner = styled(Image)`
    width: 100%;
    height: 200px;
    position: absolute;
    z-index: -1;
`

const Container = styled.View`
    position: relative;
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
`

const Code = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary}; 
    font-size: 56px;
    font-weight: 700;
`