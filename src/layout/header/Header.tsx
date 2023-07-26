import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { SocialList } from "../../components/social/SocialList";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";

const items = ["Projects", "Technologies", "About me"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={"space-around"} align={"center"}>
                    <Logo />
                    <Menu menuItems={items}/>
                    <SocialList />
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0F1624;
    //height: 137px;
    font-size: 30px;
    
`